// Projects shown in "Selected work" and in each project's dialog.
// To add a link later, replace a `null` with the URL:
//   itch:    the game's Itch.io page
//   preview: path to a gameplay clip or GIF, e.g. 'assets/projects/horde-carnage/preview.webm'
//   youtube: the YouTube video URL
export const projects = [
  {
    id: 'horde-carnage',
    title: 'Horde Carnage',
    quote: 'You miss every dash you don’t take. You also get hit.',
    role: 'Game and engine programmer',
    year: '2026',
    stats: [
      ['Build date', 'October 2026, v0.1.0'],
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
      'Game feel without a single art or audio file: a procedural crypt, slow motion, screen shake and 25 synthesized sounds.',
      '371 tests (13,788 assertions) on a window-free core library, warnings as errors, and CI on GitHub Actions for Windows and a WebAssembly build. About 10,000 lines of C++ and 22 design docs.',
    ],
    cover: { type: 'drawn' },
    gallery: [],
    links: {
      github: 'https://github.com/DanDavD/Horde-Carnage',
      release: 'https://github.com/DanDavD/Horde-Carnage/releases/tag/v0.1.0',
      itch: 'https://dandavd.itch.io/horde-carnage-demo',
      preview: null,
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
      ['Build date', 'October 2026, v0.1.0'],
      ['Category', 'Co-op horror-comedy, up to 4 players'],
      ['Engine', 'Unity 6, URP'],
      ['Language', 'C#, HLSL'],
      ['Core dynamic', 'Your voice is your only light'],
    ],
    lede: 'The cave is pitch black. Whisper and you see a few metres. Scream and the whole cavern lights up, but the blind monsters hunt by sound.',
    summary: [
      'Push-to-talk loudness, calibrated to each microphone (RMS to decibels, attack and release smoothing), drives a hand-written URP shader that lights the cave for up to four players.',
      'A blind monster that hunts by sound: a hearing sensor feeds an Idle, Investigate and Hunt state machine that moves on a NavMesh.',
      'Client-hosted multiplayer with Fish-Net over LAN and Steam: a server-authoritative monster, relics, altar and match flow, with friends-only Steam lobbies. Proximity voice chat is in progress.',
      'A shared team noise meter, talking relics with procedural voices, and a catacombs level built from a validated text map.',
      '187 EditMode and 24 PlayMode tests, including a hosted local server and a full win through the portal. Scripted headless Windows build. About 11,800 lines of C#.',
    ],
    cover: {
      type: 'image',
      src: 'assets/projects/echo-protocol/monster-closeup.jpg',
      alt: 'The blind monster of Echo Protocol, lit red against a cyan brick wall',
      zoom: 1.37,
      origin: '50% 31%',
    },
    gallery: [
      {
        src: 'assets/projects/echo-protocol/look-after-corridor.jpg',
        alt: 'A catacomb corridor in Echo Protocol, drawn by one procedural shader',
        caption: 'The catacombs after the procedural look: bricks, slabs and dust from one shader.',
      },
      {
        src: 'assets/projects/echo-protocol/look-before-checkerboard.jpg',
        alt: 'The same corridor with placeholder checkerboard textures',
        caption: 'The same corridor before it, on placeholder checkerboards.',
      },
    ],
    links: {
      github: 'https://github.com/DanDavD/EchoGame',
      release: 'https://github.com/DanDavD/EchoGame/releases/tag/v0.1.0',
      itch: null,
      preview: null,
      youtube: null,
    },
  },
];
