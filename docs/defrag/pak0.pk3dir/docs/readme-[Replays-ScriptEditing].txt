========================
Replays - Script Editing
========================

1. Information
2. General Features
3. Quick Start
4. Config Vars
5. Additional Information
6. Getting Started With Script Editing
7. Replay Objects
8. Special Replay Vstrs And Values
9. Replay Console Command
10. Replay Script Parser
11. Script Testing Ingame
12. Misc Information
13. History

--------------
1. Information
--------------

Replay (sometimes referred to as "Recam") Scripts allow camera and variable scripting to be accomplished through the scripting language coupled with the replay engine.  This allows replay scripts to be created for maps, and re-used for any demo on that map.  It can create very nice camming effects, transitions, variable changes, etc., which can give a car-racing game replay type effect.

Users can create and distribute replay scripts for any map.  No compiling is necessary.  Script creators will find a fairly useful and robust ingame script editor and debugger.  The ingame editor even shows script entities as visual entities (camera are displayed as rockets, etc.)

Replays are turned on by default, through df_demos_ReplayMode.  You may turn off replays with df_demos_ReplayMode 0.

*** NOTE: enabling a demos camera mode (df_demos_CameraMode) automatically turns off the Replay Mode (df_demos_ReplayMode) during demos

This document covers replay script editing.

-------------------
2. General Features
-------------------

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

Debug mode 3: will load the replay script inside or outside demos, but no activation takes place.  Replay entities are visually shown using normal q3 entities.  In addition, rail beams are used in addition to the missiles, to show more information about the replay entities.

For debug mode 2 and 3: replay entities are shown visually.  

- Camera are shown as rockets
- Activators are shown using BFG missiles in the corners of the activator volume
- Activator control corners are shown with gauntlet icons
- Activator centers are shown using a plasma shot
- Activator and camera ID numbers float above the entities to indicate the ID number

In debug mode 3:
- Blue boxes are used to outline the activator volumes
- Green rail beams show activator to camera links
- Red rail beams show camera to camera transitions

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

--------------------------------------
6. Getting Started With Script Editing
--------------------------------------

Replay scripts allow variables and cameras to be defined, changed, and transitioned.  Scripts are made of script entities, or objects.  There are 5 different replay objects: VAR, CAM, TRAN, ACT, LINK.  Scripts are created on a map-basis, and can be reused for any demo (if created properly) for that given map.

The best method for creating a script is usually to first define camera positions and activator volumes ingame, and save the script to a file.  Then, you can edit the rest of the script manually, using notepad.  Note that you can create the entire script ingame using the replay console command to create the rest of the script (to create variables, transitions, and links).

*** NOTE: Creating camera positions and activator volumes are best accomplished using binds.

- Check the DF-[Replay-Editing].cfg provided, in the cfg folder.

You may use q3 in windowed mode, edit the script in notepad, and reload the script.  So, you can edit the script without ever leaving q3, which makes for faster editing and testing.

After reading this document, have a look at the runforest1.cfg replay script - it shows some of the more complex things you can do with replay scripts.

*** IMPORTANT: When creating a completely new replay script, after you have created the first camera or activator, either:

1. Save to a file: \replay save filename
2. Reload the file: \replay load filename

- OR -
1. Type: \replay validate

Either one of these actions will do an initial validation of the script, and then display the script objects (cameras, activators) onscreen if one of the debug modes is one.  If you don't perform one of these actions, you will not see the script objects ingame until the script is re-loaded.

-----------------
7. Replay Objects
-----------------

There are 5 different replay object types.

--------------------------------------------------
Variables (VAR) (maximum of 200)
--------------------------------------------------

Variables (VARs) are replay objects that allow value changes.  They can be existing cvars, or user created vstrs.  VARs can be linked directly to activators, or used within transitions.

FORMAT:  VAR ID VarName                   Value
EXAMPLE: VAR  1 df_demos_ReplayCameraMode 5.000

A VAR is actually a varname/value pair, along with an ID.  Each varname/value pair must have a unique ID.

--------------------------------------------------
Cameras (CAM) (maximum of 100)
--------------------------------------------------
Cameras (CAMs) are camera positions and angles.  Cameras may be linked directly to activators, or used within transitions.

