// Projects shown in "Selected work" and in each project's dialog.
// To add a link later, replace a `null` with the URL:
//   release: the GitHub release page; its tag becomes the button label
//   itch:    the game's Itch.io page (no button is shown while it is null)
//   youtube: the YouTube video URL
//   poster:  optional still shown before the video plays, instead of YouTube's thumbnail
export const projects = [
  {
    id: 'horde-carnage',
    title: 'Horde Carnage',
    quote: 'You miss every dash you don’t take. You also get hit.',
    role: 'Game and engine programmer',
    year: '2026',
    stats: [
      ['Build date', 'October 2026, v1.0.0'],
      ['Category', 'Top-down boss fight, solo project'],
      ['Engine', 'Custom, on raylib 5.5'],
      ['Language', 'C++20, CMake, Emscripten'],
      ['Core dynamic', 'Learn the Matriarch’s patterns by dying'],
    ],
    lede: 'One arena, one very hard boss: the Matriarch, a giant hairball. You run, aim with the mouse, dash through her attacks and drink one of three flasks when you dare.',
    summary: [
      'raylib only provides the window, input, 2D drawing and audio. The game loop, entities, collisions, AI, rendering and sound are my own code.',
      'Boss AI built from state machines with telegraphed attacks (warning, active, recovery): five attacks, combos, a shield each gun breaks a different way, a second phase and a frenzy.',
      'Fixed 60 Hz simulation with interpolated rendering. Fixed-size object pools, so nothing allocates during the fight, and a seeded PCG32 that makes every attempt replayable.',
      'Game feel without a single art or audio file: a procedural crypt, slow motion, screen shake, 25 synthesized sounds and a five-layer boss theme that follows the fight.',
      '446 tests (14,359 assertions) on a window-free core library, warnings as errors, and CI on GitHub Actions for Windows and a WebAssembly build. About 13,900 lines of C++ plus 7,700 of tests, and 24 design docs.',
    ],
    kicker: 'Top-down boss fight · Custom C++ engine',
    cover: {
      src: 'assets/projects/horde-carnage/hair-ring.jpg',
      alt: 'The Matriarch, a giant hairball, spinning a double ring of hair around the hunter',
      origin: '50% 45%',
    },
    banner: { src: 'assets/projects/horde-carnage/hair-ring.jpg', position: '50% 30%' },
    gallery: [
      {
        src: 'assets/projects/horde-carnage/shield-break.jpg',
        alt: 'The Matriarch glowing white as her shield breaks, with hairballs closing in on the hunter',
        caption: 'Second phase: the shield breaks under SMG fire while her hairballs close in.',
      },
      {
        src: 'assets/projects/horde-carnage/ring-gap.jpg',
        alt: 'A ring of hair spikes around the Matriarch with one gap the hunter has to find',
        caption: 'The Hair Ring always leaves one gap. Finding it is the fight.',
      },
    ],
    links: {
      github: 'https://github.com/DanDavD/Horde-Carnage',
      release: 'https://github.com/DanDavD/Horde-Carnage/releases/tag/v1.0.0',
      itch: 'https://dandavd.itch.io/horde-carnage-demo',
      youtube: 'https://youtu.be/Oz9MaF9-lhU?si=sBYQJA1JJ-4oeXbH',
    },
  },
  {
    id: 'echo-protocol',
    title: 'Echo Protocol',
    quote: 'Find your voice. Then, for everyone’s sake, lower it.',
    role: 'Gameplay and multiplayer programmer',
    year: '2026',
    stats: [
      ['Build date', 'October 2026, v0.2.0'],
      ['Category', 'Co-op horror-comedy, up to 4 players'],
      ['Engine', 'Unity 6, URP'],
      ['Language', 'C#, HLSL'],
      ['Core dynamic', 'Your voice is your only light'],
    ],
    lede: 'The cave is pitch black. Whisper and you see a few metres. Scream and the whole cavern lights up, but the blind monsters hunt by sound.',
    summary: [
      'Push-to-talk loudness, calibrated to each microphone (RMS to decibels, attack and release smoothing), drives a hand-written URP shader that lights the cave for up to four players.',
      'A blind monster that hunts by sound: a hearing sensor feeds an Idle, Investigate and Hunt state machine that moves on a NavMesh.',
      'Client-hosted multiplayer with Fish-Net over LAN and Steam: a server-authoritative monster, relics, altar and match flow, with friends-only Steam lobbies and proximity voice chat that the server relays only to players within hearing range.',
      'Three shared team lives, a team noise meter, talking relics with procedural voices, a procedural soundscape with no audio files, and a catacombs level built from a validated text map.',
      '208 EditMode and 39 PlayMode tests, including a hosted local server, a full win through the portal and a received voice packet played from a teammate. Scripted headless Windows build. About 14,500 lines of C# plus 3,700 of tests.',
    ],
    kicker: 'Co-op horror-comedy · Unity 6',
    banner: { src: 'assets/projects/echo-protocol/monster-hall.jpg', position: '50% 60%', zoom: 1.45, origin: '0% 62%' },
    cover: {
      src: 'assets/projects/echo-protocol/monster-hall.jpg',
      alt: 'The blind monster of Echo Protocol in a dark hall, the walls glowing cyan where a voice reached them',
      origin: '50% 55%',
    },
    gallery: [
      {
        src: 'assets/projects/echo-protocol/altar-glow.jpg',
        alt: 'The central altar of Echo Protocol, the room around it lit cyan by a spoken echo',
        caption: 'Talk near the altar and the room draws itself in cyan, as far as your voice carries.',
      },
      {
        src: 'assets/projects/echo-protocol/corridor-scream.jpg',
        alt: 'A long catacomb corridor in Echo Protocol, fully revealed by a scream',
        caption: 'A scream lights the whole corridor. Everything down there heard it too.',
      },
    ],
    links: {
      github: 'https://github.com/DanDavD/EchoGame',
      release: 'https://github.com/DanDavD/EchoGame/releases/tag/v0.2.0',
      itch: null,
      youtube: 'https://youtu.be/14y3lMGHbK8?si=NzlobNAiXhypkKl6',
      poster: 'assets/projects/echo-protocol/echo-ring.jpg',
    },
  },
];
