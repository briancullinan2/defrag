=======================================
Mapping - Shooter_TargetPlayer Entities
=======================================

1. General Information
2. Shooter_TargetPlayer Entities
3. Additional Information
4. History

----------------------
1. General Information
----------------------

Special entities have been created in order to extend the capabilies mappers have for making Defrag maps.

Use the "defrag.def" file provided in the tools folder.  Copy this file to your baseq3/scripts folder in order for radiant to use the new entity types.

--------------------------------
2. Shooter_TargetPlayer Entities
--------------------------------

- shooter_plasma_targetplayer
- shooter_grenade_targetplayer
- shooter_rocket_targetplayer

Normally, shooter functions fire missiles (rockets, plasma, or grenades) at a specified target.  The Shooter_TargetPlayer entity allows shooter functions to be created that shoot at the player instead.  There is a spawnflag option to attempt to predict the player's movement as well.

Below the KEYS and SPAWNFLAGS that differ from normal shooters are listed:

//=============================================================================

-------- KEYS --------

speed: adjusts XY leading of player target.

count: adjusts Z leading of player target.

-------- SPAWNFLAGS --------

TARGETPLAYER: If set, will aim at player instead of normal target.

PREDICT_XY: If set, will attempt to predict player's horizontal position.

PREDICT_Z: If set, will attempt to predict player's vertical position.  Only should use this if player will be in freefall, as it does not account for the player touching the ground.

//=============================================================================

In regards to speed and count, these vars may be used to lead the player (with or without prediction being on).  So, if you had prediction off, normally, speed and count would be 0, and the shooter would aim directly at the player.  If speed is set to 500, then the shooter will aim in front of the player (in the direction the player is moving) in the horizontal (XY) plane.  Using a negative value would aim behind the player.

Note that the PREDICT_Z accounts for gravity in the prediction, but does not concern itself about whether or not the player is on the ground or will hit the ground.  Therefore PREDICT_Z is generally only useful for special cases where the player is in freefall, and will not hit the ground before the missile reaches the player.

-------------------------
3. Additional Information
-------------------------

Example maps are provided.

df-shooter1 shows how to use the Shooter_TargetPlayer entities.

----------
4. History
----------
1.90
- Feature Introduced
