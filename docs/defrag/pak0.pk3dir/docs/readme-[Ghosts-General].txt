============================
Ghosts - General Information
============================

This document covers the general information about ghosts.  See the other ghost documentation for details specific to using ghosts for racing, tricking, camming, etc.

1. Information
2. Quick Start
3. Config Vars
 3A. Config Vars - All Ghosts
 3B. Config Vars - Ghost1 And Ghost2 - Recording Vars
 3C. Config Vars - Ghost1 And Ghost2 - Playing Vars
 3D. Config Vars - Miniview
4. The Ghost Console Command
5. Known Ghost Issues
6. History

--------------
1. Information
--------------
Ghosts can be used for many different things within the game:

- Racing one's ghost within Defrag maps.
- Racing one's ghost on fast flag capture runs, as well as non Defrag maps.
- Record a ghost from an existing demo, and race that ghost.
- Ingame trick review: watch what you just did, without leaving the game.  Many different camera modes are supplied.
- Recording DemoCam movements to a file for reuse.
- Recamming demos (different than recording DemoCam movements): Ghosts can be recorded from demos, and played during demos.  In addition, the camera view during demo playback can be switched to the ghost's view.  The ghost can also record cvar changes and play them back.
- Camera modes: allows many different camera angles, movement, etc. - very useful for video captures. Some camera modes are: 1st person, 3rd person, missile cams, etc.

It is important to understand that the game supports 5 ghosts, and that the 5 ghosts may be in different modes, depending on what you are using them for.  If more than one ghost is being used at the same time, it is possible to have one or most ghosts recording, while one or more ghosts are playing.

Since there are 5 ghosts, but only 2 sets of variables, ghosts 3, 4, and 5 use the same ghost variable as ghost 2.  Ghost #1 is referenced through the df_ghost1_* variable set, Ghost #2, 3, 4, 5 through the df_ghost2_* variable set.  2 sets of variables for 5 ghosts can lead to confusion at times.  If you change a ghost variable and do not see any effect, then perhaps you changed the wrong ghost number variable.  You may find it easier within your configs to change BOTH variables.  For instance, if you always want Page Down to change the ghost timescale to .5, consider using a bind such as:

\bind PageDn "df_ghost1_PlayTimescale .5; df_ghost2_PlayTimescale .5"

The default settings for the ghosts are set up to work automatically with defrag maps and fast capture maps.  A ghost will be recorded of your run.  On next run, the ghost will be played back, while a new ghost is recorded.  If your new run is better than your old one, the new ghost becomes your best ghost.

NOTE: You may wish to turn off the ghost miniview (PIP) if it is reducing your FPS too much:
\df_ghosts_MiniviewDraw 0

Ghosts are saved in the SYSTEM/GHOSTS folder.

--------------
2. Quick Start
--------------
A few different config files have been provided - different ones for different uses of the ghost.  However, if you just want to start up a map (non defrag map) and record and play a ghost just to see what it's all about, try these bindings (this uses the ghost console command "ghost"):

bind 1 "ghost #1 record $mapname_ghostnum"
bind 2 "df_ghost1_PlayTimescale 1.00; ghost #1 stop"
bind 3 "df_ghost1_PlayTimescale 1.00; ghost #1 play"

bind MWHEELDOWN "varMath df_ghost1_PlayTimescale - .1"
bind MWHEELUP   "varMath df_ghost1_PlayTimescale + .1"

bind UPARROW    "varMath df_ghost1_PlayCameraMode + 1"
bind DOWNARROW  "varMath df_ghost1_PlayCameraMode - 1"
bind LEFTARROW  "varMath df_ghosts_MiniviewCameraMode - 1"
bind RIGHTARROW "varMath df_ghosts_MiniviewCameraMode + 1"

Pressing 1 will start recording a ghost.  Press 2 to stop.  3 to play back the ghost.  Mousewheel up/down will change the ghost playback speed.  Up/Downs arrow will change the ghost camera modes for the main window.  Left/Right arrors will change the camera modes for the miniview (PIP).

NOTE: You may wish to turn off the ghost miniview (PIP) if it is reducing your FPS too much:
\df_ghosts_MiniviewDraw 0

--------------
3. Config Vars
--------------
There are 5 ghosts that can be used within the game.  Some of the config vars effect all ghosts (df_ghosts_*).  Some of the vars are for each ghost individually (df_ghost1_* and df_ghost2_*).  The minivew has it's own set of variables (df_ghosts_Miniview*).

