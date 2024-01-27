===========================================
Crosshair Stats Display System (CHS1, CHS2)
===========================================

1. Information
2. Quick Start
3. Config Vars For All CHS sets
4. Config Vars For CHS1
5. Config Vars For CHS2
6. Usage Examples
7. User Defined Combos
8. Variable And Vstr Value Monitoring
9. Floating Point Display
10. Floating Point Display Usage Examples
11. Additional Information
12. CHS Information Types List
13. History

--------------
1. Information
--------------
Display system that can be configured by the user to output various pieces of information, such as speed, health, timers, distances, etc.

The CHS is comprised of 3 crosshair stat sets.  One center set - (CHS0) (display is inside the crosshair), and two user sets (CHS1 and CHS2). The 2 user sets each have 8 assignable information slots, giving a total of 16 info slots.  See seperate documentation for CHS0.

The user sets are capable of displaying a lot of different types of information.  They are also very configurable from a display point of view. It is possible to have one set be displayed around the crosshair, and have the other set displayed elsewhere on the screen, in more of a vertical list of stats.  In addition, the user sets are highly configurable in regards to the font, the size, the position, the display type, etc.

Various information stats can be assigned to the various info slots.  This is normally done via the cvars for the CHS.  Normally, only one stat item is assigned per info slot, however, user-defined combos are possible.  This is done by listing the info item numbers in quotes, separated by spaces, such as "21 23 44"

--------------
2. Quick Start
--------------
To quickly turn on the crosshair stats display system (CHS1 for this example):

\df_chs1_Draw 1  // turns on the chs1
\df_chs1_Info5 1 // assigns defrag speed meter below the CH


-------------------------------
3. Config Vars For All CHS sets
-------------------------------

These config vars effect all Crosshair Stats displays

--------------------------------------------------
\df_chs_UsePredicted [ DEFAULT: 1 (off) RANGE: 0 TO 1 ] - use predicted player data as option for input into CHS items and AccelMeter.  This makes the readout smoother (but less accurate) during multiplayer games.

-----------------------
4. Config Vars For CHS1
-----------------------

Note that CHS1 and CHS2 are essentially identical in their configuration (with the exception of some of the default values), but each set has it's own group of config vars.

--------------------------------------------------
\df_chs1_Draw [ DEFAULT: 0 (off) RANGE: 0 TO 4 ] - turns display on/off

 0 = off
 1 = on
 2 = on only for demos and spectating
 3 = on only ingame (off for demos and spectating)
 4 = always on (even if 2d drawing is off, scoreboard is displayed, etc.)

--------------------------------------------------
\df_chs1_FontSize [ DEFAULT: 10 RANGE: 4 TO 50 ] - changes font size

--------------------------------------------------
\df_chs1_FontColor [ DEFAULT: 7 (white) RANGE: 0 TO 9 ] - changes font color (for data)

 0 = Black
 1 = Red
 2 = Green
 3 = Yellow
 4 = Blue
 5 = Cyan
 6 = Magenta
 7 = White

--------------------------------------------------
\df_chs1_FontTransparency [ DEFAULT: 1 (no transparency) RANGE: 0 TO 1 (.xx) ] - changes font transparency

--------------------------------------------------
\df_chs1_FontShadow [ DEFAULT: 1 (on) RANGE: 0 TO 1 ] - toggles font shadows

--------------------------------------------------
\df_chs1_LabelColor [ DEFAULT: 7 (white) RANGE: 0 TO 9 ] - changes font color (for label)

 0 = Black
 1 = Red
 2 = Green
 3 = Yellow
 4 = Blue
 5 = Cyan
 6 = Magenta
 7 = White

--------------------------------------------------
\df_chs1_OffsetX [ DEFAULT: 0 RANGE: -320 TO 320 ] - changes the horizontal position of the CHS set relative to the center of the screen

--------------------------------------------------
\df_chs1_OffsetY [ DEFAULT: 0 RANGE: -240 TO 240 ] - changes the vertical position of the CHS set relative to the center of the screen

--------------------------------------------------
\df_chs1_DisplayType [ DEFAULT: 0 (crosshair style) RANGE: 0 TO 4 ] - changes the display type of the CHS set

 0 = crosshair
 1 = 1 column, left aligned
 2 = 1 column, center aligned
 3 = 1 column, right aligned
 4 = 2 column, split

* use DisplayType along with LabelType to create a display/label set to your liking

