=====================================
Overbounce Detection/Prediction (OBD)
=====================================

1. General Overbounce Information
2. Usage
3. Quick Start
4. Config Variables
5. Overbouce Detection Types
 5A. Standard Overbounce Detection Types (OB)
 5B. Weapon Overbounce Detection Types (WOB)
 5C. Sticky Overbounce Detection Types (SOB)
 5D. Performing A Weapon Overbounce
 5E. Weapon Overbounce Additional Information
 5F. User Vertical Position Offsets - Finding new OBs
6. How Client/Server Settings Effect Overbounces And Overbounce Detection
7. Adjusting OBD For Different (non-standard) Settings
8. Additional Overbounce Information
9. History

Allows display of overbounce locations within a map.

---------------------------------
1. General Overbounce Information
---------------------------------
An overbounce occurs when a player is falling, hits the ground (a floor, not a slope), and bounces back up to the players original location.  The downward Z component of the velocity vector is "reflected" or inverted - a negative z vector component becomes positive.

An overbounce occurs due to a bug in the id software q3 code.  This bug only occurs at certain starting heights.  (Ultimately, it occurs when a player is falling and the player position during a given server snapshot is within .25 units of the ground).

Overbounces are usually executed by walking off of a platform, falling, and hitting a platform below.  But overbounces can occur in some locations by jumping off of a platform (instead of walking).  Also, overbounces can occur from bouncepads, stairs, etc.

--------
2. Usage
--------
Overbounce detection occurs internally, and is it's results are displayed through the Crosshair Stats (CHS) display system (see that section for more info.)  Note that if the CHS is not displaying any overbounce detections, than the overbounce predictions are not run.  Turning on overbounce detection is accomplished by assigning one or more detection types to one or more Crosshair Stats information positions.

There are 17 different OB prediction types the system supports.  They are categorized as:

Movement:        3 types - Jump, Go, Below (JGB)
Weapon:          4 types - plasma, Plasmajump, rocket, Rocketjump (pPrR)
Sticky Movement: 2 types - Sticky Jump, Sticky Go (SJSG)
Sticky Weapon:   4 types - Sticky plasma, Sticky PlasmaJump, Sticky rocket, StickyRocketjump (SpSPSrSR)
Quaded Weapon:   4 types - Quaded plasma, Quaded PlasmaJump, Quaded rocket, QuadedRocketjump (QpQPQrQR)

--------------
3. Quick Start
--------------
To quickly turn on all overbounce prediction types (minus quad predictions) (JGB pPrR SJSG SpSPSrSR):

\df_chs1_draw  1
\df_chs1_info1 55

Note that using item 55 turns on 13 different OB detection types and has a significant impact on framerate.  If you do not need or care about sticky weapon OB detections, or even just general weapon OB detections for that matter, you may wish to select a different OB detection set, or try "\df_ob_fast 1".  

** Note, it is normal for the weapon OB indicators to flash.

To use movement only OB detections (JGB), but without any weapon OB detections , use:

\df_chs1_draw  1
\df_chs1_info1 50

A few custom combos have been created with the more useful OB detections.  Pick one of the following:

\df_chs1_info1 57  // (JGB PrR) (3 movement, and 3 weapon (no p))
\df_chs1_info1 58  // (JGB PrR SJSG SPSrSR) (3 movement, 3 weapon, 2 sticky movement, 3 sticky weapon)

*** WARNING: It is better to use the crosshair stats information overbounce combos provided.  Creating your own user defined combos (example: df_chs1_info1 "53 52 51") will NOT turn on the detections after the first one (in our example, only 53 will be turned on, 52 and 51 will not)

-------------------
4. Config Variables
-------------------
\df_ob_fast [ DEFAULT: 1 (on) RANGE: 0 (off) TO 1 (on) ]

