===================
Demos - Mod Support
===================

1. Information
2. Config Vars
3. Suggested Mod Demo Settings
4. Known Issues
5. History

--------------
1. Information
--------------

Defrag now supports playing other q3 mod's demos.  This is useful for using the DemoCam features, for video creation, etc.

Many mods have altered data in the demos, compared to plain old q3 demos.  In order to attempt to be compatible with other mod demos, Defrag takes some specific actions.  In some cases, you can simply play a demo in Defrag without making any changes.  Other mod demos, such as Challenge Pro Mode Arena (CPMA), Orange Smoothie Productions (OSP), Rocket Arena 3 (RA3), etc. require selecting a "compatibility support" mode before playing the demo, which is done on the Demo screen, or through the df_demos_ModSupport cvar.

For unknown mods, try leaving the default of "off" set, and playing the demo.  If this doesn't work, try the next level of compatibility "General 1".  If this doesn't work, try "General 2".

*** Note: playing other mod's demos may still not work or may cause odd side-effects.

---------------
2. Config Vars
---------------

As stated above, the mod support setting may selected on the Demos page in the menu, or through the cvar:

--------------------------------------------------
\df_demos_ModSupport [ DEFAULT: 0 (off) RANGE: 0 TO 3 ] 

 0 = Off
 1 = General 1 (unrecognized data, events, etc. don't cause demo exit)
 2 = General 2 (General 1, plus additional data checking/clearing)
 3 = Orange Smoothie Productions (OSP) (Specific setting for OSP - so other players are visible)

------------------------------
3. Suggested Mod Demo Settings
------------------------------

The following are the recommended settings for the df_demos_ModSupport var:

Challenge Pro Mode Arena (CPMA)        - 1: General 1
Challenge Pro Mode Arena (CPMA) (MVDs) - 1: General 1       (also, set Check PVS: Off)
Orange Smoothie Productions (OSP)      - 3: OSP
Rocket Arena 3 (RA3)                   - 2: General 2

---------------
4. Known Issues
---------------
OSP: Currently, when playing OSP demos, the player gibs are not in the correct location.
OSP: The player models (body and heads) that were used to record the demo in OSP may not be correct in Defrag.

General: If you plan on using any of the Ghost Missile Cam features with other mod's demos, you must set the df_ghosts_SelfMissilesOnly cvar to 0 before you record a ghost from an mod's demo.

3Wave: Some efforts have been made to play 3Wave demos in Defrag.  However, many side effects will occur.  At the minimum, you should be able to play the demo (without it exiting Defrag).  It's useful mostly for viewing first person, single player trick demos recorded in 3Wave.  Watching full-on 3Wave matches - the side effects will be large - and probably not very useful.

----------
5. History
----------
1.90
- Feature introduced