Note that because there are 5 ghosts, and ghosts #2, 3, 4, and 5 share the df_ghost2_* var set, changing a single variable may not give you the desired effect, if you change the wrong ghost variable (say ghost2 instead of ghost1).  Sometimes it is better to just change both variables.  This is particularly true during ghost racing, as the system alternates between ghost 1 and ghost 2, when recording a new ghost and playing your best ghost during a run.

----------------------------
3A. Config Vars - All Ghosts
----------------------------
These variables effect all of the ghosts.

--------------------------------------------------
\df_ghosts_AutoMode [ DEFAULT: 4 RANGE: 0 TO 8 ] - changes the behavior of the ghosts automatic playing/recording system.

 0 = GHOSTS_SET_AUTOMODE_OFF: Off

 1 = GHOSTS_SET_AUTOMODE_RECORD_FROM_DEMO: Records a ghost from a demo.  The ghost starts recording as soon as the demo starts, and stops recording when the demo finishes.  The ghost filename is the same as the demo name.

 2 = GHOSTS_SET_AUTOMODE_PLAY_DURING_DEMO: Plays a ghost during a demo.  The ghost starts playing as soon as the demo starts.  The ghost filename must be the same as the demoname. 

 3 = GHOSTS_SET_AUTOMODE_DEFRAG_RECORD_PLAY: Records a new ghost on every defrag or timered run.  Plays your best ghost (if it exists) during the run.  If the ghost you are recording is a new best ghost, then the system updates the .grec file to indicate that the ghost just recorded is now your best ghost.  Ghosts are still recorded even if cheats are on, and therefore a ghost that is a new best (even if cheated) will replace the old best ghost.

 4 = GHOSTS_SET_AUTOMODE_DEFRAG_RECORD_PLAY_NOCHEATS: Records a new ghost on every defrag or timered run.  Plays your best ghost (if it exists) during the run.  If the ghost you are recording is a new best ghost, then the system updates the .grec file for the map to indicate that the ghost just recorded is now your best ghost.  Ghosts are NOT recorded if cheats are enabled, but your best ghost will still play during your cheated run.

 5 = GHOSTS_SET_AUTOMODE_DEFRAG_PLAY_PLAY: Plays both your best ghost and last recorded ghost during timered runs.  Cool to race 2 ghosts at one time, but a ghost is NOT recorded during your run.  Realize that you can later go back and create a new ghost from a demo if you want to, so this option may be fun to use at times.

 6 = GHOSTS_SET_AUTOMODE_DEFRAG_RECORD_FROM_DEMO: Records a ghost from a timered demo (a demo that triggers the defrag start and stop timers).  The ghost starts recording when the timer is started, and stops when the timer stops.  The ghost filename is the same as the demo filename.  The .grec for the map is NOT updated.  If you wish to use this ghost to be raced, you must edit the ghost filename and edit the .grec map file appropriately.  See ??? documentation for more info.  This mode is useful for recording ghosts from demos that are not to be used as a best ghost - more for recamming.

 7 = GHOSTS_SET_AUTOMODE_DEFRAG_RECORD_FROM_DEMO_OVERWRITE_BEST:  Records a ghost from a timered demo (a demo that triggers the defrag start and stop timers).  The ghost starts recording when the timer is started, and stops when the timer stops.  The ghost filename follows the format mapname_##.  If the ghost recorded from the demo has a better time than your best ghost, the .grec file for the map IS updated.  So you can start using this new ghost right away in your next run (remember to switch df_ghosts_Automode back to "4".  WARNING: As soon as you start a new run using this ghost recorded from the demo, your old best ghost file will be overwritten.

8 - GHOSTS_SET_AUTOMODE_DEFRAG_RECORD_FROM_DEMO_OVERWRITE_BEST_ALWAYS: Same as mode 7, but will update (overwrite) the existing best ghost, even if the ghost generated from the demo has a slower time than the existing best ghost.

--------------------------------------------------
\df_ghosts_AutoModeMP [ DEFAULT: 0 RANGE: 0 TO 1 ] - turns on/off the ghosts automatic playing/recording system during multiplayer games.  Used in conjunction with df_ghosts_AutoMode.

 0 = Off
 1 = On
 
