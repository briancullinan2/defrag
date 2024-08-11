==========================================================
Crosshair Stats Display System (CHS0 - Keypress Indicator)
==========================================================

1. Information
2. Quick Start
3. Config Vars (for CHS set 0)
4. History

--------------
1. Information
--------------
The center crosshair set (CHS0) is used to display user control input (keypresses) inside the crosshair.  Any demos recorded using Defrag will be able to display the user control input information, even if the demo itself was not displaying this information during the recording process.  Useful mostly as a training tool, to see how a particular trick was accomplished from an input point of view.

Various display modes give you different options on how to view the keypresses - arrows, or letters.  Note that walk is indictated with the "_" character.

The input display may be moved anywhere on the screen using the OffsetX and OffsetY cvars.

--------------
2. Quick Start
--------------
To quickly turn on CHS0:

\df_chs0_Draw 1

------------------------------
3. Config Vars (for CHS set 0)
------------------------------
\df_chs0_Draw [ DEFAULT: 0 (off) RANGE: 0 TO 4 ] - turns display on/off

 0 = off
 1 = on
 2 = on only for demos and spectating
 3 = on only ingame (off for demos and spectating)
 4 = always on (even if 2d drawing is off, scoreboard is displayed, etc.)

--------------------------------------------------
\df_chs0_FontSize [ DEFAULT: 7 RANGE: 4 TO 50 ] - changes font size

--------------------------------------------------
\df_chs0_FontShadow [ DEFAULT: 1 (on) RANGE: 0 TO 1 ] - toggles font shadows

--------------------------------------------------
\df_chs0_FontColor [ DEFAULT: 7 (white) RANGE: 0 TO 9 ] - changes font color

 0 = Black
 1 = Red
 2 = Green
 3 = Yellow
 4 = Blue
 5 = Cyan
 6 = Magenta
 7 = White

--------------------------------------------------
\df_chs0_FontTransparency [ DEFAULT: 1 (no transparency) RANGE: 0 TO 1 (.xx) ] - changes font transparency

--------------------------------------------------
\df_chs0_LabelColor [ DEFAULT: 7 (white) RANGE: 0 TO 9 ] - creates 2 tone display

If the LabelColor is different than the FontColor, the CHS0 displays in a 2-tone fashion.  Two tone display shows all the arrows (or direction keys if the DisplayType is not 0) on screen.  When a key is pressed, the appropriate CH0 indicator is "lit up" using the FontColor. The LabelColor becomes the "off color"

 0 = Black
 1 = Red
 2 = Green
 3 = Yellow
 4 = Blue
 5 = Cyan
 6 = Magenta
 7 = White

--------------------------------------------------
\df_chs0_OffsetX [ DEFAULT: 0 RANGE: -320 TO 320 ] - changes the horizontal position of the CHS set relative to the center of the screen

--------------------------------------------------
\df_chs0_OffsetY [ DEFAULT: 0 RANGE: -240 TO 240 ] - changes the vertical position of the CHS set relative to the center of the screen

--------------------------------------------------
\df_chs0_DisplayType [ DEFAULT: 0 (arrows, style 1) RANGE: 0 TO 6 ] - changes the display type of the CHS set

 0 = CHS0_ARROWS1_CENTERED: Arrows, style 1 (single character "picture" style), centered pattern

 1 = CHS0_ARROWS2_CENTERED: Arrows, style 2 (ascii character style)

 2 = CHS0_ARROWS1_TREE: Arrows, style 1 (single character "picture" style), tree (gaz-style) pattern

 3 = CHS0_LETTERS_CENTERED_FLBR_JC: Letters, Centered pattern: Uses FLBR J C to indicate Forward, Left, Back, Right, Jump, Crouch

 4 = CHS0_LETTERS_TREE_FLBR_JC: Letters, Tree pattern: Uses FLBR J C to indicate Forward, Left, Back, Right, Jump, Crouch

 5 = CHS0_LETTERS_CENTERED_USER_JC: Letters, Centered pattern: Uses whatever keys the user has bound for +forward, +moveleft, +back, +moveright, to indicate Forward, Left, Back, Right, and J C to indicate Jump and Crouch

 6 = CHS0_LETTERS_TREE_USER_JC: Letters, Tree pattern: Uses whatever keys the user has bound for +forward, +moveleft, +back, +moveright, to indicate Forward, Left, Back, Right, and J C to indicate Jump and Crouch

----------
4. History
----------
1.90
- Arrow characters style 2 added (better arrow graphics)
- Default display type (df_chs0_DisplayType) changed to new arrows style
- Display of "Walk" added (displayed as _ or W, depending on display option)
- Allow to be drawn when draw2d and hud is off

1.80
- cvars added for FontSize, FontColor, FontTransparency, LabelColor, OffsetX, OffsetY, DisplayType
- DisplayTypes: 1, 2, 3, 4 added

1.70
- Feature introduced
