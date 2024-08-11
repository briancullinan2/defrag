=========
Green sky
=========

1. Information
2. Usage
3. Custom sky example

--------------
1. Information
--------------

zz-defrag_greensky.pk3 is supplied for movie makers that want to use special effects instead of the default skies in maps.
This is similar to black-screening except the structure of the map is still shown.

--------
2. Usage
--------

Copy zz-defrag_greensky.pk3 into the defrag directory. All default maps (q3dm* and q3ctf*) and maps that use default sky shaders will now have a green sky. 

If the map you want to green sky has a custom environment sky shader there is also a green environment sky included as well (env/green/green).

---------------------
3. Custom Sky Example
---------------------

To green sky ujump:

1. Extract ujump.shader to defrag/scripts
2. Rename ujump.shader to zz-ujump.shader
3. Open up zz-ujump.shader in a text editor
4. Look for a line with the keyword 'skyparms' in this case: skyparms env/space1 - -
5. Change to this: skyparms env/green/green - -
6. Save changes and close zz-ujump.shader
7. Place zz-ujump.shader into a pk3. (Zip the "scripts" folder and rename the zip to zz-ujump.pk3)