FORMAT:  CAM ID      X      Y      Z    P    Y    R
EXAMPLE: CAM  0    330   2205    175    2  -90    0

where X Y Z = position of camera and P Y R = pitch yaw roll of camera.

*** IMPORTANT: A CAM is actually a camera position/angles set, along with unique ID.  A camera, to be used properly, must have a proper df_demos_ReplayCameraMode set.  DO NOT USE df_demos_CameraMode

------------
Camera Types
------------
The replay camera modes are very similar to the demo camera modes.  They are listed here:


 0 = EMPTY (not valid)
 1 = EMPTY (not valid)
 2 = EMPTY (not valid)
 3 = EMPTY (not valid)
 4 = LOOK: Camera view angles used are the ones specified by the CAM var values for Pitch Yaw and Roll.  Player tracking does NOT occur.
 5 = LOOK_PLAYER: Camera view angles continuously track the player.
 6 = LOOK_PLAYER_NOPITCH: Camera view angles continuously track the player, except for pitch (up/down).  A nice cam mode to use for strafing maps, as the camera does not bob up and down as the player jumps.
 7 = LOOK_PLAYER_NOYAW: Camera view angles continuously track the player, except for yaw (left/right).
 8 = NORMALWITHOFFSETS: Uses the camera offsetting vars (df_demos_CamOffsetPositionX, ...)
 9 = CHASE_AUTO: Cinematic-type camera movements done automatically.  This is the same as the CHASE USER1 mode, with hardcoded values of: cg_thirdPersonAngle 0, cg_thirdPersonRange 100, df_demos_CameraTransitionSpeed 200
10 = CHASE_USER1: Same as mode 9 (AutoChase), but allows the user to change the way the camera moves, by changing cg_thirdPersonRange, cg_thirdPersonAngle, and df_demos_CameraTransitionSpeed
11 = CHASE_USER2_THRUWALLS: Same as mode 10 (UserChase1), but will travel through walls (will not reposition the camera position if the player target is hidden behind a wall).  This can be useful for a camera that stays close to a wall or the ground.
12 = LOOK_POSITION: Camera tracks a position, instead of a player.  The position tracked is defined by 3 variables: df_demos_TargetPositionX, df_demos_TargetPositionY, df_demos_TargetPositionZ

--------------------------------------------------
Transitions (TRAN) (maximum of 100)
--------------------------------------------------
Transitions (TRANs) are used to create a transition of either 2 variables (VAR) or a 2 cameras (CAM).  This is done by creating a transition, defining a transition type, indicating the 2 IDs for the VARs or CAMs, and specifing speed/loop data.

FORMAT:  TRAN ID TranType DType ID ID Speed Loop
EXAMPLE: TRAN  0 TIME     CAM    0  1    70    0

Here, IDs are used to indicate a camera transition from CAM ID 1 to CAM ID 2.  The transition is TIME-based, with a speed of 70.  The transition does not loop.

Speed and Loop have different meanings, depending on the transition type (TranType). 

----------------
Transition Types
----------------
There are 10 different transition types.  One is time based (TIME), and the other 9 are player position based.  Generally, for transitions for VARs, TIME is the only transition type used (although the other transition types may be used).  For CAM transitions, any of the 10 TranTypes may be used.

TranTypes: TIME, POSX, POSY, POSZ, POSXY, POSXZ, POSYX, POSYZ, POSZX, POSZY

----------------------------
Time Based Transitions: TIME
----------------------------

TIME based transitions cause variable values, or cameras to transition a fixed amount over time.  Once a TIME based transition is activated (by an activator), the transition occurs at step intervals, over the course of time.  The duration of the transition is determined by the Speed value.  The number of times the transition occurs is determined by the Loop value.

--------------------------------------------------
Speed: determines how fast the transition occurs.

- If the Speed is a positive value, the transition is time-fixed - the transition will occur over a set amount of time.  A value of 50 gives approximately a 4 second transition.

- If the Speed value is negative, the transition is speed-fixed - the transition speed is the same, regardless of the "distance" between the 2 values.  In the case of CAM transitions, this means that the speed that the camera moves between the 2 camera positions is the same, regardless of how far away the 2 camera positions are from each other.

