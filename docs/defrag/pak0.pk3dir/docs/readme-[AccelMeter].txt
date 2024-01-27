==========
AccelMeter
==========

1. Information
2. Quick Start
3. Config Vars
4. AccelMeter Related CrosshairStats Info Items
5. AccelMeter CrosshairStats Info Items List
6. Accuracy
7. AccelMeter With g_synchronousclients 0
8. AccelMeter with CPM
9. AccelMeter With Q3 Demos And Ghosts
10. Getting The Most From The AccelMeter
11. History

--------------
1. Information
--------------

Essentially, the AccelMeter is a strafe jumping helper/efficiency meter. This feature is experimental - some will find it useful and helpful, others will not.

A second crosshair is displayed.  This 2nd CH is positioned horizontally at some distance from the normal, center CH.  The distance away from the center shows the distance between your chosen direction of travel, and the optimal angle for strafing - the angle that provides the most acceleration.  The accelmeter is updated in realtime, during your time in the air.  Moving the mouse in typical strafing fashion, you can attempt to match the optimal angle by lining up the 2 crosshairs.

Statistics are also provided - showing your initial velocity before leaving the ground, and upon landing, shows you a percentage of acceleration efficiency for your last jump.  An additional stats set reports your accel efficiency when you cross the same horizontal plane as where you initiated your jump - useful for checking your stats on failed gap crossing jump attempts.

--------------
2. Quick Start
--------------
To turn on the AccelMeter:
\df_accel_Draw 1
\df_accel_Output 1 // shows landing percentages in the console

To turn on a useful stat set :
\df_chs1_Draw 1
\df_chs1_info1 135

The stats (135) show 3 numbers: horizontal acceleration percentage/start speed/acceleration percentage

Horizontal Acceleration Percentage indicates you acceleration added during a jump when your vertical position during the jump is the same as when you started the jump.  In other words, when the Z component of your position is equal to the starting Z component before the jump.  This stat is useful to observe when you are attempting to cross a gap, and fail, and fall.

Start Speed shows you your start speed before the jump.  It is possible to accelerate on the ground before you jump, and therefore this stat is useful to observe, to see if you are reaching a decent speed before you actually jump.

Acceleration Percentage is the amount of acceleration you added during the jump - from starting on the ground, to the next time you touch the ground.

--------------
3. Config Vars
--------------
\df_accel_Draw [ DEFAULT: 0 (off) RANGE: 0 TO 4 ] - turns display on/off

 0 = off
 1 = always on
 2 = on for demos only
 3 = on for non-demos only (off for demos)
 4 = always on (even if 2d drawing is off, scoreboard is displayed, etc.)

--------------------------------------------------
\df_accel_FontSize [ DEFAULT: 7 RANGE: 4 TO 50 ] - changes font size

--------------------------------------------------
\df_accel_Mode [ DEFAULT: 0 RANGE: 0 TO 2 ] - changes the display type for the accelmeter.

 0 = crosshair graphics
 1 = text graphics, using "+" and "O"
 2 = text graphics, using "+" and "+"

Note that for text graphics modes, the accelmeter uses the FontColor, LabelColor, and FontTransparency variables/characteristics from Crosshair Stats Set 2 (CHS2).

--------------------------------------------------
\df_accel_AdjustMaxSpeed [DEFAULT: 1 (on) RANGE: 0 TO 1 ] - turns on/off maximum speed adjustment

Internally, an adjustment to the maximum acceleration calculation is done, to bring the actual user acceleration values into a range of 0 to 100%.  Set this var to 0 to turn off this adjustment.

--------------------------------------------------
\df_accel_Output [ DEFAULT: 0 (off) RANGE: 0 TO 1 ] - turns on/off console output of acceleration and speed percentages on landing - useful for seeing a history of accelmeter landing data

--------------------------------------------------
\df_accel_OffsetX [ DEFAULT: 0 RANGE: -320 TO 320 ] - changes the horizontal position of the accelmeter crosshair set relative to the center of the screen

--------------------------------------------------
\df_accel_OffsetY [ DEFAULT: 0 RANGE: -240 TO 240 ] - changes the vertical position of the accelmeter crosshair set relative to the center of the screen

--------------------------------------------------
\df_accel_Scale [ DEFAULT: -1.2 RANGE: -F TO F TYPE: float ] - changes the amount of offset the accel CH is adjusted based on the angle difference between the user's chosen direction of travel (wishdir) and the optimal angle.

