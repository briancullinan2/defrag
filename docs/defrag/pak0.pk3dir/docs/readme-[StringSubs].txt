====================
String Substitutions
====================

1. Information
2. Usage Examples
3. Special Strings
4. History

--------------
1. Information
--------------
When using certain commands, such as varMath, varCycle, etc., there are times when one may need to use the actual values stored inside a vstr.  This is accomplished using String Subtitutions (StringSubs) via the $ character.  To use StringSubs, simpley use the $ along with the vstr name, such as $MyVar.  For those commands that support StringSubs, the value inside the vstr will be used.

Commands that support StringSubs: varCommand, varCycle, varJoin, varMath

*** Note that through the usage of varCommand, essentially any command can use StringSubs.

There are special strings (vstrs) that are defined, that will automatically contain certain information.  See that section below.

*** Note that you can use the crosshair stats information items as string substitutions, by using $chsInfo(#).  Also, you can use the text labels as well.  Use $chsLabel(#).  Example:  $chsInfo(23) retrieves the chsInfo item 23 = player's XY speed.

-----------------
2. Usage Examples
-----------------
\set user_num1 25	// user_num1 contains 25
\set user_num2 75	// user_num2 contains 75

\varMath user_newnum = $user_num1 // user_newnum = 25
\varMath user_newnum + $user_num2 // user_newnum = 25 + 75 = 100

\set user_name "1337-Defragger"
\varCommand say Hi, my name is $user_name	// say command issued, says: Hi, my name is 1337-Defragger

\varCommand say I'm at $posX $posY $posZ // say command issued, says: I'm at (current XYZ world position of player) - uses Special Strings posX, posY, posZ

\varCommand say I'm traveling at $chsInfo(23) UPS // say command issued, says: I'm traveling at (current speed of player) UPS - uses Special Strings chsInfo(#)

------------------
3. Special Strings
------------------
Certain special vstrs are defined automatically, and can be used whever StringSubs can be used.  The Special Strings will automatically contain specific information, such as the player's position, the mapname, etc.

The list of Special Strings are:

viewposX - player view's X world position (same value as posX)
viewposY - player view's Y world position (same value as posY)
viewposZ - player view's Z world position (posZ + viewheight)
viewposXYZ - player view's X Y Z world position

posX - player's X world position
posY - player's Y world position
posZ - player's Z world position
posXYZ - player's X Y Z world position

angX - player's X viewangle
angY - player's Y viewangle
angZ - player's Z viewangle
angXYZ - player's X Y Z viewangle

velX - player's X velocity
velY - player's Y velocity
velZ - player's Z velocity
velXYZ - player's X Y Z velocity

speedXY - player's horizontal speed
speedZ  - player's vertical speed

PreviousPlayerNum     - checks df_mp_TrackPlayerNum, finds previous player number, skips spectators
NextPlayerNum         - checks df_mp_TrackPlayerNum, finds next player number, skips spectators
PreviousTeamPlayerNum - checks df_mp_TrackPlayerNum, finds previous same-team player number, skips spectators
NextTeamPlayerNum     - checks df_mp_TrackPlayerNum, finds next same-team player number, skips spectators

mapname    - current map name
date       - current date in YYYYMMDD format
time       - current time in HHMMSSS format
playername - player's name (colors removed)
cgtime     - clientside timer

chsInfo(#)  - Crosshair Stats information item, as defined by #  // example chsInfo(43)
chsLabel(#) - Crosshair Stats text label, as defined by #        // example chsLabel(122)

saveposname - vstr name to store player pos, angles, and velocity

----------
4. History
----------
1.91
- Fix: $PreviousPlayerNum, $NextPlayerNum cycling: the cycling would not work for last player to join a mp server

1.90
- Feature introduced
