// middleware for repacking pk3 files
const fs = require('fs')
const path = require('path')
const {glob} = require('glob')
const {spawnSync} = require('child_process')


const SUPPORTED_FORMATS = [
  '.cfg', '.qvm', '.jts', '.bot',
  '.txt', '.hit',
  '.shader', '.shaderx',
  '.crosshair', '.skin', '.font',
  '.config', '.menu',
  '.defi', // CPMA game mode definition
  '.arena', // map based game mode definition
  // these can be compiled in game to run bot AI
  '.c', '.h', '.scc',
  // camera files
  '.cam',
  // can load async, but new repacking system includes small ones
  '.map', '.aas', '.md5',
  '.bsp', '.md3', '.iqm', '.mdr',
]

const FILE_TYPES = new RegExp('(' + SUPPORTED_FORMATS.join('|') + ')$|menu\/|gfx\/2d\/', 'ig')

let lockFunc = false
let lockPromise
async function compareZip(pk3File) {
  if(!lockPromise) {
    lockPromise = new Promise(resolve => lockFunc = resolve)
  } else {
    await lockPromise
  }
  // compare corresponding zip and mtime
  let sourcePath = path.join(__dirname, '../../docs/', pk3File + 'dir')
  // form a docs/demoq3/pak0.pk3dir style path
  let finishedPath = path.join(__dirname, '../../docs/maps/', pk3File)
  if(!finishedPath.includes('.pk3'))
    throw new Error('abort')

  if(!fs.existsSync(finishedPath)
    || fs.statSync(finishedPath).mtime < fs.statSync(sourcePath).mtime - 1000) {

    // compare contents of folder with directory contents
    const textFiles = (await glob('**/*', { 
      ignore: 'node_modules/**', 
      cwd: sourcePath 
    })).filter(f => f.match(FILE_TYPES))

    // TODO: repack the pk3 file
    let tempFile = 'Archive.' + (Date.now() + '').substring(20, -5)
    for(let pack_i = 0; pack_i < textFiles.length; pack_i++) {
      let startArgs = ['-v', '-9']
      //.concat(pack_i == textFiles.length - 1 ? ['-o'] : [])
        .concat(['-u', tempFile, textFiles[pack_i]])
      //console.log(startArgs)  
      
      await spawnSync('zip', startArgs, {
        cwd: sourcePath,
        timeout: 2000,
      })
      
      // slow it down a little or write locks won't work and junk files don't get merged in
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    if(fs.existsSync(finishedPath))
      fs.unlinkSync(finishedPath)

    fs.renameSync(path.join(sourcePath, tempFile), finishedPath)
  }

  Promise.resolve(lockPromise)
  lockFunc()
  lockPromise = false
}


async function convertImages(pk3File) {
  console.log(pk3File)
  let sourcePath = path.join(__dirname, '../../docs/')
  let altName = pk3File.replace(path.extname(pk3File), '.tga')
  let altPath = path.join(sourcePath, altName)
  let pk3Path = path.join(sourcePath, pk3File)
  if(fs.existsSync(pk3Path)) {
    return pk3Path
  }
  // restrict file access for existing files
  if(pk3File.indexOf('.pk3dir') > -1) {
    let altFile = path.join(sourcePath, 'demoq3', pk3File.split('/').slice(2).join('/'))
    if(fs.existsSync(altFile)) {
      return altFile
    }
  }
  if(!fs.existsSync(altPath)) {
    altPath = path.join(sourcePath, 'demoq3', pk3File.split('/').slice(2).join('/').replace(path.extname(pk3File), '.tga'))
    if(fs.existsSync(altPath)) {
      try {
        fs.mkdirSync(path.dirname(pk3Path), { recursive: true });
      } catch (e) {
        console.error(e)
      }
    }
  }
  if(!fs.existsSync(pk3Path)
    && fs.existsSync(altPath)) {

    let alphaCmd
    try {
      let alphaProcess = await spawnSync('identify', ['-format', "'%[opaque]'", altPath], {
        cwd: sourcePath,
        timeout: 3000,
      })
      alphaCmd = alphaProcess.stdout.toString('utf-8')
    } catch (e) {
      console.error(e.message, (e.output || '').toString('utf-8').substr(0, 1000))
    }

    if(/* true || TODO: allAlpha? */ alphaCmd.match(/false/ig) && pk3File.indexOf('.png') == -1
      || !alphaCmd.match(/false/ig) && pk3File.indexOf('.jpg') == -1) {
        return
    }
  

    await spawnSync('convert', ['-strip', '-interlace', 'Plane', '-sampling-factor', '4:2:0', '-quality', '10%', '-auto-orient', altPath, pk3Path], {
      cwd: sourcePath,
      timeout: 3000,
    })
    
    await new Promise((resolve) => setTimeout(resolve, 100))

    return pk3Path
  }
}


async function checkForRepack(request, response, next) {

  let isPk3Path = request.originalUrl.includes('maps/')
    && request.originalUrl.includes('.pk3')
  // definitely requesting a repacked file
  if(isPk3Path) {
    let mapPath = request.originalUrl.substr(request.originalUrl.indexOf('maps/') + 5)
    .replace(/\?.*$/gi, '')
      // form a docs/demoq3/pak0.pk3dir style path
    if(fs.existsSync(path.join(__dirname, '../../docs/', mapPath + 'dir'))) {
      // compare contents of folder with contents of corresponding zip and mtime
      await compareZip(mapPath) 

      // return pk3 file guarunteed fresh
      let outputPath = path.join(__dirname, '../../docs/maps/', mapPath)
      fs.createReadStream(outputPath).pipe(response);
      return response
    }
  }

  // TODO: requesting an image, convert it
  if(request.originalUrl.includes('.png') || request.originalUrl.includes('.jpg')) {
    let altPath = await convertImages(request.originalUrl.replace(/\?.*$/gi, ''))
    if(altPath) {
      fs.createReadStream(altPath).pipe(response);
      return response
    }
  }

  // TODO: requesting audio, transcode it


  return next()

}

const IMAGE_TYPES = new RegExp('(' + [
  '.png',
  '.jpg',
  '.jpeg',
  '.tga',
  '.gif',
  '.pcx',
  '.webp',
  '.hdr',
  '.dds',
].join('|') + ')$')

const MATCH_PALETTE = /palette\s"(.*?)"\s([0-9]+,[0-9]+,[0-9]+)/ig

async function generatePalette(pk3File) {
  let sourcePath = path.join(__dirname, '../../docs/')
  let pk3Path = path.join(sourcePath, pk3File, 'pak0.pk3dir')
  if(!fs.existsSync(pk3Path)) {
    return
  }

  let paletteFile = path.join(pk3Path, 'scripts/palette.shader')

  var palette = {}
  var existingPalette = ''
  if(fs.existsSync(paletteFile)) {
    existingPalette = fs.readFileSync(paletteFile).toString('utf-8')
    var m
    while((m = (MATCH_PALETTE).exec(existingPalette)) !== null) {
      palette[path.join(pk3Path, m[1])] = m[2]
    }
    existingPalette = existingPalette.replace(/palettes\/.*?\n*\{[\s\S]*?\}\n*/ig, '')
  }


  const imageFiles = (await glob('**/*', { 
    ignore: 'node_modules/**', 
    cwd: pk3Path 
  })).filter(f => f.match(IMAGE_TYPES))

  console.log(imageFiles)
  for(let image_i = 0; image_i < imageFiles.length; image_i++) {
    if(typeof palette[imageFiles[image_i]] != 'undefined') {
      continue
    }
    // get average image color for palette
    try {
      let alphaProcess = await spawnSync('convert', [
        imageFiles[image_i], '-resize', '1x1\!', '-format', '%[fx:int(255*a+.5)],%[fx:int(255*r+.5)],%[fx:int(255*g+.5)],%[fx:int(255*b+.5)]', 'info:-'
      ], {
        cwd: pk3Path,
        timeout: 3000,
      })
      let colorCmd = alphaProcess.stdout.toString('utf-8')
      palette[imageFiles[image_i]] = colorCmd
      console.log(imageFiles[image_i], colorCmd)
    } catch (e) {
      console.error(e.message, (e.output || '').toString('utf-8').substr(0, 1000))
    }
    //palette[imagePath] = `0, 0, 0`
  }


  existingPalette = `palettes/default
  {
  ${Object.keys(palette).map((k, v, i) => `  palette "${k.replace(pk3Path, '')}" ${v}`).join('\n')}
  }
  ` + existingPalette
    fs.writeFileSync(paletteFile, existingPalette)
  

}



module.exports = checkForRepack


if(require.main === module && process.argv[1] == __filename) {
  generatePalette('defrag')
  .then(() => compareZip('defrag/pak0.pk3'))
  .then(result => {
    console.log(result)
  })
}