Normally, with a scale value of 1.0, a 5 degree difference between the wishdir and optimaldir results in a 5 position offset.  A scale value of 2.0 would effectively multiply the angle difference: 5 degrees would equal a 10 position offset.  Scale is the magnification of the degree difference.  It may help to think of the scale as the "snsitivity" of the accelmeter.

Positive scale values are simple maginifications of the degree difference.  Negative scale values are the magnification of the degree difference, but scales based on speed.  Above 600ups the scale begins to increase with speed.  This is useful, since at higher speeds the amount of change between the starting CH position (on jump) and the ending CH position (on landing) is smaller.  Using the negative scale means that at higher speeds, you accelmeter will feel closer to the sensitivity of the accelmeter at lower speeds.

--------------------------------------------------
\df_accel_HistoryResetSpeed [ DEFAULT: 100 RANGE: 0 TO N ] - resets the Jumpmeter history if the player's ground speed falls below the value specified.

-----------------------------------------------
4. AccelMeter Related CrosshairStats Info Items
-----------------------------------------------
There is data that the AccelMeter can output through the crosshair stats system, or through the console.  Try this setting:

\df_chs1_info1 135

This will display 3 numbers, like: "xx/xxx/xx".  The first number is your percentage of acceleration added during time above the initial horizontal plane.  In other words, if you are jumping a gap, and don't clear the gap (you fall) - this number will show you your acceleration percentage added before you fell.  If you do clear the gap and land on the other side (onto a platform), then typically you can ignore this number and should look at the 3rd number.  The 3rd number is your acceleration percentage added on landing.  Typically you would ignore this number if you are jumping a gap and DO NOT clear the gap.  The 2nd number (the number in the middle) is your speed at the start of the jump (as soon as you left the ground).  This number is useful for determining the amount of acceleration you gained before the actual jump.

--------------------------------------------
5. AccelMeter CrosshairStats Info Items List
--------------------------------------------

// start: 120 - AccelMeter
 120 CH_INFO_ACCELMETER_STARTSPEED,               // speed before jump
 121 CH_INFO_ACCELMETER_SPEED,                    // speed on landing
 122 CH_INFO_ACCELMETER_MAXSPEED,                 // maximum possible speed on landing
 123 CH_INFO_ACCELMETER_TRUEMAXSPEED,             // true maximum possible speed - unadjusted
 124 CH_INFO_ACCELMETER_ACCEL_PERCENT,            // percentage of acceleration added on landing
 125 CH_INFO_ACCELMETER_SPEED_PERCENT,            // percentage of speed added on landing
 126 CH_INFO_ACCELMETER_ACCEL_PERCENT_HORIZONTAL, // percentage of acceleration added in the horizontal plane
 127 CH_INFO_ACCELMETER_SPEED_PERCENT_HORIZONTAL, // percentage of speed added in the horizontal plane
 128 CH_INFO_ACCELMETER_SPEED_HORIZONTAL,         // speed in the horizontal plane
 129 CH_INFO_ACCELMETER_MAXSPEED_HORIZONTAL,      // maximum possible speed in the horizontal plane

// start: 130 - Accelmeter combos
 130 CH_INFO_ACCELMETER_ANGLES,                             // angle differences between wish direction and optimal direction
 131 CH_INFO_ACCELMETER_PERCENTAGES_ACCEL_SPEED,            // percentages of acceleration/speed added
 132 CH_INFO_ACCELMETER_SPEEDS,                             // speeds (start, speed, maxspeed)
 133 CH_INFO_ACCELMETER_PERCENTAGES_HORIZONTAL_ACCEL_SPEED, // percentages of acceleration/speed added, in the horizontal plane
 134 CH_INFO_ACCELMETER_SPEEDS_HORIZONTAL,                  // speeds (start, speed, maxspeed), in the horizontal plane
 135 CH_INFO_ACCELMETER_PERCENTAGES_ALL_ACCEL,              // percentages of acceleration added - all
 136 CH_INFO_ACCELMETER_PERCENTAGES_ALL_ACCEL_SPEED,        // percentages of acceleration/speed added - all
 137 CH_INFO_ACCELMETER_SPEEDS_ALL,                         // speeds (start, speed, maxspeed) - all
 138 CH_INFO_ACCELMETER_ANGLE_COUNTERCLOCKWISE,             // angle difference between wish direction and optimal direction, counterclockwise turning
 139 CH_INFO_ACCELMETER_ANGLE_CLOCKWISE,                    // angle difference between wish direction and optimal direction, clockwise turning

