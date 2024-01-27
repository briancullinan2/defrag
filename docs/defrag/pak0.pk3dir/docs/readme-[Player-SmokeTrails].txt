===================
Player Smoke Trails
===================

1. Information
2. Config Vars
3. History

==============
1. Information
==============

Allows the player to create smoke trails while they move.  Note that the smoke trails will only occur on your local machine (other players will not see any smoke trails unless they turn smoke trails on locally themselves).

==============
2. Config Vars
==============

\df_player_SmokeTrails [ DEFAULT: 0.00 RANGE 0.00 TO 99.99 ] - specifies time duration (in seconds) of players smoke trails and other players smoke trails.

The number before the decimal indicates the number of seconds the main player's smoke trails should remain.
The number after the decimal indicates the number of seconds the other players' and the ghosts' smokes trails should  remain.

Example:

\df_player_SmokeTrails 0.10 // other players' and ghosts' smoke trails would last 10 seconds

\df_player_SmokeTrails 15.00 // main player's smoke trails = 15 seconds

\df_player_SmokeTrails 15.05 // main player's smoke trails = 15 seconds, other players' smoke trails = 5 seconds

*** NOTE: Setting the value to 0.00 will automatically turn off any existing smoke trails.

*** NOTE: If you need to have smoke trails to show a path, but then want to stop smoke trails (while you move around to take a screenshot), instead of setting df_player_SmokeTrails to 0.00, set it to 1.00.  This way while you move around, the new smoke trails you make will only last one second, while the original ones you creates will last the number of seconds originally specified by df_player_SmokeTrails.

==========
3. History
==========
1.90
- Feature introduced
