=============
Demos Seeking
=============

1. Information
2. Config Vars
3. History

==============
1. Information
==============

Allows a demo to be played quickly to a user specified time within the demo.  Used only during demo viewing.

==============
2. Config Vars
==============

\df_demos_Seek [ DEFAULT: 0.00 RANGE 0.00 TO XX.XX ] - specifies a time, in minutes.seconds, within a demo, to seek to

Specify xx to seek to a minutes value time
Specify .xx to seek to a seconds value time
Specify a negative value to seek to the beginning of a game (if game is in warmup)

Examples 1 - absolute seeking:

\df_demos_Seek 2     // seeks to 2:00 in a demo
\df_demos_Seek 3.23  // seeks to 3:23 in a demo
\df_demos_Seek -1    // seeks to 0:00 in a demo (seeks past the game warmup)

*** NOTE:  when specifying a value in minutes only (no seconds), the system seeks in hyper-speed mode (10 times faster than normal mode).  Hyper-speed seeking is not as accurate, and will not always stop exactly at the x.00 minute mark (may pass it by a second or 2).

Examples 2 - relative seeking:

\"varMath df_demos_Seek = $chsinfo(174) + .15" // seeks forward 15 seconds

the bind would look like:

\bind mykey "varMath df_demos_Seek = $chsinfo(174) + .15" // seeks forward 15 seconds

==========
3. History
==========
1.91
- Use CHS info item 174 in combination with varMath to do forward seeking based on an interval

1.90
- Feature introduced