// start: 140 - JumpMeter
 140 CH_INFO_JUMPMETER_HISTORY_SPEEDXY,      // JumpMeter - history - speed (horizontal)
 141 CH_INFO_JUMPMETER_HISTORY_ACCELPERCENT, // JumpMeter - history - acceleration percentage
 142 CH_INFO_JUMPMETER_HISTORY_DISTANCE,     // JumpMeter - history - distance (horizontal)
 143 CH_INFO_JUMPMETER_HISTORY_HEIGHT,       // JumpMeter - history - height
 144 CH_INFO_144,	                     // empty
 145 CH_INFO_JUMPMETER_MAX_SPEEDXY,          // JumpMeter - max - speed (horizontal)
 146 CH_INFO_JUMPMETER_MAX_ACCELPERCENT,     // JumpMeter - max - acceleration percentage
 147 CH_INFO_JUMPMETER_MAX_DISTANCE,         // JumpMeter - max - distance (horizontal)
 148 CH_INFO_JUMPMETER_MAX_HEIGHT,           // JumpMeter - max - height
 149 CH_INFO_149,                            // empty

-----------
6. Accuracy
-----------
The accelmeter does internal calculations based on an algorithm to find the optimum strafing angle.  You will notice at times it is possible to achieve "impossible" values, such as 103 percent acceleration.  Nice jump. :O  The algorithm is not 100 percent accurate, and in addition suffers from floating point rounding errors.  But it is accurate enough to be useful and provide legitimate feedback.  The algorithm was written based on analyzation of the code, then later tweaked based on acceleration profiles, by observing the accelmeter in action with demos that showed very high accel percentages.  The refining of the algorithm has improved the accuracy fairly significantly, but it should be noted that it is still not 100% perfect.  Also, there are things that will disrupt the calculations, such as some jumppads, etc.

The accelmeter does all of it's calculations clientside.  It compensates for framerate changes, as well as timescaling.

*** NOTE: To see the unadjusted maximum speed (TrueMaxSpeed), assign 123 (CH_INFO_ACCELMETER_TRUEMAXSPEED) to one of the crosshair stats info item slots.

-----------------------------------------
7. AccelMeter With g_synchronousclients 0
-----------------------------------------
Strafing technique is different with g_synchronousclients 0 versus g_synchronousclients 1.  Ultimately, it seems more speed can be achieved using g_synchronousclients 0.  Differences in technique you will notice are:

With g_synchronousclients 1, the turn in the air is more of a smooth turning.  With g_synchronousclients 0, when changing directions, the direction change is more of a snap, then a slower turn.

The accelmeter still works with g_synchronousclients 0, but no change in the calculating algorithm is done.  Therefore, you will see less accuracy in regards to following the 2nd CH and producing higher accels.  With g_synchronousclients 0, the technique with the accelmeter tends to be more of: snap turn, allow the accel CH to catch up a bit, then turn with it, as opposed to trying to match the accel CH throughout the turn.

----------------------
8. AccelMeter with CPM
----------------------
The accelmeter algorithm is centered around the vq3 acceleration code, and calculates maximum acceleration/angle based soley on this.  CPM air acceleration (holding strafe only (no forward) and turning) is a different type of acceleration.  The accelemeter will not show you the optimal angle for CPM air acceleration (it WILL show you proper information for forward+strafe acceleration (normal vq3 style acceleration) in CPM).  However, you still may find the accelmeter useful as a reference point for your cpm air acceleration.  The accelmeter crosshair will still move.  Try matching the speed of the accelmeter CH without actually trying to center the CH.  Just maintain the distance between the 2 crosshairs.  Experiment to see what produces better or worse accels.  Obviously the stats that the accelmeter produces will not be cpm adjusted either, but again, you may find the data reported useful none-the-less.

--------------------------------------
9. AccelMeter With Q3 Demos And Ghosts
--------------------------------------
The accelmeter works with demos that were recorded in defrag 1.7 or above.  It actually uses the keypress indications to generate the user's wishdir.  Demos recorded outside of defrag will not display the accelmeter.

