// item exelent

textures/defrag_cpm_1/item_excellent
{	
	deformVertexes move 0 0 1  sin .1 4 0 1
	cull none
	nopicmip
	{
		map textures/defrag_cpm_1/item_excellent.tga
		blendFunc GL_SRC_ALPHA GL_ONE_MINUS_SRC_ALPHA
		rgbGen identity
	} 

	{
		map $lightmap
		rgbGen identity
		blendFunc GL_DST_COLOR GL_ZERO
		depthFunc equal
	}
}



//****   pub


textures/defrag_cpm_1/defrag
{
	surfaceparm nomarks   
	surfaceparm trans
	surfaceparm pointlight

	{
		map textures/defrag_cpm_1/defrag.tga
                blendFunc add
		rgbGen vertex
	} 

}



textures/defrag_cpm_1/fleche
{
	surfaceparm nomarks   
	surfaceparm trans
	surfaceparm pointlight
	nopicmip

	{
		map textures/defrag_cpm_1/fleche.tga
                blendFunc add
		rgbGen vertex
	} 

}

textures/defrag_cpm_1/fleche_cible
{
	surfaceparm nomarks   
	surfaceparm trans
	surfaceparm pointlight
	nopicmip

	{
		map textures/defrag_cpm_1/fleche_cible.tga
                blendFunc add
		rgbGen vertex
	} 

}
