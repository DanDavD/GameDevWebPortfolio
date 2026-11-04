// Projects shown in "Selected work" and in each project's dialog.
//
// track:   'games' or 'software', the tab the project lives under
// role:    what Daniel did on it
// context: real client, in production, class project, personal; solo or team
// stack:   short tags shown on the card (keep it to about five)
// Optional fields (credentials, gallery, banner, cover, links) can be left out or set
// to null: nothing is shown for them. A missing cover shows a visible "pending" frame.
//
// To add a link later, replace a `null` with the URL:
//   github:  the repository
//   play:    a page where the game runs in the browser (shows the "Play" button)
//   demo:    a live demo of a web app
//   store:   a Chrome Web Store (or other store) listing
//   site:    the project's own website or landing page
//   roadmap: a public roadmap or task board (Trello, GitHub Projects…)
//   repos:   several repositories, as [{ label, href }], each shown as its own code button
//
// blurb:     optional 1–2 line description for the card; the card falls back to `lede`
// note:      optional line under the dialog's buttons (e.g. why there is no public demo)
// videoSoon: show a "coming soon" video frame while the video is not published yet
//   release: the GitHub release page; its tag becomes the button label
//   itch:    the game's Itch.io page (no button is shown while it is null)
//   youtube: the YouTube video URL
//   poster:  optional still shown before the video plays, instead of YouTube's thumbnail
//
// Gallery shots are shown full width; give `width` and `height` for a small or tall
// picture (a popup, a phone screen) and it keeps its own size instead of stretching.
//
// Cover and banner `src` can be a picture (.jpg, .png, .webp, .gif) or a short muted
// loop (.mp4, .webm), which is much lighter than a GIF.

// Placeholder text for a project that is not filled in yet: shows as "Pending: …".
// Not used at the moment; kept for the next empty slot.
const pending = (what) => `Pending: ${what}`;