- If the Speed value is 0, the transition will occur instantaneously.

*** NOTE: For doing panning camera transitions (2 cams have the same position values, but different angle values) - a positive speed value should be used.

--------------------------------------------------
Loop: detemines how many times the TIME transition occurs, once activated.

- If the Loop value is 0, the transition will occur once (no loop)

- If the Loop value is positive, the transition will be repeated, for a count equal to the loop value (Loop 4 means the transition will occur 5 times)

- If the Loop value is negative, the transition will be repeated, but the values during the transition will go from the start value to the stop value, then reverse back to the start value.  This is a forward/reverse transition.  The number of times the transition repeats is based on the negative value count.

--------------------------------------------------------------------------------------
Position Based Transitions: POSX, POSY, POSZ, POSXY, POSXZ, POSYX, POSYZ, POSZX, POSZY
--------------------------------------------------------------------------------------

Position-based transitions are most often used for camera transitions.  The current value of the transition between the start and stop value is determined by the Player's position in the world.  This is what allows a camera position to move with a player.  If a player moves forward a bit, then steps back a few steps, the camera position will do the same.

Position transitions use the world X Y Z axis as reference points.

There are 2 types of position based transitions: Linear, and Planar.  

--------------------------------------------------
Linear transitions are ones in which the camera moves along a linear path (a straight line), inbetween the start and stop camera.  There are 3 linear transitions: POSX, POSY, POSZ

- POSX: The X world axis value for the player's current position is the interpolant (current value) for the transition between the start and stop values.

- POSY: The Y world axis value for the player's current position is used.

- POSZ: The Z world axis value for the player's current position is used.

--------------------------------------------------
Planar transitions are transitions in which the camera moves between the start and stop positions, but stays within a plane defined by the start and stop positions.  There are 6 planar transition types: POSXY, POSXZ, POSYX, POSYZ, POSZX, POSZY.

- POSXY: The X and Y world axis values for the player's current position are the interpolants (current values) for the transition between the start and stop values along the XY plane.  The X value is also used as the interpolant for the Z value.

- POSXZ: The X and Z values are used, with the X value being also used for the Y value.

- POSYX: The Y and X values are used, with the Y value being also used for the Z value.

- POSYZ: The Y and Z values are used, with the Y value being also used for the X value.

- POSZX: The Z and X values are used, with the Z value being also used for the Y value.

- POSZY: The Z and Y values are used, with the Z value being also used for the X value.

Note that at first glance, one would think that the POSXZ TranType would be the same as the POSZX TranType.  However, the transitions define a "dominant" interpolant.  The dominant interpolant is used as the interpolant for the 3rd axis.  So, in the case of POSZY, the dominant interpolant is "Z", and is not only used as the interpolant for the Z axis value, but also used in the 3rd axis, in this case the X axis.

--------------------------------------------------
Positional Offsets For Position Based Transitions (Using Speed and Loop):

