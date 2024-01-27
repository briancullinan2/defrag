=========
Demo Cams
=========

1. Information
2. Config Vars
3. Quake3 Keypresses During Demos
4. Preparing To Use The Camera Modes
5. Using The Camera Modes
 5A. Using The FreeCams
 5B. Using The Transition Cams
 5C. Using Transition Cams and Camera Rolls
6. Tracking Other Players
7. Tracking A Position
8. Demo Cam (Cam2Cam) Sequencing
9. Demo Cam Offsetting
10. Recording Camera Movements To A Ghost File
11. Additional Information
12. History

--------------
1. Information
--------------

The Demo Cameras Modes (Demo Cams) are primarily useful for quake3arena video creation.  There are 7 different camera modes that you can use.  The camera modes range from free moving, user controlled cams, to transitioning cams that are triggered by the user.

3 Camera modes are provided for doing specialized camming such as moving freely inside demos.  4 additional camera modes allow camera positions to be defined, as well as doing camera to camera transitions.

Automated cam2cam transitions are possible.  Also, camera offsetting allows camera position and angles to be changed (including camera roll).  Use of certain vars also allows curved camera paths to be created.

*** NOTE: enabling a demos camera mode (df_demos_CameraMode) automatically turns off the Replay Mode (df_demos_ReplayMode) during demos

--------------
2. Config Vars
--------------

\df_demos_CameraMode [ DEFAULT: 0 (off) RANGE: 0 TO 7 ] - changes the different demos camera mode.  cg_thirdperson will be changed automatically, depending on the camera mode chosen.

 0 = DEMOS_CAMERAMODE_OFF: Off

 1 = DC_CAMERAMODE_FREE: First Person, Free Cam: Allows free movement of the camera as well as free angle movement.  Note: Nice effects can be achieved by recording your freecamming movements to a ghost, and using the special ghost cam 1P_CAMVIEW_LOOK_PLAYER (df_ghost1_PlayCameraMode 14).

 2 = DC_CAMERAMODE_FOLLOW: First Person, Follow Cam: Movement of the camera is attached/fixed to the player, but angle movements are free

 3 = DC_CAMERAMODE_3P: Third Person, Free Angles Cam: Movement of the camera is attached/fixed to the player, in 3rd person fashion, angle movements are free

 4 = DC_CAMERAMODE_LOOK: Savedpos Transition Cam: Camera starts at the current saved position, and moves to the next saved position when the user keys the transition.  Camera view angles transition from the first saved position to the keyed (next) saved position.

 5 = DC_CAMERAMODE_LOOK_PLAYER: Savedpos Player-Tracking Cam: Camera starts at the current saved position, and moves to the next saved position when the user keys the transition.  Camera view angles continuously track the player.

 6 = DC_CAMERAMODE_LOOK_PLAYER_NOPITCH: Savedpos Player-Tracking Cam, No Pitch: Camera starts at the current saved position, and moves to the next saved position when the user keys the transition.  Camera view angles continuously track the player, except for pitch (up/down), which is transitioned from the first saved position to the keyed (next) saved position.  A nice cam mode to use for strafing maps, as the camera does not bob up and down as the player jumps.

 7 = DC_CAMERAMODE_LOOK_PLAYER_NOYAW: Savedpos Player-Tracking Cam, No Yaw: Camera starts at the current saved position, and moves to the next saved position when the user keys the transition.  Camera view angles continuously track the player, except for yaw (left/right), which is transitioned from the first saved position to the keyed (next) saved position.

 8 = DC_CAMERAMODE_NORMALWITHOFFSETS:  Used for other player tracking (uses the df_mp_TrackPlayerNum cvar).  Also, will use the camera offsetting vars.  Use this mode if you are trying to track different players while watching a demo, but simply desire the standard firstperson view.

 9 = DC_CAMERAMODE_CHASE_AUTO: Cinematic-type camera movements done automatically, without any camera position setup.  This is the default mode used for demos if Replays are on, and no replay script exists for the map.  This is the same as the CHASE USER1 mode, with hardcoded values of: cg_thirdPersonAngle 0, cg_thirdPersonRange 100, df_demos_CameraTransitionSpeed 200

10 = DC_CAMERAMODE_CHASE_USER1: Same as mode 9 (AutoChase), but allows the user to change the way the camera moves, by changing cg_thirdPersonRange, cg_thirdPersonAngle, and df_demos_CameraTransitionSpeed