--------------------------------------------------
\df_chs1_LabelType [ DEFAULT: 0 (off) RANGE: 0 TO 4 ] - changes the lable type of the CHS set

 0 = off (no label displayed)
 1 = left (label appears to the left of the data)
 2 = center (style 1) (use with displaytype 4)
 3 = center (style 2) (use with displaytype 4)
 4 = right (label appears to the right of the data)

* use DisplayType along with LabelType to create a display/label set to your liking
* when a label type is on, individual chs item labels may be hidden (not displayed) by prefixing the item with a '-'.  Example: df_chs1_Info1 -23

--------------------------------------------------
Each CHS set has 8 positions (slots) available for information.

\df_chs1_Info1 [ DEFAULT: 0 (empty) RANGE: 0 TO N ] - assigns an information type to the stat info slot1
\df_chs1_Info2 [ DEFAULT: 0 (empty) RANGE: 0 TO N ] - assigns an information type to the stat info slot2
\df_chs1_Info3 [ DEFAULT: 0 (empty) RANGE: 0 TO N ] - assigns an information type to the stat info slot3
\df_chs1_Info4 [ DEFAULT: 0 (empty) RANGE: 0 TO N ] - assigns an information type to the stat info slot4
\df_chs1_Info5 [ DEFAULT: 0 (empty) RANGE: 0 TO N ] - assigns an information type to the stat info slot5
\df_chs1_Info6 [ DEFAULT: 0 (empty) RANGE: 0 TO N ] - assigns an information type to the stat info slot6
\df_chs1_Info7 [ DEFAULT: 0 (empty) RANGE: 0 TO N ] - assigns an information type to the stat info slot7
\df_chs1_Info8 [ DEFAULT: 0 (empty) RANGE: 0 TO N ] - assigns an information type to the stat info slot8

--------------------------------------------------
\df_chs1_EnableCombos [ DEFAULT: 0 (off) RANGE: 0 (off) TO 1 (on) ] - turns user combos on/off.  

See User Defined Combos section for more information and warnings about user combos.  Also, when combos are enabled, cvar/vstr monitoring is possible.

--------------------------------------------------
\df_chs1_ComboSeparator [ DEFAULT: "/" (maxlength of 5 characters) ] - specifies the character string to use for user-defined info items

-----------------------
5. Config Vars For CHS2
-----------------------
config vars for CHS set 2 are identical to CHS set 1, but are referenced as: df_chs2_*

-----------------
6. Usage Examples
-----------------
\df_chs1_Draw 1		// turns on chs1
\df_chs2_Draw 1		// turns on chs2
\df_chs1_Info4 1	// assigns "CH_INFO_SPEED" to CHS set 1, position 4
\df_chs2_Info1 56	// assigns "CH_INFO_OVERBOUNCE_ALL" to CHS set 2, position 1

\df_chs1_Info1 "125 120 123" // display 3 items: horizontal accel percent, start speed, accel percent

\df_chs1_Info1 -23 // display speed (and turn off the individual label display for df_chs1_Info1

see list below for info values

----------------------
7. User Defined Combos
----------------------
User defined info item combos may be created.  Nomally, a single info item is assigned to a single info slot.  Each crosshair set has 8 info item slots.  However, you may actually assign more than one info item to a given slot.  This allows one to create custom combos in each slot.  To do this, you assign a combo string to the info item:

df_chs1_Info1 "23 30 31"

this would assign XY speed, pitch, and yaw to slot #1.

*** NOTE: To enable user defined combos, use the df_chs1_EnableCombos or df_chs2_EnableCombos cvar.

The actual display onscreen appear as "XY/P/Y".  However, you may change the combo separator.  The default is "/", but this is changed easily using the df_chs1_ComboSeparator cvar.  A maximum lenght of 5 characters is set.  In the above example, changing the separator to " : " would give a display of: "XY : P : Y"

*** WARNINGS ABOUT USER DEFINED COMBOS ***

- User defined combos can severly increase frames-per-second loss when complex combinations are created/used.

- Creating combos that use OB detections WILL NOT turn on the OB detection for the ob detections after the first item in the combo.  In other words, if you create a combo such as "50 51 52", this will only turn on "50", unless 51 and/or 52 are specified as single item combos somewhere else in the crosshair stats.  Basically, it's easier just to remember to not create combos using Overbounce Detection items.

-------------------------------------
8. Variable And Vstr Value Monitoring
-------------------------------------
When user defined combos are enabled (df_chs1_EnableCombos, df_chs2_EnableCombos), any q3 or user-defined cvar or vstr can be monitored and displayed.  To monitor a var, simple assign one of the crosshair info slots the var name, with a "$" prefix.

