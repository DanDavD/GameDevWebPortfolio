# Daniel David — Software Engineer & Indie Game Developer

Portfolio and engineering showcase featuring production full-stack web platforms, developer tools, and systems-level games backed by **1,041 automated tests**.

- **Live Portfolio:** [dandavd.github.io/GameDevWebPortfolio](https://dandavd.github.io/GameDevWebPortfolio/)
- **GitHub:** [github.com/DanDavD](https://github.com/DanDavD)
- **LinkedIn:** [linkedin.com/in/daniel-david242004](https://www.linkedin.com/in/daniel-david242004/)
- **Email:** [danielfdd2004@gmail.com](mailto:danielfdd2004@gmail.com)

---

## Commercial Software Experience

Full-stack applications built for businesses, deployed to production, and actively used by real stakeholders.

### Koara
Invoicing and inventory management platform for a Honduran cosmetics and skincare retailer, replacing manual paper workflows.
- **Stack:** Next.js 16, TypeScript, NestJS 11, Prisma 7, PostgreSQL, Cloudflare R2
- **Key Details:** Real-time inventory tracking, sales analytics, and tax authority (SAR) CAI billing compliance.
- **Role:** Full-stack developer in a team of 4 (23 merged PRs).
- **Links:** [Frontend Code](https://github.com/AzaliaFlores19/koara_frontend) | [Backend Code](https://github.com/AzaliaFlores19/Koara_backend) | [Video Demo](https://www.youtube.com/watch?v=mAXlnCBnFM8)

### LaColada Honduras
Production web platform for a modern self-service laundromat franchise with two active physical branches.
- **Stack:** Astro 5, TypeScript, Tailwind CSS, PHP / SendGrid, IONOS Linux VPS, Plesk
- **Key Details:** Multi-branch routing with live opening hours, dynamic WhatsApp conversion flow, and B2B corporate lead pipeline.
- **Role:** Solo full-stack developer (design, code, SEO, and VPS hosting).
- **Link:** [lacoladahn.com](https://lacoladahn.com/)

### Edificios Sandro
Web-based property management system for an apartment rental business in daily operational use.
- **Stack:** React 18, Vite, Node.js, Express 5, Sequelize, PostgreSQL, Docker Compose
- **Key Details:** Role-based dashboards for tenants and admins, lease tracking, payment receipts, and maintenance tickets.
- **Role:** Full-stack developer in a team of 3 (28 merged PRs).
- **Link:** [EdificiosSandro Repository](https://github.com/Rpaz17/EdificiosSandro/tree/develop)

### MobiRent
Interactive rental marketplace prototype for furniture and appliances built for an investor pitch.
- **Stack:** Vue 3 (Composition API), Tailwind CSS, Reactive Local Storage Store
- **Key Details:** 3-day rapid turnaround with real-time rate calculator (day/week/month), 3-role views, and 5-stage logistics tracking.
- **Role:** Solo frontend engineer.
- **Links:** [Live Prototype](https://dandavd.github.io/Prototipo_MobiRent/) | [Repository](https://github.com/DanDavD/Prototipo_MobiRent)

---

## Personal Software Platforms

Tools and platforms built to solve real workflow bottlenecks, architectural challenges, and civic problems.

### Hermes Agent Suite (v2.0)
Local AI engineering desktop workbench and native macOS app designed to direct multi-agent development workflows.
- **Stack:** Python 3.11, FastAPI, Next.js 14, TypeScript, SQLite, Swift / WKWebView
- **Key Details:** 5-agent pipeline (Architect, Code Maker, Reviewer, UI Maker/Reviewer), in-composer prompt enhancer, and direct-to-disk diff patching.
- **Optimization:** Workspace scanner filters build files, reducing prompt token costs by 63% to 98%.
- **Link:** [Repository](https://github.com/DanDavD/hermes-agent-suite)

### Universal AI Sync
Published Chrome extension enabling seamless conversation context transfer across AI platforms.
- **Stack:** JavaScript (ES6+), Manifest V3, Node.js, Express, Supabase (PostgreSQL), PayPal API
- **Key Details:** Custom DOM scrapers and event injectors for ChatGPT, Claude, Gemini, and Copilot.
- **Architecture:** MV3 service worker with session storage persistence surviving popup closures.
- **Links:** [Chrome Web Store](https://chromewebstore.google.com/detail/universal-ai-sync/hnfdhhaignnapkpkkhjocckiklgedaln) | [Repository](https://github.com/DanDavD/Universal-AI-Sync)

### CleanCity SPS
Municipal waste logistics platform and citizen route tracker for San Pedro Sula.
- **Stack:** Next.js 15, TypeScript, Supabase, PostgreSQL / PostGIS, MapLibre GL, OSRM Engine
- **Key Details:** Automated stop sequencing, Voronoi neighborhood zoning, and real-time truck tracking.
- **Award:** 4th place out of 14 engineering teams at UNITEC Puzzle Hackathon 2026 (Top contributor: 32 commits, 15 merged PRs).
- **Links:** [Live Demo](https://clean-city-sps-kmgk.vercel.app) | [Repository](https://github.com/DanDavD/CleanCity-SPS)

---

## Indie Game Development

Systems-level game programming combining deterministic architectures with rigorous automated testing.

### GodBoard
Digital strategy board game of territorial conquest (1 human player vs 3 AI bots) built for the Official 2026 Unity Game Jam.
- **Stack:** Unity 6, C#, UI Toolkit (UXML/USS), URP 2D
- **Key Details:** Pure C# engine-free core and bot AI decoupled from UnityEngine; balanced through 2,000 automated bot matches.
- **Testing:** 348 EditMode unit tests across 25 suites (11,486 lines C# + 4,905 lines tests).
- **Links:** [Repository](https://github.com/DanDavD/UnityGameJam) | [Game Jam Entry](https://itch.io/jam/official-unity-game-jam-2026/rate/5357436)

### Horde Carnage
Top-down arena boss fight built on a custom C++ engine over raylib 5.5.
- **Stack:** C++20, raylib 5.5, CMake, Emscripten, GitHub Actions
- **Key Details:** Fixed 60 Hz simulation, zero runtime heap allocations during combat (contiguous object pools), and deterministic PCG32 replays.
- **Testing:** 446 automated tests (14,359 assertions) on a headless core library with zero compiler warnings.
- **Links:** [Repository](https://github.com/DanDavD/Horde-Carnage) | [Play in Browser](https://dandavd.itch.io/horde-carnage-demo)

### Echo Protocol
Co-op multiplayer horror game for up to 4 players where voice loudness is the only light source.
- **Stack:** Unity 6, C#, HLSL, Fish-Net Networking, Steamworks SDK
- **Key Details:** Custom HLSL shader driven by real-time microphone RMS volume, blind NavMesh hearing AI, and server-authoritative multiplayer.
- **Testing:** 208 EditMode and 39 PlayMode automated tests (including headless network test).
- **Link:** [Repository](https://github.com/DanDavD/EchoGame)

---

## Technical Skills

- **Languages:** C++ (C++20), C#, TypeScript, JavaScript, Python, SQL, HLSL, Java
- **Full-Stack:** Next.js, React, Astro, Vue 3, NestJS, Node.js, Express, FastAPI, Tailwind CSS
- **Databases & Cloud:** PostgreSQL, PostGIS, Supabase, SQLite, Prisma, Sequelize, Docker, Cloudflare R2
- **Game & Graphics:** Unity 6, raylib 5.5, URP, Custom HLSL Shaders, Fish-Net Networking, UI Toolkit
- **DevOps & QA:** Git, GitHub Actions (CI/CD), CMake, Unity Test Framework, doctest, Linux VPS / Nginx

---

## Local Setup

```bash
git clone https://github.com/DanDavD/GameDevWebPortfolio.git
cd GameDevWebPortfolio
python3 -m http.server 8080
# Open http://localhost:8080 in your browser
```
