=============================
Replays - General Information
=============================

1. Information
2. General Features
2. Quick Start
3. Config Vars
4. Additional Information
5. History

--------------
1. Information
--------------

Replay (sometimes referred to as "Recam") Scripts allow camera and variable scripting to be accomplished through the scripting language coupled with replay engine.  This allows replay scripts to be created for maps, and re-used for any demo on that map.  It can create very nice camming effects, transitions, variable changes, etc., which can give a car-racing game replay type effect.

Users can create and distribute replay scripts for any map.  No compiling is necessary.  Script creators will find a fairly useful and robust ingame script editor and debugger.  The ingame editor even shows script entities as visual entities (camera are displayed as rockets, etc.)

Replay Scripts can be used for Replay (viewcam) Spectating (if df_demos_ReplayMode = 1).  While spectating a game, and while following another player, press "+moveup" to switch to Replay Spectating Mode.  Press "+moveup" again to change back.  Pressing "+movedown" while following another player will switch the player back to free spectator mode.

*** NOTE: Using a replay script for spectating a live game will only change camera positions/angles. It will not activate other vars (won't activate timescale changes, fov changes, etc.)

Replays are turned on by default, through df_demos_ReplayMode.  You may turn off replays with df_demos_ReplayMode 0.

*** NOTE: enabling a demos camera mode (df_demos_CameraMode) automatically turns off the Replay Mode (df_demos_ReplayMode) during demos

Normally, the system will first try to load a replay script name that matches the demoname.  If one does not exist, the system will try to load a script that matches the mapname.  This allows demo-specific replay scripts to be distributed.  In the absence of demo-specific script, the system will use the default script for the map, if one exists.

See the readme-[Replays-ScriptEditing].txt file for more information on Replay Script editing.

--------------------
2. General Features:
--------------------

- Scripting engine with ingame editor/debugging.  Allows scripts to be created and used for any demo on a given map.  Creates car-racing game style replays

- Supports different trigger/activator types, as well as different variable and camera transitions

- Debug and edit modes provide useful tools for script editing and error-checking

- Ingame editor displays various replay entities for immediate visual feedback on script objects

- Allows ghosts to be used for script testing

--------------
3. Quick Start
--------------

\df_demos_ReplayMode 0 // turns replay mode off

\df_demos_ReplayMode 1 // turns replay mode on

--------------
4. Config Vars
--------------

\df_demos_ReplayMode [ DEFAULT: 1 RANGE: 0 TO 4 ] - sets the Replay Mode

 0 = Off
 1 = On (used during demo playback for maps that have replay scripts) and turns on/off Replay/Autochase spectating
 2 = Debug mode, Level 1 (reports debug information during activations)
 3 = Debug mode, Level 2 (reports debug information during activations, shows activators and cams)
 4 = Debug mode, Level 3 (shows activators and cams, uses rail beams to show activator boxes, links and transitions)

1 = On.  If on, and a replay script exists for a given map, the script will be used during a demo.  Also turns on/off replay/autochase spectating

The debug modes are used for Replay Script creation, editing, and debugging.  The debug modes can be used inside and outside of demos.  General users (those not creating replay scripts) should only set the replay mode to 0 or 1 (off or on).

Debug mode 1: will load the replay script inside or outside demos, and allow activation to take place.  It displays activation information onscreen.  Replay entities are NOT visually shown.

Debug mode 2: will load the replay script inside or outside demos, and allow activation to take place.  It displays activation information onscreen.  Replay entities are visually shown using normal q3 entities such as rockets, etc.

Debug mode 3: will load the replay script inside or outside demos, but no activation takes place.  Replay entities are visually shown using normal q3 entities.  In addition, rail beams and polygon boxes are used in addition to the missiles, to show more information about the replay entities.

See the readme-[Replays-ScriptEditing].txt file for more information on Replay Script editing.

*** NOTE: enabling a demos camera mode (df_demos_CameraMode) automatically turns off the Replay Mode (df_demos_ReplayMode) during demos

-------------------------------------------------------------------
\df_demos_ReplayDrawMask [ DEFAULT: 32767 RANGE: 0 TO N (mask) ] - Shows/Hides replay entities in debug modes

 1  = RP_DRAW_ID
 2  = RP_DRAW_CAM
 4  = RP_DRAW_CAM2CAM
 8  = RP_DRAW_ACT2CAM
 16 = RP_DRAW_ACTPOINTS
 32 = RP_DRAW_ACTBOXRAILS
 64 = RP_DRAW_ACTBOX
 
Add the numbers to display the desired items.

Example - to show only ID numbers, Cameras, and Activation Points, use: df_demos_ReplayDrawMask 19
1 + 2 + 16 = 19

You can hide or show various replay script items while in debug mode.  This is useful if you have large scripts, as quake3 has a limit to the number of shaders that can be displayed at a given time.  So, you can turn on the most useful items to you - most likely IDs, CAMs, and ACTPOINTs.

-------------------------------------------------------------------
\df_demos_ReplayFilename [ DEFAULT: $demoname ] - indicates (overrides) the replay script file to be used.

Specifies the replay script to be loaded.  When $demoname is specified (the default value), the system will first try to load a replay script name that matches the demoname.  If one does not exist, the system will try to load a script that matches the mapname.  This allows demo-specific replay scripts to be distributed.  In the absence of demo-specific script, the system will use the default script for the map, if one exists.

If the var is left empty, then the system will try to load a script that matches the mapname, skipping the demo-specific script load attempt.

Specifying another value for the var, such as another valid script name, will load the script indicated.

When creating new replay scripts, it may be useful to override this.  As long as the df_demos_ReplayFileName is not empty, the replay script engine will use the filename specified.

*** NOTE: The actual time a loading of a script occurs depends on the df_demos_ReplayMode var.  If the var is set to 1 (normal), then the script load attempt occurs when a demo is played.  If df_demos_ReplayMode is set to one of the debug modes, the replay script load attempt occurs immediately (assuming you are currently ingame, on a map).

-------------------------
5. Additional Information
-------------------------

Replay Scripts are stored in the "\replayscripts" folder.  A map will use a replay script if the replay mode is on (df_demos_ReplayMode 1) and the replay system can find a valid replay script for the map (\replayscripts\mapname.cfg)

*** NOTE: enabling a demos camera mode (df_demos_CameraMode) automatically turns off the Replay Mode (df_demos_ReplayMode) during demos

----------
6. History
----------
1.91
- Add: Replay: cvar (df_demos_ReplayDrawMask) for showing/hiding replay entities in debug modes
- Change: Replay script maximum entities increased (200 VAR, 100 CAM/TRAN/ACT, 400 LINK)

1.90
- Feature introduced