Examples:
\df_chs1_Info1 $timescale      // will display current timescale
\df_chs2_Info5 $myvar1 $myvar2 // will display current values of myvar1 and myvar2

-------------------------
9. Floating Point Display
-------------------------
Many of the information types allow display of information after the decimal place (.xxx).  The default is that no information is display after the decimal place.  Display of data after . is accomplished when and information type is assigned to an info slot.  Essentially, use x000, and the value for x will be the number of decimals display after the decimal place.

So, suppose you are travaling at 1225.123 units per second.  If you want to display your speed as an integer, you would use something like: df_chs1_Info5 23
and you would see "1225" on the crosshair display.

But, if you want to display your speed with 2 digits after the decimal place, you would use: df_chs1_Info5 2023
and you would see "1225.12".

Note that you are actually displaying the same information stat, "23", but hav just added "2000" to that value, to get "2023".  You add 1000 to display 1 value after the decimal, 2000 for 2 digits after the decimal, 3000 for 3, etc.

See the following section for examples.

-----------------------------------------
10. Floating Point Display Usage Examples
-----------------------------------------
\df_chs1_Info1 23	// displays horizontal speed as: x	(   23/1000 = 0 decimals )
\df_chs1_Info1 1023	// displays horizontal speed as: x.x	( 1023/1000 = 1 decimal  )
example 3: \df_chs1_Info1 3023	// displays horizontal speed as: x.xxx	( 3023/1000 = 3 decimals )


--------------------------
11. Additional Information
--------------------------
Use the \info console command to quickly find info types ingame to assign to the CHS.

The crosshair stats information may be accessed and used for special purposes by using the $SpecialStrings $chinfo and $chinfonum.  To use the $SpecialStrings, first set the $chinfonum string to the desired info number item to be retreived.  Then, by using $chinfo, the CHS info $chinfonum value will be used and stored in $chinfo.  This allows one to use any of the CHS info items wherever $SpecialStrings are permitted (varCommand, varMath, etc.)

------------------------------
12. CHS Information Types List
------------------------------

////////// Q3 START SET #1 //////////	

 000 CH_INFO_EMPTY,	// 0

// start: 1 - player info
 001 CH_INFO_SPEED,             // speed / defrag speed (uses speed unit setting)
 002 CH_INFO_HEALTH,            // player health
 003 CH_INFO_ARMOR,             // player armor
 004 CH_INFO_AMMO,              // player ammo for currently selected weapon
 005 CH_INFO_HEALTH_ARMOR,      // player health/armor
 006 CH_INFO_HEALTH_ARMOR_AMMO, // player health/armor/ammo
 007 CH_INFO_007,               // empty
 008 CH_INFO_008,               // empty
 009 CH_INFO_009,               // empty

// start: 10 - plane distances (that player is looking at)
 010 CH_INFO_DISTANCE_XY,           // horizontal distance to plane
 011 CH_INFO_DISTANCE_Z,            // vertical distance to plane
 012 CH_INFO_DISTANCE_XYZ,          // true distance to plane
 013 CH_INFO_DISTANCE_VIEWXYZ,      // true distance to plane from view point
 014 CH_INFO_DISTANCE_XY_Z_XYZ,     // horizontal/verical/true distance to plane
 015 CH_INFO_DISTANCE_XY_Z_VIEWXYZ, // horizontal/verical/true(view) distance to plane
 016 CH_INFO_LOOK_XYZ,              // world x y z location of plane
 017 CH_INFO_017,                   // empty
 018 CH_INFO_018,                   // empty
 019 CH_INFO_019,                   // empty

// start: 20 - player speed (uses ups)
 020 CH_INFO_SPEED_X,                   // speed along world x axis
 021 CH_INFO_SPEED_Y,                   // speed along world y axis
 022 CH_INFO_SPEED_Z,                   // speed along world z axis
 023 CH_INFO_SPEED_XY,                  // horizontal speed
 024 CH_INFO_SPEED_XYZ,                 // true speed
 025 CH_INFO_SPEED_FORWARD,             // speed relative to forward
 026 CH_INFO_SPEED_SIDEWAYS,            // speed relative to side
 027 CH_INFO_SPEED_FORWARD_SIDEWAYS,    // speed relative to forward/side
 028 CH_INFO_SPEED_XY_FORWARD_SIDEWAYS, // horizontal speed/speed relative to forward/side
 029 CH_INFO_029,                       // empty

