# 🏥 Instabookin Health

A modern home healthcare booking platform built with **React (Vite)** + **Tailwind CSS** + **React Router v6**.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

---

## 📁 Folder Structure

```
instabookin-health/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/               # Shared layout components
│   │   │   ├── Layout.jsx        # Outlet wrapper (Navbar + Footer)
│   │   │   ├── Navbar.jsx        # Sticky responsive navigation
│   │   │   ├── Footer.jsx        # Site footer
│   │   │   └── PageHeader.jsx    # Reusable hero header w/ breadcrumbs
│   │   └── home/                 # Home page section components
│   │       ├── Hero.jsx
│   │       ├── StatsBar.jsx
│   │       ├── ServicesSection.jsx
│   │       ├── HowItWorks.jsx
│   │       ├── DoctorsSection.jsx
│   │       ├── Testimonials.jsx
│   │       ├── FAQ.jsx
│   │       └── CTABanner.jsx
│   ├── pages/                    # Route-level page components
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── DoctorsPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── BookingPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── data/
│   │   └── index.js              # All static data (services, doctors, etc.)
│   ├── App.jsx                   # BrowserRouter + Routes
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Tailwind + global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🗺️ Routes

| Path        | Page            | Description                          |
|-------------|-----------------|--------------------------------------|
| `/`         | HomePage        | Landing page with all sections       |
| `/services` | ServicesPage    | Full services listing with details   |
| `/doctors`  | DoctorsPage     | Filterable doctor directory          |
| `/about`    | AboutPage       | Company info, values, team           |
| `/contact`  | ContactPage     | Contact form + FAQs                  |
| `/book`     | BookingPage     | 4-step booking wizard                |
| `*`         | NotFoundPage    | 404 fallback                         |

---

## 🎨 Design System

| Token         | Value                        |
|---------------|------------------------------|
| Primary color | Teal (`#0e7d78`)             |
| Accent color  | Orange (`#f97316`)           |
| Display font  | Playfair Display             |
| Body font     | DM Sans                      |
| Border radius | `xl` (12px), `2xl` (16px)   |

---

## ✨ Features

- ✅ Fully responsive (mobile-first)
- ✅ Sticky navbar with active link highlighting
- ✅ Smooth scroll-to-top on navigation
- ✅ Interactive FAQ accordion
- ✅ Doctor search + specialty filter
- ✅ 4-step booking wizard with confirmation
- ✅ Contact form with success state
- ✅ Google Fonts (Playfair Display + DM Sans)
- ✅ Modular, scalable component architecture

---

## 🛠 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **React Router DOM v6**
- **Lucide React** (icons)
