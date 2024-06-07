models/ammo/grenadecpma
{
	nopicmip
	nomipmaps
	{
		map models/ammo/nade_full_green.tga
		rgbGen wave sin .5 .4 0 8
	}
	{
                map models/ammo/nade_specular.tga
                blendfunc gl_one gl_one
                tcGen environment
		rgbGen lightingDiffuse
	}
}

grenadeCPMA_NPM
{
	nopicmip
	nomipmaps
	{
		map models/ammo/nade_full_green.tga
		rgbGen wave sin .5 .4 0 8
	}
	{
                map models/ammo/nade_specular.tga
                blendfunc gl_one gl_one
                tcGen environment
		rgbGen lightingDiffuse
	}
}