// the background for the netgraph
lagometer
{
	nopicmip
	nomipmaps //added
	{
		map gfx/2d/lag.tga
		blendFunc GL_SRC_ALPHA GL_ONE_MINUS_SRC_ALPHA //added
		rgbgen vertex //added
	}
}