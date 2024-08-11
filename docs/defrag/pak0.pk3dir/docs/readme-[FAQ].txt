Q1.  How do I turn off the ghost miniview (PIP)?
Q2.  How do I turn off ghost recording completely?
Q3.  How do I record a ghost from a demo, for racing purposes?
Q4.  How do I record a ghost from a demo, for demo recamming purposes?
Q5.  How do I know what values to assign to the Crosshair Stats system?
Q6.  How do I fire the grappling hook?
Q7.  How do I turn on Overbounce Detection?
Q8.  How do I spectate my teammate using the PIP?
Q9.  How do I get the Demos screen to work in Mac/Linux?
Q10. How do I set up a Defrag server?

--------------------------------------------------

Q1. How do I turn off the ghost miniview (PIP)?
A1. \df_ghosts_MiniviewDraw 0 . Note that generally, any FPS-loss experienced while a ghost is playing is generally due to the miniview (PIP), and not the ghost itself.

--------------------------------------------------
Q2. How do I turn off ghost recording completely?
A2. \df_ghosts_AutoMode 0

--------------------------------------------------
Q3. How do I record a ghost from a demo, for racing purposes?
A3. WARNING: The following method will overwrite your best ghost (if one exists).

1. Set df_ghosts_AutoMode 7
2. Play the demo
3. Set df_ghosts_Automode 4
4. Load the map, and race the ghost

--------------------------------------------------
Q4. How do I record a ghost from a demo, for demo recamming purposes?
A4. The main steps are listed below.  See the separate readme-[Ghosts-DemoRecamming].txt file for additional information.

 1. Record a ghost from a demo.  To do this, set df_ghosts_AutoMode 1.  Play the demo.

 2. Decide which camera mode you would like to use.  Select a ghost camera mode, and set the mode using df_ghost1_PlayCameraMode N.  This will force the view to be through the ghost's eyes during demo playback.
 
 3. Play the ghost during the demo.  To do this, set df_ghost_AutoMode 2.  Play the demo.

--------------------------------------------------
Q5. How do I know what values to assign to the Crosshair Stats system?

A5. Ingame, type: \info in the console.  This will list the entire CHS info item list.

--------------------------------------------------
Q6. How do I fire the grappling hook?

A6. Bind a key to +button5 (or do this through the standard q3 weapons setup).  "Give all" will then give you the grappling hook.  You can select the hook type through the menu system or the df_hook_Type cvar.  Changing this cvar requires a map_restart

--------------------------------------------------
Q7. How do I turn on Overbounce Detection?

A7. Turn on the crosshair stats display system (\df_chs1_draw 1) and assign one of the overbounce detection items to one of the crosshair stats info. slots (\df_chs1_info1 55) (which turns on all OB detections except quaded WOBs).

--------------------------------------------------
Q8. How do I spectate my teammate using the PIP?

First you must turn on the ghost PIP with one of the spectating options (df_ghosts_MiniviewDraw 7 or 8).  Then specifiy the player number you want to track using the df_mp_TrackPlayerNum variable.  To see a list of the players and their numbers, in the console, type: \info players

--------------------------------------------------
Q9. How do I get the Demos screen to work in Mac/Linux?

If you are having problems using the Demo User interface from a Mac or Linux Operating System, you can try setting a cvar that will disable some of the features in the Demo UI.

\df_demos_UICompatibility [ MASK: DEFAULT: 0 (normal) RANGE: 0 TO 3 ] 

 0 = normal (all features enabled)
 1 = strict filenames -  forces file names and folders to use the same capitalization as the actual demo filenames
 2 = no folders - turns off the ability to browse folder below the demos folder
 3 = all options (strict filenames, no folders)

Try changing df_demos_UICompatibility to "1".  This will use strict filenaming, which is the main cause of the UI not working in Mac and Linux systems.  If that doesn't work, try "2", and then, ultimately "3".

--------------------------------------------------
Q10. How do I set up a Defrag server?

We've given multiplayer Defrag a bit of an overhaul with 1.91, and now it's easier than ever to set up a Defrag server.  Essentially a fully capable server can be started simply by running Quake3 with the following command line arguments:

Windows: quake.exe +set fs_game defrag +set dedicated 1
Linux:   q3ded +set fs_game defrag +set dedicated 1

However we have also provided a short introduction on running and tweaking a Defrag server, which you can find in misc/misc/defrag-server-howto.zip.