// start: 30 - player position, player angles, view position - singles
 030 CH_INFO_PITCH,                      // player pitch
 031 CH_INFO_YAW,                        // player yaw
 032 CH_INFO_ROLL,                       // player roll
 033 CH_INFO_POSITION_X,                 // player X position
 034 CH_INFO_POSITION_Y,                 // player Y position
 035 CH_INFO_POSITION_Z,                 // player Z position
 036 CH_INFO_VIEWPOSITION_X,             // view X position
 037 CH_INFO_VIEWPOSITION_Y,             // view Y position
 038 CH_INFO_VIEWPOSITION_Z,             // view Z position
 039 CH_INFO_039,                        // empty

// start: 40 - position and angle combos
 040 CH_INFO_PITCH_YAW,                  // player pitch/yaw
 041 CH_INFO_PLAYER_XYZ,                 // player position in the world
 042 CH_INFO_PLAYER_XYZ_PITCH_YAW,       // player position in the world and pitch/yaw
 043 CH_INFO_VIEWPOSITION_XYZ_PITCH_YAW, // view position in the world and pitch/yaw
 044 CH_INFO_POSITION_XYZ,               // position x y z
 045 CH_INFO_VIEWPOSITION_XYZ,           // view position x y z
 046 CH_INFO_ANGLES_XYZ,                 // angles x y z
 047 CH_INFO_VELOCITY_XYZ,               // velocity x y z
 048 CH_INFO_048,                        // empty
 049 CH_INFO_049,                        // empty

// start: 50 - overbounce - combos
 050 CH_INFO_OVERBOUNCE_MOVE,           //   OB Combo Movement        (JGB)
 051 CH_INFO_OVERBOUNCE_STICKY_MOVE,    //  SOB Combo Sticky Movement (SJSG)
 052 CH_INFO_OVERBOUNCE_WEAPONS,        //  WOB Combo Weapon          (pPrR)
 053 CH_INFO_OVERBOUNCE_STICKY_WEAPONS, // SWOB Combo Sticky Weapon   (SpSPSrSR)
 054 CH_INFO_OVERBOUNCE_QUADED_WEAPONS, // QWOB Combo Quaded Weapon   (QpQPQrQR)
 055 CH_INFO_OVERBOUNCE_ALL_NOQUAD,     //  xOB Combo (JGB pPrR SJSG SpSPSrSR)
 056 CH_INFO_OVERBOUNCE_ALL,            //  xOB Combo (JGB pPrR SJSG SpSPSrSR QpQPQrQR)
 057 CH_INFO_OVERBOUNCE_O3J_CUSTOM1,    //  xOB Combo (Custom 1) (JGB PrR)
 058 CH_INFO_OVERBOUNCE_O3J_CUSTOM2,    //  xOB Combo (Custom 2) (JGB PrR SJSG SPSrSR)
 059 CH_INFO_OVERBOUNCE_O3J_CUSTOM3,    //  xOB Combo (Custom 3) (JGB SJSG)

// start: 60 - overbounce - singles
 060 CH_INFO_OVERBOUNCE_GO_BELOW,    //  OB Movement (GB) Go, Below
 061 CH_INFO_OVERBOUNCE_BELOW,       //  OB Movement (B) Below
 062 CH_INFO_OVERBOUNCE_GO,          //  OB Movement (G) Go
 063 CH_INFO_OVERBOUNCE_JUMP,        //  OB Movement (J) Jump
 064 CH_INFO_OVERBOUNCE_STICKY_GO,   // SOB Sticky Movement (SG) Sticky Go
 065 CH_INFO_OVERBOUNCE_STICKY_JUMP, // SOB Sticky Movement (SJ) Sticky Jump
 066 CH_INFO_OVERBOUNCE_PLASMA,      // WOB Weapon (p) plasma
 067 CH_INFO_OVERBOUNCE_PLASMAJUMP,  // WOB Weapon (P) Plasmajump
 068 CH_INFO_OVERBOUNCE_ROCKET,      // WOB Weapon (r) rocket
 069 CH_INFO_OVERBOUNCE_ROCKETJUMP,  // WOB Weapon (R) Rocketjump

