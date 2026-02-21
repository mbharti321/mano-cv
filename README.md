# ResumeForge 📄

A powerful, fully offline-capable resume builder inspired by FlowCV — built with React. Pre-loaded with Manish Bharti's resume data, fully customizable, and exportable as PDF or JSON.

---

## ✨ Features

<... keep rest of earlier long README content here ...>

---

## 🚀 Quick Start (Single HTML File)

The current build is a **single self-contained HTML file** using CDN React. No install needed.

1. Download `resume-builder.html`
2. Open in any modern browser (Chrome, Firefox, Edge, Safari)
3. Start editing — everything works offline

---

## 🛠️ Setting Up as a Proper React App

Follow these steps to convert it into a full React + Vite project with hot reload, proper file structure, and build tooling.

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

---

### Step 1 — Scaffold the Project

```bash
npm create vite@latest resume-forge -- --template react
cd resume-forge
npm install
```

---

### Step 2 — Install Dependencies

```bash
# Google Fonts (or use @fontsource for offline)
npm install @fontsource/plus-jakarta-sans @fontsource/lora @fontsource/source-serif-4

# Optional but recommended
npm install react-beautiful-dnd        # drag-and-drop section reordering
npm install html2canvas jspdf          # better PDF export
npm install zustand                    # state management (replaces useHistory hook)
npm install react-router-dom           # if you want multi-page routing
```

---

### Step 3 — Recommended Project Structure

```
resume-forge/
├── public/
│   └── favicon.ico
├── src/
│   ├── main.jsx                    # Entry point
│   ├── App.jsx                     # Root component + toolbar
│   ├── utils.js                    # shared helpers (uid, cl)
│   ├── data.js                     # initial resume data & defaults
│   ├── hooks/
│   │   └── useHistory.js           # Undo/redo history hook
│   ├── components/
│   │   ├── Toolbar/
│   │   │   ├── Toolbar.jsx
│   │   │   └── Toolbar.css
│   │   ├── LeftPanel/
│   │   │   ├── SectionsTab.jsx
│   │   │   ├── SectionsTab.css
│   │   │   ├── CustomizeTab.jsx
│   │   │   ├── CustomizeTab.css
│   │   │   ├── JsonTab.jsx
│   │   │   └── JsonTab.css
│   │   ├── Editors/
│   │   │   ├── EditPersonal.jsx
│   │   │   └── SectionEditor.jsx
│   │   ├── Modals/
│   │   │   └── AddSectionModal.jsx
│   │   └── Preview/
│   │       ├── ResumePreview.jsx
│   │       ├── ResumePreview.css
│   │       └── sections/            # future per‑section preview components
│   └── styles/                      # (optional) global CSS helpers
├── index.html
├── vite.config.js
└── package.json
```

---

<continue previous long README content after structure>