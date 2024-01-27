
=======================
Tricks Mode / Fast Caps
=======================

II.4/ Tricks Mode / Fast Caps
-----------------------------
These features only apply in the Tricks Mode and Fast Caps gametypes.

 /df_ndm_weaponsPickup [0-1] (default: 1)
   turns on/off the weapons pickup in Tricks Mode / Fast Caps.

 /df_ndm_damage[0-1] (default: 1)
   turns on/off player damage in Tricks Mode / Fast Caps

 /df_ndm_powerups[0-1] (default: 0)
   allows/disallows the use of powerups in Tricks Mode / Fast Caps.

 /df_ndm_weaponsSet [ TYPE: FLAGS - DEFAULT: "510" ]
   sets the weapons given to players upon respawn in Tricks Mode / Fast Caps.

 /df_ndm_nopad [ DEFAULT: 0 (enabled) - RANGE: 0 TO 2 ] - manages the behavior of jump-pads and bounce-pads in Tricks Mode / Fast Caps.
   0 - enabled
   1 - disabled
   2 - replaced by death-triggers

 /df_ndm_noteleport [ DEFAULT: 0 (enabled) - RANGE: 0 TO 2 ] - manages the behavior of the teleporters in Tricks Mode / Fast Caps.
   0 - enabled
   1 - disabled
   2 - replaced by death-triggers

 /df_ndm_nomover [ DEFAULT: 0 (enabled) - RANGE: 0 TO 1 ] - manages the behavior of the movers in Tricks Mode / Fast Caps.
   0 - enabled
   1 - disabled

 /df_ndm_itemsSpawn [ DEFAULT: 1 (selective) - RANGE: 0 TO 2 ] - manages the spawning of the items in Tricks Mode / Fast Caps.
   0 - items never spawn
   1 - selective
   2 - items always spawn

- Items-defined Timer:
 Not available in fast caps mode.
 Item can be used to define a route within the map. Any item type can be assigned a timer-start, timer-stop, or checkpoint command.

 /df_ndm_timer_start [item alias]
 /df_ndm_timer_stop [item alias]
 /df_ndm_timer_checkpoint [item alias]

 Possible item aliases are:
  Weapons: sg gl rl lg rg pg bfg
  Ammo: a_mg a_sg a_gl a_rl a_lg a_rg a_pg a_bfg
  Health: h5 h25 h50 mh
  Armor: as ya ra
  Powerups: quad bs haste invis regen flight
  Holdables: teleport medkit
  