// start: 70 - overbounce - singles
 070 CH_INFO_OVERBOUNCE_STICKY_PLASMA,     // SWOB Sticky Weapon (Sp) Sticky plasma
 071 CH_INFO_OVERBOUNCE_STICKY_PLASMAJUMP, // SWOB Sticky Weapon (SP) Sticky Plasmajump
 072 CH_INFO_OVERBOUNCE_STICKY_ROCKET,     // SWOB Sticky Weapon (Sr) Sticky rocket
 073 CH_INFO_OVERBOUNCE_STICKY_ROCKETJUMP, // SWOB Sticky Weapon (SR) Sticky Rocketjump
 074 CH_INFO_OVERBOUNCE_QUADED_PLASMA,     // QWOB Quaded Weapon (Qp) Quaded plasma
 075 CH_INFO_OVERBOUNCE_QUADED_PLASMAJUMP, // QWOB Quaded Weapon (QP) Quaded PlasmaJump
 076 CH_INFO_OVERBOUNCE_QUADED_ROCKET,     // QWOB Quaded Weapon (Qr) Quaded rocket
 077 CH_INFO_OVERBOUNCE_QUADED_ROCKETJUMP, // QWOB Quaded Weapon (QR) Quaded RocketJump
 078 CH_INFO_078,                          // empty
 079 CH_INFO_OVERBOUNCE_VOFFSETS,          // user vertical offset amounts (start and stop)

// start: 80 - ghost settings
 080 CH_INFO_ALL_GHOSTS_SETTINGS,    // all ghosts - settings
 081 CH_INFO_GHOST1_MODE,            // ghost #1 mode
 082 CH_INFO_GHOST1_SETTINGS_RECORD, // ghost #1 record settings
 083 CH_INFO_GHOST1_SETTINGS_PLAY,   // ghost #1 play settings
 084 CH_INFO_GHOST2_MODE,            // ghost #2 mode
 085 CH_INFO_GHOST2_SETTINGS_RECORD, // ghost #2 record settings
 086 CH_INFO_GHOST2_SETTINGS_PLAY,   // ghost #2 play settings
 087 CH_INFO_087,                    // empty
 088 CH_INFO_088,                    // empty
 089 CH_INFO_089,                    // empty

// start: 90 - closest ghost info
 090 CH_INFO_GHOST_XY_SPEED,          // speed of nearest ghost
 091 CH_INFO_GHOST_DISTANCE_XY,       // horizontal distance to nearest ghost
 092 CH_INFO_GHOST_DISTANCE_Z,        // vertical distance to nearest ghost
 093 CH_INFO_GHOST_DISTANCE_XYZ,      // absolute distance to nearest ghost
 094 CH_INFO_GHOST_DISTANCE_XY_Z_XYZ, // horizontal/vertical/absolute distance to nearest ghost
 095 CH_INFO_GHOST_POSITION_XYZ,      // world position of nearest ghost
 096 CH_INFO_GHOST_NUM_NEAREST,       // nearest ghost to player
 097 CH_INFO_097,                     // empty
 098 CH_INFO_GHOST_MEMORY_SIZE_DATA,  // ghost total memory size used
 099 CH_INFO_GHOST_VERSION,           // ghost version information

// start: 100 - real life stuff
 100 CH_INFO_REAL_TIME_12,             // time (12 hour clock)
 101 CH_INFO_REAL_TIME_24,             // time (24 hour clock)
 102 CH_INFO_REAL_DATE_US,             // date (US date format)
 103 CH_INFO_REAL_DATE_US_TIME_12,     // date / time (US date format / 12 hour clock)
 104 CH_INFO_REAL_DATE_US_TIME_24,     // date / time (US date format / 24 hour clock)
 105 CH_INFO_REAL_DATE_EUROPE,         // date (European date format)
 106 CH_INFO_REAL_DATE_EUROPE_TIME_12, // date / time (European date format / 12 hour clock)
 107 CH_INFO_REAL_DATE_EUROPE_TIME_24, // date / time (European date format / 24 hour clock)
 108 CH_INFO_REAL_DATE_YYYYMMDD,       // date (YearMonthDay format)
 109 CH_INFO_REAL_TIME_HHMMSS,         // time (HoursMinutesSeconds format)

// start: 110 - settings
 110 CH_INFO_FPS,                // frames per second
 111 CH_INFO_PING,				// ping
 112 CH_INFO_SETTINGS1,          // server settings: com_maxfps/sv_fps/g_synchronousclients/pmove_msec(if pmove_fixed is on)/timescale
 113 CH_INFO_SETTINGS2,          // server settings: com_maxfps/sv_fps/g_synchronousclients/pmove_msec(if pmove_fixed is on)/timescale
 114 CH_INFO_MAPNAME_SERVERNAME, // mapname servername
 115 CH_INFO_MAPNAME,            // mapname
 116 CH_INFO_SERVERNAME,         // servername
 117 CH_INFO_PLAYERNAME,         // empty
 118 CH_INFO_PLAYERNAME_NOCOLOR, // empty
 119 CH_INFO_119,                // empty

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

