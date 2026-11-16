# Daniel David — Software Engineering & Game Development Portfolio

Personal portfolio and engineering showcase representing commercial full-stack web platforms, developer tooling, and systems-level game engineering. Built with a zero-dependency, static-first architecture adhering to strict web performance, semantic accessibility, and minimalist typographic design standards.

Live Portfolio: [dandavd.github.io/GameDevWebPortfolio](https://dandavd.github.io/GameDevWebPortfolio/)  
GitHub Profile: [github.com/DanDavD](https://github.com/DanDavD)  
LinkedIn: [linkedin.com/in/daniel-david242004](https://www.linkedin.com/in/daniel-david242004/)

---

## Overview & Engineering Philosophy

This repository serves as both a live web portfolio and a consolidated index of production software and game systems developed by Daniel David. 

The underlying engineering philosophy bridges two disciplines:
1. Full-Stack Software Engineering: Shipping robust, maintainable, and type-safe applications for commercial clients and developer tooling, emphasizing Clean Architecture, automated testing, and relational database integrity.
2. Systems-Level Game Engineering: Designing decoupled game cores, deterministic state machines, custom C++ engine architectures, and server-authoritative multiplayer networking, verified across 1,041 automated unit, integration, and simulation tests.

---

## Commercial Software Engineering Experience

Over the past year, commercial freelance engagements have centered on delivering production-grade web systems for operating businesses and client stakeholders.

### 1. Koara (Commercial Freelance Client · In Production)
- Role: Full-Stack Developer (Team of 4)
- Timeline: May 2026 – July 2026
- Stack: Next.js 16, React 19, TypeScript, NestJS 11, Prisma 7, PostgreSQL, Cloudflare R2, Tailwind CSS
- Scope & Impact:
  - Replaced manual paper invoicing for a Honduran cosmetics and skincare retailer with a centralized invoicing, inventory, and point-of-sale system in daily production use.
  - Implemented legally compliant billing adhering to CAI (Código de Autorización de Impresión) ranges authorized by the Honduran tax authority (SAR).
  - Architected the end-to-end reporting engine in NestJS and Next.js, calculating real-time sales metrics, top-performing SKUs, and customer retention metrics.
  - Configured role-based access control (RBAC) via JWT, automated client-side image resizing, and Cloudflare R2 S3-compatible asset storage.
  - Repositories: [Frontend](https://github.com/AzaliaFlores19/koara_frontend) | [Backend](https://github.com/AzaliaFlores19/Koara_backend)
  - Demonstration: [YouTube Video](https://www.youtube.com/watch?v=mAXlnCBnFM8)

### 2. LaColada Honduras (Commercial Freelance Client · In Production)
- Role: Solo Full-Stack Web Developer
- Timeline: September 2026 – October 2026
- Stack: Astro 5, TypeScript, PHP, SendGrid API, IONOS Linux VPS, Plesk, Nginx, Cloudflare
- Scope & Impact:
  - Designed and deployed a high-performance web platform for a modern self-service laundromat franchise operating across two physical branches in San Pedro Sula.
  - Built a dynamic branch routing engine with real-time open/closed calculations based on local time zones, integrating one-tap Google Maps directions and branch-specific WhatsApp conversion pipelines.
  - Integrated a B2B commercial laundry lead generation pipeline backed by client-side validation and an asynchronous PHP/SendGrid transactional email backend.
  - Implemented local business SEO with structured Schema.org JSON-LD microdata, OpenGraph assets, and an optimized WebP responsive image pipeline.
  - Production Site: [lacoladahn.com](https://lacoladahn.com/)

### 3. Edificios Sandro (Commercial Freelance Client · In Production)
- Role: Full-Stack Developer (Team of 3)
- Timeline: November 2025 – December 2025
- Stack: React 18, Vite, Node.js, Express 5, Sequelize, PostgreSQL, Docker Compose, Swagger
- Scope & Impact:
  - Built an administrative web system for an apartment and property rental business to streamline tenant leasing, contract tracking, payments, and facility maintenance requests.
  - Architected backend REST endpoints for user authentication, tenant profiles, property branches, and issue tracking.
  - Integrated Docker Compose for consistent local development and staging containerization.
  - Repository: [EdificiosSandro on GitHub](https://github.com/Rpaz17/EdificiosSandro/tree/develop)

### 4. MobiRent (Client Prototype · Investor Pitch)
- Role: Solo Frontend Engineer
- Timeline: November 2026 (3-day rapid turnaround)
- Stack: Vue 3 (Composition API), JavaScript, Tailwind CSS, LocalStorage Reactive Store
- Scope & Impact:
  - Engineered an interactive rental marketplace prototype for furniture and home appliances in San Pedro Sula and Tegucigalpa, delivered on an accelerated schedule for investor presentations.
  - Built a real-time quoting engine computing daily, weekly, and monthly rates alongside freight, platform fees, and refundable deposits.
  - Simulated three concurrent workflows: customer discovery and checkout, furniture owner earnings portal, and an interactive 5-stage logistics tracking stepper.
  - Live Demo: [dandavd.github.io/Prototipo_MobiRent](https://dandavd.github.io/Prototipo_MobiRent/)
  - Repository: [Prototipo_MobiRent on GitHub](https://github.com/DanDavD/Prototipo_MobiRent)

---

## Personal Software Platforms & Systems Growth

Independent engineering projects built to address concrete developer friction, algorithmic challenges, and distributed architectures.

### 1. Hermes Agent Suite (AI Engineering Workbench · v2.0)
- Role: Solo Full-Stack & AI Systems Developer
- Stack: Python 3.11, FastAPI, Next.js 14, TypeScript, SQLite, OpenRouter API, Swift/macOS WKWebView
- Architecture:
  - Developed a specialized local desktop workbench to coordinate multi-agent software development workflows, mitigating token costs and subscription lock-in.
  - Implemented an isolated 5-agent pipeline separating planning, implementation, and quality auditing: Architect, Code Maker, Code Reviewer, UI Maker, and UI Reviewer.
  - Built an in-composer Prompt Enhancer, system clipboard screenshot ingestion (Cmd+V), and direct-to-disk surgical diff patching with line-by-line file modification summaries.
  - Integrated a local repository scanner that filters ignore paths and build artifacts, decreasing context window token consumption by 63% to 98% per prompt turn.
  - Repository: [hermes-agent-suite on GitHub](https://github.com/DanDavD/hermes-agent-suite)

### 2. Universal AI Sync (Published Chrome Extension · v1.0.1)
- Role: Solo Full-Stack Developer
- Stack: JavaScript (ES6+), Chrome Extensions Manifest V3, Node.js 20, Express 4, Supabase (PostgreSQL with RLS), PayPal API
- Architecture:
  - Developed and published a browser extension enabling users to synchronize ongoing conversational context across ChatGPT, Claude, Gemini, and Microsoft Copilot.
  - Built dedicated DOM scraping and simulated input-event injection engines for all four platforms, handling chunked text transmission and Markdown file exports.
  - Designed the execution pipeline within an MV3 service worker using session storage persistence to ensure sync processes survive popup close events.
  - Store Listing: [Chrome Web Store](https://chromewebstore.google.com/detail/universal-ai-sync/hnfdhhaignnapkpkkhjocckiklgedaln)
  - Repository: [Universal-AI-Sync on GitHub](https://github.com/DanDavD/Universal-AI-Sync)

### 3. CleanCity SPS (Civic Waste Logistics · Hackathon Finalist)
- Award: 4th place out of 14 engineering teams (UNITEC Puzzle Hackathon 2026)
- Role: Full-Stack Developer & Spatial Routing Lead
- Stack: Next.js 15, TypeScript, Supabase, PostgreSQL / PostGIS, MapLibre GL, OSRM Engine
- Architecture:
  - Developed an automated municipal waste collection and fleet dispatch platform for the city of San Pedro Sula.
  - Implemented an automated Stop Sequencer and route optimization pipeline leveraging OSRM and dynamic street network constraints.
  - Modeled neighborhood boundaries using Voronoi spatial partitioning and OpenStreetMap vector geometries.
  - Maintained strict Clean Architecture across 10 domain modules, enforcing unidirectional dependency rules.
  - Live Demo: [clean-city-sps-kmgk.vercel.app](https://clean-city-sps-kmgk.vercel.app)
  - Repository: [CleanCity-SPS on GitHub](https://github.com/DanDavD/CleanCity-SPS)

---

## Indie Game Development & Systems Programming

Game development projects built with studio-grade engineering practices, custom engine tooling, low-level optimization, and rigorous automated testing suites totaling 1,041 tests.

### 1. GodBoard (Official 2026 Unity Game Jam)
- Scope: Turn-based digital board game of territorial conquest (1 Human vs 3 AI Bots)
- Stack: Unity 6, C#, UI Toolkit (UXML/USS), Universal Render Pipeline (URP 2D)
- Engineering Highlights:
  - Completely decoupled the core simulation and bot AI from UnityEngine, structuring gameplay through an explicit turn state machine and an injectable `IRandom` interface for deterministic replayability.
  - Constructed the interface using UI Toolkit with semantic UXML and USS design tokens, implementing an Okabe-Ito colorblind-accessible visual palette and responsive typography.
  - Executed headless bot-versus-bot simulations across 2,000 automated matches to validate game balance.
  - Backed by 348 EditMode unit tests across 25 suites covering combat calculations, pantheon powers, and turn lifecycle transitions (11,486 lines of C# and 4,905 lines of tests).
  - Repository: [UnityGameJam on GitHub](https://github.com/DanDavD/UnityGameJam)
  - Game Jam Submission: [itch.io](https://itch.io/jam/official-unity-game-jam-2026/rate/5357436)

### 2. Horde Carnage (Custom Engine & Systems Programming)
- Scope: Top-down arena boss encounter against the Matriarch
- Stack: C++20, raylib 5.5, CMake, Emscripten, GitHub Actions
- Engineering Highlights:
  - raylib provides exclusively window initialization, raw input, 2D rendering primitives, and audio output. The core game loop, spatial entity management, AABB collision detection, behavior state machines, and audio synthesizers are written from scratch.
  - Fixed 60 Hz simulation loop with interpolated rendering, fixed-size contiguous memory object pools (zero heap allocations during combat), and seeded PCG32 pseudo-random generation for deterministic match execution.
  - Boss behavior driven by state machines with explicit telegraph phases (windup, active, recovery) and phase transitions.
  - Fully procedural presentation: dynamic crypt generation, 25 synthesized procedural sound effects, and a 5-layer adaptive boss score with zero external media files.
  - Backed by 446 automated tests (14,359 assertions) on a window-free core library, enforced with zero compiler warnings and automated multi-platform CI (Windows and WebAssembly).
  - Repository: [Horde-Carnage on GitHub](https://github.com/DanDavD/Horde-Carnage)
  - Web Demo: [dandavd.itch.io/horde-carnage-demo](https://dandavd.itch.io/horde-carnage-demo)

### 3. Echo Protocol (Multiplayer Systems & Shader Programming)
- Scope: Co-op horror-comedy for up to 4 players where sound is the only light source
- Stack: Unity 6, C#, HLSL, Universal Render Pipeline (URP), Fish-Net Networking, Steamworks SDK
- Engineering Highlights:
  - Custom HLSL compute/fragment shader pipeline translating microphone loudness (RMS to decibel mapping with calibrated smoothing curves) into dynamic spatial light propagation across a pitch-black cavern.
  - Blind enemy AI running on a NavMesh, driven by a sound-detection sensor system and state machine (Idle, Investigate, Hunt).
  - Client-hosted multiplayer networking via Fish-Net with server-authoritative state synchronization across enemy pathing, relic pickup states, and match outcomes.
  - Proximity-based voice relay ensuring audio packets are transmitted only to teammates within listening range.
  - Backed by 208 EditMode and 39 PlayMode automated tests, including automated local headless server execution and network packet verification.
  - Repository: [EchoGame on GitHub](https://github.com/DanDavD/EchoGame)

---

## Technical Skills Matrix

### Programming Languages
- C++ (C++20), C#, TypeScript, JavaScript (ES6+), Python 3, SQL, HLSL, Java

### Full-Stack & Cloud Platforms
- Next.js (14, 15, 16), React (18, 19), Astro 5, Vue 3, NestJS 11, Node.js, Express, FastAPI
- PostgreSQL, PostGIS, Supabase, SQLite, Prisma ORM, Sequelize
- Tailwind CSS (v3, v4), REST APIs, Swagger / OpenAPI, Cloudflare R2 / S3 API

### Game Engineering & Graphics
- Unity 6, raylib 5.5, Universal Render Pipeline (2D & 3D), HLSL Custom Shaders
- Fish-Net Networking, Steamworks SDK, NavMesh AI, UI Toolkit (UXML / USS), WebGL / Emscripten

### Tools, DevOps & Testing
- Git, GitHub, GitHub Actions (CI/CD), Docker, Docker Compose, CMake
- doctest (C++), Unity Test Framework (EditMode & PlayMode), PyTest
- Chrome Extensions (Manifest V3), Vite, Nginx, Linux VPS Management

---

## Portfolio Web Architecture

The portfolio application contained in this repository is built intentionally without external client-side frameworks or bundlers to demonstrate clean, maintainable web standards:

- Semantic Markup: HTML5 semantic tags with ARIA roles and keyboard accessibility.
- Stylistic System: Custom CSS properties (design tokens), clamp-based fluid typography, responsive flexbox/grid layouts, and dark mode contrast optimization.
- Client-Side State: Vanilla JavaScript ES modules separating project data, career history, and skill matrices from presentation logic.
- Performance: Zero external JavaScript runtime overhead, optimized WebP picture elements, and progressive enhancement fallbacks for non-scripted environments.

### Local Development Setup

To serve the portfolio locally on macOS or Linux:

```bash
# Clone the repository
git clone https://github.com/DanDavD/GameDevWebPortfolio.git
cd GameDevWebPortfolio

# Start a local static file server
python3 -m http.server 8080

# Open in your browser
open http://localhost:8080
```

---

## Contact & Profile Information

- Full Name: Daniel David
- Location: San Pedro Sula, Honduras (Available for remote software engineering worldwide)
- Email: [danielfdd2004@gmail.com](mailto:danielfdd2004@gmail.com)
- GitHub: [github.com/DanDavD](https://github.com/DanDavD)
- LinkedIn: [linkedin.com/in/daniel-david242004](https://www.linkedin.com/in/daniel-david242004/)
- Itch.io: [dandavd.itch.io](https://dandavd.itch.io/)