Turns OB fast prediction on or off.  OB fast prediction uses a different algorithm internally to detect OBs.  This algorithm is much faster, and it's calculation time is not dependant on the distance/height to the floor the player is looking at, and therefore has absolutely minimal effects on display framerates.  It is, however, very slightly inaccurate (due to floating point rounding errors, etc.).  Map makers may want to turn off fast prediction if they are looking to find new OB heights for usage in a new map.  Using noclip to move up and down while using OB detection should definately use df_ob_fast off, as it is much more accurate.

--------------------------------------------------
\df_ob_AllSlopes [ DEFAULT: 0 (off) RANGE: 0 (off) TO 1 (on) ]

Turns on OB prediction for all slopes (not just XY-planar (horizontal) floors).  Peformance-wise, with df_ob_AllSlopes set to 0, OB prediction won't occur for angled floors.  With it on, OB prediction occurs.  The performance difference for horizontal versus angled floors is null, however, with OB prediction on only for horizontal floors, the sloped prediction won't occur at all.  Also, with OB prediction on for slopes, you'll see the OB prediction indication flicker on and off as you travel down a slope, or scan a slop with the crosshair.  Generally OB prediction for slopes is not needed.

--------------------------------------------------
\df_ob_OffsetStartPosZ [ DEFAULT: 0.00 RANGE: -F TO F ]

Allows the player's starting (current standing position) to be offsetted.  This can be used to find new OB heights, such as determining if standing on another player will cause a new OB on another platform.

Example: df_ob_OffsetStartPosZ 64.000 (would be the same as standing on top of another player)

*** NOTE:  You can monitor this cvar by assigning 79 (CH_INFO_OVERBOUNCE_VOFFSETS) to one of the crosshair stats info slots.

--------------------------------------------------
\df_ob_OffsetStopPosZ  [ DEFAULT: 0.00 RANGE: -F TO F ]

Allows the player's ending (landing position) to be offsetted.  This can be used to find new OB heights, such as determining if landing on another player will cause a new OB height.

Example: df_ob_OffsetStopPosZ 128.000 (would be the same as landing on top of a stack of 2 players)

*** NOTE:  You can monitor this cvar by assigning 79 (CH_INFO_OVERBOUNCE_VOFFSETS) to one of the crosshair stats info slots.

-----------------------------
5. Overbounce Detection Types
-----------------------------

There are 17 different OB prediction types the system supports.  They are categorized as:

Movement:        3 types - Jump, Go, Below (JGB)
Weapon:          4 types - plasma, Plasmajump, rocket, Rocketjump (pPrR)
Sticky Movement: 2 types - Sticky Jump, Sticky Go (SJSG)
Sticky Weapon:   4 types - Sticky plasma, Sticky PlasmaJump, Sticky rocket, StickyRocketjump (SpSPSrSR)
Quaded Weapon:   4 types - Quaded plasma, Quaded PlasmaJump, Quaded rocket, QuadedRocketjump (QpQPQrQR)

Overbounce Detection functions differently if you are on the ground versus in the air.  If you are in the air, only 2 types of overbounce detections occur - GO and BELOW.  While on the ground, many different OB detection predictions may be run.  Ultimately, what the different detections show is if an overbounce will occur, based on some action: Jumping, simply walking off of a platform, or doing some sort of weapon jump.

The different OB detection types may be turned on through the crosshairstats display system (see documentation for that feature).  The possible OB detection sets are listed here as well:

// start: 50 - overbounce - combos
  50 CH_INFO_OVERBOUNCE_MOVE,           //   OB Combo Movement        (JGB)
  51 CH_INFO_OVERBOUNCE_STICKY_MOVE,    //  SOB Combo Sticky Movement (SJSG)
  52 CH_INFO_OVERBOUNCE_WEAPONS,        //  WOB Combo Weapon          (pPrR)
  53 CH_INFO_OVERBOUNCE_STICKY_WEAPONS, // SWOB Combo Sticky Weapon   (SpSPSrSR)
  54 CH_INFO_OVERBOUNCE_QUADED_WEAPONS, // QWOB Combo Quaded Weapon   (QpQPQrQR)
  55 CH_INFO_OVERBOUNCE_ALL_NOQUAD,     //  xOB Combo (JGB pPrR SJSG SpSPSrSR)
  56 CH_INFO_OVERBOUNCE_ALL,            //  xOB Combo (JGB pPrR SJSG SpSPSrSR QpQPQrQR)
  57 CH_INFO_OVERBOUNCE_O3J_CUSTOM1,    //  xOB Combo (Custom 1) (JGB PrR)
  58 CH_INFO_OVERBOUNCE_O3J_CUSTOM2,    //  xOB Combo (Custom 2) (JGB PrR SJSG SPSrSR)
  59 CH_INFO_OVERBOUNCE_O3J_CUSTOM3,    //  xOB Combo (Custom 3) (JGB SJSG)

// start: 60 - overbounce - singles
  60 CH_INFO_OVERBOUNCE_GO_BELOW,    //  OB Movement (GB) Go, Below
  61 CH_INFO_OVERBOUNCE_BELOW,       //  OB Movement (B) Below
  62 CH_INFO_OVERBOUNCE_GO,          //  OB Movement (G) Go
  63 CH_INFO_OVERBOUNCE_JUMP,        //  OB Movement (J) Jump
  64 CH_INFO_OVERBOUNCE_STICKY_GO,   // SOB Sticky Movement (SG) Sticky Go
  65 CH_INFO_OVERBOUNCE_STICKY_JUMP, // SOB Sticky Movement (SJ) Sticky Jump
  66 CH_INFO_OVERBOUNCE_PLASMA,      // WOB Weapon (p) plasma
  67 CH_INFO_OVERBOUNCE_PLASMAJUMP,  // WOB Weapon (P) Plasmajump
  68 CH_INFO_OVERBOUNCE_ROCKET,      // WOB Weapon (r) rocket
  69 CH_INFO_OVERBOUNCE_ROCKETJUMP,  // WOB Weapon (R) Rocketjump

// start: 70 - overbounce - singles
  70 CH_INFO_OVERBOUNCE_STICKY_PLASMA,     // SWOB Sticky Weapon (Sp) Sticky plasma
  71 CH_INFO_OVERBOUNCE_STICKY_PLASMAJUMP, // SWOB Sticky Weapon (SP) Sticky Plasmajump
  72 CH_INFO_OVERBOUNCE_STICKY_ROCKET,     // SWOB Sticky Weapon (Sr) Sticky rocket
  73 CH_INFO_OVERBOUNCE_STICKY_ROCKETJUMP, // SWOB Sticky Weapon (SR) Sticky Rocketjump
  74 CH_INFO_OVERBOUNCE_QUADED_PLASMA,     // QWOB Quaded Weapon (Qp) Quaded plasma
  75 CH_INFO_OVERBOUNCE_QUADED_PLASMAJUMP, // QWOB Quaded Weapon (QP) Quaded PlasmaJump
  76 CH_INFO_OVERBOUNCE_QUADED_ROCKET,     // QWOB Quaded Weapon (Qr) Quaded rocket
  77 CH_INFO_OVERBOUNCE_QUADED_ROCKETJUMP, // QWOB Quaded Weapon (QR) Quaded RocketJump
  78 CH_INFO_078,                          // empty
  79 CH_INFO_OVERBOUNCE_VOFFSETS,          // user vertical offset amounts (start and stop)

--------------------------------------------
5A. Standard Overbounce Detection Types (OB)
--------------------------------------------
There are 3 standard types of overbounce detection that the system will do: (GO, JUMP, BELOW)

- (B) BELOW - Fall to the platform below you
- (G) GO    - Move to the platform you are looking at (no jump)
- (J) JUMP  - Jump to the platform you are looking at

Details:

- (B) BELOW: OB detection for the floor below the player.  If the player is currently falling, B indicates that an overbounce will occur if the player hits the floor directly below.  If the player is currently standing on the ground, B indicates that an overbounce will occur if the player jumps and lands on the same floor.  This detection type is useful in that it allows the player to see overbounce locations without looking at the floor below - a nice mode to keep on even when the player is not out actively seeking new OB locations.

- (G) GO: OB detection for the floor the player is looking at.  GO indicates that for a player to OB, the player must go to this location.  So, if you are standing on an upper platform, and looking down, and "G" is indicated, this means simply walk off the platform you are staning on (do not jump) and fall to this platform you are looking at (using air control where necessary).

- (J) JUMP: OB detection for the floor the player is looking at.  JUMP indicates that for the player to OB, the player must jump from the current position and then fall towards that location. JUMP predictions only occur when the player is on the ground.

-------------------------------------------
5B. Weapon Overbounce Detection Types (WOB)
-------------------------------------------
Weapon jumping is using a weapon projectile/missile, such as a rocket to add velocity to the player.  Usually this is done by pointing a weapon at the ground, and firing the weapon - usually done in conjunction with a jump.

Overbounce detection for weapons will show you where weapon overbounces occur - essentially places where you must use a weapon to weapon jump (rocket jump, bfg jump, plasma hop, etc.) first, then while in the air, move to the indicated platform.

There are 4 types of weapon overbounce detections and 4 types of quaded weapon overbounce detections (if the player has the quad damage power up) that the system will do.  Note that rockets have the same kickback as BFG shots, so any r type OB also works with the BFG.  The weapon OB detecion types are:

- (p) PLASMA     - Single plasma shot, no jump
- (P) PLASMAJUMP - Plasma Jump to the platform you are looking at
- (r) ROCKET     - Single rocket shot, no jump
- (R) ROCKETJUMP - Rocket jump to the platform you are looking at.

- (Qp) QUADED PLASMA     - Single plasma shot, no jump, with quad damage powerup.
- (QP) QUADED PLASMAJUMP - Plasma Jump to the platform you are looking at, with quad damage powerup.
- (Qr) QUADED ROCKET     - Single rocket shot, no jump, with quad damage powerup.
- (QR) QUADED ROCKETJUMP - Rocket jump to the platform you are looking at, with quad damage powerup.

** NOTE: see the section "5D. Performing A Weapon Overbounce" for more details.

-------------------------------------------
5C. Sticky Overbounce Detection Types (SOB)
-------------------------------------------
Sticky Weapon overbounce detection is really just the standard overbounce detection set of predictions, but applied to a vertical offset.  You can create a sticky OB by shooting PG at the ground, at an angle, without jumping.  Or, by simply walking up a single stair, then back down.  In any case, if you create a sticky OB, this will often open up new OB locations on a map.  This means that you may be able to create a sticky OB below you, then use this to do an OB in a new location.  For example, if the OB detector shows "SJ", this means that if you create a sticky OB below you, you can then perform a Jump OB (jump to the platform you are looking at).

There are 6 types of sticky OB detections:

- (SG) STICKY GO   - Move to the platform you are looking at (no jump)
- (SJ) STICKY JUMP - Jump to the platform you are looking at

- (Sp) STICKY PLASMA     - Single plasma shot, no jump
- (SP) STICKY PLASMAJUMP - Plasma Jump to the platform you are looking at
- (Sr) STICKY ROCKET     - Single rocket shot, no jump
- (SR) STICKY ROCKETJUMP - Rocket jump to the platform you are looking at.

