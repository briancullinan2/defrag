=======================
Ghosts - DemoCam Saving
=======================

1. Information
2. Walk through

--------------
1. Information
--------------
When you are using the various DemoCams, you can save your demo camming session to a ghost file.  This is called "DemoCam Saving".  Note that DemoCam Saving is considered a different technique then "Demo Recamming".

A reason that you would want to record you Demo Camming sessions to a ghost file is that you can then replay you Demo Camming during actual demo playback.

The way this is accomplished is by having the ghost system start recording a ghost as soon as a demo starts.  You do your Demo Camming.  Then, when you exit the demo, the ghost file is saved with all your camera movements.  To replay your Demo Camming during a demo, you set the ghost system to play back the ghost file during demo playback, and force the view to be through the ghost's eyes, by setting df_ghost1_PlayCameraMode 1.

You may also wish to record any cvar changes that you make during your demo camming. This is done using df_ghost1_RecordFileFormat 3 during recording, and using df_ghost1_PlayCameraMode 14 during ghost/demo playback.  The actual cvars to monitor/record are specified in the \defrag\system\Ghost-MonitoredVars.cfg file.

---------------
2. Walk Through
---------------

EXAMPLE 1:
----------

In this example we will use the DemoCam mode that allows us to move around freely inside demos.  We will move the camera around.  At some point we will change the cg_fov from 90 to 150.  During our recamming, the ghost will record all that we do.  When we play back the demo later, the ghost will play back as well, reproducing all the recamming that we did.

*** Note, you should first turn off Replays (df_demos_ReplayMode 0) if it is on.
*** Note, you should first turn off DemoCams (df_demos_CameraMode 0) if it is on.

1. First, we need to indicate to the system that we will be recording a ghost during the demo.

\df_ghosts_AutoMode 1

2. We want to record the demo camera's position and angles, not the player's position and angles.  To do this, set:

\df_ghost1_RecordView 1

4. We need to indicate to the ghost system that we want to record cvar changes as well, not just cam movements.

\df_ghost1_RecordFileFormat 3

5. Set the Demos Camera mode to the mode that allows free movement inside the demo.

\df_demos_CameraMode 1

6. We need to make binds for our movement keys to keys that will not cause the demo to exit.

\bind UPARROW    +forward
\bind DOWNARROW  +back
\bind LEFTARROW  +moveleft
\bind RIGHTARROW +moveright

7. Set our starting cg_fov

\cg_fov 90

8. Now we are ready to do some recamming.  Play the demo.  While the demo is playing, move around using the arrow keys.  At some point, change the cg_fov to 150 during the demo.

9. Now we have a ghost file (has the same name as the demo) that has recorded all our recamming including our cg_fov change.

10. Let's use the ghost file.  First, restore our old cg_fov value to whatever it was before.

11. Indicate to the ghost system that we will be using the special ghost camera mode that uses the ghost position and angles, as well as the cvar changes:

\df_ghost1_PlayCameraMode 14

NOTE: if you are not recording/playing back cvar changes, you can use the camera mode that turns off the ghost's gun, crosshair and hud:

\df_ghost1_PlayCameraMode 13

12. We probably want to turn off the display off the actual ghost (we don't really want to see the ghost during the demo, we just want to see the normal players)

\df_ghost1_PlayDrawPlayer 0
\df_ghost1_PlayDrawMissiles 0

13. Turn off the demo camera mode we were using before.

\df_demos_CameraMode 0

13. Now, indicate to the ghost system to play our ghost file (defaults to the same name as the demo name) while the demo is playing

\df_ghosts_AutoMode 2.

14. We need to display the player during the demo (not the ghost player, the normal player).  Set cg_thirdperson 1.  NOTE that some times q3 will change the cg_thirdperson value back to 0 during the demo.  If necessary, create a bind that we can use to set the cg_thirdperson value during the demo.  Try:

\bind uparrow "toggle cg_thirdperson"

15. Play the demo.  You should see the camera move as you did during the recamming phase.  The cg_fov change from 90 to 150 should also occur during the viewing of the demo.
