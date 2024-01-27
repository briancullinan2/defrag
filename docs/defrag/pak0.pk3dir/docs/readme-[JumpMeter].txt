=========
JumpMeter
=========

1. Information
2. Quick Start
3. Config Vars
4. JumpMeter Related CrosshairStats Info Items
5. Jumpmeter CrosshairStats Info Items List
6. History

--------------
1. Information
--------------

The JumpMeter is an extension to the AccelMeter and Crosshair stats system.  Essentially, it allows the last 12 jumps to be displayed, in regards to the player's landing horizontal speed, accel percentage, distance, and height.  In addition, the maximum jump values are held (for the same 4 stats: speed, accel, distance, height).

The histories are automatically reset when a new jump series is started.  The system detects when the player's ground speed drops below a certain amount (specified by the cvar df_accel_HistoryResetSpeed (default 100), and resets the histories.  Nice for strafe pad maps.

--------------
2. Quick Start
--------------
\df_chs2_Draw 1    // turn on CH stats #2 display

\df_chs2_Info1 140 // JumpMeter - history - speed (horizontal)
\df_chs2_Info2 141 // JumpMeter - history - acceleration percentage
\df_chs2_Info3 142 // JumpMeter - history - distance (horizontal)
\df_chs2_Info4 143 // JumpMeter - history - height

\df_chs2_Info5 145 // JumpMeter - max - speed (horizontal)
\df_chs2_Info6 146 // JumpMeter - max - acceleration percentage
\df_chs2_Info7 147 // JumpMeter - max - distance (horizontal)
\df_chs2_Info8 148 // JumpMeter - max - height

--------------
3. Config Vars
--------------

\df_accel_HistoryResetSpeed [ DEFAULT: 100 RANGE: 0 TO N ] - resets the Jumpmeter history if the player's ground speed falls below the value specified.

-----------------------------------------------
4. JumpMeter Related CrosshairStats Info Items
-----------------------------------------------
JumpMeter data is output through the crosshair stats system, or through the console.  Try this setting:

\df_chs2_Draw 1    // turn on CH stats #2 display

\df_chs2_Info1 140 // JumpMeter - history - speed (horizontal)

-------------------------------------------
5. Jumpmeter CrosshairStats Info Items List
-------------------------------------------

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

----------
6. History
----------
1.90
- Feature Introduced
