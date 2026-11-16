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
    id: 'koara',
    track: 'client',
    title: 'Koara',
    quote: 'Inventory: the art of knowing what you don’t have.',
    role: 'Full-stack developer',
    context: 'Real client · In production · Team of 4',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'NestJS', 'Prisma · PostgreSQL', 'Cloudflare R2'],
    stats: [
      ['Status', 'In production. Frontend on Vercel, backend on an Oracle server'],
      ['Client', 'Koara, a Honduran cosmetics and skincare store · Commercial freelance client'],
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
    id: 'lacolada',
    track: 'client',
    title: 'LaColada Honduras',
    quote: 'Clean clothes, zero friction: from directions to wash cycle.',
    role: 'Full-stack web developer',
    context: 'Commercial freelance client · In production · Solo',
    year: '2026',
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'PHP · SendGrid', 'Plesk · Nginx'],
    stats: [
      ['Status', 'In production at lacoladahn.com'],
      ['Client', 'LaColada Honduras, modern self-service laundromat franchise (Universitaria & Este branches) · Commercial freelance client'],
      ['Dates', 'September to October 2026'],
      ['Role', 'Solo developer: architecture, UI/UX, local business SEO, forms and VPS deployment'],
      ['Frontend', 'Astro 5, TypeScript, vanilla JS, custom responsive BEM styling, WebP picture pipeline'],
      ['Integrations', 'Google Maps coordinates, WhatsApp dynamic routing, SendGrid API, Google Tag Manager'],
      ['Hosting & Ops', 'IONOS Linux VPS, Plesk, Nginx, Cloudflare DNS & SSL'],
    ],
    blurb: 'Fast, static-first web platform for a modern laundromat franchise in San Pedro Sula. Branch routing, live schedules, WhatsApp integration and B2B quote pipeline.',
    lede: 'Built from scratch for the San Pedro Sula franchisees of LaColada. The platform connects customers to two physical branches (Universitaria and Este), calculates open/closed status in real-time, routes directions through Google Maps and WhatsApp, and captures commercial laundry leads for hotels, Airbnb hosts and local businesses.',
    summary: [
      'Multi-branch routing engine: a location selector modal with live open/closed badges calculated against local America/Tegucigalpa hours, deep-linking directly into Google Maps coordinates and WhatsApp.',
      'Custom WhatsApp conversion pipeline: pre-fills contextual messages per branch and service topic, driving immediate customer engagement from floating CTAs and branch cards.',
      'B2B lead generation: corporate laundry quote form with client-side field validation, anti-spam tokens, and an asynchronous PHP/SendGrid transactional email backend.',
      'High-performance Astro architecture: inlined critical CSS, zero JavaScript framework bloat, optimized WebP responsive picture sets, and near-perfect PageSpeed scores.',
      'Local business SEO: full Schema.org DryCleaningOrLaundry and WebSite JSON-LD schemas, dynamic metadata, and OpenGraph social preview assets.',
      'Production DevOps: self-hosted on an IONOS Linux VPS with Nginx and Plesk, fronted by Cloudflare DNS and automated SSL.',
    ],
    kicker: 'Commercial web platform · Astro and TypeScript',
    banner: { src: 'assets/projects/lacolada/cover.jpg', position: '50% 35%', dim: 0.35 },
    cover: {
      src: 'assets/projects/lacolada/cover.jpg',
      portrait: 'assets/projects/lacolada/cover-portrait.jpg',
      alt: 'LaColada Honduras: modern self-service laundromat website with hero and service cards',
    },
    gallery: [
      {
        src: 'assets/projects/lacolada/cover.jpg',
        alt: 'LaColada Honduras homepage hero with modern laundry machinery and call-to-actions',
        caption: 'Home hero: clean messaging, branch selector CTA, and quick navigation.',
      },
      {
        src: 'assets/projects/lacolada/ubicaciones.jpg',
        alt: 'LaColada Honduras branch locations page showing Universitaria and Este branches with live hours and directions',
        caption: 'Branch network: real-time opening hours, street addresses, and one-tap Google Maps routing.',
      },
      {
        src: 'assets/projects/lacolada/negocios.jpg',
        alt: 'LaColada B2B commercial laundry service page with interactive lead generation form',
        caption: 'B2B commercial laundry quote funnel: client-side validation and SendGrid email integration.',
      },
    ],
    links: {
      site: 'https://lacoladahn.com/',
      demo: 'https://lacoladahn.com/',
    },
  },
  {
    id: 'edificios-sandro',
    track: 'client',
    title: 'Edificios Sandro',
    quote: 'The rent is late. The system already knows.',
    role: 'Full-stack developer',
    context: 'Real client · In production · Team of 3',
    year: '2025',
    stack: ['React', 'Node.js · Express', 'PostgreSQL', 'Sequelize', 'Docker'],
    stats: [
      ['Status', 'In production on the client’s own servers'],
      ['Client', 'Edificios Sandro, an apartment and property rental business · Commercial freelance client'],
      ['Dates', 'November to December 2025'],
      ['Team', 'Three developers; I worked on both frontend and backend'],
      ['Workflow', 'Trello cards, a branch per card and pull requests'],
      ['Frontend', 'React 18, Vite, Tailwind CSS, React Router, Recharts'],
      ['Backend', 'Node.js, Express 5, Sequelize, PostgreSQL, JWT, Swagger, Docker Compose'],
    ],
    blurb: 'Rental management system for an apartment building: tenants, contracts, payments and maintenance in one place. In daily use on the client’s own servers.',
    lede: 'Edificios Sandro rents apartments across its building facilities. Our team of three built them a web system to run it: tenants and contracts, payments and receipts, apartment maintenance, reports and notifications, with separate views for administrators and tenants. Deployed and in daily use on the client’s own servers.',
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
    id: 'mobirent',
    track: 'client',
    title: 'MobiRent',
    quote: 'Rent the living room, skip the moving truck.',
    role: 'Frontend developer',
    context: 'Client prototype · Investor pitch · Solo',
    year: '2026',
    stack: ['Vue 3', 'JavaScript', 'Tailwind CSS', 'State Management', 'GitHub Pages'],
    stats: [
      ['Status', 'Interactive client prototype for investor pitch, hosted on GitHub Pages'],
      ['Client', 'MobiRent Honduras (new corporate branch) · Delivered in a 3-day turnaround'],
      ['Dates', 'November 12 to November 15, 2026'],
      ['Role', 'Solo frontend engineer: UI architecture, reactive state store, and role-based flows'],
      ['Frontend', 'Vue 3 (Composition API & reactive store), Tailwind CSS, Plus Jakarta Sans'],
      ['Deliverables', 'Renter catalog, real-time pricing calculator, owner dashboard, and live logistics stepper'],
    ],
    blurb: 'Interactive rental marketplace prototype built for a client’s investor pitch. Quoting engine, owner dashboard, and logistics dispatch in 3 days.',
    lede: 'A client needed an interactive web prototype of a rental marketplace for furniture and appliances in San Pedro Sula and Tegucigalpa to pitch their business model to investors. Built solo in a 3-day sprint, simulating three complete user workflows: renters, furniture owners, and operations dispatch.',
    summary: [
      'A real-time quoting engine that calculates daily, weekly, and monthly rates with an itemized breakdown: rental subtotal, MobiRent freight, service fee, and refundable security deposit.',
      'A 3-role interface simulating renters (catalog, search, city filter, checkout), equipment owners (earnings dashboard, listing management, payout status), and operations admins.',
      'An interactive 5-stage logistics stepper: assigning drivers, pickup, transit, customer delivery, and return with guarantee release.',
      'Centralized reactive state store in Vue 3 with localStorage persistence and cross-tab synchronization, allowing live multi-window demonstrations during investor pitches.',
      'Airbnb-inspired responsive design system with a built-in smartphone frame toggle for mobile projector presentations.',
    ],
    kicker: 'Rental marketplace web prototype · Vue 3 and Tailwind CSS',
    videoSoon: true,
    cover: {
      src: 'assets/projects/mobirent/cover.jpg',
      portrait: 'assets/projects/mobirent/cover-portrait.jpg',
      alt: 'MobiRent: furniture and appliance rental marketplace interface with catalog filters and pricing breakdown',
    },
    banner: {
      src: 'assets/projects/mobirent/banner.jpg',
      position: '50% 30%',
      dim: 0.45,
    },
    gallery: [
      {
        src: 'assets/projects/mobirent/catalog.jpg',
        alt: 'MobiRent marketplace catalog showing furniture and appliance items with city and category filters',
        caption: 'Catalog and discovery: City selection (San Pedro Sula / Tegucigalpa), categories, search, and condition badges.',
      },
      {
        src: 'assets/projects/mobirent/pricing-modal.jpg',
        alt: 'MobiRent price calculator modal showing itemized pricing breakdown for day, week, and month',
        caption: 'Transparent quoting engine: Real-time calculation per day, week, or month with freight, platform fee, and refundable deposit.',
      },
      {
        src: 'assets/projects/mobirent/logistics-stepper.jpg',
        alt: 'MobiRent operations dashboard with interactive 5-stage logistics tracking stepper',
        caption: 'Operations dashboard: Interactive 5-step delivery pipeline from driver assignment to return and deposit release.',
      },
      {
        src: 'assets/projects/mobirent/owner-dashboard.jpg',
        alt: 'MobiRent owner dashboard with accumulated earnings and active rental listings',
        caption: 'Owner portal: Accumulated earnings, bank payout tracking, and inventory listing management.',
      },
    ],
    links: {
      demo: 'https://dandavd.github.io/Prototipo_MobiRent/',
      github: 'https://github.com/DanDavD/Prototipo_MobiRent',
      youtube: '#',
    },
  },
  {
    id: 'hermes-agent-suite',
    track: 'software',
    title: 'Hermes Agent Suite',
    quote: 'AI is a tool to direct, not a substitute for engineering.',
    role: 'Full-stack & AI systems developer',
    context: 'Personal project · Solo · Shipped v2.0',
    year: '2026',
    stack: ['FastAPI · Python', 'Next.js · TypeScript', 'SQLite', 'OpenRouter API', 'macOS Swift'],
    stats: [
      ['Status', 'Shipped v2.0 · Local desktop workbench & native macOS app'],
      ['Dates', 'November 2026 · 13 merged pull requests'],
      ['Frontend', 'Next.js 14, TypeScript, Tailwind CSS, native macOS WKWebView'],
      ['Backend', 'Python 3.11, FastAPI, SQLite, OpenRouter multi-model routing'],
      ['Core workflow', '5-agent development & code review, $0 Prompt Enhancer, clipboard vision, direct disk patching'],
    ],
    blurb: 'A local AI engineering workbench I built to optimize my own workflow: directed 5-agent development, an in-composer prompt enhancer, clipboard vision, and direct-to-disk code patching.',
    lede: 'I built Hermes Agent Suite to solve real bottlenecks in my daily coding workflow. Instead of "vibe coding" or paying $20/month for subscriptions that lock you out mid-sprint, I built a local workbench where I direct specialized AI agents through architecture, implementation, and code review—cutting my monthly AI cost to ~$3.50 while keeping every decision under my control.',
    summary: [
      'A 5-agent pipeline (Architect, Code Maker, Code Reviewer, UI Maker, and UI Reviewer) that separates planning, implementation, and quality auditing instead of relying on a single unverified prompt.',
      'An in-composer $0 Prompt Enhancer and clipboard screenshot analyzer (Cmd+V) so I can turn rough ideas and error screenshots into structured engineering specs without switching browser tabs.',
      'Direct-to-disk surgical patching that applies targeted code diffs straight into my local project and summarizes exact line changes for immediate review in GitHub Desktop.',
      'A smart local workspace scanner that filters out build caches and irrelevant files, reducing token usage by 63% to 98% per turn.',
      'Packaged as a standalone macOS desktop app in Swift/Cocoa that launches its own background services automatically, backed by 17 unit tests and 13 merged pull requests.',
    ],
    kicker: 'AI engineering workbench · Next.js, FastAPI and Swift',
    cover: {
      src: 'assets/projects/hermes-agent-suite/cover.jpg',
      portrait: 'assets/projects/hermes-agent-suite/cover-portrait.jpg',
      alt: 'Hermes Agent Suite: dark-themed autonomous AI engineering workbench with prompt enhancer and multi-agent pipeline',
    },
    banner: {
      src: 'assets/projects/hermes-agent-suite/banner.jpg',
      position: '50% 50%',
      dim: 0.45,
    },
    gallery: [
      {
        src: 'assets/projects/hermes-agent-suite/diff-telemetry.jpg',
        alt: 'Hermes Studio dark workbench interface showing active chat session and execution telemetry',
        caption: 'The workbench: dark IDE interface with the in-composer Prompt Enhancer, collapsible file diff summary, and multi-model routing.',
      },
      {
        src: 'assets/projects/hermes-agent-suite/workbench.jpg',
        alt: 'Hermes Studio clean workstation view with model selector, project workspace scanner, and credits balance',
        caption: 'Workspace view: local project folder linking, model and logic selector, and live API credit balance.',
      },
    ],
    links: {
      github: 'https://github.com/DanDavD/hermes-agent-suite',
      roadmap: 'https://trello.com/b/vDr1joge/hermes-studio-v2-product-dev-ai-engineering-nov-12-14',
      youtube: '#',
    },
    videoSoon: true,
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
    id: 'cleancity-sps',
    track: 'software',
    title: 'CleanCity SPS',
    quote: 'Civic waste management solved through spatial routing, not guesswork.',
    role: 'Full-stack developer & routing lead',
    context: 'Puzzle Hackathon 2026 · 4th place of 14 · Team of 4',
    year: '2026',
    stack: ['Next.js 15', 'TypeScript', 'Supabase · PostGIS', 'MapLibre GL', 'Clean Architecture'],
    stats: [
      ['Award', '4th place out of 14 engineering teams · UNITEC Puzzle Hackathon 2026'],
      ['Scope', 'Citizen route tracking & municipal waste fleet dispatch for San Pedro Sula'],
      ['Role', 'Top contributor (32 commits, 15 merged PRs): routing engine & spatial modeling'],
      ['Architecture', 'Modular monolith on Clean Architecture (domain, application, infra, ui)'],
      ['Spatial Stack', 'PostgreSQL + PostGIS, MapLibre GL, OpenStreetMap, OSRM route optimization'],
    ],
    blurb: 'Intelligent municipal waste management platform for San Pedro Sula. Stop sequencer, Voronoi spatial zoning, and live truck dispatch in a 48h hackathon.',
    lede: 'Built by a team of four for the Puzzle Hackathon 2026 at UNITEC San Pedro Sula, earning 4th place out of 14 projects. CleanCity SPS bridges the gap between citizens tracking garbage collection trucks and municipal operators optimizing routes across complex urban sectors.',
    summary: [
      'Engineered the automated Stop Sequencer and route optimization pipeline (OSRM) with dynamic zone restrictions to calculate suggested truck paths.',
      'Modeled colonia boundaries across San Pedro Sula using Voronoi spatial partitioning and OpenStreetMap vector geometries.',
      'Connected real-time collection telemetry from Supabase/PostGIS into the citizen dashboard, providing live "en camino" and "ya pasó" route indicators.',
      'Applied strict Clean Architecture across 10 isolated modules, using lint boundaries to enforce zero dependency rule violations between domain and UI layers.',
      'Led team Git workflow as top contributor (32 commits, 15 merged pull requests) with peer code reviews, feature branching, and staging integration.',
    ],
    kicker: 'Civic waste logistics platform · Next.js and PostGIS',
    cover: {
      src: 'assets/projects/cleancity-sps/cover.jpg',
      portrait: 'assets/projects/cleancity-sps/cover-portrait.jpg',
      alt: 'CleanCity SPS: intelligent waste management and fleet routing interface for San Pedro Sula',
    },
    banner: {
      src: 'assets/projects/cleancity-sps/banner.jpg',
      position: '50% 30%',
      dim: 0.45,
    },
    gallery: [
      {
        src: 'assets/projects/cleancity-sps/citizen-map.jpg',
        alt: 'CleanCity SPS citizen view showing map routes, collection status, and neighborhood information',
        caption: 'Citizen portal: Interactive MapLibre GL map showing real-time collection status and recycling collection points.',
      },
      {
        src: 'assets/projects/cleancity-sps/fleet-admin.jpg',
        alt: 'CleanCity SPS admin view with fleet management, route editor, and live truck operations',
        caption: 'Operations dispatch: Fleet management dashboard with route editor and live truck tracking.',
      },
      {
        src: 'assets/projects/cleancity-sps/routing-diagram.jpg',
        alt: 'CleanCity SPS routing logic and spatial architecture diagram',
        caption: 'Spatial routing architecture: OSRM route sequencing paired with Voronoi colonia boundaries.',
      },
    ],
    links: {
      demo: 'https://clean-city-sps-kmgk.vercel.app',
      repos: [
        { label: 'Personal repo', href: 'https://github.com/DanDavD/CleanCity-SPS' },
        { label: 'Hackathon team repo', href: 'https://github.com/Puzzle-Hackathon-2026/beyond-code' },
      ],
      youtube: '#',
    },
    videoSoon: true,
  },
  {
    id: 'godboard',
    track: 'games',
    title: 'GodBoard',
    quote: 'Your fortune is another’s misfortune.',
    role: 'Gameplay programmer & UI/UX designer',
    context: 'Official 2026 Unity Game Jam · 1-week deadline · Solo',
    year: '2026',
    stack: ['Unity 6', 'C#', 'UI Toolkit', 'URP 2D', 'WebGL'],
    stats: [
      ['Dates', 'November 5 to November 12, 2026 (full 1-week deadline)'],
      ['Event', 'Official 2026 Unity Game Jam · Theme: “Lucky Number”'],
      ['Category', 'Digital board game of conquest (1 human player vs 3 AI bots)'],
      ['Engine', 'Unity 6, URP 2D, UI Toolkit (UXML/USS)'],
      ['Language', 'C# (pure engine-free core & bot AI), UXML, USS'],
      ['Core dynamic', 'The die is the pantheon: opposite faces sum to 7, so your sacred number is your rival’s curse'],
    ],
    lede: 'Built solo in one week (November 5 to 12, 2026) for the Official 2026 Unity Game Jam. Four ancient gods race for three temples on an altar-shaped parchment board where one six-sided die is the pantheon: opposite faces always add up to 7, so your lucky number is your rival’s curse.',
    summary: [
      'Pure C# game core and bot AI decoupled from UnityEngine, driven by an explicit turn state machine, C# events and an injectable IRandom for deterministic simulation and replayability.',
      'Comprehensive UI/UX design in UI Toolkit (UXML and USS design tokens) on an Okabe-Ito colorblind-safe palette, pairing every color with deity iconography, high-contrast typography (Cinzel display vs Inter numerals), and tactile audio-visual juice.',
      'Progressive disclosure onboarding: an interactive 4-quadrant rulebook modal, dedicated deity selection cards with divine power breakdowns, sacred/cursed dice references, and a standalone audio mixing panel with master, music and SFX sliders.',
      'Contextual in-game feedback: turn-order duels with dynamic outcome banners (“SACRED BEATS NEUTRAL”), a live Destiny Die banner with fortune/misfortune callouts, animated reinforcement badges, and skip march confirmations.',
      'Headless bot-vs-bot simulation engine balancing 1 Human vs 3 AI bots across 2,000 matches, backed by 348 EditMode unit tests across 25 suites covering combat, god powers, and state transitions (11,486 lines of C# + 4,905 of tests).',
    ],
    kicker: 'Digital board game of conquest · Unity 6',
    videoSoon: true,
    cover: {
      src: 'assets/projects/godboard/cover.jpg',
      portrait: 'assets/projects/godboard/cover-portrait.jpg',
      alt: 'GodBoard title screen: pantheon crest with the six-sided die, ancient parchment texture, and main navigation to Play, Rules, Deities, and Sound settings',
    },
    banner: {
      src: 'assets/projects/godboard/banner.jpg',
      position: '50% 50%',
      dim: 0.45,
    },
    gallery: [
      {
        src: 'assets/projects/godboard/board-gameplay.jpg',
        alt: 'GodBoard live match on the parchment altar: player status cards, Destiny 3 Good Fortune banner, reinforcement badges, and action bar',
        caption: 'Tactile match HUD: Built in UI Toolkit with Okabe-Ito colorblind-safe player cards, live Destiny Die banner, reinforcement counters, and crisp Cinzel/Inter typography.',
      },
      {
        src: 'assets/projects/godboard/deity-selection.jpg',
        alt: 'GodBoard deity selection screen showing Zeus, Ra, Thor, and Morrígan cards with their sacred numbers, curses, and Wrath powers',
        caption: 'Deity selection: Dedicated screen presenting the four gods on opposing faces of the d6, their sacred vs cursed numbers, and unique Wrath powers (Thunderbolt, Sun at Noon, Mjölnir, Harvest).',
      },
      {
        src: 'assets/projects/godboard/turn-order.jpg',
        alt: 'GodBoard turn order duel modal showing Zeus rolling 3 (Sacred) against Morrígan rolling 5 (Cursed) with Sacred Beats Neutral banner',
        caption: 'Turn-order duel: Visual face-off where rivals roll the d6 before Round 1, resolved through sacred, neutral, and cursed hierarchy with instant banner feedback.',
      },
      {
        src: 'assets/projects/godboard/how-to-play.jpg',
        alt: 'GodBoard How to Play modal organized into four clear quadrants: The Pantheon Die, Destiny & Wrath, The Round Flow, and Winning the Game',
        caption: 'Progressive disclosure rulebook: A 4-quadrant modal breaking down the complex board rules into digestible concepts without overwhelming the player.',
      },
      {
        src: 'assets/projects/godboard/sound-panel.jpg',
        alt: 'GodBoard floating sound settings modal with Master, Music, and SFX volume sliders over the ancient title screen',
        caption: 'Floating audio settings: Independent volume controls for the acoustic Greek-modal score and WebGL-tuned sound effects with baked echo tails.',
      },
      {
        src: 'assets/projects/godboard/cover.jpg',
        alt: 'GodBoard title screen featuring the ceremonial pantheon crest and main navigation',
        caption: 'Title screen: Ceremonial presentation with the pantheon die crest, setting the tone for an ancient strategy conquest before entering the match.',
      },
    ],
    links: {
      play: null,
      github: 'https://github.com/DanDavD/UnityGameJam',
      itch: 'https://itch.io/jam/official-unity-game-jam-2026/rate/5357436',
      roadmap: 'https://trello.com/b/NE6zNufB/godboard-game-jam',
      release: null,
      youtube: '#',
    },
  },
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

  // ---------- Software development ----------,
];