// start: 150 - User input indicators
 150 CH_INFO_CONTROL_INPUT_ARROWS1,  // player control input (keypresses) - arrows - style 1
 151 CH_INFO_CONTROL_INPUT_ARROWS2,  // player control input (keypresses) - arrows - style 2
 152 CH_INFO_CONTROL_INPUT_FLBR_JCA, // player control input (keypresses) - FLBR - JCA
 153 CH_INFO_CONTROL_INPUT_USER_JCA, // player control input (keypresses) - USER - JCA
 154 CH_INFO_154,                    // empty
 155 CH_INFO_155,                    // empty
 156 CH_INFO_156,                    // empty
 157 CH_INFO_157,                    // empty
 158 CH_INFO_158,                    // empty
 159 CH_INFO_159,                    // empty

// start: 160 - SavedPosition distances
 160 CH_INFO_SAVEDPOS_DISTANCE_XY,       // horizontal distance to last saved position
 161 CH_INFO_SAVEDPOS_DISTANCE_Z,        // vertical distance to last saved position
 162 CH_INFO_SAVEDPOS_DISTANCE_XYZ,      // true distance to last saved position
 163 CH_INFO_SAVEDPOS_DISTANCE_XY_Z_XYZ, // horizontal/vertical/true distance to last saved position
 164 CH_INFO_164,                        // empty
 165 CH_INFO_165,                        // empty
 166 CH_INFO_166,                        // empty
 167 CH_INFO_167,                        // empty
 168 CH_INFO_168,                        // empty
 169 CH_INFO_169,                        // empty

// start: 170 - timers
 170 CH_INFO_SERVERTIME,        // server time
 171 CH_INFO_CGTIME,            // client game time (cg.time)
 172 CH_INFO_LEVELSTARTTIME,    // level start time (cgs.levelStartTime)
 173 CH_INFO_CGMINUSLEVELTIME1, // client game time (cg.time) - level start time (cgs.levelStartTime) (min:sec:msec)
 174 CH_INFO_CGMINUSLEVELTIME2, // client game time (cg.time) - level start time (cgs.levelStartTime) (min.sec)
 175 CH_INFO_175,               // empty
 176 CH_INFO_176,               // empty
 177 CH_INFO_177,               // empty
 178 CH_INFO_178,               // empty
 179 CH_INFO_179,               // empty

// start: 180 - View Vectors - FORWARD
 180 CH_INFO_VIEWVECTOR_FORWARD_X,     // view vector forward x
 181 CH_INFO_VIEWVECTOR_FORWARD_Y,     // view vector forward y
 182 CH_INFO_VIEWVECTOR_FORWARD_Z,     // view vector forward z
 183 CH_INFO_VIEWVECTOR_FORWARD_XYZ,   // view vector forward x y z
 184 CH_INFO_VIEWVECTOR_FORWARD_NOZ_X, // view vector forward (with z removed) x
 185 CH_INFO_VIEWVECTOR_FORWARD_NOZ_Y, // view vector forward (with z removed) y
 186 CH_INFO_186,                      // empty
 187 CH_INFO_187,                      // empty
 188 CH_INFO_188,                      // empty
 189 CH_INFO_189,                      // empty

// start: 190 - Misc Info
 190 CH_INFO_DEMO_NAME,                   // demo - name     (if a demo is playing)
 191 CH_INFO_DEMO_FULLNAME,               // demo - fullname (if a demo is playing)
 192 CH_INFO_TRACKING_PLAYERNAME,         // player name tracked by df_mp_TrackPlayerNum
 193 CH_INFO_TRACKING_PLAYERNAME_NOCOLOR, // player name tracked by df_mp_TrackPlayerNum (no colors)
 194 CH_INFO_194,                         // empty
 195 CH_INFO_195,                         // empty
 196 CH_INFO_196,                         // empty
 197 CH_INFO_197,                         // empty
 198 CH_INFO_198,                         // empty
 199 CH_INFO_199,                         // empty

////////// Q3 END SET #1 //////////	

////////// DEFRAG START //////////

