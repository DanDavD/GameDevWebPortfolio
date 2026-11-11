# CLAUDE.md

Guía de desarrollo, arquitectura y convenciones para **Daniel David - Game Developer & Full-Stack Portfolio**.

---

## 1. Visión General del Proyecto

- **Propósito**: Portafolio profesional de Daniel David enfocado en conseguir entrevistas como Generalist Game Developer, C++/C# Systems Programmer y Full-Stack Developer.
- **Enfoque de Diseño**: Atmósfera *Souls-like* oscura, sobria, elegante y profesional. Cero assets con derechos de autor; tipografía y diseño con homenajes sutiles (Garamond, ceniza, oro apagado, resplandor de hoguera, pantalla "YOU DIED" para 404/errores).
- **Hosting**: GitHub Pages (`https://dandavd.github.io/GameDevWebPortfolio/`).
- **Restricción Clave**: **Sin build step**, sin bundlers (ni Vite, ni Webpack) y sin dependencias npm en runtime. Todas las rutas de assets deben ser relativas para funcionar en subdirectorios de GitHub Pages.

---

## 2. Stack Tecnológico

- **HTML**: HTML5 semántico con atributos WAI-ARIA (tabs accesibles, dialog nativo, regiones de video).
- **CSS**: CSS3 nativo moderno (`css/tokens.css`, `css/base.css`, `css/main.css`), CSS Custom Properties, `@font-face` con fuentes locales (`.woff2`), `clamp()`, `min()`/`max()`, `backdrop-filter`.
- **JavaScript**: Vanilla ES Modules (`<script type="module" src="js/main.js">`).
- **Fuentes locales**: `Cormorant Garamond` (display) y `Hanken Grotesk` (cuerpo de texto).

---

## 3. Estructura de Directorios

```text
GameDevWebPortfolio/
├── .agents/skills/        # Skills para el agente (diseño, animación, accesibilidad)
├── .claude/skills/        # Skills sincronizadas para Claude
├── assets/
│   ├── fonts/             # Cormorant Garamond y Hanken Grotesk (.woff2)
│   ├── img/               # Fotos de perfil y fondos (profile.jpg, fog-treeline-1920.jpg)
│   └── projects/          # Subdirectorios por id de proyecto
│       ├── godboard/
│       ├── horde-carnage/
│       ├── echo-protocol/
│       ├── koara/
│       └── universal-ai-sync/
├── css/
│   ├── tokens.css         # Variables raíz (paleta base, tipografía, motion)
│   ├── base.css           # Resets básicos y estilos base
│   └── main.css           # Componentes, responsive, temas por proyecto
├── js/
│   ├── data/
│   │   ├── projects.js    # Definición de todos los proyectos (Games y Software)
│   │   ├── skills.js      # Medidores de habilidades y porcentajes
│   │   └── career.js      # Historial académico y laboral
│   ├── covers.js          # Lógica para covers en lista y preview desktop/móvil
│   ├── modal.js           # Renderizado dinámico del <dialog> modal de detalles
│   ├── reveal.js          # IntersectionObserver para animaciones de entrada
│   ├── secrets.js         # Easter eggs: Código Konami (Bonfire) y 5 clics (You Died)
│   └── main.js            # Punto de entrada, inicialización de tabs y renderers
├── index.html             # Página principal
├── 404.html               # Página personalizada con estilo "YOU DIED"
├── PRODUCT.md             # Especificación del producto y principios
├── PENDING.md             # Tareas pendientes, assets faltantes y notas
├── CLAUDE.md              # Este archivo de instrucciones y arquitectura
└── skills-lock.json       # Registro de skills instaladas
```

---

## 4. Estructura de Datos de un Proyecto (`js/data/projects.js`)

Cada proyecto en `projects` sigue este esquema:

```javascript
{
  id: 'slug-del-proyecto',       // Identificador único (usado en CSS y datasets)
  track: 'games' | 'software',   // Pestaña en la que aparece
  title: 'Nombre del Proyecto',
  quote: 'Frase sobria o deadpan',
  role: 'Gameplay programmer...',
  context: 'Personal project · Solo' | 'Real client · Team of 4' ...,
  year: '2026',
  stack: ['Tecnología 1', 'Tecnología 2', '...'], // Máximo ~5 tags
  stats: [
    ['Build date', 'Fecha / versión'],
    ['Category', 'Tipo de juego/app'],
    ['Engine', 'Motor o frameworks'],
    ['Language', 'Lenguajes'],
    ['Core dynamic', 'Mecánica principal'],
  ],
  kicker: 'Línea de cabecera en el modal',
  lede: 'Resumen en un párrafo de la propuesta del proyecto.',
  blurb: 'Opcional: 1-2 líneas para la tarjeta (si se omite usa lede).',
  summary: [
    'Punto técnico 1 (arquitectura, loops, física, shaders)...',
    'Punto técnico 2 (AI, state machines)...',
    'Punto técnico 3 (networking, multiplayer, backend)...',
    'Punto técnico 4 (audio procedural, optimizaciones)...',
    'Punto técnico 5 (tests unitarios, líneas de código, CI)...',
  ],
  banner: {
    src: 'assets/projects/<id>/banner.jpg',
    position: '50% 50%',
    zoom: 1,           // Opcional
    origin: '50% 50%', // Opcional
    dim: 0.4,          // Opcional: atenúa screenshots con mucho texto
  },
  cover: {
    src: 'assets/projects/<id>/cover.jpg', // o .mp4/.webm loop
    alt: 'Descripción accesible',
    origin: '50% 50%',
    portrait: 'assets/projects/<id>/cover-portrait.jpg', // Opcional para vista 4:5 en desktop
  },
  gallery: [
    {
      src: 'assets/projects/<id>/screenshot.jpg',
      alt: 'Descripción',
      caption: 'Explicación técnica de la captura.',
      width: 1280, // Opcional si es tamaño natural (ej. popup)
      height: 720,
    },
  ],
  links: {
    github: 'https://github.com/...',
    release: 'https://github.com/.../releases/tag/vX.Y.Z', // Opcional
    itch: 'https://dandavd.itch.io/...',                  // Opcional
    play: 'https://...',                                  // Opcional (juego jugable en navegador)
    demo: 'https://...',                                  // Opcional (demo en vivo de app web)
    store: 'https://...',                                 // Opcional
    site: 'https://...',                                  // Opcional
    roadmap: 'https://trello.com/...',                    // Opcional
    youtube: 'https://youtu.be/...',                      // Opcional (reproductor integrado en modal)
    poster: 'assets/projects/<id>/poster.jpg',            // Opcional para el video
    repos: [                                              // Opcional si tiene múltiples repositorios
      { label: 'Frontend code', href: '...' },
      { label: 'Backend code', href: '...' }
    ]
  },
  note: 'Opcional: nota aclaratoria bajo los botones',
  videoSoon: false, // true si el video está en preparación
}
```

---

## 5. Procedimiento para Agregar un Nuevo Proyecto (`track: 'games'`)

Cuando se agregue un tercer juego:

1. **Crear directorio de assets**:
   `assets/projects/<id>/` y colocar:
   - Banner (`banner.jpg` o imagen principal de cabecera)
   - Cover (`cover.jpg` en 16:9, y opcional `cover-portrait.jpg` en 4:5)
   - Capturas para la galería (`shot-1.jpg`, `shot-2.jpg`, etc.)

2. **Registrar en `js/data/projects.js`**:
   - Insertar el objeto en `projects` bajo la sección de juegos.

3. **Definir el Tema de Color en `css/main.css`**:
   - Asignar el color de acento a la tarjeta:
     ```css
     .work__item[data-project='<id>'] { --project: #hex; }
     ```
   - Definir las variables del modal:
     ```css
     .modal[data-project='<id>'] {
       --project: #hex;
       --project-hover: #hex;
       --project-ink: #hex;
       --project-line: rgb(R G B / 0.4);
       --project-tint: #hex;
     }
     ```
   - Crear el efecto de luz/resplandor en el banner del modal:
     ```css
     .modal[data-project='<id>'] .modal__banner::before {
       background: radial-gradient(...);
     }
     ```

4. **Actualizar el Fallback en `index.html`**:
   - Añadir el `<li>` dentro de `<div class="work__panel" id="games"> <ul class="work__list">`:
     ```html
     <li class="work__item"><a class="work__name" href="https://github.com/DanDavD/<Repo>">Título</a></li>
     ```
   - Si cambia la métrica de juegos y tests en el Hero:
     Actualizar el texto en `<p class="hero__fact">`:
     Ejemplo: `"Three original games and X automated tests between them, every one of them passing."`

5. **Actualizar `PRODUCT.md`**:
   - Ajustar la sección "Positioning" y "Evidence on Hand" con las estadísticas y enlaces verificados del nuevo juego.

6. **Actualizar `js/data/skills.js`**:
   - Si el nuevo juego utiliza nuevos motores, herramientas o frameworks, reflejarlos con su porcentaje de dominio.

---

## 6. Principios y Reglas de Código

- **Hechos verificables**: Nunca inventar número de tests, líneas de código o testimonios. Todo número debe coincidir con el repositorio o release real.
- **Sin audio automático**: El portafolio es 100% silencioso. El único sonido ocurre solo si el usuario pulsa play en un video de YouTube.
- **Rendimiento de animaciones**: Animaciones estrictamente por GPU (`transform`, `opacity`), respetando `prefers-reduced-motion`.
- **Accesibilidad**: Navegación completa por teclado, atributos ARIA vigentes, soporte de lectores de pantalla.