Speed and Loop are used differently for Position based transitions.  They are NOT used to indicated speed or looping (there is no looping, since the value is determined soley by the player's position within the world.  Instead, Speed and Loop are used to indicate a "positional-offset" along a given axis.

For example, if a Speed of 50 is used on a POSX transition, then the camera will be positioned slightly ahead of the player's X position, therefore giving the camera a position in front of the player.  A Speed value of -50 would cause the camera to be slightly behind the player.

For linear transitions (POSX, POSY, and POSZ), only Speed is used to create a positional-offset.

For planar transitions (POSXY, POSXZ, POSYX, POSYZ, POSZX, and POSZY), both Speed and Loop can be used (independantly) to create positional offsets.  Speed is used to create an offset along the Primary Axis, and Loop creates an offset along the Secondary Axis.  So, in the case of a POSZY transition, Speed would create a positional-offset along the Z axis, and Loop would create an offset along the Y axis.  Again, both positive, negative, or "0" values may be used.  Expermiment to see what yields the desired results.

--------------------------------------------------
Activators (ACT) (maximum of 100)
--------------------------------------------------
Activators (ACTs) are the entities that make the magic happen.  They trigger, or "activate" a variable change, a camera change, or a transition (variable or camera transition).  There are a number of different activator types, the most common being a VOLUME activator - one which is activated when the player enters a 3D space/area (volume).  Simply defining an activator is not enough, you must LINK the activator to all the VAR, CAM, or TRANSITIONS you want to be triggered by the activator (see LINK section below).

MAIN FORMAT: ACT ID ActType  <...>

FORMATS TYPES:

         ACT ID MANUAL      On
         ACT ID TIMER     Time
         ACT ID TRANEND     ID
         ACT ID RADIUS       X      Y      Z Radius
         ACT ID VOLUME      X1     Y1     Z1     X2     Y2     Z2

EXAMPLE: ACT  0 VOLUME    -135   -430     40    455    -80    265

There are 5 different Activator types: MANUAL, TIMER, TRANEND, RADIUS, VOLUME.  The proper syntax/format for activators are determined by the activator type.

--------------------------------------------------
MANUAL: Allows an activator to be triggered manually through the replay console command.

FORMAT:  ACT ID MANUAL On
EXAMPLE: ACT  2 MANUAL  1

The activator (and therefore all items linked to the activator) may be then activated using the "replay" console command.

Example: \replay activate 2 1 // activates ACT 2
Example: \replay activate 3 0 // de-activates ACT 3  

--------------------------------------------------
TIMER: Creates an activator that is triggered by the internal game clock.

FORMAT:  ACT ID TIMER Time
EXAMPLE: ACT  2 TIMER 1900

Here, the time value indicates the client time that the activation should occur.  You can check the client time using:
$varCommand say the time is $cgtime
or using the appropriate CHS stat item.

The TIMER activation can be used to cause an activation to occur at a specific time within a demo.

--------------------------------------------------
TRANEND: An activator that starts when another transition stops.

FORMAT:  ACT ID TRANEND ID
EXAMPLE: ACT  5 TRANEND  2

Here, the second ID (2) indicates the transition to track.  When transition ID 2 ends, Activator 5 will activate.

--------------------------------------------------
RADIUS: Activation occurs when the player steps within the radius of the activator.

FORMAT:  ACT ID RADIUS   X      Y      Z Radius
EXAMPLE: ACT  1 RADIUS 500    250    100 450

Here, a RADIUS activator is created within the world, at position (500 250 100), and has a radius of 450 units.  If the player comes within 450 units of (500 250 100), the activator will activate.  If the player then leaves the radius, the activator becomes "re-armed" - meaning that if the player enters the radius again, activation will occur again.

--------------------------------------------------
VOLUME: Activation occurs when the player steps within the area (volume) of the activator.

FORMAT:  ACT ID VOLUME      X1     Y1     Z1     X2     Y2     Z2
EXAMPLE: ACT 23 VOLUME     250    500     10    350   -300  -1000

A VOLUME activator defined 2 points in space (X1 Y1 Z1) and (X2 Y2 Z2).  These 2 points define a 3D volume in the world.  If the player enters the volume, the activator will activate.  If the player then leaves the volume, the activator becomes "re-armed" - meaning that if the player enters the volume again, activation will occur again.

--------------------------------------------------
Links (LINK) (maximum of 400)
--------------------------------------------------
Links (LINKs) are used to tie and activator to a variable, a camera, or a transition.

FORMAT:  LINK ID DType ID DType ID
EXAMPLE: LINK  3 ACT    1 TRAN   0
         LINK  3 ACT    1 VAR    3

The first DType (DataType) must be ACT.  Here, LINK #3 defines that Acivator #1 will trigger Transition #0 and Variable #3

----------------------------------
8. Special Replay Vstrs And Values
----------------------------------

When creating replay scripts, there are a few specially defined vstrs.

df_demos_ReplayCameraMode - defined the replay camera mode.

*** NOTE: you should NOT use df_demos_CameraMode within your replay script.

df_demos_ReplayTransitionSpeed - normally when creating transitions, you use the Speed value to indicate the speed of the transition.  However, if you want, you can use "df_demos_ReplayTransitionSpeed" instead.  To use this vstr, set the Speed in the transition to 0, and define df_demos_ReplayTransitionSpeed.  The only real reason to use this vstr is to be able to do transitions on the speed itself.  You could create a transition on 2 df_demos_ReplayTransitionSpeed VAR definitions.

df_demos_ReplayVar_FOV - This value is used inplace of cg_fov.  Do not use cg_fov - it cause a serious fps loss during the replay, and also, will not always set the player's origina FOV back after the replay has finished.  Instead, use this special vstr df_demos_ReplayVar_FOV.

Use -9999 for VAR value to indicate the users value for this var should be used.

-------------------------
9. Replay Console Command
-------------------------

----------------------------------------
replay [ FORMAT: subcommand_name <...> ]
----------------------------------------

The Replay console command is used for replay script file loading and saving, as well as replay data manipulation.

For help ingame, type: \replay ?

To use the command, type: \replay subcommand_name <...>
substituting "command_name" from one of the commands listed below.

--------------------------------------------------
READ/LOAD <filename>
--------------------------------------------------

Loads a replay script file.  When the script file is read, it is automatically validated.  Make sure to be in one of the replay debug modes to see the results of the script validation.  If no filename is specified, the replay script with the same name as the current map name is loaded, unless df_demos_ReplayFilename is not empty, in which case the filename specified by this var will be loaded.

+ Example: \replay load // loads the replay script file with the same filename as the map

+ Example: \replay load q3dm17 // loads the q3dm17 replay script file

--------------------------------------------------
WRITE/SAVE filename
--------------------------------------------------

Saves a replay script file.  A filename must be specified.  When the file is saved, it is automatically formatted (including FORMAT comments, etc.).

+ Example: \replay save q3dm17 // saves the q3dm17 replay script file

--------------------------------------------------
VALIDATE
--------------------------------------------------

Validates a script.  Checks the script for errors, such as unreferenced VAR or CAM objects, as well as invalid ID references within TRANS and LINKS.

Note that when creating a new replay script ingame (when a replay script file does not exist yet), you must type "replay validate" as soon as you have created your first script entity, otherwise the entity will not be visible onscreen in the debug modes.

+ Example: \replay validate  // validates the current replay script data

--------------------------------------------------
ACTIVATE ActID
--------------------------------------------------

Used to manually activate an activator.  Basically, you may create an activator that can be manually triggered during replays.  This is useful when you would like to trigger a replay script event manually.

+ Example: \replay activate 3 // activates ACT # 3

--------------------------------------------------
CLEAR DataType DataID
--------------------------------------------------

Clears (deletes) a replay data item of the DataType specified.  If "-1" is specified, all the date for that DataType is cleared.

+ Example: \replay clear var 2  // clears VAR # 2

+ Example: \replay clear cam -1 // clears all CAM data

--------------------------------------------------
CLEAR all
--------------------------------------------------

Clears all the replay data.

+ Example: \reaply clear all // clears all replay data

*** NOTE: Clearing replay data does not delete a replay script file.  

*** WARNING: If you clear the replay data and then do replay save to an existing replay script, you will effectively destroy the old replay file.

--------------------------------------------------
GET DataType DataID <format>
--------------------------------------------------

Displays to the console the  replay data of the type and id specified.  If "-1" is specified for the DataID, all the data of that DataType is retrieved.  There are 4 different formats that the data can be displayed in:

0 = EXPANDED (shows data names and data values)
1 = CHAIN    (shows data references)
2 = SHORT    (list style - shows data values, no names)
3 = FORMAT   (shows format of DataType specified)

+ Example: \replay get var 3  // display VAR # 3

+ Example: \replay get cam -1 // displays all the CAM data in list format

--------------------------------------------------
GET all DataID <format>
--------------------------------------------------

Displays all data for the DataID specified.

+ Example: \replay get all 3 // displays VAR, CAM, TRAN, ACT, and LINK # 3

--------------------------------------------------
SET DataType DataID <...>
--------------------------------------------------

Sets the replay data for the DataType and DataID specified.  Note that you must supply all the data items for the datatype specified.  So for a CAM, you must supply the ID, X, Y, Z, P, Y, R values.  Note that you may use string subtitutions.

+ Example: \replay set CAM 1 100 200 50 -40 120 0 // sets CAM # 1 to the X, Y, Z, P, Y, R values specified

+ Example: \replay set CAM 1 $ 400 $ $ $ $        // sets CAM # 1 Y value to 400, while leaving the rest of the values as they are

+ Example (using string substitutions):

\set user_CurrentCamID 2 // sets CurrentCamID vstr to 2
\replay set CAM $user_CurrentCamID $viewposX $viewposY $viewposZ $angX $angY $angZ // sets CAM # 2 to the player's current position and angles

*** NOTE: When creating CAMs and ACTs, the following are useful binds:

\bind <key> "varMath user_CurrentCamID - 1"
\bind <key> "varMath user_CurrentCamID + 1"
\bind <key> "replay set CAM $user_CurrentCamID $viewposX $viewposY $viewposZ $angX $angY $angZ"

\bind <key> "varMath user_CurrentActID - 1"
\bind <key> "varMath user_CurrentActID + 1"
\bind <key> "replay set ACT $user_CurrentActID $viewposX $viewposY $viewposZ $ $ $"
\bind <key> "replay set ACT $user_CurrentActID $ $ $ $viewposX $viewposY $viewposZ"

See the "DF-[Replay-Editing].cfg" file for useful replay script editing binds.

------------------------
10. Replay Script Parser
------------------------

The Replay Script engine parses the script when the script is loaded.  It does data validation, as well as some logic checking, to make sure that the data is correct.

The parser looks for unlinked VAR, CAM, and TRAN objects.  If a VAR, CAM, or TRAN is created, and is not linked, the script will report a warning.

The parser also looks for missing script objects in LINKs.  If a LINK specifies an object that does not exist, the script will report a warning.

-------------------------
11. Script Testing Ingame
-------------------------
Script testing may be done ingame, using the various replay debug modes (df_demos_ReplayMode 2, 3, 4).  It is often useful to put the miniview (PIP) onscreen.  With the PIP, you can have the replay cameras working, but still view your normal view thru the PIP.  This lets you move around by looking at the PIP view, but observe the replay script in action.

Also, you can use the ghost system to activate a replay script for testing.  This is often much faster than manually running around a level to test the script.  It's often useful to first create a ghost from a demo (df_ghosts_Automode 1).  Then, you can manaully play the ghost ingame (\ghost #1 play ghostfilename).  Set the ghost camera mode (df_ghost1_PlayCameraMode) to the the special mode for replay testing (mode 16 - replay debug).  As the ghost plays, the replay script's activators will be activated by the ghost, and cameras will track the ghost.  To test the replay script ingame, using the ghost, set the df_demos_ReplayMode to 2 or 3.

Also, remember, when creating a new script, after creating your first camera or activator, use the "\replay validate" command to do an initial validation, which will then let you see the cameras/activators ingame if a replay debug mode is on.

--------------------
12. Misc Information
--------------------

The replay script engine makes every effort to "clean up" after a demo is played.  Any vars that you change in your replay script will be cleaned up by the replay engine when the demo finishes, with certain exceptions.  Unfortunately, the way the q3 engine works, the cleanup code is often not called until either a new demo is loaded, or a new maps is loaded.  This means that if a player watches a demo, then exits quake afterwards, the replay VAR cleanup code will most likely NOT get called.

Therefore, it is important to make a user friendly script - one that will not change the player's main settings.  Do not use cg_fov (instead use the special var df_demos_ReplayVar_FOV).  Also, for Defrag style maps it's often good to have an activator at the end of the map run that activates and changes all the VARs your script changes back to the normal values.  This could be done by creating VARS with a value of -9999, which indicates that the user's value should be used.  So, the final activator in the map (the one at the end of the run), could be linked to multiple VARS with values of -9999, which would set the values of these vars to the users value.

Certain vars are safe to change, namely ones that do not get archived (written to the q3config), or are automatically reset by the q3 engine during the next q3 session.  Timescale is a good example - it is safe to change the timescale value within a replay script.

-----------
13. History
-----------
1.91
- Add: Replay: cvar (df_demos_ReplayDrawMask) for showing/hiding replay entities in debug modes
- Add: Replay camera mode: LOOK_POSITION (df_demos_ReplayCameraMode 12) - tracks a position (via 3 vars: df_demos_TargetPositionX, Y, Z) instead of a player
- Change: Replay script maximum entities increased (200 VAR, 100 CAM/TRAN/ACT, 400 LINK)

1.90
- Feature introduced
