1. General Information
2. DemoCams
3. Ghosts
4. Replays
5. Accelmeter
6. Crosshair Stats
7. VarHelper Console Commands
8. Multiplayer Interference
9. Menu system
10. OSP Demo Support

----------------------
1. General Information
----------------------
This document lists the current known issues/bugs for this release.

-----------
2. DemoCams
-----------
- Using DemoCam mode 3 (thirdperson, free angles) - Cam Angle Offsetting does not work (Position and Radius offsetting do work)

---------
3. Ghosts
---------
- When creating a new ghost file (especially creating one from a demo) - the ghost file remains open until a new map is loaded or q3 is exited
- The ghost always uses the same player model that you have chosen
- No gun animations - the ghost does not do gun animations
- The ghost does not display powerups (during playback) that it had when the ghost was recorded (no haste smoke trails, no quad shader, etc.)
- When ghost is played with negative timescale, the player model animations are not smooth
- Plasma explosions are not properly aligned with the surface they impact
- Missile explosion animations play at the same speed regardless of ghost timescale
- First Person Missilecam for grenades is not smooth

----------
4. Replays
----------
- Cam mode switch to mode 4 requires a new cam activation for the mode change to take effect

-------------
5. Accelmeter
-------------
- There is no cvar validation on the accelmeter cvars (they may be set to invalid values)

------------------
6. Crosshair Stats
------------------
- There is no cvar validation on the CHS cvars (they may be set to invalid values)

-----------------------------
7. VarHelper Console Commands
-----------------------------
- varMath: floating point rounding errors occur

---------------------------
8. Multiplayer Interference
---------------------------
- Team-based Player2Player Interference Off is currently not implemented (just defaults to on or off for all players, regardless of team
- Weapon Interference Off option for gauntlet, mg, sg, rg, lg is currently not implemented
- When spectating another player inside the ghost miniview (PIP), gun animations for the other player do not work - the gun is displayed statically

--------------
9. Menu system
--------------
- Latched vars (ones that require a map_restart) will not reflect the future var value - they continue to show the current value

--------------------
10. OSP Demo Support
--------------------
- Playermodels/heads may not be correct

