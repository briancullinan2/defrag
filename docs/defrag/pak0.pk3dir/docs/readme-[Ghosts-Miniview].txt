=================
Ghosts - Miniview
=================

1. Information
2. Quick Start
3. Config Vars
4. History

--------------
1. Information
--------------
The Ghost Miniview is a small window that can be displayed on screen.  It can show various ghost camera views, or optionally, just the players view.

It should be noted that using the miniview can result in significant frames-per-second loss, due to the fact that the quake3 engine must render an entire 2nd scene.  FPS loss is more significant on maps that produce lower fps to begin with.

--------------
2. Quick Start
--------------
The ghost miniview is draw mode (df_ghosts_MiniviewDraw) is set to "1" by default.  This means the during ghost playback you will see the ghost's view.

To turn off the ghost miniview:
\df_ghosts_MiniviewDraw 0

To have the miniview always on (even if a ghost is not playing):
\df_ghosts_MiniviewDraw 2

--------------
3. Config Vars
--------------

These variables effect the Miniview (Picture-In-Picture, or PIP).  Generally the Miniview is used mainly with ghosts.  However, you can use the miniview even when a ghost is not playing, if you wish.  Nice for demos.

--------------------------------------------------
\df_ghosts_MiniviewDraw [ DEFAULT: 3 RANGE: 0 TO 8 ] - turns on/off the Miniview (PIP)

 0 = Off
 1 = On during ghost playback
 2 = On for ghost playback, and for demos
 3 = On for demos only
 4 = Always On (1P/3P switching style - opposite of mainview)
 5 = Always On, 1st Person
 6 = Always On, 3rd Person
 7 = Always On, Player spectating/tracking (specified by df_mp_TrackPlayerNum).  PIP is main player's view if other player is outside of PVS
 8 = Always On (PVS), Player spectating/tracking (specified by df_mp_TrackPlayerNum).  PIP is off if other player is outside of PVS

For mode 4 (always on), the miniview functions differently depending on if a ghost is playing or not.

- If a ghost not playing, then the miniview will display the opposite of the mainview, in relation to cg_thirdperson 1.

- If a ghost IS playing, and the df_ghosts_MiniviewCameraMode is set to 0, the miniview will show the player view (not the ghost view) in first person form.

- If a ghost IS playing, and the df_ghosts_MiniviewCameraMode is not 0, the miniview will use one of the ghost camera modes (the same modes that are available in df_ghost*_PlayCameraMode.

--------------------------------------------------
\df_ghosts_MiniviewCameraMode [ DEFAULT: 1 RANGE: 0 TO 12 ] - sets the miniview camera mode.

 0 = Non ghost camera mode
 1 through 12 = ghost camera mode (see df_ghost1_PlayCameraMode for information) if a ghost is playing.

--------------------------------------------------
\df_ghosts_MiniviewDrawGun [ DEFAULT: 1 RANGE: 0 TO 1 ] - turns on/off display of the gun in the miniview

--------------------------------------------------
\df_ghosts_MiniviewSize [ DEFAULT: 25 RANGE: 5 TO 75 ] - adjusts the size of the miniview

--------------------------------------------------
\df_ghosts_MiniviewOffsetX [ DEFAULT: 235 RANGE: -500 TO 500 ] - changes the horizontal position of the miniview elative to the center of the screen

--------------------------------------------------
\df_ghosts_MiniviewOffsetY [ DEFAULT: -155 RANGE: -400 TO 400 ] - changes the vertical position of the miniview elative to the center of the screen

--------------------------------------------------
\df_ghosts_MiniviewBorderSize [ DEFAULT: 4 RANGE: 0 TO 25 ] - changes the border size drawn around the miniview

NOTE: The border of the miniview uses the texture "backtile" found in pak0.pk3 of quake3, (\gfx\2d\backtile.jpg).  You can edit this file (back it up, or better yet, copy it to "zBackTile.jpg", edit it, and put the pk3 in your defrag folder) to change the color/texture of the border.

--------------------------------------------------
\df_ghosts_MiniviewFOV [ DEFAULT: 90 RANGE: 5 TO 250 ] - changes the field of view (FOV) of the miniview.

--------------------------------------------------
\df_mp_TrackPlayerNum [ DEFAULT: -1 (main player) RANGE: -1 to MAX_CLIENTS (63) ] - allows democams to track different players, as well as allowing the ghost miniview (PIP) to spectate other players.

Set the variable to the desired player to track.  If you are using democams, the democams will track this player.  If you are ingame, using the ghost miniview, the PIP will spectate the player specified.

*** NOTE: To get player ID information, in the console, type:

\info players

To spectate other players using the ghost miniview (PIP), set the df_mp_TrackPlayerNum to the proper player, and set the df_ghosts_MiniviewDraw var to 7 or 8.

Useful binds for tracking:

bind LEFTARROW  "varMath df_mp_TrackPlayerNum = $PreviousTeamPlayerNum"
bind RIGHTARROW "varMath df_mp_TrackPlayerNum = $NextTeamPlayerNum"

----------
4. History
----------
1.91
- Fix: Ghost/Miniview: Main player was not being displayed inside the miniview if a ghost camera mode was on (df_ghosts_MiniviewCameraMode) while a ghost was playing

1.90
- Miniview: now can be on even with different df_demos_CameraMode's on
- Miniview: draw options: 0 = off, 1 = on for ghost, 2 = on for ghost and demos, 3 = on for demos only, 4 = always on (1P/3P switching style), 5 = always on, 1st Person, 6 = always on, 3rd Person, 7 = other player tracking, 8 = other player tracking (pvs)
- Miniview: Draw gun (df_ghosts_MiniviewDrawGun) option added
- Miniview: Not drawn if scoreboard is being displayed
- Change: df_ghosts_MiniviewOffsetY default changed from -160 to -155

1.80
- Feature introduced
