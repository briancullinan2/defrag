=================
Ghosts - Tricking
=================

1. Information
2. Quick Start
3. Config Vars
4. History

--------------
1. Information
--------------
The ghosts can be used to do ingame trick review, taking advantage of various ghost camera modes.

Note: for tricking, you will most likely want to set the df_ghosts_NoDrawRadius to "0" (default is "200")

Ghosts can also be used to practice multiplayer tricks by yourself.  To do so, turn on the Live Ammo option (df_ghosts_LiveAmmo 1).  Note that this only works when cheats are enabled.  The ghost will fire real missiles (rockets, grenades, plasma, and bfg shots).

--------------
2. Quick Start
--------------
We will bind keys that will allow the following:
Pressing "1" will start recording a ghost.
Pressing "2" will stop a ghost that is playing or recording.
Pressing "3" will play a ghost.
You can use the mousewheel to change the playback speed of the ghost.
Use the Up/Down arrow keys to change the camera mode (for the mainview) of a ghost that is playing.
Use the Left/Right arrow keys to change the camera mode (for the miniview) of a ghost that is playing.

Copy and paste the following stuff into your q3config (or just use the DF-[Ghosts-Tricking].cfg file provided in the cfgs folder).

---------------------------------------
//---[ DF-Ghosts-Tricking ]-----------------------------

echo [ CONFIG ^1LOADED ] ^4--> ^1DF-[Ghosts-Tricking]"

//---[ Vars ]---
// Initialize some values
// Turn on the miniview when ghost is playing
// Set the miniview to first person ghost cam mode
// Set the ghosts play timescales to 1.0
// Sets the ghost NoDrawRadius to 0

//-- [ Miniview ]--
seta df_ghosts_MiniviewDraw "1"
seta df_ghosts_MiniviewCameraMode "1"

//---[ Ghosts - All ]---
seta df_ghosts_FileExtension ""
seta df_ghosts_DrawOutput "3"
seta df_ghosts_AutoMode "4"
seta df_ghosts_NoDrawRadius "0"
seta df_ghosts_CheckPVS "1"

//---[ Ghost 1 ]---
seta df_ghost1_RecordFileFormat "2"
seta df_ghost1_RecordInterval "50"
seta df_ghost1_RecordView "0"
seta df_ghost1_PlayTimescale "1.0"
seta df_ghost1_PlayDrawPlayer "3"
seta df_ghost1_PlayDrawMissiles "2"
seta df_ghost1_PlayCameraMode "0"
seta df_ghost1_PlayLoop "0"

//---[ Ghost 2 ]---
seta df_ghost2_RecordFileFormat "2"
seta df_ghost2_RecordInterval "50"
seta df_ghost2_RecordView "0"
seta df_ghost2_PlayTimescale "1.0"
seta df_ghost2_PlayDrawPlayer "3"
seta df_ghost2_PlayDrawMissiles "2"
seta df_ghost2_PlayCameraMode "0"
seta df_ghost2_PlayLoop "0"

//---[ Ghost Recording And Playing ]---
// Press 1 to record ghost #1, 2 to stop, 3 to play
// Press 4 to record ghost #2, 5 to stop, 6 to play
// Press 0 to stop all ghosts

bind 1 "ghost #1 record $mapname_ghostnum"
bind 2 "df_ghost1_PlayTimescale 1.00; ghost #1 stop"
bind 3 "df_ghost1_PlayTimescale 1.00; ghost #1 play"

bind 4 "ghost #2 record $mapname_ghostnum"
bind 5 "df_ghost2_PlayTimescale 1.00; ghost #2 stop"
bind 6 "df_ghost2_PlayTimescale 1.00; ghost #2 play"

bind 0 "df_ghost1_PlayTimescale 1.00; ghost #1 stop; df_ghost2_PlayTimescale 1.00; ghost #2 stop"

//---[ Ghost Timescale ]---
// Use the mousewheel to slow down or speed up a playing ghost

bind MWHEELDOWN "varMath df_ghost1_PlayTimescale - .1"
bind MWHEELUP   "varMath df_ghost1_PlayTimescale + .1"

//---[ Mainview Ghost Camera Modes ]---
// Use the up/down arrows to cycle through the ghost
// camera modes for the mainview while a ghost is playing

bind UPARROW    "varMath df_ghost1_PlayCameraMode + 1"
bind DOWNARROW  "varMath df_ghost1_PlayCameraMode - 1"

//---[ Miniview Ghost Camera Modes ]---
// Use the left/right arrows to cycle through the ghost
// camera modes for the miniview while a ghost is playing

bind LEFTARROW  "varMath df_ghosts_MiniviewCameraMode - 1"
bind RIGHTARROW "varMath df_ghosts_MiniviewCameraMode + 1"

---------------------------------------
--------------
3. Config Vars
--------------
The complete list of ghost config variables is in the readme-[Ghosts-General].txt file.  For ghost usage for tricking, the following variables/values are most likely useful:

--------------------------------------------------
\df_ghosts_NoDrawRadius	[ DEFAULT: 200 RANGE: 0 TO N ] - hides the ghost, the ghost missiles, and the ghost exlosions if a particular item is within the given radius (distance) to the player.

Useful for map running, as it is a way to prevent the ghost from obstucting your view.  For general tricking, you may wish to set this value to "0" - then the ghost, and it's missiles/explosions will not be hidden.  Note that if you are using the ghost draw mode GHOST_PLAYSET_DRAW_PLAYER_INVIS_USE_RADIUS (df_ghost1_PlayDrawPlayer 4) then if the ghost is within the given distance, it is not hidden, but instead drawn with the invisiblity powerup shader.  Missiles and explosions that fall within the radius are still hidden.

--------------------------------------------------
\df_ghost1_PlayTimescale [ DEFAULT: 1.0	RANGE: -10.0 to 10.0 STEP: float ] - sets the speed of the ghost playback.

You can change the speed of the ghost during playback.  Setting a the ghost timescale to a negative value "rewinds" the ghost.  You can rewind as far back as the ghost snapshot buffer allows (normally about 25 seconds using a recording interval of 50).

--------------------------------------------------
\df_ghosts_MiniviewDraw [ DEFAULT: 1 RANGE: 0 TO 6 ] - turns on/off the Miniview (PIP)

 0 = Off
 1 = On during ghost playback
 2 = On for ghost playback, and for demos
 3 = On for demos only
 4 = Always On (1P/3P switching style - opposite of mainview)
 5 = Always On, 1st Person
 6 = Always On, 3rd Person

--------------------------------------------------
\df_ghosts_LiveAmmo [ DEFAULT: 1 RANGE: 0 (off), 1 (on) ] - makes ghost fire real missiles (rockets, grenades, plasma, or bfg shots) if cheats are enabled.  Nice for practicing multiplayer tricks by oneself.

*** NOTE: If you currently have the quad damage powerup, the ghost file fire quaded missiles.

----------
4. History
----------
1.90
- LiveAmmo (df_ghosts_LiveAmmo): permits the ghost to fire live ammo (if cheats are enabled).  This allows players to practice certain missile-related MP trix by themselves
- Miniview: draw options: 0 = off, 1 = on for ghost, 2 = on for ghost and demos, 3 = on for demos only, 4 = always on (1P/3P switching style), 5 = always on, 1st Person, 6 = always on, 3rd Person

1.80
- Feature introduced