11 = DC_CAMERAMODE_CHASE_USER2_THRUWALLS: Same as mode 10 (UserChase1), but will travel through walls (will not reposition the camera position if the player target is hidden behind a wall).  This can be useful for a camera that stays close to a wall or the ground.

*** NOTE: enabling a demos camera mode (df_demos_CameraMode) automatically turns off the Replay Mode (df_demos_ReplayMode) during demos

*** NOTE: if no savedpositions have been set up and/or the "saveposname" var is empty, then modes 4, 5, 6, 7 will default to a standard thirdperson view.  Once a savedposition is activated (example: set saveposname pos1), the camera position will smoothly interpolate from the current thirdperson view position to the new camera position.

--------------------------------------------------
\df_demos_CameraTransitionSpeed [ DEFAULT: 50 RANGE: -N TO N ] - adjusts the camera speeds

Demos camera mode 1: Changes the speed that the camera moves when player presses +forward, +back, etc.  Values are striclty positive (a negative CameraTransitionSpeed is converted to positive for usage in this camera mode).

Demos camera mode 4, 5, 6, 7: Changes the speed that the camera moves from saved position to saved position.

* Positive values: Camera transition is time-fixed - the camera will take the same amount of time to move between 2 camera positions that have short distance, as 2 camera positions that have a larger distance.  The speed of the camera transition therefore changes with distance between the camera positions.

* Negetiva values: Camera transition is speed-fixed - the camera moves at a steady speed, regardless of the distance between the 2 camera positions. The time of the camera transition therefore changes with the distance between the camera positions.

* 0: Camera transition is instant - the camera instantly moves from camera position to the next camera position.

--------------------------------------------------
\df_demos_UnlockThirdpersonPitch [ DEFAULT: 0 RANGE: 0 (off) to 1 (on) ] - removes the pitch restriction when cg_thirdperson is 1.  This allows full overhead (or underneath) views.

--------------------------------------------------
\df_ghosts_CheckPVS  [ DEFAULT: 1 RANGE: 0 (no), 1 (yes) ] - determines if the demos camera system should check the map Potential Visible Set.

The quake3 PVS deteremines if a section of the map is visible or not to the player.  An example of a section outside of the PVS would be another room, seperated by the void (you usually get to a room like this through a teleporter).  If the ghost is playing, and a ghost camera mode is on (in either the mainview or the miniview) and the ghost goes outside the current PVS, then a hall of mirrors effect occurs (mappers are familiar with this effect).  Keep this variable set to 1.  Leaving it set to the default (1), handles the quake3 PVS in an appropriate way, so that the ghost's view (camera) can still be drawn properly.  There's not really much reason to set it to 0.  Leave it alone you freaks.

Note that you can see the effect of the PVS when watching a playback of the ghost.  Notice that when the ghost is not in visible range (maybe it went around the corner) to you the player, then the items on the screen are not visible to the ghost's view as it continues running through the map.  If you are in visible range to the ghost, then the PVS permits items to be displayed in the ghost's view.

Similarly, if during a demo, you are freecamming, and you attempt to move outside the PVS (where the current "real" player inside the demo is), the sytem will handle the PVS check.

--------------------------------------------------
\df_mp_TrackPlayerNum [ DEFAULT: -1 (main player) RANGE: -1 to MAX_CLIENTS (63) ] - allows democams to track different players, as well as allowing the ghost miniview (PIP) to spectate other players.

Set the variable to the desired player to track.  If you are using democams, the democams will track this player.  If you are ingame, using the ghost miniview, the PIP will spectate the player specified.

*** NOTE: To get player ID information, in the console, type:

\info players

To spectate other players using the ghost miniview (PIP), set the df_mp_TrackPlayerNum to the proper player, and set the df_ghosts_MiniviewDraw var to 7 or 8.

Useful binds for tracking:

bind LEFTARROW  "varMath df_mp_TrackPlayerNum = $PreviousTeamPlayerNum"
bind RIGHTARROW "varMath df_mp_TrackPlayerNum = $NextTeamPlayerNum"

---------------------------------
3. Quake3 Keypresses During Demos
---------------------------------

While viewing a quake3 demo, certain keypresses on the keyboard are allowed, other are not.  If a key is pressed that is not allowed, quake3 will exit the demo.  Thererfore it is necessary to bind keys for Demos Cameras to "allowed" keyboard keys.

The keys that quake3 does allow during demos are:
The Function keys (F1 through F12)
The Insert, Delete, Home, End, Page Up, and Page Down keys
The numberpad keys

