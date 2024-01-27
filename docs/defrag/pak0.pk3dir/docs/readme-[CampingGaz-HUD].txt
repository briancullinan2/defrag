Camping Gaz' Heads-Up-Display v0.0...0
Manual for the blind and sight impaired

Otherwise put, what does all this mean ffs?


Currently the CGazHUD® comprises 3 things :

- Acceleration Bar (red and above the crosshair)
  purely indicative insight on average acceleration of the player
  if the bar is on left side it means you decelerate, on right you accelerate
  the two white marks on both side visualize the fps independent acceleration
  you'll notice that obviously horizontal acceleration is what is the most affected by snapping in q3
  much more than jump height is.

- Strafing Helper Bar (greenish below the crosshair)
  It has 4 colors :
  - grey is the no-acceleration zone (if i remember well :p)
  - bright green is not useful to a human, say it's the accelerate-no-accelerate limit
  - green is the acceleration zone
  - yellow is the zone between turn-most-without-speed-loss and turn-most-possible-whatever-happens
  - the rest (no color) is the deceleration zone
  what can i say... stay in the green and closest possible to the bright green without touching it
  I suggest you watch a good strafing demo in lower timescale to understand.

- World Axes Bar (ill-taste coloured lowermost one), useful to spot where world axes and diagonals are
  why for? well for instance you can align yourself to the least degree, memorize an approximate dir and realign to it, things like that.
  each quadrant (i.e 90 degree span for the illiterate :p) is coloured arbitrarly but differently
  in later/next versions this will show you many sectors, each representing a possible acceleration value (there are 24 of them at 8ms)

- The Gaz'o'meter®
  when activated it's just a speedometer but one that has balls
  I bet it will conflict with other parts of the defrag hud, anyway.

None of those is anyhow configurable, it's just the way it is, feel free to suggest changes though.

The ones that are view or keypresses dependent are zoomable!
Not so useful except for accurate alignment or low timescale use, in demos or otherwise

It is to be noted that the hud bases itself on the value in pmove_msec to estimate physics frametime,
however this has very little or no impact if the value is flawed (only noticeable on ground but then the hud is not very usable :p)

Enjoy! (and if you think it's not the best hud ever, screw yourself because i use it and it is)

