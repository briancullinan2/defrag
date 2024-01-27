===============
Ghosts - Racing
===============

1. Information
2. Quick Start
3. Config Vars
4. Recording A Ghost From A Demo
5. History

--------------
1. Information
--------------
The ghost system is set up with defaults to automatically do "best ghost" racing.  A ghost is recorded during your run (when timer starts and stops).  On the next run you will race your ghost.  If your new run is better than the previous, then this new ghost becomes your new "best ghost".  The system keeps track of your best ghost for a map in  the .grec file (a text file).

--------------
2. Quick Start
--------------
The default ghosts settings should be enough.  Only thing you may wish to do is turn off the ghost miniview:

df_ghosts_MiniviewDraw 0

--------------
3. Config Vars
--------------
The complete list of ghost config variables is in the readme-[Ghosts-General].txt file.  For ghost racing, the following variables/values are most likely useful:

\df_ghosts_AutoMode [ DEFAULT: 4 RANGE: 0 TO 7 ] - changes the behavior of the ghosts automatic playing/recording system.

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

--------------------------------
4. Recording A Ghost From A Demo
--------------------------------
It is possible to create a ghost from a demo, and then race this ghost inside defrag.

WARNING: The following method will overwrite your best ghost (if one exists).

1. Set df_ghosts_AutoMode 7
2. Play the demo
3. Set df_ghosts_Automode 4
4. Load the map, and race the ghost

----------
5. History
----------
1.90
- Miniview: draw options: 0 = off, 1 = on for ghost, 2 = on for ghost and demos, 3 = on for demos only, 4 = always on (1P/3P switching style), 5 = always on, 1st Person, 6 = always on, 3rd Person

1.80
- Feature introduced
