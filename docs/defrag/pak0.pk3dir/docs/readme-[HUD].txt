
===
HUD
===

/df_hud [0-1] (default: 1)
	0 - vq3 overseen hud
	1 - Defrag shiny hud

You can switch back to the original Quake3 hud. However, this mode does not support the latest Defrag features.


- Hud display settings (df_hud_*)

 /df_hud_color [0-11] (default: 4)
	See Color Chart below.

 /df_hud_transparency [0.0-1.0] (default: 0.25)

 /df_hud_fontcolor [0-11] (default: 7)
	See Color Chart below.

 /df_hud_fontshadow [0-1] (default: 1)

 /df_hud_colorwarning [0-1] (default: 1)
	Marks low values in red.

 /df_hud_forceteamcolors [0-1] (default: 1, CTF Fast caps only)
	Sets hud color to match player's team.

 /df_hud_3DIcons [0-1] (default: 1)
 	A 0 value disables the use of 3D models on the hud.

 /df_hud_colorRGB (R,G,B)
	Sets a custom hud color exprimed in the 24 bits RGB format (0,0,0 to 255,255,255).
	As an example, 0,255,0 will display a green hud.

 /df_hud_fontcolorRGB (R,G,B)
	Sets a custom font color exprimed in the 24 bits RGB format (0,0,0 to 255,255,255).
	As an example, 0,255,0 will display green fonts.


- Scoreboard (df_hud_scoreboard_*)

/df_hud_scoreboard_size [0-1] (default: 0)

Selects the scoreboard display size.

  0: 8/10 fonts
  1: 10/12 fonts


- Video capture mode (/df_hud_videocapture_*)

 This feature disables the hud similarly to cg_draw2D 0, but keeps displaying the timer.
 This is intended for video capture, and you might appreciate to combine this one with cl_noprint 1.

 /df_hud_videocapture_enable [0-1] (default: 0)
	Enables/Disables Video Capture Mode

 /df_hud_videocapture_x (default: 320)
 /df_hud_videocapture_y (default: 240)
	Timer position in a 640x480 resolution.

 /df_hud_videocapture_fontsize [4-32] (default: 16)

 /df_hud_videocapture_fontjustify [0-2] (default: 0)
	Sets the font alignment:
	0 : center justify
	1 : left justify
	2 : right justify

 /df_hud_videocapture_fontcolor [0-11] (default: 7)
	See Color Chart below.
	
 /df_hud_videocapture_fontshadow [0-1] (default: 1)


- Defrag Hud Color Chart
 * vQ3 colors
	0  : Black
	1  : Red
	2  : Green
	3  : Yellow
	4  : Blue
	5  : Cyan
	6  : Magenta
	7  : White

 * Defrag Additional Colors
	8  : Gray
	9  : Orange
	10 : Purple
	11 : Dark Green

