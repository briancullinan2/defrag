
========================================
NEW FEATURES AND CHANGES FOR DEFRAG 1.91.8
========================================


- add: defrag scoreboard. (cvar: df_hud_scoreboard_size [0-1])
- add: crosshair stats: 320 through 324 - democamera position and angles.
- chg: triggers and items are now reset upon player respawn. (MP compliance, + alleviates the need for map_restart's in SP)
- chg: flags respawn time in single-player Fast Caps back to one second.
- chg: disabled broadcast messages with target_print's. Mappers must now explicitely ask for a broadcast through a spawnflag.
- chg: extended df_chs*_draw option 2 so it accounts for spectating as well. df_chs*_draw 2 will display the CHS only during demo playback OR when watching another player.
- chg: extended the start game screen maps list from 1024 defrag maps to 4096.
- chg: HUD jump meters off by default. (df_drawJumpmeters default to 0)
- fix: server restarting indefinitely when switching from single-player to multi-player mode.
- fix: inconsistent player ranking in multi-player.
- fix: bug with callvote kick.
- fix: wrong pickup event with triggers in Tricks Mode & Fast Caps.




========================================
NEW FEATURES AND CHANGES FOR DEFRAG 1.91.2
========================================

01. General
02. Multiplayer
03. Ghosts
04. Crosshair Stats

-----------
01. General
-----------
- Add: demoCams: allow cams to track a position instead of player, using targetposname.
- Add: replay: cvar (df_demos_ReplayDrawMask) for showing/hiding replay entities in debug modes.
- Add: replay camera mode: LOOK_POSITION (df_demos_ReplayCameraMode 12) - tracks a position (via 3 vars: df_demos_TargetPositionX, Y, Z) instead of a player.
- Add: cvar: cg_drawDamage for turning off red marks during damage.
- Add: added a new mode to the weapon autoswitch. (cg_autoswitch 2: switch only to new weapons)
- Chg: defrag versioning now uses a major.minor.build model.
- Chg: replay script maximum entities increased. (200 VAR, 100 CAM/TRAN/ACT, 400 LINK)
- Chg: remove 5 second minimum team switch. (for arena command and Cmd_Team_f command)
- Chg: removed df_ndm_RespawnPoint, replaced with respawnpoint console command.  Uses separate respawn point per player.
- Chg: removed CTF messages: team leader, flag pickup, capture, flag returns.
- Chg: separated checkpoint stats & events display settings (cvars: df_drawCheckpointStats, df_drawCheckpointEvents).
- Chg: doubled maps list buffer capacities (defrag: 1024 / quake3: 512).
- Chg: Server Cfg: Game Mode is now set through two separate cvars for Tricks Mode and Fast Caps: df_mode_tricksmode and df_mode_fastcaps.
- Chg: Server Cfg: default value for df_ndm_weaponsSet changed from 510 to 1022. (BFG enabled by default when no Game Mode is used)
- Fix: players being granted a machinegun in accuracy maps.
- Fix: $PreviousPlayerNum, $NextPlayerNum cycling: the cycling would not work for last player to join a mp server.
- Fix: Interference: grenades/rockets would effect other players if the person who fired them was dead.
- Fix: overbounce detection goes through players if interference is off for players.
- Fix: crosshair colors now work with defrag hud.
- Fix: UI: Demos screen: compatibility options for mac/linux users. (df_demos_UICompatibility (mask - add the options) - 0:normal, 1:strict filenames, 2:no folders 3:strict filenames/no folders)
- Fix: two menu issues with the maps list.
- Fix: wrong size for the checkpoints stats background when low negative values are displayed.
- Fix: fixed autoswitch not working with trigger based item pickup.
- Fix: sv_pure could be enabled and consequently break file based features. (ghosts, saved records, etc).
- Fix: fixed models in Fast Caps (+team skins are no longer used).

---------------
02. Multiplayer
---------------
- Add: per-player item pickup.
- Add: defrag scoreboard.
- Add: defrag vote system.
- Add: menu support for creating servers.
- Add: server configuration defaults to a certain config when the server remains idle for a set period of time. (cvars: df_sv_script_idleCfg / df_sv_script_idleDelay)
- Add: added client-side cvars for information purpose: defrag_version_server, defrag_version_client.
- Add: enabled team chat for spectators
- Add: Re-enabled audible lead changes ('You have taken the lead' etc) and added a toggle cvar: df_sound_leadChanges
- Chg: maximum respawn delay for items in multiplayer is now 10 seconds. (wait times of -1 not allowed)
- Chg: autorecord enabled in multiplayer.
- Chg: server browser back in.
- Chg: removed chat beeps. (cvar: cg_nochatbeep)
- Chg: flag capture events are no longer broadcasted.
- Chg: default settings in multiplayer are now: sv_maxclients 8, sv_fps 125, g_synchronousClients 0, df_mp_interferenceOff 3 (all interferences off).
- Chg: spectators can now vote and call votes.
- Chg: enabled lagometer and made its position user defineable.
- Fix: various timer issues.
- Fix: added multiplayer capabilities to trigger.
- Fix: fraglimit being hit on maps sporting frags-filters. (accuracy maps, o3j-fusion, etc.)
- Fix: record files being overwritten in spectator mode.
- Fix: disconnecting players no longer drop their items.
- Fix: wrong "missing cvar" warnings upon connecting to a server.
- Fix: wrong player speed and gravity warnings upon joining the spectators.
- Fix: going spectator no longer affects the vote ratio.
- Fix: single player gametypes are no longer votable.
- Fix: voting spec bug killed.
- Fix: fixed vote time bug.
- Fix: voter name not displayed.

----------
03. Ghosts
----------
- Add: allow ghost player-tracking cam to track a position instead of player, using targetposname.
- Add: liveammo options added - self-style missiles, quaded self-style missile. (missiles don't explode when hitting the player)
- Fix: ghost player would sometimes not appear during multiplayer game usage.
- Fix: ghost playback during multiplayer did not play at proper speed. (must use df_ghosts_AutoModeMP 1 to enable fix)
- Fix: Miniview: main player was not being displayed inside the miniview if a ghost camera mode was on. (df_ghosts_MiniviewCameraMode) while a ghost was playing

-------------------
04. Crosshair Stats
-------------------
- Add: (df_chs_UsePredicted) use predicted player data as option for input into CHS items and AccelMeter.  This makes the readout smoother (but less accurate) during multiplayer games.
- Add: allow individual labels to be turned off via '-' prefix on chs info item.
- Add: Added items: playername being tracked by df_mp_TrackPlayerNum - (192)CH_INFO_TRACKING_PLAYERNAME, (193)CH_INFO_TRACKING_PLAYERNAME_NOCOLOR.
- Add: Added items: overbounce low/high offsets (#300 thru #319) - useful for finding new OBs off of bouncepads, etc (use chs item #301).
- Add: Added items: (13)CH_INFO_DISTANCE_VIEWXYZ, (15)CH_INFO_DISTANCE_XY_Z_VIEWXYZ - shows XYZ distances from view height, not bottom of player.
- Add: Added items: (172)CH_INFO_LEVELSTARTTIME, (173)CH_INFO_CGMINUSLEVELTIME1, (174)CH_INFO_CGMINUSLEVELTIME2 - useful for df_demos_Seek - allows fast forward seeking by time amounts. (bind mykey "varMath df_demos_Seek = 
- Add: Added items: 320 through 324 - democamera position and angles.
$chsinfo(174) + .15" // seeks forward 15 seconds)
- Fix: (12)CH_INFO_DISTANCE_XYZ - was always displaying 0.