Note, this must be enabled (even if df_ghosts_AutoMode is off) in order to insure that ghosts play back at proper speeds within multiplayer/online games.

--------------------------------------------------
\df_ghosts_NoDrawRadius	[ DEFAULT: 200 RANGE: 0 TO N ] - hides the ghost, the ghost missiles, and the ghost exlosions if a particular item is within the given radius (distance) to the player.

Useful for map running, as it is a way to prevent the ghost from obstucting your view.  For general tricking, you may wish to set this value to "0" - then the ghost, and it's missiles/explosions will not be hidden.  Note that if you are using the ghost draw mode GHOST_PLAYSET_DRAW_PLAYER_INVIS_USE_RADIUS (df_ghost1_PlayDrawPlayer 4) then if the ghost is within the given distance, it is not hidden, but instead drawn with the invisiblity powerup shader.  Missiles and explosions that fall within the radius are still hidden.

--------------------------------------------------
\df_ghosts_DrawOutput [ DEFAULT: 4 RANGE: 0 To 4 ] - changes the ghost information format that is drawn to the console.

 O = GHOSTS_OUTPUT_OFF: off
 1 = GHOSTS_OUTPUT_STYLE1_NORMAL: All white output
 2 = GHOSTS_OUTPUT_STYLE1_CHS0: Uses crosshair stats CHS0 FontColor and LabelColor
 3 = GHOSTS_OUTPUT_STYLE1_CHS1: Uses crosshair stats CHS1 FontColor and LabelColor
 4 = GHOSTS_OUTPUT_STYLE1_CHS2: Uses crosshair stats CHS2 FontColor and LabelColor

--------------------------------------------------
\df_ghosts_SpriteInfo [ DEFAULT: empty ] - allows information to be displayed above a playing ghost

This can be used to display information above the ghost

Examples:
$ghostnum     // shows the ghostnumber above the ghost
$chsinfo(200) // shows the defrag timer above the ghost (crosshair stats info item 200)
Defrag Owns   // shows "Defrag Owns" above the ghost

*** NOTE: Use in conjunction with df_ghosts_SpriteSize and df_ghosts_DrawOutput

--------------------------------------------------
df_ghosts_SpriteSize [ DEFAULT: 8 RANGE: 4 TO 20 ] - font size of message displayed via df_ghosts_SpriteInfo

The color and transparency of the font is dictated by the df_ghosts_DrawOutput setting:

df_ghosts_DrawOutput:
 0: color = white, trasparency = 1.00
 1: color = red,   tranparency = 1.00
 2: chs0 color and tranparency used
 3: chs1 color and tranparency used
 4: chs2 color and tranparency used

--------------------------------------------------
\df_ghosts_FileExtension [ DEFAULT: <empty> ] - allows the ghost files extension to be changed.

 default <empty>: Uses .BOO_## format
 
 user-defined: Uses user-defined format.  Do not supply a ".", it is created automatically (to use .cfg extenstion, change df_ghosts_FileExtension to "cfg")

This is mainly only needed if you are playing on a multiplayer server, that is set to sv_pure 1.  With sv_pure 1, quake3 does not allow you to open a file, unless the file extension is .cfg or .menu.  Therefore, if necessary, you can change the ghost file extension.  "." should NOT be included.

--------------------------------------------------
\df_ghosts_SelfMissilesOnly [ DEFAULT: 1 RANGE: 0 (off), 1 (on) ] - when a ghost is recording, ghost will only record missiles from the player who is being recorded.  When this is off, the ghost will record ALL missiles that are being fired, regardless of owner.  Turning this option to off can be useful mainly for doing democams for non-self missiles.  Note that for creating ghosts from demos, for mods OTHER THAN DEFRAG, you should set this cvar to 0.

--------------------------------------------------
\df_ghosts_LiveAmmo [ DEFAULT: 1 RANGE: 0 TO 4 ] - makes ghost fire real missiles (rockets, grenades, plasma, or bfg shots) if cheats are enabled.  Nice for practicing multiplayer tricks by oneself.

 0 = off
 1 = on
 2 = on - quaded missiles
 3 = on - self-style missiles - missiles that do not explode when hitting player
 4 = on - self-style quaded missiles - quaded missiles that do not explode when hitting the player

