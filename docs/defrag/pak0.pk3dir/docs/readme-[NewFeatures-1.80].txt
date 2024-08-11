============================
NEW FEATURES FOR DEFRAG 1.80
============================

1. Ghosts
2. DemosCams
3. AccelMeter
4. Weapon Overbounce Detection
5. Config Helper Commands: varMath, varValueMath, varCycle, varValueCycle
6. Console Commands: read, info
7. Demos Screen: now supports folders, mouse double clicks
8. New Crosshair Stats Info Items: savedpos distances, ghost information, real life date/time
9. Many tweaks and little features added to the crosshair stats display system and keypress crosshair display

---------
1. Ghosts
---------
Ghosts are essentially a recording of the players movement, missiles and explosions.  Ghosts are useful for doing a number of different things:

- Racing one's ghost within Defrag.  Also, you may record a ghost from an existing demo, and race that ghost.
- Racing one's ghost on fast flag capture runs, as well as non Defrag maps.
- Ingame trick review: watch what you just did, without leaving the game.  Many different camera modes are supplied.
- Recamming demos: Ghosts can be recorded from demos, and played during demos.  In addition, the camera view during demo playback can be switched to the ghost's view
- Camera modes: allows many different camera angles, movement, etc. - very useful for video captures. Some camera modes are: 1st person, 3rd person, missile cams, etc.
- Separate timescale support for ghosts allows the user to play the ghost back at different speeds, including backwards, and slow motion.  The ghost snapshot buffer provides approximately 25 seconds of rewind capabilities.
- Miniview window (PIP: Picture-In-Picture). The ghost PIP supports all the same ghost camera modes as the normal (main) window.

-----------
2. DemoCams
-----------
The user may now move the camera view freely during demo playback.  Three different demos camera modes are supported:
- Free: position and angles can be changed freely while viewing a demo
- 1st person free: cam position moves with player, but angles can be changed with the mouse
- 3rd person: cam position moves along with player, player is visible in typical thirdperson fasion, however, the camera may be orbited around the player freely by using the mouse.
- Savedposition Free: cam position starts at a savedposition, and moves to a new savedposition upon users command.
- Savedposition Follow Player: cam position starts at a savedposition, and moves to a new savedposition upon users command.  Angles are continuously adjusted to look at the player.
- Savedposition Follow Player No Pitch: cam position starts at a savedposition, and moves to a new savedposition upon users command.  Angles are continuously adjusted to look at the player, except for pitch, which observes the saved position pitch angle.
- Savedposition Follow Player No Yaw:  cam position starts at a savedposition, and moves to a new savedposition upon users command.  Angles are continuously adjusted to look at the player, except for yaw, which observes the saved position yaw angle.

Used in conjunction with the ghost features, you may freecam during demos and record your freecam movements to a ghost file.  This allows you to reuse the freecamming movements you did repeatedly, incase you wish to do recapture/output to video images for video editing.

-------------
3. AccelMeter
-------------
Essentially a strafe jumping helper/efficiency meter. An experimental feature that will help some improve their strafe jumping skills, will send others to the optometrist and/or psychiatric ward.

A second crosshair is displayed.  This 2nd CH is positioned horizontally at some distance from the normal, center CH.  The distance away from the center shows the distance between your chosen direction of travel, and the optimal angle for strafing - the angle that provides the most acceleration.  The accelmeter is updated in realtime, during your time in the air.  Moving the mouse in typical strafing fashion, you can attempt to match the optimal angle by lining up the 2 crosshairs.

Statistics are also provided - showing your initial velocity before leaving the ground, and upon landing, shows you a percentage of acceleration efficiency for your last jump.  An additional stats set reports your accel efficiency when you cross the same horizontal plane as where you initiated your jump - useful for checking your stats on failed gap crossing jump attempts.

------------------------------
4. Weapon Overbounce Detection
------------------------------
Overbounce detection/prediction for OBs that occur due to weapon actions.  New detections are:

p = Plasma shot, no jump
P = Plasma jump (plasma hop)
r = Rocket, no jump
R = Rocket jump
Qp = quaded plasma shot
QP = quaded plasma jump
Qr = quaded rocket
QR = quaded rocket jump

-------------------------
5. Config Helper Commands
-------------------------

- varMath: performs math on a variable using a supplied operator and value.  Allows stuff like:
 \bind uparrow "varMath timescale + .1"

- varValueMath: performs math on a variable using a supplied operator and another variable.  Allows:
 \bind uparrow "varValueMath r_gamma + MyValue"
where MyValue could = ".2" or whatever

- varCycle: cycles a variable with values.  Allows such things as:
 \bind uparrow "varCycle com_maxfps 125 20 60 100 111 125 142"
note first value is your defineable default value

- varValueCycle: cycles a variable with variables.  Similar to varCycle, but cycle thru variables instead of values:
 \bind uparrow "varValueCycle sv_Fps MyDefault MyVal1 MyVal2 MyVal3"
More useful when you have very long vstrs and wish to cycle through them.

-------------------
6. Console Commands
-------------------
- read: reads a specified text file
- info: lists info items from the crosshair stats displays sytem

---------------
7. Demos Screen
---------------
The demos screen (used to launch demos from the main menu system) now supports demos stored in folders.  Also, double clicks from the left mouse button are supported - to open folders or launch a demo.  Folder names that contain spaces ARE supported.  Demo file names that contain spaces ARE NOT supported.

---------------------------------
8. New Crosshair Stats Info Items
---------------------------------
New crosshair stats information items have been added for saved pos distances, ghost information, and real life date/time.  See the crosshair stats documentation for details.
