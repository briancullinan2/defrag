============
DF - Configs
============

1. Information
2. Usage
3. History

--------------
1. Information
--------------

A number of quake3 config files are provide in the cfgs folder.  Each of these config files have a specific usage.

*** CAUTION: Using these config files will change the bindings within defrag, depending on which config is executed.  It is recommended that you back up your q3config file first.

*** NOTE: Some of the configs use Defrag specific commands that can only be executed ingame, and will not work properly if you exec the configs from the main menu screen.  An example of this are the DF-[Savepos].cfg and the DF-[DemoCams].cfg - they set the filename to save your saved positions based on the mapname.

--------
2. Usage
--------
1. Make a backup copy of your q3config.cfg file.
2. Copy the config files in the cfgs folder to your defrag folder.
3. If you have defrag settings you like, copy and paste them into DF-[MyDefaults].cfg.  This file you can then later execute to set all the defrag settings back to your settings.
4. Run defrag.
5. Inside defrag, bring down the console and type: \exec autoexec

Now the DF-[ConfigCycling] config will be loaded.  This config lets you cycle through the other configs using the Page Up and Page Down keys. When you press Page Up or Page Down, the next config file in the sequence will be executed.  Each time a new config is loaded, new settings will be applied.

----------
3. History
----------
1.9
- DF-[Replay-Editing].cfg added

1.8
- Configs added