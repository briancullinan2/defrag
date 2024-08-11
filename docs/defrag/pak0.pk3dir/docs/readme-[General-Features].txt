================
General Features
================

This document contains misc. features not included in their own readme file.

1. Cvars
2. Menus

--------
1. Cvars
--------

\cg_crosshairColor [ DEFAULT: 7 (white) RANGE: 0 TO 7 ] - changes the crosshair color.  If cg_crosshairHealth is on, and the player's armor/health combo drop below 66, the crosshairHealth colors are used.

 0 = Black
 1 = Red
 2 = Green
 3 = Yellow
 4 = Blue
 5 = Cyan
 6 = Magenta
 7 = White

--------------------------------------------------
\cg_drawGun [ DEFAULT: 1 (on) RANGE: 0 TO 2 ] - changes display of the player's gun

 0 = gun is not displayed
 1 = gun is displayed
 2 = gun is displayed, but gun does not bob from running or landing.  Gun animations still are drawn.
 
--------------------------------------------------
\cg_drawDamage [ DEFAULT: 1 (on) RANGE: 0 TO 1 ] - turns on/off red marks display while taking damage
 
  0 = off
  1 = on

--------------------------------------------------
\df_lg_Knockback [ DEFAULT: 0 (off) RANGE: 0 (off) TO 1 (on) ] - toggles lightning gun knockback

*** requires map_restart to take effect

The knockback on the lighting gun is dictated by this cvar (set on the server), unless the lightning gun is actually picked up as an item, in which case the lightning gun knockback setting for the weapon (as set by the mapper), dictates if knockback is on (for the player that just picked up the lighting gun).

As a mapper, you may change the knockback on/off setting, by using the "speed" key/value pair in the entities window for the lighting gun.  To do this, create the lighting gun in the map, then open the entities window for the LG.  Create the "speed" key/value pair.

Speed:

0 = knockback off
1 = knockback on

Now, if the player picks up the lighting gun ingame, the setting you applied for the LG will override the server's df_lg_Knockback setting. Note that since the speed key/value pair is absent for the LG on normal maps (id, etc.), the knockback will be set to "off" for the player if the player picks up the LG ingame (even if the df_lg_Knockback setting is "on" for the server.)

--------------------------------------------------
\df_player_Sprites [ DEFAULT: 1 (on) RANGE: 0 (off) TO 1 (on) ] - toggles display of sprite icons above the player (chat ballons, excellent symbols, team icons, etc.)

--------
2. Menus
--------

Many of the various q3 cvars are available through the new Defrag menu system.  Defrag Setup -> Q3.
