
==========
Autorecord
==========

/df_autorecord [0-3] (default: 0)
	0 - disables autorecord
	1 - enables autorecord
	2 - no longer used - has no effect
	3 - Selective - keep only the record demos

/df_country
	Sets up your country for demo naming.

/df_name
	Sets up your name for demo naming.
	When Defrag is started for the first time, it will automatically set this cvar from the Quake3 player name.

/df_competition [ TYPE: STRING - DEFAULT: NULL ]
	Demo marker. Indicates the demo has been intended for that particular contest.
	Note: this cvar will not be saved to your q3config.cfg, and will have to be set each time you load Quake3.

/df_ar_stopdelay [ TYPE: INTEGER - DEFAULT: 1800 ]
	sets the period of time in milliseconds to be elapsed from the run completion before the autorecord stops recording.

/df_ar_speedcapture_format [ DEFAULT: 0 (off) RANGE: 0 TO 1 ]
	turns on/off the speedcapture.com demo name format for autorecord in Fast Caps.

/df_ar_format [ TYPE: String - DEFAULT: "$map.$-route[$gt.$phys.$-mode]$m.$-s.$-ms($pl.$plc)" ] - sets the demo name format used by the autorecord.

 The format string supports the following tokens :
   $map   : map name
   $gt    : gametype
   $phys  : physics type
   $route : tricks mode route
   $mode  : tricks mode / fast caps game-mode
   $m     : timer minutes
   $s     : timer seconds
   $ms    : timer milliseconds
   $pl    : player name
   $plc   : player country
   $$     : ouput a '$' character

 When a token can't be translated, the characters + and - can be used to modify the output:
   $+i : cancels the output of the character following the token in the format string.
   $-i : cancels the output of the character preceding the token.
 Both can be combined using $-+i. For example, "$m[$-+mode]_$p" will result in "mapname_physics" when no "mode" data is available.