--------------------------------------------------
\df_ghosts_CheckPVS  [ DEFAULT: 1 RANGE: 0 (no), 1 (yes) ] - determines if the ghost or demo camera system should check the map Potential Visible Set.

The quake3 PVS deteremines if a section of the map is visible or not to the player.  An example of a section outside of the PVS would be another room, seperated by the void (you usually get to a room like this through a teleporter).  If the ghost is playing, and a ghost camera mode is on (in either the mainview or the miniview) and the ghost goes outside the current PVS, then a hall of mirrors effect occurs (mappers are familiar with this effect).  Keep this variable set to 1.  Leaving it set to the default (1), handles the quake3 PVS in an appropriate way, so that the ghost's view (camera) can still be drawn properly.  There's not really much reason to set it to 0.  Leave it alone you freaks.

Note that you can see the effect of the PVS when watching a playback of the ghost.  Notice that when the ghost is not in visible range (maybe it went around the corner) to you the player, then the items on the screen are not visible to the ghost's view as it continues running through the map.  If you are in visible range to the ghost, then the PVS permits items to be displayed in the ghost's view.

DemoCams also use the same variable to (df_ghosts_CheckPVS) to determine if the PVS check should occur.

----------------------------------------------------
3B. Config Vars - Ghost1 And Ghost2 - Recording Vars
----------------------------------------------------
These variables effect the individual ghosts.  For racing of ghosts, if you wish to change a variable for a ghost, you may find it best to change both ghost variables (df_ghost1_ and df_ghost2_) since the game alternates between the using ghost #1 and ghost #2 - recording a new ghost while playing back a best ghost.  An example of this would be if you want to race a best ghost at a higher timescale, you should change df_ghost1_PlayTimescale and df_ghost2_PlayTimescale.  If you do not, only one of the ghosts will play at a different speed.

*** NOTE: ghost #2, 3, 4 and 5 have the same set of variables as ghost1, but all share the same ghost var set (df_ghost2_*)

ghost 1
--------------------------------------------------
\df_ghost1_RecordFileFormat [ DEFAULT: 2 RANGE: 0 to 3 ] - changes the ghost file format for recording ghosts.

 0 = Camera only: Records only the player position and angles.  Pretty much only useful for reducing ghost file sizes.  Works fine for first person ghost camera views.  Third person cams (as well as viewing the ghost normally, without a ghost cam) looks terrible, as the player animations are not recorded to the file.

 1 = Player only (no missiles or explosions): Records only the player data (position, angles, animations).  Missiles and explosions are not recorded to the file.  Reduces file size as compared to Format #2.  Note that usually you will want to record everything (use format #2), and then you can optionally turn of the drawing of missiles/explosions using the df_ghost*_PlayDrawMissiles variable.

 2 = Player, Missiles, and Explosions: Records player, missiles (rockets, grenades, bfg shots, and plasma shots), and explosions.

 3 = Player, Missiles, Explosions, and CVars.  This mode records not only all of the ghost items, but any cvar changes as well (such as cg_thirdperson, cg_thirdpersonrange, etc.).  During playback of the ghost, if the camera mode is set to one of the Var modes (14 or 15), then the cvar changes that occured during recording of the ghost will be played back as well. This is particularly useful for demo recam recording using the ghost.  The cvars that the ghost monitors (and hence, records) are specified by the "Ghost-MonitoredVars.cfg" in the system folder.  Edit that file to indicate which cvars the ghost should record.

Notes:
When recording using fileformat #2 or #3, missiles and explosions are recorded.  A maximum of 10 missiles and 10 explosions per snapshot are recorded, and ultimately means that a maximum of 10 missiles and 10 explosions are displayed during playback.  This was done to reduce file size.  Works fine, since it's pretty rare to have 10 rockets on screen at any one time.  Plasma maybe, but what the hell are you shooting at??  Plasma wall climbs etc - 10 seems to give great results anyway.

--------------------------------------------------
\df_ghost1_RecordInterval [ DEFAULT: 50 RANGE: 0 to 1000 ] - sets the frequency that the ghost system records a snapshot to the ghost file.

This may be used for a few different reasons.  One reason may be a desire to reduce ghost file size.  Another reason may be to actually record more ghost data then the default (making ghost stats data more accurate), at the sacrifice of having a larger ghost file.  The default of 50 provides a very decent balance of the effective playback characteristics.