export const projects = [
  {
    id: 'horde-carnage',
    track: 'games',
    title: 'Horde Carnage',
    quote: 'You miss every dash you don’t take. You also get hit.',
    role: 'Game and engine programmer',
    context: 'Personal project · Solo',
    year: '2026',
    stack: ['C++20', 'raylib 5.5', 'CMake', 'Emscripten', 'GitHub Actions'],
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
      roadmap: 'https://trello.com/b/4Ii5Aoep/horde-carnage-roadmap',
      youtube: 'https://youtu.be/Oz9MaF9-lhU?si=sBYQJA1JJ-4oeXbH',
    },
  },
  {
    id: 'echo-protocol',
    track: 'games',
    title: 'Echo Protocol',
    quote: 'Find your voice. Then, for everyone’s sake, lower it.',
    role: 'Gameplay and multiplayer programmer',
    context: 'Personal project · Solo',
    year: '2026',
    stack: ['Unity 6', 'C#', 'HLSL', 'Fish-Net', 'Steamworks'],
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

  // ---------- Software development ----------
  {
    id: 'koara',
    track: 'software',
    title: 'Koara',
    quote: 'Inventory: the art of knowing what you don’t have.',
    role: 'Full-stack developer',
    context: 'Real client · In production · Team of 4',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'NestJS', 'Prisma · PostgreSQL', 'Cloudflare R2'],
    stats: [
      ['Status', 'In production. Frontend on Vercel, backend on an Oracle server'],
      ['Client', 'Koara, a Honduran makeup and skincare store, through UNITEC’s community-engagement program (vinculación), working directly with the client'],
      ['Dates', 'May to July 2026'],
      ['Team', 'Four developers; I worked on both frontend and backend'],
      ['Frontend', 'Next.js 16, React 19, TypeScript, Tailwind CSS 4'],
      ['Backend', 'NestJS 11, Prisma 7, PostgreSQL, JWT with role-based access, Swagger'],
    ],
    blurb: 'Invoicing and inventory system for Koara, a Honduran cosmetics store that used to invoice by hand. In daily use.',
    lede: 'Koara invoiced by hand. Our team built them a full invoicing system: invoices numbered within CAI ranges authorized by Honduras’ tax authority (SAR), inventory, customers, point of sale, sales reports and an audit log. The store now uses it every day.',
    summary: [
      'Reports, end to end: the NestJS reports module (sales, best sellers, frequent customers) and the four report tabs in Next.js that consume it.',
      'The inventory screen: product cards, add, edit and delete modals, category management and pagination, connected to the API.',
      'Product images stored in Cloudflare R2 through the S3 API, resized automatically in the browser before upload.',
      'API work: CRUD for clients and categories, search filters for products, clients and users, and the shopping-cart endpoints.',
      'Role-based route protection in the frontend, and Swagger documentation for the reports, clients and products endpoints.',
      '23 merged pull requests across the two repositories.',
    ],
    kicker: 'Invoicing and inventory web app · Next.js and NestJS',
    note: 'There is no public demo: the system runs on the client’s real data. The video was recorded locally with sample data.',
    cover: {
      src: 'assets/projects/koara/cover.jpg',
      portrait: 'assets/projects/koara/cover-portrait.jpg',
      // One alt for both crops: the product editor (desktop) and the sales overview (phones)
      alt: 'Koara screens: the product editor and the sales overview report',
    },
    banner: { src: 'assets/projects/koara/sales-overview.jpg', position: '50% 30%', dim: 0.4 },
    gallery: [
      {
        src: 'assets/projects/koara/sales-overview.jpg',
        alt: 'Koara sales overview report: invoices issued, sales before and after tax, unique customers and averages for a date range',
        caption: 'Sales overview: totals, taxes and averages for any date range, exportable to PDF. Sample data.',
      },
      {
        src: 'assets/projects/koara/inventory.jpg',
        alt: 'Koara inventory screen with product cards showing code, name, stock, price and edit, delete and add-to-cart buttons',
        caption: 'The inventory screen: products with stock, price and an out-of-stock state. Sample data.',
      },
      {
        src: 'assets/projects/koara/frequent-shoppers.jpg',
        alt: 'Koara frequent shoppers report listing customers with their number of purchases, last purchase date and total spent',
        caption: 'Frequent shoppers: purchases, last visit and total spent per customer. Sample data.',
      },
    ],
    links: {
      repos: [
        { label: 'Frontend code', href: 'https://github.com/AzaliaFlores19/koara_frontend' },
        { label: 'Backend code', href: 'https://github.com/AzaliaFlores19/Koara_backend' },
      ],
      roadmap: 'https://trello.com/b/54Niiogu/proyecto-koara',
      youtube: 'https://www.youtube.com/watch?v=mAXlnCBnFM8',
    },
  },
  {
    id: 'universal-ai-sync',
    track: 'software',
    title: 'Universal AI Sync',
    quote: 'Explaining it once was already too many times.',
    role: 'Full-stack developer',
    context: 'Personal project · Solo · Published',
    year: '2026',
    stack: ['JavaScript', 'Chrome Extension MV3', 'Node.js · Express', 'Supabase', 'PayPal API'],
    stats: [
      ['Status', 'Live on the Chrome Web Store, v1.0.1'],
      ['Category', 'Chrome extension with a licensing backend'],
      ['Platforms', 'ChatGPT, Claude, Gemini, Microsoft Copilot'],
      ['Extension', 'Vanilla JavaScript, Manifest V3, Vite 8'],
      ['Backend', 'Node.js 20, Express 4, Supabase (PostgreSQL), PayPal, Resend'],
    ],
    lede: 'A Chrome extension that copies a conversation from one AI chat to another, so you can continue in ChatGPT, Claude, Gemini or Copilot without explaining everything again.',
    summary: [
      'Text sync reads the source conversation from the page, builds a clean prompt and types it into the destination chat, splitting long chats into parts sized for each platform.',
      'File sync exports the whole conversation as a Markdown file and uploads it to the destination chat as an attachment.',
      'A scraper and an injector for each of the four platforms, on top of shared layers for DOM discovery and input-event simulation.',
      'The Manifest V3 service worker runs the sync and keeps its progress in session storage, so closing the popup does not stop it.',
      'A licensing backend for a freemium plan, built but not live yet: Express and Supabase with row-level security, PayPal subscriptions and webhooks, and license keys emailed through Resend and bound to one device.',
    ],
    kicker: 'Chrome extension · JavaScript and Node.js',
    cover: {
      src: 'assets/projects/universal-ai-sync/cover.jpg',
      portrait: 'assets/projects/universal-ai-sync/popup-portrait.jpg',
      // One alt for both crops: the popup (desktop) and file sync into Claude (phones)
      alt: 'Universal AI Sync: the extension popup, and a conversation exported from Gemini arriving in Claude as a Markdown file',
    },
    banner: { src: 'assets/projects/universal-ai-sync/cover.jpg', position: '50% 40%', dim: 0.45 },
    gallery: [
      {
        src: 'assets/projects/universal-ai-sync/popup.jpg',
        width: 400,
        height: 548,
        alt: 'The Universal AI Sync popup with Claude, ChatGPT and Gemini tabs detected, Claude as source and Gemini as destination',
        caption: 'The popup as it runs: it finds the open AI tabs, then you choose a source, a destination and a sync mode.',
      },
      {
        src: 'assets/projects/universal-ai-sync/store-popup.jpg',
        alt: 'The Universal AI Sync popup listing open ChatGPT and Claude tabs as source and destination, with text-based and file-based sync buttons',
        caption: 'The popup: pick a source and a destination tab, then sync by text or by file. Chrome Web Store listing artwork.',
      },
      {
        src: 'assets/projects/universal-ai-sync/store-before-after.jpg',
        alt: 'Comparison of copying a conversation by hand between AI chats versus moving it with Universal AI Sync',
        caption: 'The problem it solves: copying, pasting and explaining everything again. Chrome Web Store listing artwork.',
      },
      {
        src: 'assets/projects/universal-ai-sync/store-switch.jpg',
        alt: 'A conversation shown in ChatGPT and the same conversation continued in Claude',
        caption: 'One conversation, carried from ChatGPT to Claude. Chrome Web Store listing artwork.',
      },
    ],
    links: {
      github: 'https://github.com/DanDavD/Universal-AI-Sync',
      store: 'https://chromewebstore.google.com/detail/universal-ai-sync/hnfdhhaignnapkpkkhjocckiklgedaln',
      site: 'https://www.universalaisync.com',
      youtube: 'https://www.youtube.com/watch?v=k5hTZCVGwbI',
    },
  },

  {
    id: 'edificios-sandro',
    track: 'software',
    title: 'Edificios Sandro',
    quote: 'The rent is late. The system already knows.',
    role: 'Full-stack developer',
    context: 'Real client · In production · Team of 3',
    year: '2025',
    stack: ['React', 'Node.js · Express', 'PostgreSQL', 'Sequelize', 'Docker'],
    stats: [
      ['Status', 'In production on the client’s own servers'],
      ['Client', 'Edificios Sandro, a teammate’s family business that rents apartments in its building. Built for UNITEC’s User Experience course, working directly with the client'],
      ['Dates', 'November to December 2025'],
      ['Team', 'A group of three; I worked on both frontend and backend'],
      ['Workflow', 'Trello cards, a branch per card and pull requests'],
      ['Frontend', 'React 18, Vite, Tailwind CSS, React Router, Recharts'],
      ['Backend', 'Node.js, Express 5, Sequelize, PostgreSQL, JWT, Swagger, Docker Compose'],
    ],
    blurb: 'Rental management system for a family-run apartment building: tenants, contracts, payments and maintenance in one place. In use on the client’s own servers.',
    lede: 'Edificios Sandro, the family business of one of my teammates, rents apartments in its building. Our group of three built them a web system to run it: tenants and contracts, payments and receipts, apartment maintenance, reports and notifications, with separate views for administrators and tenants. The client runs it on their own servers.',
    summary: [
      'Set up the Express backend and built the API for users, tenants, branches and apartment maintenance, including the link between user accounts and tenants.',
      'Swagger documentation for the users, branches and maintenance endpoints.',
      'Frontend views for sign-in, forgotten password and code verification, users, branches, the admin dashboard, the profile page and the top bar.',
      'Connected those views to the API, including password changes and the tenant’s home screen.',
      '28 merged pull requests out of the project’s 90.',
    ],
    kicker: 'Rental management web app · React and Express',
    note: 'There is no public demo: the client runs the system on their own servers with real data. A video demo with sample data is on its way.',
    videoSoon: true,
    cover: null,
    banner: null,
    gallery: [],
    links: {
      github: 'https://github.com/Rpaz17/EdificiosSandro/tree/develop',
      roadmap: 'https://trello.com/b/2uon1RFQ/edificios-sandro',
      youtube: null,
    },
  },
  {
    id: 'movie-booking',
    track: 'software',
    title: 'Movie Ticket Booking System',
    quote: 'Every seat is the best seat until someone else books it.',
    role: 'Full-stack developer',
    context: 'Class project · Team of 4',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'NestJS', 'Prisma · PostgreSQL', 'Cloudflare R2'],
    stats: [
      ['Status', 'Course project, not deployed'],
      ['Context', 'University course. One shared API repository for four student groups; our group worked on the Grupo#2 branch, with its own frontend repository'],
      ['Workflow', 'Trello cards, a feature branch per card and pull requests into the group branch'],
      ['Dates', 'June 2026'],
      ['Team', 'A group of four; I worked on both frontend and backend'],
      ['Frontend', 'Next.js 16, React 19, TypeScript, Tailwind CSS 4'],
      ['Backend', 'NestJS, Prisma, PostgreSQL, JWT, Swagger, Nodemailer'],
    ],
    blurb: 'Cinema booking platform with seat selection, checkout, coupons, refunds and an admin panel. Built as a class project, run like a real one.',
    lede: 'A cinema booking system built by a group of four as a university course project and run like a real one, with Trello cards, feature branches and pull requests. Customers pick a showtime, choose their seats, pay by card or cash and can cancel under the refund policy. Admins manage movies, cinemas, rooms, showtimes, coupons and reports.',
    summary: [
      'Audit logging across the API: sign-in, showtimes, payments, reservations, cinemas, rooms, movies, roles and coupons, plus an endpoint to query the log with filters and pagination.',
      'Movie posters uploaded to Cloudflare R2 through the S3 API, with the movie’s poster URL updated on upload.',
      'Admin endpoints: paginated user listing with filters, user search and update, cinemas showing a given movie, and a CSV export of the reservations report.',
      'Admin views for movies, users, cinemas and rooms, and payment and refund tables with filters by method, status and date.',
      'Checkout: the payment page (card, or cash with a live change preview), the result page, and a two-step cancellation that calculates the refund from the cancellation policies.',
      'Wired the frontend to the real API: login, registration and logout with route middleware, and coupons, cancellation policies and reservations in place of mocked data.',
      '24 merged pull requests across the two repositories.',
    ],
    kicker: 'Cinema booking web app · Next.js and NestJS',
    note: 'Course project, not deployed. The API repository is shared by four student groups; our group’s work is on the Grupo#2 branch.',
    cover: null,
    banner: null,
    gallery: [],
    links: {
      repos: [
        { label: 'Frontend code', href: 'https://github.com/AzaliaFlores19/movie-ticket-booking-system-frontend/tree/Develop' },
        { label: 'Backend code', href: 'https://github.com/miguepity/MovieTicketBookingSystem-API/tree/Grupo%232' },
      ],
      roadmap: 'https://trello.com/b/oTNxr9gL/moviebookingpersonal',
    },
  },
];