// start: 200 - defrag timers
 200 CH_INFO_TIME,           // defrag - elapsed time
 201 CH_INFO_BESTTIME,       // defrag - best time for map
 202 CH_INFO_TIMEDIFFERENCE, // defrag - best time - elapsed time
 203 CH_INFO_203,            // empty
 204 CH_INFO_204,            // empty
 205 CH_INFO_205,            // empty
 206 CH_INFO_206,            // empty
 207 CH_INFO_207,            // empty
 208 CH_INFO_208,            // empty
 209 CH_INFO_209,            // empty

// start: 210 - defrag stats
 210 CH_INFO_DF_HEIGHT,          // defrag stats - jump height
 211 CH_INFO_DF_DISTANCE,        // defrag stats - jump distance
 212 CH_INFO_DF_HIGHEST,         // defrag stats - highest jump
 213 CH_INFO_DF_LONGEST,         // defrag stats - longest jump
 214 CH_INFO_DF_OVERALLDISTANCE, // defrag stats - distance meter
 215 CH_INFO_DF_SPENT,           // defrag stats - health / armor spent
 216 CH_INFO_DF_SHOTS,           // defrag stats - shots fired
 217 CH_INFO_DF_HSPEED,          // defrag stats - highest speed
 218 CH_INFO_218,                // empty
 219 CH_INFO_DF_COUNTRY,         // defrag stats - country

// start: 220 - defrag game settings
 220 CH_INFO_DF_DEFRAG,        // defrag - on/off
 221 CH_INFO_DF_VERSION,       // defrag - version
 222 CH_INFO_DF_GAMETYPE,      // defrag - gametype
 223 CH_INFO_DF_GAMETYPE_REAL, // defrag - gametype real
 224 CH_INFO_DF_GAMEMODE,      // defrag - gamemode
 225 CH_INFO_DF_MULTIPLAYER,   // defrag - multiplayer on/off
 226 CH_INFO_DF_PHYSICS,       // defrag - physics: vq3 or cpm
 227 CH_INFO_DF_OVERBOUNCES,   // defrag - overbounces on/off
 228 CH_INFO_DF_MAPNAME,       // defrag - mapname
 229 CH_INFO_DF_ROUTE,         // defrag - route

// start: 230 - defrag server settings
 230 CH_INFO_DF_COMPETITION,        // defrag - competition string
 231 CH_INFO_DF_SERVER_NAME,        // defrag - server name
 232 CH_INFO_DF_SERVER_GAMENAME,    // defrag - server gamename
 233 CH_INFO_DF_SERVER_GAMEPATH,    // defrag - server gamepath
 234 CH_INFO_DF_CHEATS,             // defrag - cheats on/off
 235 CH_INFO_DF_SERVER_PURE,        // defrag - pure server on/off
 236 CH_INFO_DF_SERVER_FPS,         // defrag - server frames per second (sv_fps)
 237 CH_INFO_DF_SERVER_PMOVEPERIOD, // defrag - pmove frequency (pmove_msec)
 238 CH_INFO_DF_SERVER_CLIENTSYNC,  // defrag - clients synchronized (g_synchronousClients) on/off
 239 CH_INFO_DF_CLIENT_FPS,         // defrag - client max fps (com_maxfps)
 
////////// DEFRAG END //////////
 
////////// Q3 START SET #2 //////////

// start: 300 - overbounce high/low offsets
300 CH_INFO_OVERBOUNCE_OFFSETS_BELOW = 300, //  OB Movement (B) Below
301 CH_INFO_OVERBOUNCE_OFFSETS_GO,          //  OB Movement (G) Go
302 CH_INFO_OVERBOUNCE_OFFSETS_JUMP,        //  OB Movement (J) Jump
303 CH_INFO_OVERBOUNCE_OFFSETS_STICKY_GO,   // SOB Sticky Movement (SG) Sticky Go
304 CH_INFO_OVERBOUNCE_OFFSETS_STICKY_JUMP, // SOB Sticky Movement (SJ) Sticky Jump
305 CH_INFO_OVERBOUNCE_OFFSETS_PLASMA,      // WOB Weapon (p) plasma
306 CH_INFO_OVERBOUNCE_OFFSETS_PLASMAJUMP,  // WOB Weapon (P) Plasmajump
307 CH_INFO_OVERBOUNCE_OFFSETS_ROCKET,      // WOB Weapon (r) rocket
308 CH_INFO_OVERBOUNCE_OFFSETS_ROCKETJUMP,  // WOB Weapon (R) Rocketjump
309 CH_INFO_309,                            // empty

