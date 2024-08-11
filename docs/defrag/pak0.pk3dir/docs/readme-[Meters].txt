
======
Meters
======

/df_unit [0-2] (default: 0)
	Sets units type for distance and velocity output.
	0 - quake units, units/s
	1 - meters, km/h
	2 - miles, miles/h

/stats (client command)
	Outputs the player stats into the console.
	Stats are reset upon timer start and player respawn.

/df_checkpoints [0-3] (default: 3)
	Selects the checkpoints display mode.
	0 - off
	1 - effective time
	2 - offset time
	3 - relative time

/df_drawCheckpointEvents [0-1] (default: 1)
	Turns on/off the display of the screen-centered checkpoint events.

/df_drawCheckpointStats [0-1] (default: 1)
	Turns on/off the display of the bottom right checkpoints info.

/df_drawBesttime [0-1] (default: 1)
	Displays performed best time for the current map.

/df_drawSpeed [0-2] (default: 1)
	0 - Disabled
	1 - Displays speed meter
	2 - Displays speed meter and uses an older quake-units conversion table (Defrag old-school)

/df_drawJumpmeters [0-7] (default: 3)
	Sets up the jump meters on the HUD.
	1: draw jump height
	2: draw jump distance
	3: draw both
	5: draw jump height, high values only
	6: draw jump distance, high values only
	7: draw both, high values only
