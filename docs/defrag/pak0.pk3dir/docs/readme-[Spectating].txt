==========
Spectating
==========

1. Information
2. Config Vars
3. History

--------------
1. Information
--------------
2 new spectator modes have been added for use with live games.  The 2 spectator modes are "Replay" and "Autochase".  Replay spectating only works if there is a valid replay script for the map being played.  Autochase spectating works on any map.

- Autochase Spectating uses the democam mode Autochase

- Replay (viewcam) Spectating allows Replay Scripts to be used during a live game, to establish camera positions.  If df_demos_ReplayMode is 1, and there is a valid Replay Script for the map, and you are spectating a game, and following another player, the Replay Spectating will be active.  Just press +moveup (jump) to activate Replay Spectating.  Press +moveup again to switch back to regular spectating.

While spectating a live game, a few commands are mapped automatically.

Pressing +movedown while following another player will switch the spectator mode back to free spectator.

Pressing +moveup (jump) while following another player will switch to Replay (viewcam) Spectator mode, if:

- df_demos_ReplayMode 1
- There is a valid Replay Script file for the map

Pressing +moveup (jump) again will switch to Autochase Specator mode.

Generally, pressing +moveup cycles through the Spectator modes (NORMAL, REPLAY, AUTOCHASE).

Pressing +attack while following another player will switch to another player

*** NOTE: Using a replay script for spectating a live game will only change camera positions/angles. It will not activate other vars (won't activate timescale changes, fov changes, etc.)

--------------
2. Config Vars
--------------

\df_demos_ReplayMode [ DEFAULT: 1 RANGE: 0 TO 4 ] - sets the Replay Mode

 0 = Off
 1 = On (used during demo playback for maps that have replay scripts) and turns on/off Replay/Autochase spectating

1 = On.  If on, and a replay script exists for a given map, the script will be used during a demo.  Also turns on/off replay/autochase spectating

----------
3. History
----------
1.90
- Replay (viewcam) Spectating added
- Autochase Spectating added
