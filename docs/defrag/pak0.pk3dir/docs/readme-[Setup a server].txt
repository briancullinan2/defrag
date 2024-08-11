===============
Set up a server
===============

- Note
------
In single-player mode, Defrag prohibits non-local players from connecting. To work as a server, the game must be set to a multiplayer gametype, which the gametype autoconfig will do automatically if the server is running dedicated. To set up a listen server, you need to set df_gametype accordingly. Either way you should ensure that sv_maxclients is set properly.

The following cvars control the main aspects of the game. For further game configuration settings, please consult the appropriate documents.  We have also provided a short introduction on running and tweaking a Defrag server, which you can find in misc/misc/defrag-server-howto.zip.


- Settings
----------
\df_gametype [ DEFAULT: 0 RANGE: 0 TO 7 ]
  Manually selects the defrag gametype

  0: auto-config
  1: defrag
  2: tricks mode
  3: fast caps
  4: reserved (has no effect)
  5: multiplayer defrag
  6: multiplayer Tricks mode
  7: multiplayer fast caps

  Auto-config (value 0) lets defrag automatically determine the gametype based upon the map entities. It will enable a multiplayer gametype if quake is running in dedicated mode.


\df_promode [ DEFAULT: 0 RANGE: 0 (VQ3) TO 1 (CPM) ]
  Selects the physics type.
  
  0: VQ3: classic Quake3
  1: CPM: promode physics with your bunny on


\df_mode_tricksmode [ DEFAULT: 2 RANGE: 0 TO 7 ]
\df_mode_fastcaps [ DEFAULT: 2 RANGE: 0 TO 7 ]
  Select a preset config for Tricks Mode or Fast Caps.

  1: disable weapons, forbid jump-pads/teleporters/movers
  2: enable weapons, allow jump-pads/teleporters/movers
  3: disable weapons, allow jump-pads/teleporters/movers
  4: enable weapons, forbid jump-pads/teleporters/movers
  5: swinging hook
  6: Quake3 hook
  7: vanilla Quake3


- Server Administration
-----------------------
\df_sv_script_idleCfg [ TYPE: String DEFAULT: NULL ] - Set the config file to execute when the server has been idle for a set period of time. (see df_sv_script_idleDelay)

\df_sv_script_idleDelay [ TYPE: Integer DEFAULT: 50 ] - When the server idles, set the period of time before the idle script is executed. (see df_sv_script_idleCfg)


- Votes
-------
\df_vote_allowVotes		[ DEFAULT: 1 RANGE: 0 (off) TO 1 (on) ] - globally enables/disables votes
\df_vote_passVoteOnRatio	[ DEFAULT: .5 RANGE: 0.0  TO 1.0 ]	- ratio of yes votes required for the vote to pass
\df_vote_maxVotes		[ DEFAULT: 5 RANGE: 0  TO ... ]		- max callvotes per client (0: infinite)
\df_vote_voteDelay		[ DEFAULT: 30 RANGE: 0  TO ... ]	- seconds to be spent before a vote is discarded
\df_vote_allow_map		[ DEFAULT: 1 RANGE: 0  TO 1 ]
\df_vote_allow_map_restart	[ DEFAULT: 1 RANGE: 0  TO 1 ]
\df_vote_allow_nextmap		[ DEFAULT: 1 RANGE: 0  TO 1 ]
\df_vote_allow_gametype		[ DEFAULT: 0 RANGE: 0  TO 1 ]		- off by default, so clients don't disrupt the gametype autoconfig
\df_vote_allow_mode		[ DEFAULT: 1 RANGE: 0  TO 1 ]
\df_vote_allow_kick		[ DEFAULT: 1 RANGE: 0  TO 1 ]
\df_vote_allow_clientkick	[ DEFAULT: 1 RANGE: 0  TO 1 ]