*** NOTE: Sticky overbounces occur when your player position is not exactly on the floor, but hovering slightly over the ground.  The amount that the player hovers varies (it's actually a small range).  Because a sticky overbounce can occur over a range of values, it is possible to create a sticky overbounce below you and still not be able to perform a weapon overbounce that results from a sticky overbounce.  When this is the case, try adjusting your "sticky height" my shooting the plasma gun at the ground again.  This will often change your sticky height slightly, which in some cases is enough to make a sticky weapon overbounce producable.

----------------------------------
5D. Performing A Weapon Overbounce
----------------------------------
Ok, so you are looking at a platform, and you see that "r" is flashing - indicating that a rocket (no jump) overbounce exists.  You need to "find" the correct angle to face in order to perform the OB (not your pitch angle (angle up/down), but your YAW - the direction you are facing in the world).

Since weapon OBs are direction dependant (see next section), you may have to "test" the OB by finding the proper direction to face before performing the weapon action.

So, look straight down (as much as q3 will allow :P) and fire a rocket at the ground.  Now, while you are in the air, look again at the platform where the OB exists.  Assuming that you have the "GO" and/or the "BELOW" overbounce detections on as well - then if you see "G" (or "B") then you have succesfully found an angle that produces the weapon OB.  If you don't see "G", try again, using the same yaw (does not have to be exactly the same, just in the general vicinity).  If you still do not see an OB indicated, then turn 90 degrees (adjust your yaw so you are facing to left).  Now repeat the OB test: fire a rocket straight at the ground.  Now, while in the air, turn your view back to the OB platform.  If you still do not see an OB indicated while in the air, repeat the test - this time facing 180 degrees (completely facing away from the OB target platform).  Fire your rocket straight down.  Now while in the air, turn 180 degrees and look at the platform.  Finally, if you still do not see an OB indicated, repeat the test, this time facing 90 degree to the right.

Essetentially, you may have to test 4 different directions (or quadrants), to find the OB.  And just because you find it, doesn't mean that you will successfully get "G" to light up everytime.  Q3 is variable, things don't happen exactly the same every time.

With the plasma gun, it usually does not matter which direction you face, but occasionally it can.  The RL is more angle dependant.  Quaded weapons have the most variation in intitial velocity produced, making them the most sensitive to your starting angle.  Successfully performing quaded rocket jump OBs is possible, but difficult (if not impossible, due to q3) to do consistently.

--------------------------------------------
5E. Weapon Overbounce Additional Information
--------------------------------------------
For weapon jumping, maximum height can be achieved through the use of scripting the weapon jump.  Note that many players consider scripting weapon jumps as cheating - use your own moral judgement.  Testing of weapon overbounces within defrag can be accomplished by making a bind/script such as:

\bind mouse2 "+moveup; +attack"

An important note about weapon overbounces and the quake3 engine - the initial velocities (and therefore the heights) achieved from weapon shots and weapon jumps is actually dependant on 2 things: the player orientation (direction) within the map, and the player's position within the map.  This means that the weapon OB detector may show that a rocket jump (R) OB exists.  However, getting the actual OB to occur may (and often does) depend on the direction you are facing before you perform the rocket jump.  Basically, there are 4 directions you may need to try to get the overbounce to occur: North, South, East, and/or West (0, 90, 180, 270 degrees). Note that typically you don't have to be exactly facing one of these directions - just think of the directions making 4 quadrants - so you can be facing 100 degrees and this is like being in the 2nd quadrant. Also, the location in the map factors into the quadrant you must be in.  This can be seen in symetrical maps, such as q3dm17.  If you are on the "left" side of the map (think of the map being divided down the center), then you may need to face 90 degrees for a found weapon OB to occur.  If you are on the right side of the map, and the platform heights are all the same, you may in this case need to face 270 degrees.

Note that it is normal for the weapon OB detectors to flash when a weapon OB is found.  The OB detector cycles through different values due to the fact that angles effect velocity, and tests one value per frame (usually 4 total values).  The flashing serves as a visual reminder that weapon OBs are angle dependant.  If you see a weapon OB detected - perform the required action (rocket jump, etc.) then while in the air look at the platform.  If you see "G" or "B" (assuming you have these OB detections turned on), then you know you are facing the right way.  If not, try again by facing at an angle of 90 degree to the first one you tried.  Perform the action, then while in the air, turn to face the platform.  Check for "G" or "B".  NOTE:  The angles is important while you are on the ground.  Once you have peformed the action and are in the air, you may turn as needed.

A decent example of this is q3dm18 - a rocket jump OB exists by the quad pit - from the upper platform to the lower platform with the bouncepad.  The OB will occur if you are facing away from the quad pit, standing on the upper platform, and perform a rocket jump, and then move in the air to the lower platform.  If you move to the other side of the quad pit (all the platform heights are the same), you must still face away from the pit in order for the OB to occur (so your angle is 180 degrees different from the first OB you tried).

Weapon/weapon jump heights/velocites fluctuate more with stronger weapons, as well as quaded weapons.  Plasma hops have little fluctation, and are therefore less dependant (if at all) on your position and angles within the world.  Quaded rocket jumps have the most fluctation, and ultimately quaded RJ OBs are harder to perform with consistency.

It should be noted that the BFG has the same kickback values as the RL, so any OB that is detected for a rocket-style OB, will also occur for the BFG.

Lastly, there are places on maps where OBs may be indicated, but the actual starting point that one must be at is a little off, due to "clipping brushes" in the map.  Best example: q3dm19 - all the platforms have lips - small ledges going all the way around the platform.  Well, when you are standing on one of these platforms (not on the lip), you are actually standing on top of a clipping brush - you can tell this by walking on to the ledge (lip) - you will see that you do not actually step up at all!  Well, the problem here is that firing a rocket at the ground actually fires the rocket through the clipping brush.  But your starting height is off a bit due to this brush, so therefore the OB does not occur.  Walk onto the ledge, and try again.  OB works - since you are standing directly on the floor (not some small invisible height above the floor).  q3dm19 has some weapon OBs that must be done from the lip, not from the main platform floor.

----------------------------------------------------
5F. User Vertical Position Offsets - Finding new OBs
----------------------------------------------------
It is possible to use the Overbounce Detection system to find new OB heights that the OB detection system is not specifically programmed to find.  Suppose that you would like to determine if a platform will cause an OB, if you are standing on top of another player.  You can do this by setting the df_ob_OffsetStartPosZ to the standard player height (64).  Or, if you would like to determine if landing on top of a stack of 2 players will cause an OB, setting df_ob_OffsetStopPosZ to 128 (64 +64).

Useful height info:
Standard Player Height: 64
Standard Player Crouch Height: 52

So, to determine if standing on top of 2 players, one crouched and one standing, will cause an OB, you would set the df_ob_OffsetStartPosZ 104 (64 + 52)

It may be useful to actually cycle through some useful heights.  This could be done with such binds as:

bind mykey1 "varCycle df_ob_OffsetStartPosZ 0 0 52 64 116 128" // will cycle through 4 heights (crouch, standing, crouch+standing, standing+standing)
bind mykey2 "varCycle df_ob_OffsetStopPosZ 0 0 52 64 116 128"

*** NOTE:  You can monitor these 2 cvars by assigning 79 (CH_INFO_OVERBOUNCE_VOFFSETS) to one of the crosshair stats info slots.

-------------------------------------------------------------------------
6. How Client/Server Settings Effect Overbounces And Overbounce Detection
-------------------------------------------------------------------------
OBs (and therefore OB detection) is dependant on certain settings: pmove_fixed, pmove_msec, g_synchronousClients, sv_fps (as well as gravity).  Essentially, OBs will/will not occur for certain vertical distances depending on these settings, as they ultimately effect how fast a player falls, etc.

OB occurence:
OBs occur normally for a map (where a known OB location exists) with 1 of 2 configurations:
1: pmove_fixed 1, pmove_msec 8, g_synchronousClients 0/1, sv_fps ---
2: pmove_fixed 0, pmove_msec -, g_synchronousClients 1, sv_fps 125

------------------------------------------------------
7. Adjusting OBD For Different (non-standard) Settings
------------------------------------------------------
If pmove_fixed is not used (0), and sv_fps is not 125, then OB detection must be adjusted for the proper sv_fps value.  This is done through the pmove_msec value (since it is not being used if g_synchronousClients is off).  To do this, set your pmove_msec to 1000/sv_fps.  (pmove_msec 8 (the default) works with sv_fps 125, since 1000/125 = 8)

------------------------------------
8. Additional Overbounce Information
------------------------------------
In trickjumping terms, Overbounces (OBs) are generally classified in 5 different types:  VOB, HOB, SOB, DOB, WOB

- VOB (Vertical OverBounce): (sometimes referred to simplay as "OB) Occurs when a player has 0 velocity in the XY components of the velocity vector (no horizontal speed).  The player will bounce back up to the original starting height.  Often players accomplish an OB by walking/using air control to manuever into a corner before hitting the ground, thus causing the horizontal speed to equal 0.

- HOB (Horizontal OverBounce): Occurs when a player has >0 velocity in the XY components of the velocity vector (horizontal speed exists), and the player presses jump (+moveup) after hitting the ground.  In this case the player's downward velocity is transferred to the horizontal velocity.  Especially useful for crossing gaps.

- SOB (Sticky OverBounce): Sticky OverBounces are a bit strange.  Essentially, there are times that the q3 engine will not place a player directly on the ground (although all visual and physical properties would indicate that one IS on the ground).  The player technically may be some very small distance away from the ground (something like .192 units away from the ground).  This occurs from various things - walking up or down a small stair, a bouncepad, a bouncepad lip, etc.  If the player is in this state (very close to the ground, but not at 0.000 distance), then a sticky overbounce may occur.  There are two types of sticky overbounces - same height platforms, and differnt height platforms.  A sticky overbounce (same height platforms) essetially will cause the player to overbounce on the next jump, assuming that the landing will be on the same platform where the jump originates, or another platform that is at the same height.  A sticky overbounce (different height platforms) may also create an OB height for a platform below - for a height that is not normally an OB height.  SOBs for same height platforms are useful for small speed boosts (good usually for that single next jump, as the next jump tends to place the player correctly on the floor at a distance of 0.000).  The OB detector shows SOBs by simply showing a "B" for the floor below (if BELOW OB detection is on) or "J" for the floor the player is looking at (if JUMP OB detection is on).  If sticky OB detection is on, then the OB detector will predict new OBs if a sticky OB is created.  The easiest way to create a sticky OB is shooting the plasma gun at the ground, at an angle, without jumping.  Once "J" or "G" is showing, you are "sticky".

- DOB (Diagonal OverBounce): Diagonal OverBounces own you.  Basically, if you are falling, with around 30 ups horizontal speed, and, on landing, press backwards (just tap it once), you might be so lucky as to perform a diagonal OB.  When a DOB occurs, you will move up and forward (the amount of each value depends on your speed when you land).  DOBs are a bit difficult to perform (like doing a freestanding (no walls) VOB).  DOBs occur due to what happens in the friction code, coupled with the normal OB code reasons.  In fact, DOBs are just a variety of HOBs, but with the specialized horizontal landing speed and command input.

- WOB (Weapon Overbounce): Overbounces that occur due to weapon usage, usually fired at the ground.  Basically, the knockback of the weapon creates an OB.

----------
9. History
----------
1.91
- Fix: Overbounce detection goes through players if interference is off for players

1.90
- Sticky OB detection - detects if a sticky OB will create new Go, Jump, or Weapon OBs
- Added User Vertical Position Offsetting (df_ob_OffsetStartPosZ, df_ob_OffsetStopPosZ) - allows players to specify a value to offset the player's starting or landing position - which can be used to look for new OB heights, such as standing on top of another player.
- Changed OB crosshair stats combo info items - better organization now
- 2 New custom (most useful combos added): #57 and #58
- Allow OB detection for all slopes (df_ob_AllSlopes), not just horizontal floors
- Information about DOBs added to this document

1.80
- Overbounce detection/prediction for OBs that occur due to weapon actions

1.70
- Feature introduced
