
===============================
Cheat Prevention specifications
===============================

Due to technical issues, the prevention level is lowered in multiplayer modes. In order to keep away the suspicion, demos recorded in multiplayer modes should never be accepted in contests intended for individual performance.

- Cvars restriction
  g_speed                 locked to 320 (unless cheats are on)
  g_gravity               locked to 800 (unless cheats are on)
  g_knockback             locked to 1000
  g_quadfactor            locked to 3
  g_weaponRespawn         locked to 5
  g_weaponTeamRespawn     locked to 5
  dmflags                 locked to 0
  timescale               protected
  sv_fps                  clamped from 60 to 140 (unless cheats are on)
  com_maxFps              clamped from 60 to 140 (unless cheats are on)

- Cvars protection
  Defrag uses its own security schemes over sensitive cvars.

- Demo validation
  Demo data is checked for validity during playback.

- Bsp checksum verification
  Ensures that the bsp file used in a demo matches the local version.

- Timer Encryption
  Ensures the authenticity of a demo.
  
- Authentication
  Ensures that the client module is proper, by the mean of an authentication process.
