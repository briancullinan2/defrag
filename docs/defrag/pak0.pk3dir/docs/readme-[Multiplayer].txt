====================
Multiplayer Features 
====================

1. Information
2. Config Vars
3. History

--------------
1. Information
--------------
In preparation for full multiplayer (MP) support, certain MP features have been partially implemented.  Some of those features are particularly useful for setting up Defrag trick servers.

Currently, config vars are provided that allow turning off interference.  This means that on a trick server, players will not interfere with each other while performing tricks.  In addition, the visual display of these other players, and their missiles and explosions, may be hidden if desired.

Also, the ghost miniview (picture in picture) can be configured to spectate other players ingame, which is useful for multiplayer tricks.  Use the df_mp_TrackPlayerNum along with the df_ghosts_Draw vars to set this up.

---------------
2. Config Vars
---------------

\df_mp_InterferenceOff [ DEFAULT: 0 (off) RANGE: 0 TO 7 (bitmask) ] - SERVERSIDE VAR - allows servers to turn player-to-player interference off, as well as missile interference (for non-teammates, or for everyone).

 0 = Normal Q3 Inteference
 1 = Player2Player Interference Off
 2 = Missile Interference Off
 4 = Inteference Off - Enemies Only (teammates still intefere)

This var is a bitmask.  Add the options you want to get the desired inteference settings.

 3 = 1 + 2 = Player2Player And Missile Inteference Off
*5 = 1 + 4 = Player2Player Interference Enemies Only Off (* PARTIALLY IMPLEMENTED)
*7 = 1 + 2 + 4 = Player2Player And Missile Enemies Only Off (* PARTIALLY IMPLEMENTED)

*** NOTE ***
"Player2Player Interference Off" currently only works for everyone (teammates and enemies).
"Player2Player Interference Enemies Only Off" is not currently implemented, and therefore defaults to "Player2Player Inteference Off" for all forms of Player2Player interference.

--------------------------------------------------
\df_mp_NoDrawRadius [ DEFAULT: 200 RANGE: -N TO N ] - CLIENTSIDE VAR - hides other players/missiles/explosions inside radius, depending on the current df_mp_InteferenceOff setting.

-N = show players using "invisibility" shader if within radius
 0 = turns off players/missiles/effects hiding
 N = hides players/missiles/effects if within radius (and interference is off for that particular object)

Depending on the current server setting of df_mp_InterferenceOff, certain entities (players, missiles, explosions) can be hidden if they fall within the specified radius.  This is useful as it can be visually distracting if another player is in the way (even if that player will not physically interfere).

The variable is tied to the current server setting of df_mp_InterferenceOff.  If the current setting has turned off Player2Player interference, then all players that fall within the specified radius will not be drawn on the client's system.  Similarly, if df_mp_InterferenceOff has been set to disable missile interference, than missiles/explosions from other players will be hidden as well.

Setting the value to 0 disables all hiding of other entities, regardless of if they are interfering or not.

--------------------------------------------------
\df_mp_TrackPlayerNum [ DEFAULT: -1 (main player) RANGE: -1 to MAX_ENTITIES (63) ] - allows democams to track different players, as well as allowing the ghost miniview (PIP) to spectate other players.

Set the variable to the desired player to track.  If you are using democams, the democams will track this player.  If you are ingame, using the ghost miniview, the PIP will spectate the player specified.

*** NOTE: To get player ID information, in the console, type:

\info players

To spectate other players using the ghost miniview (PIP), set the df_mp_TrackPlayerNum to the proper player, and set the df_ghosts_MiniviewDraw var to 7 or 8.

Useful binds:

bind uparrow   "varMath df_mp_TrackPlayerNum + 1"
bind downarrow "varMath df_mp_TrackPlayerNum - 1"

Lets you switch between players by pressing up/down arrows.

Or, even better use the binds:

bind uparrow   "varMath df_mp_TrackPlayerNum = $PreviousPlayerNum"
bind downarrow "varMath df_mp_TrackPlayerNum = $NextPlayerNum"

which will cycle through the player numbers (using the stringsubstitutions), and skip back to the start of the player numbers when reaching the end, while skipping spectator players.

--------------------------------------------------
\df_chs_UsePredicted [ DEFAULT: 1 (off) RANGE: 0 TO 1 ] - use predicted player data as option for input into CHS items and AccelMeter.  This makes the readout smoother (but less accurate) during multiplayer games.

----------
3. History
----------
1.91
- Add: CHS: (df_chs_UsePredicted) use predicted player data as option for input into CHS items and AccelMeter.  This makes the readout smoother (but less accurate) during multiplayer games.
- Fix: Interference: grenades would effect other players if the person who fired them was dead
- Fix: $PreviousPlayerNum, $NextPlayerNum cycling: the cycling would not work for last player to join a mp server

1.90
- Interference: (df_mp_InterferenceOff) - allows servers to turn player-to-player interference off, as well as missile interference (for non-teammates, or for everyone)
- Interference/Hiding: (df_mp_NoDrawRadius) hides other players/missiles/explosions inside radius, depending on the current df_mp_InteferenceOff setting
- Spectating View: Picture-In-Picture (PIP) can be set to the viewpoint of other players, while maintaining the normal (main) view (useful for team trix, or player training)
