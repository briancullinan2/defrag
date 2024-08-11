========
Demos UI
========

1. Information
2. Demos List Navigation
3. Demo Filename Extensions
4. Mac and Linux Compatibility
5. History

--------------
1. Information
--------------

The Demos UI has been enhanced.  It supports folders, longer filenames, more demos, etc.  Also, the navigation of the demos list has been enhanced.  Also, the demos list will now "remember" the last demo that you played, so when you return to the demos list after playing a demo, the demo selection should be still at the last demo.

------------------------
2. Demos List Navigation
------------------------

Allows mouse wheel to be used.  Scrolling the wheel scrolls through the demos list.  Clicking the mouse button (button3) will move up one folder level (if not at the top demos folder).

Various keyboard commands are supported for demo list navigation:

- K_LEFTARROW or K_BACKSPACE: moves up a folder level

- K_RIGHTARROW, K_ENTER, or K_KP_ENTER: if a folder is selected, enters the folder.  If a demo is selected, plays the demo.

---------------------------
3. Demo Filename Extensions
---------------------------

The demos screen will show demos with the .dm_66, .dm_67, and .dm_68 extension (no more file renaming necessary).  Note that this only works with Quake3 version 1.32 or higher (doesn't work in 1.31 - files must still be renamed).

------------------------------
4. Mac and Linux Compatibility
------------------------------

If you are having problems using the Demo User interface from a Mac or Linux Operating System, you can try setting a cvar that will disable some of the features in the Demo UI.

\df_demos_UICompatibility [ MASK: DEFAULT: 0 (normal) RANGE: 0 TO 3 ] 

 0 = normal (all features enabled)
 1 = strict filenames -  forces file names and folders to use the same capitalization as the actual demo filenames
 2 = no folders - turns off the ability to browse folder below the demos folder
 3 = all options (strict filenames, no folders)

Try changing df_demos_UICompatibility to "1".  This will use strict filenaming, which is the main cause of the UI not working in Mac and Linux systems.  If that doesn't work, try "2", and then, ultimately "3".

----------
5. History
----------
1.91
- UI: Demos screen: Compatibility options for mac/linux users (df_demos_UICompatibility (mask - add the options) - 0:normal, 1:strict filenames, 2:no folders 3:strict filenames/no folders)
