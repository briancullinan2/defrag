=======================================
Mapping - VelocityPad Entities
=======================================

1. General Information
2. VelocityPad Entities
3. VelocityPads Examples
4. Additional Information
5. History

----------------------
1. General Information
----------------------

Special entities have been created in order to extend the capabilies mappers have for makig Defrag maps.

Use the "defrag.def" file provided in the tools folder.  Copy this file to your baseq3/scripts folder in order for radiant to use the new entity types.

-----------------------
2. VelocityPad Entities
-----------------------

trigger_push_velocity

Velocity Pads are similar to jumppads and launch ramps.  However, the trigger may be configured to add to the player's velocity, as opposed to just setting it.  For example, a jumppad may normally set the player's horizontal velocity to 800 UPS.  However, with velocity pads, you can instead ADD to the player's speed.  So if they jump on the jumppad with 0 UPS horizontal, they will then be bounced at 800 UPS.  BUT, if they jump onto the jumppad with, say, 200 UPS, then they will be bounced off at 1000 UPS (200+800).

*** NOTE: you MUST still create a jumppad target (like a normal jumppad), even if the target is not used by the trigger.

*** NOTE: velocity pads will not function outside of Defrag.

Below the KEYS and SPAWNFLAGS that differ from normal jumppads are listed:

//=============================================================================

-------- KEYS --------
target: this points to the target_position to which the player will jump.

speed: XY speed for player-directional velocity pads - either sets or adds to the player's horizontal velocity.

count: Z speed for player-directional velocity pads - either sets or adds to the player's vectical velocity.

-------- SPAWNFLAGS --------

PLAYERDIR_XY: if set, trigger will apply the horizontal speed in the player's horizontal direction of travel, otherwise it uses the target XY component.

ADD_XY: if set, trigger will add to the player's horizontal velocity, otherwise it set's the player's horizontal velociy.

PLAYERDIR_Z: if set, trigger will apply the vertical speed in the player's vertical direction of travel, otherwise it uses the target Z component.

ADD_Z: if set, trigger will add to the player's vertical velocity, otherwise it set's the player's vectical velociy.

BIDIRECTIONAL_XY: if set, non-playerdir velocity pads will function in 2 directions based on the target specified.  The chosen direction is based on the current direction of travel.  Applies to horizontal direction.

BIDIRECTIONAL_Z: if set, non-playerdir velocity pads will function in 2 directions based on the target specified.  The chosen direction is based on the current direction of travel.  Applies to vertical direction.

CLAMP_NEGATIVE_ADDS: if set, then a velocity pad that adds negative velocity will be clamped to 0, if the resultant velocity would bounce the player in the opposite direction.

------------------------
3. VelocityPads Examples
------------------------

+ 500 UPS Horizontal-only Adding (500 UPS is added to player's horizontal velocity, in whatever direction they are traveling):

PLAYERDIR_XY: ON
ADD_XY:       ON
speed:        500

PLAYERDIR_Z:  ON
ADD_Z:        ON
count:        0

Note that the Z stuff is needed in order to force the trigger NOT to use the normal jumppad target.

--------------------------------------------------

+ Vertical Launching, Horizontal Maintaining (bounces player upward, but maintains the player's horizontal velocity):

PLAYERDIR_XY: ON
ADD_XY:       ON
speed:        0

Note that the Z stuff is OFF, so that the jumppad uses the trigger target.  The XY stuff is set as indicated in order to maintain the player's horizontal velocity.  Without it, the player's horizontally velocity would be set to the trigger target.

--------------------------------------------------

+ Velocity Reducing 500 UPS, horizontal and vertical (slows the player down when they hit the trigger):

PLAYERDIR_XY: ON
ADD_XY:       ON
speed:        -500

PLAYERDIR_Z:  ON
ADD_Z:        ON
speed:        -500

CLAMP_NEGATIVE_ADDS: ON

Note that the CLAMP_NEGATIVE_ADDS spawn key is on.  Without this, if the player hit the trigger with less than 500 UPS, they would bounce backwards.  With this value set, instead they will be slowed down to 0 UPS if they have less then 500 UPS to start.

--------------------------------------------------

+ Velocity Setting, 1000 UPS, horizontal (sets the players speed, similar to a normal jumppad, but in whatever direction the player is traveling (not targeting the trigger target)):

PLAYERDIR_XY: ON
ADD_XY:       OFF
speed:        1000

-------------------------
4. Additional Information
-------------------------

Example maps are provided.

df-velopad1 shows how to use the Velocity Pad entities.

There are many different types of velocity pads that can be created by using the spawnflags and the speed and count keys.  Some types will seem "wrong", and probably are (not what you want).  Play around and test your pads.

----------
5. History
----------
1.90
- Feature Introduced
