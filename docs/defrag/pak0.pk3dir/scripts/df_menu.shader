df_gfx/menu/credits_bg
{
        {
		map df_gfx/menu/credits_fx.tga
                blendFunc GL_SRC_ALPHA GL_ONE_MINUS_SRC_ALPHA
                tcmod scroll .1 0
                rgbGen vertex
	}
        {
                map df_gfx/menu/credits_bg.tga
                blendFunc GL_SRC_ALPHA GL_ONE_MINUS_SRC_ALPHA
                tcmod scroll .07 0
                rgbGen identity
        }
}
