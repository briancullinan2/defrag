===========
Key Mapping
===========

1. Information
2. Usage
3. Usage Examples
4. History

--------------
1. Information
--------------

In Quake 3, input sampling is processed much faster than console commands.  Using such binds as:

bind DOWNARROW "varMath cg_thirdpersonrange + 1"

results in very distinct "steps" if DOWNARROW is pressed, since the key bind is not processed very frequently.  When using a bind such as this during demo viewing (or video creation), the effect is undesirable - the transition is not smooth.

KeyMapping allows commands to be bound to the normal +forward, +back, etc. commands, and therefore to be processed at a high rate.

--------
2. Usage
--------

The way to create KeyMaps is through special cvars provided:

- df_keymaps - specifies if keymaps are on or off

- df_keymaps_forward   - binds a command to the +forward key
- df_keymaps_back      - binds a command to the +back key
- df_keymaps_moveleft  - binds a command to the +moveleft key
- df_keymaps_moveright - binds a command to the +moveright key
- df_keymaps_moveup    - binds a command to the +moveup key
- df_keymaps_movedown  - binds a command to the +movedown key

You keep your normal movement key binds.  Mapping a KeyMap vstr to one of these keys will perform the specified command IN ADDITION TO the normal bind.  Inside demos, since +forward, etc. have no effect, only the keymap command will be executed.

-----------------
3. Usage Examples
-----------------

*** Note, you should first turn off Replays if it is on (set df_demos_ReplayMode 0).

Suppose we want to do smooth cg_thirdpersonrange and cg_thirdpersonangle transitions (using the special varMath consolde command) while viewing a demo.  Normally, we could just use:

// the slow way

\bind UPARROW    "varMath cg_thirdpersonrange - 1"
\bind DOWNARROW  "varMath cg_thirdpersonrange + 1"
\bind LEFTARROW  "varMath cg_thirdpersonangle - 1"
\bind RIGHTARROW "varMath cg_thirdpersonangle + 1"

The problem is, as stated before, that the console command is processed infrequently by q3, and therefore the changes are not smooth.

So, instead, we will use KeyMaps for the same effect, but this time it will be much smoother.

First, we must bind our movement keys to keys that will not cause q3 to exit during demo playback:

// using keymaps

\bind UPARROW    +forward
\bind DOWNARROW  +back
\bind LEFTARROW  +moveleft
\bind RIGHTARROW +moveright

Now, create the KeyMaps:

\df_keymaps_forward   "varMath cg_thirdpersonrange - 1"
\df_keymaps_back      "varMath cg_thirdpersonrange + 1"
\df_keymaps_moveleft  "varMath cg_thirdpersonangle - 1"
\df_keymaps_moveright "varMath cg_thirdpersonangle + 1"

Finally, turn KeyMaps on:

\df_keymaps 1

Now, while viewing a demo, we may do smooth cg_thirdpersonrange and cg_thirdpersonangle transitions (make sure cg_thirdperson is 1).  Simply press the arrow keys to execute the specified commands.

To turn KeyMaps off:

\df_keymaps 0

----------
4. History
----------
1.90
- Feature introduced
