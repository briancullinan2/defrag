==================
Mapping for Defrag
==================

Please note: All directory paths are in relation to your Quake III directory ('C:\Program Files\Quake III Arena' by default).

Example maps have been provided as follows:
df-spawnroom-example.map - A spawn room where the door opens by shooting a button outside the spawn room.
df-accuracy-example.map - An accuracy map (or a level map like o3j-fusion) where you have to shoot targets to stop the timer.
df-level-example.map - A level map where you have to pick up a number of items to stop the timer.
df-shooter1.map - Shows how to use the Shooter_TargetPlayer entities.
df-velopad1.map - Shows how to use the Velocity Pad entities.
df-black.map & df-black-grid.map - Used for demo blackscreening.
df-cheez-gallery.map & defrag_gallery.map - Various examples of t

1. Download the Defrag mod from http://defraggers.free.fr/

2. Install the Defrag mod.

3. Copy the file 'defrag.def' from \DeFRaG\scripts into \baseq3\scripts.

4. Create your map.

5. Create a trigger_multiple over the area you want your timer to start (over the start line and up to the roof usually) and link this to a target_starttimer (select the trigger_multiple, select the target_starttimer, press ctrl+k).

6. If your map is long and/or has different sections you can put checkpoints in the map by creating a trigger_multiple in a doorway or around a teleporter (or anywhere you see fit)  and linking these to a target_checkpoint entity (select the trigger_multiple, select the target_checkpoint, press ctrl+k).

7. Create a trigger_multiple over the area you want your timer to stop (over the finish line and up to the roof usually) and link this to a target_stoptimer (select the trigger_multiple, select the target_stoptimer, press ctrl+k).

8. Compile the map and play it (without cheats) to see if they all work.


A few items of note:

- Use the defrag_gallery.map in the tools folder.  This has a bunch of examples within the map.  Compile the map and test it out to see what's included.  Often it's easier just to copy/paste entities from the defrag_gallery.map to your new map.

- Checkpoints will not work if cheats are on.

- Items that have a wait value of -1 will not respawn unless you trigger them to! If you want to use items that only spawn once per run, trigger them to spawn by linking the spawn point to all the items with 'wait -1' (select the spawn point, select the item, press ctrl+k).

- Doors that you want to close at the start of a run should be operated by triggers placed in the spawn room. Filling the spawn room with a trigger_multiple and linking it to the door out of the spawn room is the best way to do this. This method is used in df-spawnroom-example.map to stop players from shooting the button from outside the spawn room, the door is a weaponclip brush in this case.