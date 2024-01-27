menuback
{
	nopicmip
	nomipmaps
        {
		map textures/sfx/firegorre2.tga
                tcmod scroll -4 0
                //tcMod turb 0 .25 0 1.6
                tcmod scale .5 3
                blendFunc GL_ONE GL_ZERO
                rgbGen identity
	}
         {
                map textures/sfx/logo512.tga
                blendFunc blend
                rgbgen identity
        }
         
        {
		map $lightmap
                blendFunc GL_DST_COLOR GL_ONE_MINUS_DST_ALPHA
		rgbGen identity
	}
}