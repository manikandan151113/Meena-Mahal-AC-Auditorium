# Meena Mahal AC Auditorium 🏛️

[![Live Demo](https://img.shields.io/badge/Demo-Vercel%20Live-black?style=flat&logo=vercel)](https://meena-mahal-ac-auditorium.vercel.app)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive, and performance-optimized commercial showcase website developed for **Meena Mahal AC Auditorium**, a luxury wedding hall and event venue situated in **Sankarankovil, Tamil Nadu, India**.

Designed to provide prospective guests, event planners, and families with a frictionless browsing experience to inspect auditorium amenities, view venue galleries, navigate location details, and initiate direct booking enquiries.

---

## 📑 Table of Contents

- [Live Deployment](#-live-deployment)
- [Key Features](#-key-features)
- [Architecture & Design System](#-architecture--design-system)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Build and Deployment](#-build-and-deployment)
- [Direct Booking Architecture](#-direct-booking-architecture)
- [Responsive Breakpoints](#-responsive-breakpoints)
- [Internationalization (i18n)](#-internationalization-i18n)
- [Contributing](#-contributing)
- [Developer & Contact](#-developer--contact)

---

## 🌐 Live Deployment

* **Production URL:** [https://meena-mahal-ac-auditorium.vercel.app](https://meena-mahal-ac-auditorium.vercel.app)
* **Hosting Platform:** Vercel (Edge CDN)
* **Build Configuration:** `npm run build` ➔ Output directory: `dist`

---

## ✨ Key Features

- **🏛️ Venue Showcase & Gallery:** High-definition presentation of the grand marriage hall, dining facilities, and bride/groom air-conditioned suites.
- **📱 Fully Responsive Layout:** Seamless, adaptive experience across mobile handsets, tablets, laptops, and ultra-wide desktops.
- **🌐 Client-Side Bilingual Localization:** Instant, zero-latency toggling between **English** and **Tamil (தமிழ்)** without page reload.
- **🌓 Adaptive Theme Modes:** Built-in Light and Dark themes respecting user system preferences with high-contrast readability.
- **✨ Fluid Micro-Interactions:** Smooth scroll behaviors and UI entry animations powered by Motion (Framer Motion).
- **📞 Direct One-Touch Booking Flow:** Instant cellular dialer integration (`tel:`) removing unnecessary booking database overhead and form friction.
- **📍 Location & Directions:** Embedded mapping and address coordinates for easy guest navigation.

---

## 🏗️ Architecture & Design System

The application is built using a component-driven declarative architecture:

```
┌────────────────────────────────────────────────────────┐
│                        App.tsx                         │
│   (Language Context, Theme Context, Booking Modal)     │
└───────────┬────────────────────────────────┬───────────┘
            │                                │
┌───────────▼────────────┐       ┌───────────▼───────────┐
│     Layout & Header    │       │     Venue Sections    │
│  - Navigation Bar      │       │  - Hero Banner        │
│  - Language Selector   │       │  - Facility Showcase  │
│  - Theme Toggle        │       │  - Photo Gallery      │
│  - Footer              │       │  - Location & Contact │
└────────────────────────┘       └───────────────────────┘
            │                                │
            └────────────────┬───────────────┘
                             │
                 ┌───────────▼───────────┐
                 │     Booking Modal     │
                 │  - Phone Call Action  │
                 │  - Venue Details      │
                 └───────────────────────┘
```

### Component Isolation
* **`components/common/`**: Reusable atomic UI elements (buttons, modals, theme toggles, icons).
* **`components/layout/`**: Structural layout components including navigation bars, responsive drawer menus, and footers.
* **`components/booking/`**: Direct enquiry dialogs and telephone action flows.
* **`translations.ts`**: Centralized key-value localization dictionary maintaining parity across English and Tamil copy.
* **`types.ts`**: TypeScript definitions enforcing strict type safety across props, state, and theme identifiers.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|:---|:---|:---|
| **Core Framework** | React 19 | Declarative UI rendering & state management |
| **Language** | TypeScript 5.x | Static type safety and developer productivity |
| **Build Tool** | Vite 6 | Lightning-fast HMR and optimized production bundling |
| **Styling** | Tailwind CSS v4 | Modern utility-first responsive styling |
| **Animations** | Motion for React | Smooth layout transitions and scroll reveals |
| **Icons** | Lucide React | Crisp, accessible SVG iconography |
| **Deployment** | Vercel | Automatic CI/CD and edge CDN distribution |

---

## 📁 Project Structure

```text
meena-mahal-auditorium-website/
├── .github/                       # GitHub community templates and security policy
│   ├── CONTRIBUTING.md
│   ├── pull_request_template.md
│   └── SECURITY.md
├── public/                        # Static assets, venue imagery, favicons
├── src/
│   ├── components/
│   │   ├── booking/               # Direct enquiry modal and call actions
│   │   ├── common/                # Reusable UI primitives (Buttons, badges)
│   │   └── layout/                # Header, navigation, and footer
│   ├── App.tsx                    # Root application component & layout assembly
│   ├── main.tsx                   # React 19 entry point and DOM root mounting
│   ├── index.css                  # Tailwind CSS imports and custom global variables
│   ├── translations.ts            # Bilingual dictionary (English & Tamil)
│   └── types.ts                   # TypeScript interfaces and type definitions
├── .env.example                   # Environment configuration template
├── index.html                     # HTML5 entry page with SEO metadata
├── package.json                   # Dependencies, build scripts, and metadata
├── tsconfig.json                  # TypeScript compiler configuration
├── vite.config.ts                 # Vite bundler configuration
└── README.md                      # Comprehensive documentation
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js:** v18.0.0 or higher
* **npm:** v9.0.0 or higher

### 1. Clone the Repository
```bash
git clone https://github.com/manikandan151113/Meena-Mahal-AC-Auditorium.git
cd Meena-Mahal-AC-Auditorium
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to inspect the application with live Hot Module Replacement (HMR).

---

## 📦 Build and Deployment

### Production Build
```bash
npm run build
```
Vite generates static, tree-shaken, and minified production bundles inside the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 📞 Direct Booking Architecture

Unlike generic hotel systems requiring complex calendar databases and authentication flows, wedding halls and luxury auditoriums operate on personal dates, package negotiations, and live management consultations.

* When prospective customers click **Book Now**, the application triggers an accessible modal presenting the venue contact desk.
* Users can click **Call Now** to initiate a direct call via `tel:` URI, connecting them directly with hall management without intermediary databases or registration barriers.

---

## 📱 Responsive Breakpoints

| Device Category | Breakpoint (Tailwind) | UI Adaptation |
|:---|:---|:---|
| **Mobile Phones** | `< 640px` (Default) | Single column layout, touch-friendly bottom drawer navigation, sticky enquiry actions |
| **Tablets** | `640px` – `1024px` (`md`) | 2-column facility cards, expanded gallery grids |
| **Desktop Displays** | `> 1024px` (`lg` / `xl`) | Full horizontal navigation, multi-column amenity comparison, high-res gallery lightbox |

---

## 🌐 Internationalization (i18n)

The site includes client-side bilingual localization:
* **English (EN)** — International and non-Tamil speaking guests.
* **Tamil (தமிழ், TA)** — Native regional visitors and families in Tamil Nadu.

All content keys are strongly typed and resolved via `translations.ts`.

---

## 🤝 Contributing

Contributions, feedback, and issue reports are welcome! Please see [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md) for details on code style, branch guidelines, and pull request workflows.

---

## 👨‍💻 Developer & Contact

**Manikandan K**  
Computer Science and Engineering Student (Cyber Security Specialization)  
* SRM Madurai College for Engineering and Technology  
* **GitHub:** [@manikandan151113](https://github.com/manikandan151113)  
* **LinkedIn:** [Manikandan K](https://www.linkedin.com/in/manikandan-k-9559a7329)  
* **Email:** [manikandankumaresan151113@gmail.com](mailto:manikandankumaresan151113@gmail.com)