Changing the ghost recording interval has the following effects:

- Decreasing the interval increases ghost file size.

- Decreasing the interval increases the ghost data.  Increasing the interval to a significantly larger number (over 200) will have a more profound negative effect visually on the ghost animations, as well as ghost walk/running paths (curves paths become a series of connecting straight lines).

- Decreasing the interval increases the ghost's statistical data displayed through the crosshair stats system (when switched to a first person ghost camera mode) is more accurate.  (You can view the ghost's speed, angles, etc. through the CHS during ghost playback).

- Decreasing the interval makes the ghost playback timescales LESS accurate.  Setting the record interval to 0 results in a ghost playback timescale sensitivity of X.X.  This means that a timescale of 1.1 is the same as 1.15.  Or even that 1.01 = 1.1.  So, if you wish to adjust the ghost timescale playback very minutely (X.XX or even X.XXX) is is actually beter to record the ghost at the default value (50), or slightly higher (100).

- Increasing the interval allow more seconds of rewind (accomplished throught the df_ghost1_PlayTimescale variable).

--------------------------------------------------
\df_ghost1_RecordView [ DEFAULT: 0 RANGE: 0, 1 ] - optionally sets the ghost recording of the camera/angles to the virtual position of the camera.

The default is 0.  The only reason to set it to 1 is for some cases of demo recamming, specifically if you are recording a demo recam to a ghost file, and using the DemoCam 3 mode.  Demo cam 3 mode is third person free mode (you can move/orbit the camera around the visible player).  In order to capture your camming movements to a ghost file in this case, it is necessary to record the camera (view) position during the demo, not the player (normally you are recording the players position and angles).  This will then record your camming movements as you orbit the player in thirdperson mode.  Basically just use "1" for df_demos_CameraMode 3, otherwise keep it set to "0".

In the case that you set df_ghost1_RecordView to 1, and use this newly recorded ghost during demo playback, you will have to set the following vars (to show the original player, and hide the ghost weapon):

cg_thirdperson 1
cg_drawgun 0

--------------------------------------------------
3C. Config Vars - Ghost1 And Ghost2 - Playing Vars
--------------------------------------------------

\df_ghost1_PlayTimescale [ DEFAULT: 1.0	RANGE: -10.0 to 10.0 STEP: float ] - sets the speed of the ghost playback.

You can change the speed of the ghost during playback.  Setting a the ghost timescale to a negative value "rewinds" the ghost.  You can rewind as far back as the ghost snapshot buffer allows (normally about 25 seconds using a recording interval of 50).

--------------------------------------------------
\df_ghost1_PlayDrawPlayer [ DEFAULT: 3 RANGE: 0 TO 4 ] - changes the rendering of the ghost player.

 0 = DRAW_PLAYER_OFF: Turns off rendering (drawing) of the ghost player.
 
 1 = DRAW_PLAYER_NORMAL: The ghost player is drawn normally.
 
 2 = DRAW_PLAYER_INVIS: The ghost player is drawn using the invisibility powerup.
 
 3 = DRAW_PLAYER_INVIS_USE_RADIUS: The ghost player is drawn normally, unless the ghost player is within the df_ghosts_NoDrawRadius distance to the player (you), in which case the ghost player is drawn using the invisibility powerup.
 
 4 = DRAW_PLAYER_ICON: The ghost player is drawn not as a quake3 player, but instead as the guantlet icon.

--------------------------------------------------
\df_ghost1_PlayDrawMissiles [ DEFAULT: 2 RANGE: 0 TO 2 ] - changes the rendering of the ghost missiles and explosions.

 0 = DRAW_MISSILES_OFF: Turns off rendering (drawing) of the ghost's missiles and explosions.

 1 = DRAW_MISSILES_ONLY: Ghost missiles are drawn, ghost explosions are not.

 2 = DRAW_MISSILES_EXPLOSIONS: Both ghost missiles and ghost explosions are drawn.

--------------------------------------------------
\df_ghost1_PlayCameraMode [ DEFAULT: 0 RANGE: 0 TO 17 ] - changes the ghost camera mode during ghost playback.

During ghost playback, normally you see the ghost player running around the map, as if it was another player.  You can actually switch you mainview (and the miniview as well) to one of the ghost cameras.  Note that your user input will still be active (pushing forwards might make you fall off a platform :P).