------------------------------------
4. Preparing To Use The Camera Modes
------------------------------------
In order to use the camera modes, you will need to bind the movement commands to keys that quake3 allow to be pressed during demo playback.  Also, to use the transitioning camera modes, you will need to create saved positions within a map, and then recall these saved positions during demo playback.  The config information below lists binds that can be used for all the camera modes.  The position saving and loading information is used with the transitional camera modes.

Use the config file provided: DF-[DemoCams].cfg

-------------------------
5. Using The Camera Modes
-------------------------
The different camera modes have different requirements to be used.  The free (non transitional) cams (modes 1, 2, and 3) do not require any saved positions to operate.  The transitional cams (modes 4, 5, 6, and 7) require the user to load a map first, and create the saved positions within the map, before using the cams during demo playback.

When using the camera modes, the system will automatically handle cg_thirdperson 0/1.

Enabling a demos camera mode (df_demos_CameraMode) automatically turns off the Replay Mode (df_demos_ReplayMode) during demos

For the information below discussing the camera modes usage, we are assuming you are using the config information listed above.

----------------------
5A. Using The FreeCams
----------------------
Using the free (non transitional) cams (modes 1, 2 or 3) do not require any saved position information.  Simply set df_demos_CameraMode to 1, 2, or 3.

Camera mode 1: Use your movement bound keys to move the camera.  Use the mouse to change your view angles.  Use df_demos_CameraTransitionSpeed to adjust the speed that the camera moves.

Camera mode 2: Use your mouse to change your view angles

Camera mode 3: User your mouse to the camera orbital position/angles around the player.

-----------------------------
5B. Using The Transition Cams
-----------------------------
Using the transition cams require you to set saved positions with a map first, before demo playback. Failing to do so will cause the camera to remain static within a demo.

First you must set the desired camera positions.  Load the map (the same map that the demo uses).  Move within the map to the first desired camera position (use \noclip if necessary).  Press "1" then "0" to save the first position.  Now move to the second position.  Press "2", then "0".  Move to a third position and press "3" then "0".  Now press "1" to set the camera to the first position.

Choose your desired transitional camera mode.  df_demos_CameraMode 4, 5, 6, or 7.

Now load the demo.  The camera will start at position 1.  When you wish to key the camera transition from position 1 to positon 2, press "2" on the number keypad.  This will start the camera transition, moving it from position 1 to position 2.  The angles will change in different ways, depending on the mode.  Press "3" on the number keypad to start the transition from position 2 to position 3.  Note, you can move from position 1 to position 3, or any other desired combination.

Speed of transitions are determined by df_demos_CameraTransitionSpeed

Use positive values for time-fixed transitions, use negative values for speed-fixed transitions.  Use 0 to create instantaneous camera position changes.

*** NOTE: To create a panning effect, create 2 savepositions, where the camera origin does not change, but the angles do change.  Make sure the camera transition speed is positive (time-fixed).

*** NOTE: if no savedpositions have been set up and/or the "saveposname" var is empty, then modes 4, 5, 6, 7 will default to a standard thirdperson view.  Once a savedposition is activated (example: set saveposname pos1), the camera position will smoothly interpolate from the current thirdperson view position to the new camera position.

------------------------------------------
5C. Using Transition Cams and Camera Rolls
------------------------------------------

It is possible to create camera roll effects using the transitioning democams.  This is nice for creating some cool visual effects, without having to use the Camera Offsetting feature.

Normally, when creating camera positions for the various democams, you use the binds that create saved positions.  In order to add camera roll to the positions, the binds are a bit different.  Essentially, the binds "manually" construct the same string that the placeplayer/saveposition feature does, in the process adding the desired roll amount.  The saveposition, when used normally, constructs a string that looks like:

placeplayer x y z p y r vx vy vz // creating origin, angles, and velocity items, such as:
placeplayer 100 200 50 10 120 0 0 0 0

This type of string is placed into a vstr - a variable that we can later use.  Typically, we name these saved positions "pos1" or "pos2", etc.

So, what we want to do is constuct a valid save position, but add in roll.  We'll use the varMath feature, which let's us build strings, use string substitutions, and insert spaces <s> into the strings.

set user_roll1 "0"
set user_roll2 "0"
bind 6 "varMath pos1 = placeplayer + <s> + $posXYZ + <s> + $angX + <s> + $angY + <s> + $user_roll1 + <s> + $velXYZ"
bind 7 "varMath pos2 = placeplayer + <s> + $posXYZ + <s> + $angX + <s> + $angY + <s> + $user_roll2 + <s> + $velXYZ"

