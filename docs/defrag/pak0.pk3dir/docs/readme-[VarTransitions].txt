===============
Var Transitions
===============

1. Information
2. Usage
3. Usage Examples
4. History

---------------------------------------
\df_transitions "vstr1 <vstr2> <vstr3>"
---------------------------------------
--------------------------------------------------------
transition vstr [ FORMAT: CVar Start Stop Speed Loop 0 ]
--------------------------------------------------------

--------------
1. Information
--------------

CVar Transitions allow special effects to be created (for video purposes, etc.) using the standard q3 engine.  It allows transitions to occur on standard or user create cvars and vstrs.  CG_Fov transitions, cg_thirdpersonrange transitions, etc. are possible.  Transitions created on the special DemoCam vstrs (df_demos_CamOffSet...) allow special effects on demo cams, such as camera rolls, etc.

--------
2. Usage
--------

In order to use VarTransitions, you must first create your transitions (at least one).  This is done by creating a vstr using the following format:

CVar Start Stop Speed Loop 0

- CVar = cvar name to transition

- Start = Starting value

- Stop = Stop value

- Speed = Speed of the transition

- Loop = Specifies if the transition should loop or not.  
 0 = No Loop
 1 = Standard Loop (Start->Stop, Start->Stop, ...)
 2 = Reversing Loop (Start->Stop->Start->Stop...)

- 0 = Must place a 0 at the end of the vstr in order to indicate that the transition should start at the beginning of the transition (start at the "Start" value)

You may create as many Transition vstrs as you want.  In order to activate the transitions, you must use the special cvar:

df_transitions

You specify all the transitions to activate by simply setting the df_transitions variable to all the vstrs you created. (\df_transitions "tran1 tran2 tran3"

-----------------
3. Usage Examples
-----------------

*** Note, you should first turn off Replays if it is on (set df_demos_ReplayMode 0).

EXAMPLE 1:
----------

We will create 2 transitions.  One will transition the cg_thirdpersonrange value.  It will start at 40, go to 1500, and back to 40 (reversing loop). We'll use a speed of 100. The second transition will be a single transition (no loop) of cg_fov from 150 to 90, using a speed of 25

1. First we create the Transition vstrs (note we can call them anything we want):

\set Tran1 "cg_thirdpersonrange 40 1500 100 2 0"
\set Tran2 "cg_fov 150 40 25 0 0"

2. Now, let's activate the transition (don't forget to set cg_thirdperson 1 first, to go into thirdperson mode)

\df_transitions "Tran1 Tran2"

3. That's it.  This will start the transitions.  The cg_fov transition will occur once, while the cg_thirdpersonrange transition will repeat until we stop it.  To stop it, type:

\df_transitions ""

*** NOTE: doing cg_fov transitions usually results in a FPS loss.

EXAMPLE 2:
----------

This example will create a camera roll during a DemoCam.

1. First, create a new camera position by loading a map, and create a camera position using the savepos feature.

2. Create our transition vstr

\set Tran1 "df_demos_CamOffsetAngleZ 0 360 25 0 0"

3. Prepare the demo cam

\df_demos_CameraMode 4 // set the cam mode to static (does not look at player)

4. Play the demo

5. While the demo is playing, activate the transition.  In the console, type:

\df_transitions "Tran1"

The camera should do a single roll.

----------
4. History
----------
1.90
- Feature introduced