- There are 2 types of camera: locked and free.  Locked means that your actual input while following the ghost does not effect the view.  Free means that you can move the mouse and your camera angles will change.
- There are 2 types of "person" settings: first person or third person.
- There is 1 type of player follow modes: player.  Follows the ghost player
- There are 2 types of missile follow modes: first missile, last missile.  Follows your first missile fired or your last missile fired.  

NOTE: For missiles cams, if no missile is in the air, the camera switches back to the ghost player.

0 - CAMERAMODE_OFF: Ghost camera is off

1 - 1P_PLAYER_LOCKED: Ghost camera is in first person player follow mode, and the camera angles are locked.

2 - 1P_PLAYER_FREE: Ghost camera is in first person player follow mode, and the camera angles are unlocked (move mouse to change the angles).

3 - 3P_PLAYER_LOCKED: Ghost camera is in the third person player follow mode, and the camera angles are locked.

4 - 3P_PLAYER_FREE:  Ghost camera is in the third person player follow mode, and the camera angles are unlocked (move mouse to change the angles).

5 - 1P_FIRST_MISSILE_LOCKED: Ghost camera is in the first person first missile follow mode, and the camera angles are locked.

6 - 1P_FIRST_MISSILE_FREE: Ghost camera is in the first person first missile follow mode, and the camera angles are unlocked.

7 - 3P_FIRST_MISSILE_LOCKED: Ghost camera is in the third person first missile follow mode, and the camera angles are locked.

8 - 3P_FIRST_MISSILE_FREE: Ghost camera is in the first person first missile follow mode, and the camera angles are unlocked.

9 - 1P_LAST_MISSILE_LOCKED: Ghost camera is in the first person last missile follow mode, and the camera angles are locked.

10 - 1P_LAST_MISSILE_FREE: Ghost camera is in the first person last missile follow mode, and the camera angles are unlocked.

11 - 3P_LAST_MISSILE_LOCKED: Ghost camera is in the third person last missile follow mode, and the camera angles are locked.

12 - 3P_LAST_MISSILE_FREE: Ghost camera is in the third person last missile follow mode, and the camera angles are unlocked.

13 - 1P_CAMVIEW: To be used in conjunction with "View" recording - turns off ghost's gun, crosshair, and 2d (hud)

14 - 1P_CAMVIEW_LOOK_PLAYER: To be used in conjunction with "view" recording - turn's off ghost's gun, crosshair, and 2d (hud).  The camera's position is the ghost's position.  However, the camera does not use the ghost's angles, but instead continuously tracks the main player.  Especially nice for usage with demo camming techniques, such as freecamming.

NOTE: This particular mode can also track a position, instead of a player, by setting the variable "targetposname" equal to a saved position name.  To see how this is done, see the section "Tracking A Position" in the readme-[DemoCams].txt file.

15 - 1P_VIEW_WITH_VARS: Ghost camera is in follow mode, angles are locked.  CVars that were recorded (using fileformat 3) are played back.

16 - VIEW_VARS_ONLY: No camera mode is used.  CVars that were recorded (using fileformat 3) are played back.

17 - REPLAY_DEBUG: Ghost camera is in First/Third person switching follow mode.  This is a special mode to be used for Replay Script debugging.  If df_demos_ReplayMode is 2 or 3, and a ghost is played back with this camera mode set, the replay script will use the ghost's position and cgtime values to trigger replay activations, etc.

--------------------------------------------------
\df_ghost1_PlayLoop [ DEFAULT: 0 RANGE: 0 to 2 ]

 0 = Off: Ghost playback stops automatically at the end of the file.
 1 = Loop: Ghost playback loops back to the beginning of the ghost file when the end of the file is reached.
 2 = Pause: Ghost playback is paused at the end of the file.

--------------------------------------------------
// ghost 2-5
--------------------------------------------------
\df_ghost2_RecordFileFormat
\df_ghost2_RecordInterval
\df_ghost2_RecordView
\df_ghost2_PlayTimescale
\df_ghost2_PlayDrawPlayer
\df_ghost2_PlayDrawMissiles
\df_ghost2_PlayCameraMode
\df_ghost2_PlayLoop

df_ghost2_* (same as df_ghost1_*)
--------------------------------------------------

*** NOTE: ghosts 2-5 all use/share the same cvar set: df_ghost2_*