Now, whenever we press 6, "pos1" will contain a valid saveposition.  Note, though, that user_roll1 is "0".  What we should do, before pressing 6, is, in the console, type:

\set user_roll1 45

Then press 6.  This will create a saveposition string "pos1" that looks like:

"placeplayer 100 200 50 10 120 45 0 0 0"

Note that our "roll" angle is 45.  We can do the same thing for "pos2" by typing:

\set user_roll2 -60

Then pressing 7.

Whenever you want to create a new position, change the angle (in user_roll1 or user_roll2), if you desire.  Then press 6 or 7.

When you recall the positions inside a demo, the position and angles, including the camera roll angle, will be recalled.  Note that during normal map viewing (not in a demo), recalling a position will NOT set the camera roll.

*** NOTE: The config file provided: DF-[DemoCams].cfg, has some binds already set up for doing camera rolls.  Open the file and read the instructions (similar to what's listed above - setting the camera roll vstrs first, then pressing 6 or 7), to try out this feature.

-------------------------
6. Tracking Other Players
-------------------------
The Demo Cams can track other players, besides the main player that was recorded in the demo.  Note, however, that this does not always work - it depends on if the other player that you want to track is technically visible to the main player (described as being inside the PVS).  If the other player is in the PVS, then this player may be tracked.  This is done by setting the df_mp_TrackPlayerNum to the desired player number.  To get a list of the player numbers, in the console (ingame) type:

\info players

This will list the players and their numbers.  Then just set the df_mp_TrackPlayerNum to the proper number.  If the other player is not in the PVS, the cam will track the main player.  The default value for this var is "-1", which tells the system to track the main player.  Note that usually the main player has an ID of "0", so setting the var to 0 usually is the same as leaving it on -1.

Useful binds:

bind uparrow   "varMath df_mp_TrackPlayerNum + 1"
bind downarrow "varMath df_mp_TrackPlayerNum - 1"

Lets you switch between players by pressing up/down arrows.

*** NOTE: If you are trying to view a demo from a different player's point-of-view, but are just looking to get the normal first person view, use the df_demos_CameraMode 11 (DC_CAMERAMODE_NORMALWITHOFFSETS)

----------------------
7. Tracking A Position
----------------------
The camera modes that track a player can also be used to track a user defined position, instead of a player.  This is accomplished using the variable 'targetposname'.  It is used in a similar fashion as the saveposname.  To use this feature, create a saved position the way you normally would.  Then set the targetposname variable to the name of your saved position.

Example:

STEP 1: First, to create a saved position, you would use the binds:

bind 1 "vstr pos1; set saveposname pos1"
bind 2 "vstr pos2; set saveposname pos2"
bind 3 "vstr pos3; set saveposname pos3"

bind 4 "savepos 0"

and press 1, followed by 4.  This would save your current position into the variable called "pos1".

STEP2: Now you need to set the targetposname variable to the same name as your newly created saved position:

bind 5 "set targetposname pos1"
bind 6 "set targetposname pos2"
bind 7 "set targetposname pos3"

Now, pressing 5 will set targetposname equale to pos1.  Using one of the democams that tracks the player, if the targetpos variable is not empty, the camera will track the position instead

STEP3: If you wish to clear the targetposname, and continue tracking a player, use:

bind 0 "set targetposname"

--------------------------------
8. Demo Cam (Cam2Cam) Sequencing
--------------------------------
Is is possible to do automated cam2cam sequencing of demo cameras, transition speeds, and camera modes.  Essentially, once a camera transition is started, the camera position will sequence, one by one from the first position, to the second, to the third, etc. automatically.  During the automated cam2cam sequencing, the transition speed and camera modes may be sequenced as well.

This is accomplished by first setting up multiple save positions (to be used as the camera positions), then using the following special cvars:

- df_demos_CamSeqPos - determines the savedpos names camera position sequence

- df_demos_CamSeqSpeed - sets the transition speed for each transition in the sequence

- df_demos_CamSeqMode - sets the camera mode for each transition in the sequence

So, suppose we wanted to create 3 positions, and sequence between 1 to 3 to 2 to 3, adjusting the camera transition speed, and modes as we go.  Note, for this example, we are assuming that the binds listed above are used.

1. First, load a map, and create 3 save positions.  Then press "1" to restore position 1 (so that the sequence starts at 1).

2. Then, in the console, type:

\df_demos_CamSeqPos "pos1 pos3 pos2 pos3"
\df_demos_CamSeqSpeed "50 100 200"
\df_demos_CamSeqMode "5 6 5"

3. Now, play the demo.  The demo cam position will sequence form position 1 to 3 to 2 to 1.  During the transitions, the speed and camera modes will change as well.

Note that the CamSeqSpeed and CamSeqMode take 1 less values than CamSeqPos.  This is because the values of CamSeqSpeed and CamSeqMode are used "in-between" the CamSeqPos changes.  In other words, when the cam changes from pos1 to pos3 in our example, the cam speed is set to 50, and the cam mode set to 5.

----------------------
9. Demo Cam Offsetting
----------------------
It is possible to offset demo camera positions and angles, as well as doing radius offsetting.  This allows cam rolls, curved cam paths, etc.  This is accomplished using the folliwing special cvars:

- df_demos_CamOffsetPosX, df_demos_CamOffsetPosY, df_demos_CamOffsetPosZ - applies a positional offset to the current cam position.  Positive or negative values may be specified.

- df_demos_CamOffsetAngleX, df_demos_CamOffsetAngleY, df_demos_CamOffsetAngleZ - applies an angular offset to the current camera angles.  HINT: Use df_demos_CamOffsetAngleZ to adjust the roll of the camera. Positive or negative values may be specified.

- df_demos_CamOffsetRadiusF, df_demos_CamOffsetRadiusR, df_demos_CamOffsetRadiusU - applies a radial offset.  This one is a bit hard to understand.  It creates 3 vectors based on the current camera - forward (F), right (R), and up(U) vectors.  Setting one of the CamOffsetRadius values applies an offset along the designated vector.  Use a radius offset in conjuntion with cam2cam transitions (manual, or auto-sequenced) to get nice curved camera paths.   Positive or negative values may be specified.  Negative values will place the camera behind the normal view camera position, positive value will move the camera forward along the vector specified.

Try the following (bind provided above are assumed):

1. First, load a map, and create 2 save positions.  Then press "1" to restore position 1 (so that the sequence starts at 1).

2. Then, in the console, type:

\df_demos_CamOffsetRadiusF "-1000"
\df_demos_CameraMode 4

3. Now, play the demo.  During the demo, press KP_DOWNARROW.  This will sequence the camera from position one to position two.  You should notice that the camera path is now curved.

----------------------------------------------
10. Recording Camera Movements To A Ghost File
----------------------------------------------
You can use these demo camera modes during demo playback, for video creation use.  One thing that may be productive or useful is to save these camera movements you are making during demo playback, without starting avi picture files (not doing screenshots output during demo playback).  This would allow you to do the camera movements during demo playback and save your work.  If you make a mistake, redo your camera movements, and not have to go and delete all the screenshots that quake3 created during the demo.  Then, once you are satisfied with the camera movements, you can then load the demo, and have the camera movements you created occur automatically during the demo playback.  This is also useful in the general sense that you get to save the camera movements and reuse that file again, in case you want to do video capture again later (using different quake3 settings or whatever).

The saving of Demo Cam movements is accomplished using the Ghost feature.  The Ghost allows you to save your movements, and allows the playback of these movements during demo playback.  Note that as of version 1.90, you may now record cvar changes to a ghost file as well.  This makes Demo Cam saving even more useful.

See the readme-[Ghosts-DemoCamSaving].txt document for more details.

--------------------------
11. Additional Information
--------------------------
*** NOTE: enabling a demos camera mode (df_demos_CameraMode) automatically turns off the Replay Mode (df_demos_ReplayMode) during demos

Using Variable Transitions (VarTransitions) along with the special demo cam offsetting vars allows camera rolls, etc. to be performed.  See the documentation readme-[VarTransitions].txt for more details.

-----------
12. History
-----------
1.91
- Add: allow cams to track a position instead of player, using targetposname

1.90
- Chase Cams: Creates cinematic-type camera movements automatically
- Other Player Tracking: allows democams to track any player (df_mp_TrackPlayerNum) in a demo (if player is in PVS)
- Sequencing: allows automated cam2cam sequencing of cameras, transition speeds, and camera modes
- Offsetting: allows camera position, angles, and radius offsetting (allowing cam rolls, curved cam paths, etc.)
- Auto cg_thirdperson 0/1 switching for ease-of-use, based on df_demos_CameraMode selected
- Unlocked thirdperson pitch angles (df_demos_UnlockThirdpersonPitch) - allows full overhead view
- PVS check (uses df_ghosts_CheckPVS)
- Fix: cam2cam transitions now work when cl_avidemo is on (fixed timing issues)

1.80
- Feature introduced