However, demos recorded outside of defrag CAN display most of the AccelMeter stats that are available through the crosshair system.  Useful for checking out accel percentages, etc for non-defrag demos.

It is possible to see accelmeter stats during a ghost replay - while using one of the ghost camera modes (any time you switch to one of the 1st person ghost camera modes, the crosshair stats system uses the ghost data.  Some exceptions to this are OB detection).  So, you can observe your accel stats again by replaying a ghost.  A ghost CANNOT use the actual accelmeter 2nd crosshair, and so the accelmeter CH will not be displayed during ghost playback.  Decreasing the recording interval for a ghost (df_ghost1_RecordInterval) will increase the accuracy of ghosts data going through the crosshair system.  The downside to decreasing the recording interval is you will have larger ghost files, as well as decreasing the ghost timescale sensitivity.

----------------------------------------
10. Getting The Most From The AccelMeter
----------------------------------------
Watch a demo from CeTuS, Boo, or Kull...  Then go have some lunch.  Go for a nice walk.  Relax a bit...  It's going to be ok.  Really...

Strafing is an art.  The accelmeter will not instantly make you a strafing god.  It can help you improve your strafing skills, with practice.  It takes practice to better your strafing.  The accelmeter will hopefully increase your skills faster than without the accelmeter.  It could be considered similar to playing golf, and having your swing analyzed by a computer using motion capture information.

First off, a little information about acceleration.  You can accelerate on the ground, before the actual jump, by turning the mouse (faster than a strafe jump).  However, your ground acceleration maximum is much lower than air acceleration.  The first goal of a beginning jumper should be increase your ground acceleration before the jump, as well as improving your in air acceleration for the first jump.  Without a good start, many strafe practice maps cannot be finished - you will fall before reaching the last few platforms.

Turn on the accel stats using the vars listed in the Quick Start section.  This will let you check your ground speed at the beginning of the jump (the middle number that is displayed).  Strive for 380 ups or more.  Max is around 400ups.  Press strafe and forward, turn the mouse fast, and jump.

The initial jump greatly effects what happens with the accel CH since the optimal angle at lower speeds is actually less than 45 degrees.  Since you are generally pressing strafe and forward (which produces an angle of 45 degrees), this means that on a jump with a very slow start (less than 360 ups or so) the accel CH will be behind (your angle will be ahead) - since the optimal angle is less than 45.  Try to gain more speed on the ground before the jump.  Also, with a slow jump start, it's better to just try to maintain the CHs gap distance, as opposed to not turning, and waiting for the accel CH to "catch up".

Now, while in the air, turn the mouse, trying to match the accel CH (crosshair).  Upon landing, oberve the 3rd number.  This is your acceleration you added during the jump (ignore the first number for now).  Now try again.  Observe what happens if you are ahead of the accel CH, or behind.  Observe what happens if you match it exactly.  Matching the CH exactly does NOT automatically yield high 90% accels.  You will find that generally, it is more important to be "close" to the accel CH, and maintain the distance between the accel CH and your center CH.  Maintaining the distance is generally more important than trying to correct the distance in the air, especially if that distance is large.  As your skills improve you will find your sweet spot - which may be always slightly ahead of the accel CH.  Don't just blindly follow the accel CH.  Let the accel CH give you feedback to what you are doing, and observe the end results (the accel stats).  Learn.

If that distance between your CH and the accel CH is large, this means that you are either serverly over-rotating or under-rotating the mouse when you make your direction change or make your first jump.  The first order of business should be to correct this.  As you improve your intial start of rotation, then you can attempt to match the CH closer.

Oberve the first number when you are attempting to cross a gap, and fail.  This number will show you the acceleration you added while in the air, along the same horizontal plane as where you started the jump.

Watch some demos from CeTuS on costanza's (great) map.  See how the accelmeter CH moves in relation to his movement.  The accelmeter will be close to his CH.  Notice when it is not.  Notice when it is.  Learn.

-----------
11. History
-----------
1.90
- Added new "Jumpmeter" stats: holds jump history (last 12 jumps) and jump maxes of horizontal speed, accel percentage, distance, and height.  Maxes may be reset through the "resetjumpmeter" console command.
- Accelmeter: fps scaling fixed
- CHS stats items re-arranged
- CHS stat start speed single added
- CHS TrueMaxSpeed item added
- Allow to be drawn when draw2d and hud is off

1.80
- Feature Introduced