--------------------------
3D. Config Vars - Miniview
--------------------------
The miniview vars are documented in the readme-[Ghosts-Miniview].txt document.

----------------------------
4. The Ghost Console Command
----------------------------
\ghost [ FORMAT: #slot record|stop|play <filename> ]

*** NOTE: You may use #all to indicate all of the ghost slots - useful for stopping or playing all ghosts at once.

The ghost console commands, is used for issuing commands to the ghost system, such as record, play, stop.  In maps that have timers or flags, the ghost will start/stop automatically (if you are using one of the df_ghosts_AutoMode settings).  However, for general tricking and in-game trick review, will use a console command (bind to a key of course) to start recording a ghost, play back a ghost, etc.

The command is "ghost", and is followed by additional information, telling the ghost system what to do.

\ghost #1 record - will start recording a ghost using ghost #1.  A filename will be generated for you automatically, based on the mapname and the ghost number (mapname_01)

\ghost #2 record - peforms a similar action (recording a ghost), but uses ghost #2.  Filename will be "mapname_02"

\ghost #1 record MyFileName - will start recording a ghost using ghost #1, but name the file using the name you supplied.

\ghost #1 play MyFileName - plays MyFileName using ghost #1.

\ghost #1 stop - stops recording of ghost #1 if ghost is recording; stops playing ghost #1 if ghost is playing.

\ghost #all stop - stops all ghosts

\ghost #all play - plays all ghosts

Sample binds:
-------------
bind 1 "ghost #1 record"
bind 2 "df_ghost1_PlayTimescale 1.00; ghost #1 stop"
bind 3 "df_ghost1_PlayTimescale 1.00; ghost #1 play"

bind 4 "ghost #2 record"
bind 5 "df_ghost2_PlayTimescale 1.00; ghost #2 stop"
bind 6 "df_ghost2_PlayTimescale 1.00; ghost #2 play"

bind 7 "ghost #1 stop; ghost #2 stop"
-------------
Pressing 1 will record ghost #1, 2 will stop, 3 will play
Pressing 4 will record ghost #2, 5 will stop, 6 will play
Pressing 7 will stop both ghosts

---------------------
5. Known Ghost Issues
---------------------

1. The ghost uses whatever player model you are currently assigned in your q3config, NOT the model that was used during the ghost recording.  This allows you to change the ghost model by simple chaning your model.  However, using a different model than the original one that was used for recording the ghost can have some strange effects on the ghost animations.  These effects become immediately apparent when play a ghost backwards (negative ghost timescale).

2. Play a ghost backwards results in unsmooth ghost animations.  It is still very usable, just that the animations while playing backwards do not look as smooth as playing forwards.

3. The ghost does not use gun animations.  A static gun is drawn for ghost camera modes and miniview camera modes.

----------
6. History
----------
1.91
- Add: allow ghost player-tracking cam to track a position instead of player, using targetposname
- Add: liveammo options added - self-style missiles, quaded self-style missile (missiles don't explode when hitting the player)
- Fix: ghost player would sometimes not appear during multiplayer game usage
- Fix: ghost playback during multiplayer did not play at proper speed (must use df_ghosts_AutoModeMP 1 to enable fix)

1.90
- Total usable ghosts increased from 2 to 5
- LiveAmmo (df_ghosts_LiveAmmo): permits the ghost to fire live ammo (if cheats are enabled).  This allows players to practice certain missile-related MP trix by themselves
- Ghost Variable Mirroring (df_ghosts_MirrorVars) - forces ghost #1 var changes onto ghost #2 - since most of the time changes to both sets of ghost vars is desired.
- Ghost can monitor/record cvar changes for more robust recamming
- Ghost Sprite info: Any crosshair stat item can be specified to float above the ghost, such as the defrag timer
- Specific ghost cam mode (13) for "view" recording (turns off 2d and gun)
- Specific ghost cam mode (14) for tracking main player - very useful for demo freecamming.
- Specific ghost cam mode (17) for replay debugging
- Record option: only record own player's missiles and explosions (df_ghosts_SelfMissilesOnly)
- Added Automode 8 - record best ghost from demo - always overwrite existing best
- Fix: Allow angle changes during demos for free ghost camera modes
- Fix: Cam position/angles drifting when paused
- Fix: Gun animations (ghost fires when player fires) - now just shows a static gun

1.80
- Feature introduced
