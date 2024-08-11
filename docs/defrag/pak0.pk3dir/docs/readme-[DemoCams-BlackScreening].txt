==========================
DemoCams - Black Screening
==========================

1. Information
2. Usage
3. Config Variables
4. Usage Example
5. Additional Information
6. History

--------------
1. Information
--------------

Black-screening is similar to the concept of blue-screening (or green-screening) in movie production.  It allows you to play a demo, but mask out the things that you do not want to see, while maintaining the things that you do want to see.  You can then create AVI dumps from the demos.  This allows such things as playing a demo, and seeing only the player (no map items, weapons, etc. - no map for that matter!).  This can allow for cool effects when creating q3 movies.

--------
2. Usage
--------

The way this is accomplished is by using a special map called DF-BLACK.PK3.  This map is a large map (60k cube) that has no textures (actually, black textures).  You can force q3 to play a demo in a different map than where the original demo was created.  This is done by naming a bsp with the same name as the original map.  Since the black map is very large, most normal map demos will easily fit into the df-black bsp (if they don't, you'll get the hall-of-mirrors (HOM) effect).  This will hide the normal map textures during demo playback.

The second thing that is done is to mask out (or hide) the items that you do not want to be visible.  This is accomplished by using 2 cvars (df_demos_HideLocalEntities and df_demos_HidePacketEntities).

Now you can play the demo, and it will play back in the black map, and hide the desired entities.  You can then do screencaptures.

*** DF-BLACK.BSP can be found in the MAPS folder.

*** See the "Usage Example" section below

-------------------
3. Config Variables
-------------------

--------------------------------------------------
\df_demos_HideLocalEntities [ DEFAULT: 0 RANGE: 0 TO N (mask) ] - hides local entities

Add the following values to hide the desired entities:

LE_MARK              1
LE_EXPLOSION         2
LE_SPRITE_EXPLOSION  4
LE_FRAGMENT          8    // gibs and brass
LE_MOVE_SCALE_FADE   16   // water bubbles
LE_FALL_SCALE_FADE   32   // gib blood trails
LE_FADE_RGB          64   // teleporters, railtrails
LE_SCALE_FADE        128  // rocket trails
LE_SCOREPLUM         256  

// team arena - not used
LE_KAMIKAZE          512
LE_INVULIMPACT       1024
LE_INVULJUICED       2048
LE_SHOWREFENTITY     4096

511 = all (1+2+4+8+16+32+64+128+256) (not including team arena items)

--------------------------------------------------
\df_demos_HidePacketEntities [ DEFAULT: 0 RANGE: 0 TO N (mask) ] - hides packet entities

Add the following values to hide the desired entities:

ET_GENERAL           1
ET_PLAYER            2
ET_ITEM              4
ET_MISSILE           8
ET_MOVER             16
ET_BEAM              32
ET_PORTAL            64
ET_SPEAKER           128
ET_PUSH_TRIGGER      256
ET_TELEPORT_TRIGGER  512
ET_INVISIBLE         1024
ET_GRAPPLE           2048   // grapple hooked on wall
ET_TEAM              4096
ET_EVENTS            8192   // any of the EV_* events can be added freestanding

16383 = all (1+2+4+8+16+32+64+128+256+512+1024+2048+4096+8192)

----------------
4. Usage Example
----------------

Using DF-BLACK.BSP

1. Create a maps folder under the mod (defrag) folder.

2. Copy (out of the pk3), df-black.bsp to this folder.

3. Now, for every demo that you want to do this technique with, you will
have to copy DF-BLACK.BSP, and change the name to the proper map for the demo
(opc1.bsp, opc2.bsp, etc.)

4. Place these "faked" maps into a pk3.  Put them in the "maps" folder inside a zip, and rename the zip to pk3

5. Name the pk3 "zzz_Maps.pk3"

Inside zzz_Maps.pk3 should be:

maps\opc1.bsp
maps\opc2.bsp

6. Load a demo and check it out.  Now the demo should be playing inside an all black map.

7. Now, if you would like to hide some entities, say explosions, set: 

 \df_demos_HideLocalEntities 6 // (2+4)

8. To hide all entities except the player, use:

 \df_demos_HideLocalEntities  511   // (all)
 \df_demos_HidePacketEntities 16381 // (16383 (all) - 2 (player))

-------------------------
5. Additional Information
-------------------------
You can also use different camming techniques with black-screening.  Essentially, what you want to do is create your camming movements by recording your camming to a ghost, and then play the ghost back during the demo. 

*** See the "readme-[Ghosts-DemoCamSaving].txt" file for how to save democamming to a ghost.

Essentially what you want to do is record your camming during the demo as your normally would, but then use the ghost to play back your camming, inside the black map.  This will give you black-screening with different camera angles, etc.

----------
6. History
----------
1.90
- Allow entity hiding even if cheats are off

1.80
- Feature introduced
