==============
Grappling Hook
==============

1. Information
2. Quick Start
3. Server Settings And Hook Types
4. Mapping
5. History

--------------
1. Information
--------------

The grappling hook is available when selecting a map.

There are 4 types of grappling hooks:

- Quake3
- Swinging (with pull)
- Penduluum (similar to swinging, but no pull)
- Quake2

Select your hook style at map selection time.  Or, you may select the hook type through the df_hook_Type var.  Changing the var requires a map_restart to take effect.

The grappling hook color uses the same color as the player's rail color.

--------------
2. Quick Start
--------------

Hook firing is done through the +button5 button.  Bind a key to this.

bind <key> +button5

You can also set the grappling hook fire button through the standard q3 weapons setup menu

---------------------------------
3. Server Settings And Hook Types
---------------------------------

The hook type is set on the server, and is applied for all players.  The df_hook_Type cvar is used:

\df_hook_Type [ DEFAULT: 0 RANGE: 0 TO 3 ] - physics - grappling hook type

 0 = Quake 3
 1 = Swinging
 2 = Pendulum
 3 = Quake 2

*** requires map_restart to take effect

*** NOTE: the hook type may be overridden when the grappling hook item actually exists as an item on the map.  In this case, the hook type is dictated by the mapper (the default is the Quake3 hook type).

----------
4. Mapping
----------

As stated above, the hook type on the server is normally dictated by the df_hook_Type cvar.  However, as a mapper, you may specify a specific hook type to be used on a map.  This is done by actually creating the grappling hook item within the map, and using the "speed" key/value pair to dictate the grappling hook type.  After creating the grappling hook item in your map editor, open the entities window for the item, and create the "speed" key/value pair.  Set the speed to the desired hook type:

Speed:

 0 = Quake 3
 1 = Swinging
 2 = Pendulum
 3 = Quake 2

See the included sample df-weapon1.map for an example.

----------
5. History
----------
1.90
- Feature Introduced