// start: 310 - overbounce high/low offsets
310 CH_INFO_OVERBOUNCE_OFFSETS_STICKY_PLASMA,     // SWOB Sticky Weapon (Sp) Sticky plasma
311 CH_INFO_OVERBOUNCE_OFFSETS_STICKY_PLASMAJUMP, // SWOB Sticky Weapon (SP) Sticky Plasmajump
312 CH_INFO_OVERBOUNCE_OFFSETS_STICKY_ROCKET,     // SWOB Sticky Weapon (Sr) Sticky rocket
313 CH_INFO_OVERBOUNCE_OFFSETS_STICKY_ROCKETJUMP, // SWOB Sticky Weapon (SR) Sticky Rocketjump
314 CH_INFO_OVERBOUNCE_OFFSETS_QUADED_PLASMA,     // QWOB Quaded Weapon (Qp) Quaded plasma
315 CH_INFO_OVERBOUNCE_OFFSETS_QUADED_PLASMAJUMP, // QWOB Quaded Weapon (QP) Quaded PlasmaJump
316 CH_INFO_OVERBOUNCE_OFFSETS_QUADED_ROCKET,     // QWOB Quaded Weapon (Qr) Quaded rocket
317 CH_INFO_OVERBOUNCE_OFFSETS_QUADED_ROCKETJUMP, // QWOB Quaded Weapon (QR) Quaded RocketJump
318 CH_INFO_318,                                  // empty
319 CH_INFO_319,                                  // empty

// start: 320 - demo camera
CH_INFO_DEMOCAM_POSITION,                     // demo camera position x y z
CH_INFO_DEMOCAM_ANGLES,                       // demo camera angles p y r
CH_INFO_DEMOCAM_POSITION_ANGLES1,             // demo camera x y z p y r
CH_INFO_DEMOCAM_POSITION_ANGLES2,             // demo camera x,y,z,p,y,r
CH_INFO_DEMOCAM_POSITION_ANGLES3,             // demo camera position (x y z) pitch/yaw/roll
CH_INFO_325,                                  // empty
CH_INFO_326,                                  // empty
CH_INFO_327,                                  // empty
CH_INFO_328,                                  // empty
CH_INFO_329,                                  // empty

////////// Q3 END SET #2 //////////	

-----------
13. History
-----------
1.91
- Add: Allow individual labels to be turned off via '-' prefix on chs info item
- Add: (df_chs_UsePredicted) use predicted player data as option for input into CHS items and AccelMeter.  This makes the readout smoother (but less accurate) during multiplayer games.
- Add: Added items: playername being tracked by df_mp_TrackPlayerNum - (192)CH_INFO_TRACKING_PLAYERNAME, (193)CH_INFO_TRACKING_PLAYERNAME_NOCOLOR
- Add: Added items: Overbounce low/high offsets (#300 thru #319) - useful for finding new OBs off of bouncepads, etc (use chs item #301)
- Add: Added items: (13)CH_INFO_DISTANCE_VIEWXYZ, (15)CH_INFO_DISTANCE_XY_Z_VIEWXYZ - shows XYZ distances from view height, not bottom of player
- Add: Added items: (172)CH_INFO_LEVELSTARTTIME, (173)CH_INFO_CGMINUSLEVELTIME1, (174)CH_INFO_CGMINUSLEVELTIME2 - useful for df_demos_Seek - allows fast forward seeking by time amounts (bind mykey "varMath df_demos_Seek = $chsinfo(174) + .15" // seeks forward 15 seconds)
- Fix: (12)CH_INFO_DISTANCE_XYZ - was always displaying 0

1.90
- Ability to monitor/display the value of any q3 or user-defined cvar/vstr (when combos are enabled) (example: df_chs1_Info4 $timescale)
- User-defined combos (example: df_chs1_info1 "23 22 24")
- Combo separator is user-definable (default is "/")
- Stats added: AccelMeter start speed, Ping, Date YYYYMMDD, time HHMMSS, posXYZ, viewposXYZ, anglesXYZ, velocityXYZ
- Access to CHS info items in varHelper functions (varMath, varCommand, etc.) through $chsInfo(infonum) and $chsLabel(infonum) string substitutions
- Added new "Jumpmeter" stats: holds jump history (last 12 jumps) and jump maxes of horizontal speed, accel percentage, distance, and height.  Maxes may be reset through the "resetjumpmeter" console command.
- Allow to be drawn when draw2d and hud is off

1.80
- Stat added: saved pos distances
- Stat added: ghost information
- Stat added: real life date/time

1.70
- Feature introduced
