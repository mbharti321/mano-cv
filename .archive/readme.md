# ResumeForge 📄

A powerful, fully offline-capable resume builder inspired by FlowCV — built with React. Pre-loaded with Manish Bharti's resume data, fully customizable, and exportable as PDF or JSON.

---

## ✨ Features

### 🗂️ Section Management
- **Pre-built section types** — Profile Summary, Skills, Work Experience, Projects, Education, Publications, and List (Certificates, etc.)
- **Add custom sections** — Create any new section in 8 types: Text, Skills, Experience, Projects, Education, Publications, List, or Custom
- **Delete sections** — Remove any section with confirmation
- **Rename sections** — Inline editable section titles
- **Reorder sections** — Drag handle UI (ready for drag-and-drop integration)

### 👁️ Visibility Controls
- **Section-level toggle** — Show/hide entire sections using the 👁 eye icon
- **Item-level toggle** — Hide individual experience entries, project cards, education items, skills categories
- **Bullet-level toggle** — Hide/show individual bullet points inside any entry
- **Hidden ≠ Deleted** — Hidden items stay in the editor, can be re-enabled anytime
- **Example:** 6 projects in the editor, only 4 visible on the resume — perfect for targeted job applications

### ✏️ Rich Editing
- **Personal Info** — Name, professional title, email, phone, location
- **Links / Profiles** — Add/remove/hide website, LinkedIn, GitHub, or any custom link with display text and URL
- **Experience** — Job title, company (with URL), start/end date, location, bullet points (each with visibility toggle)
- **Projects** — Title, subtitle, URL, bullet points with individual visibility
- **Education** — Degree, school (with URL), dates, location, description
- **Publications** — Title, publisher, date, URL
- **Skills** — Label + comma-separated skills (grouped by category)
- **List Sections** — Title, source, and URL per item (great for certificates)

### 🔗 Hyperlink Support
Every link field is rendered as a real clickable anchor in the resume preview:
- Personal links (website, LinkedIn, GitHub)
- Company URLs in work experience
- School URLs in education
- Project URLs
- Publication URLs
- Certificate URLs

### ↩️ Undo / Redo
- **Ctrl+Z** — Undo last change
- **Ctrl+Y** or **Ctrl+Shift+Z** — Redo
- Up to **80 history states** stored in memory
- Works across all edits — text changes, visibility toggles, adding/deleting items

### 💾 Save & Export
| Action | Description |
|---|---|
| **Save JSON** | Downloads a `.json` file with full resume data + customization settings |
| **Create Copy** | Saves a timestamped copy — open later as a separate resume version |
| **Import JSON** | Load a previously saved `.json` file to continue editing |
| **Export PDF** | Opens browser print dialog — choose "Save as PDF" |

### 🎨 Customization Panel
Full control over every visual aspect of the resume:

**Typography**
- Font Family — 10 options: Plus Jakarta Sans, Lora, Source Serif 4, IBM Plex Sans, Crimson Pro, DM Sans, Nunito, Raleway, Georgia, Times New Roman
- Base Font Size (8–13pt)
- Name Size (18–38pt)
- Professional Title Size (9–16pt)
- Section Heading Size (9–16pt)
- Line Height (1.1–2.0)
- Heading Font Weight (Regular / Medium / Semibold / Bold / Extrabold)

**Page Layout**
- Horizontal Margin (8–45mm)
- Vertical Margin (8–40mm)

**Colors**
- Name Color
- Accent / Heading Color
- Section Line Color
- Link Color
- Date / Subtitle Color
- Body Text Color

**Reset** — One-click reset to default settings

### 📋 JSON Editor Tab
- View the raw JSON of your entire resume + customization
- Edit directly in the textarea
- Apply changes back to the live editor instantly
- Full round-trip: edit in UI → export JSON → re-import → continue editing

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
│   │
│   ├── data/
│   │   ├── initialResume.js        # Default resume data (Manish's resume)
│   │   ├── defaultCustomization.js # Default style settings
│   │   └── sectionTemplates.js     # Templates for new section types
│   │
│   ├── hooks/
│   │   ├── useHistory.js           # Undo/redo history hook
│   │   └── useResumeStore.js       # Zustand store (optional)
│   │
│   ├── components/
│   │   ├── Toolbar/
│   │   │   └── Toolbar.jsx
│   │   │
│   │   ├── LeftPanel/
│   │   │   ├── LeftPanel.jsx
│   │   │   ├── PanelTabs.jsx
│   │   │   ├── SectionsTab.jsx
│   │   │   ├── CustomizeTab.jsx
│   │   │   └── JsonTab.jsx
│   │   │
│   │   ├── Editors/
│   │   │   ├── EditPersonal.jsx
│   │   │   ├── EditText.jsx
│   │   │   ├── EditSkills.jsx
│   │   │   ├── EditExperience.jsx
│   │   │   ├── EditProjects.jsx
│   │   │   ├── EditEducation.jsx
│   │   │   ├── EditPublications.jsx
│   │   │   └── EditList.jsx
│   │   │
│   │   ├── Preview/
│   │   │   ├── ResumePreview.jsx
│   │   │   └── sections/
│   │   │       ├── PreviewSkills.jsx
│   │   │       ├── PreviewExperience.jsx
│   │   │       ├── PreviewProjects.jsx
│   │   │       ├── PreviewEducation.jsx
│   │   │       ├── PreviewPublications.jsx
│   │   │       └── PreviewList.jsx
│   │   │
│   │   └── Modals/
│   │       └── AddSectionModal.jsx
│   │
│   └── styles/
│       ├── globals.css
│       ├── toolbar.css
│       ├── panel.css
│       ├── editors.css
│       └── preview.css
│
├── index.html
├── vite.config.js
└── package.json
```

---

### Step 4 — Extract Core Files

#### `src/data/initialResume.js`
Move the `INIT` constant from the HTML file:
```js
export const initialResume = {
  personal: { ... },
  sections: [ ... ]
};
```

#### `src/data/defaultCustomization.js`
```js
export const defaultCustomization = {
  fontFamily: "Plus Jakarta Sans",
  fontSize: 10,
  nameSize: 26,
  // ...rest of DFLT_CUSTOM
};
```

#### `src/hooks/useHistory.js`
```js
import { useRef, useState, useCallback } from "react";

export function useHistory(init) {
  const hist = useRef([structuredClone(init)]);
  const idx = useRef(0);
  const [, tick] = useState(0);
  const rerender = () => tick(n => n + 1);

  const current = hist.current[idx.current];

  const push = useCallback(state => {
    hist.current = hist.current.slice(0, idx.current + 1);
    hist.current.push(structuredClone(state));
    if (hist.current.length > 80) hist.current.shift();
    idx.current = hist.current.length - 1;
    rerender();
  }, []);

  const undo = useCallback(() => {
    if (idx.current > 0) { idx.current--; rerender(); }
  }, []);

  const redo = useCallback(() => {
    if (idx.current < hist.current.length - 1) { idx.current++; rerender(); }
  }, []);

  return {
    current,
    push,
    undo,
    redo,
    canUndo: idx.current > 0,
    canRedo: idx.current < hist.current.length - 1,
  };
}
```

#### `src/App.jsx`
```jsx
import { useState, useCallback, useEffect } from "react";
import { useHistory } from "./hooks/useHistory";
import { initialResume } from "./data/initialResume";
import { defaultCustomization } from "./data/defaultCustomization";
import Toolbar from "./components/Toolbar/Toolbar";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import ResumePreview from "./components/Preview/ResumePreview";
import AddSectionModal from "./components/Modals/AddSectionModal";

export default function App() {
  const { current: resume, push: pushResume, undo, redo, canUndo, canRedo } = useHistory(initialResume);
  const [custom, setCustom] = useState(defaultCustomization);
  const [addModal, setAddModal] = useState(false);

  const update = useCallback(fn => {
    const next = structuredClone(resume);
    fn(next);
    pushResume(next);
  }, [resume, pushResume]);

  useEffect(() => {
    const handler = e => {
      if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) { e.preventDefault(); undo(); }
      if ((e.ctrlKey || e.metaKey) && (e.key === "y" || (e.key === "z" && e.shiftKey))) { e.preventDefault(); redo(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [undo, redo]);

  return (
    <div className="app">
      <Toolbar
        onUndo={undo} onRedo={redo}
        canUndo={canUndo} canRedo={canRedo}
        resume={resume} custom={custom}
      />
      <div className="app-body">
        <LeftPanel resume={resume} update={update} custom={custom} setCustom={setCustom} />
        <div className="preview-area">
          <ResumePreview resume={resume} custom={custom} />
        </div>
      </div>
      {addModal && <AddSectionModal onAdd={addSection} onClose={() => setAddModal(false)} />}
    </div>
  );
}
```

---

### Step 5 — Add Drag-and-Drop (Section Reordering)

```bash
npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
```

Wrap section list with `DndContext` and `SortableContext` from `@dnd-kit/sortable`:

```jsx
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";

function SectionsTab({ resume, update }) {
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      update(n => {
        const oldIndex = n.sections.findIndex(s => s.id === active.id);
        const newIndex = n.sections.findIndex(s => s.id === over.id);
        n.sections = arrayMove(n.sections, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={resume.sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
        {resume.sections.map(sec => (
          <SortableSectionRow key={sec.id} sec={sec} ... />
        ))}
      </SortableContext>
    </DndContext>
  );
}
```

---

### Step 6 — Better PDF Export

Replace the `window.print()` approach with proper PDF generation:

```bash
npm install html2canvas jspdf
```

```js
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportToPDF(elementRef, filename = "resume.pdf") {
  const el = elementRef.current;
  const canvas = await html2canvas(el, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
  });
  const imgData = canvas.toDataURL("image/jpeg", 1.0);
  const pdf = new jsPDF("p", "mm", "a4");
  const width = pdf.internal.pageSize.getWidth();
  const height = (canvas.height * width) / canvas.width;
  pdf.addImage(imgData, "JPEG", 0, 0, width, height);
  pdf.save(filename);
}
```

---

### Step 7 — Run the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

### Step 8 — Build for Production

```bash
npm run build
```

Output goes to `dist/` — deploy to Vercel, Netlify, GitHub Pages, or any static host.

```bash
# Preview production build locally
npm run preview
```

---

### Step 9 — Deploy to Vercel (Optional)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for auto-deployments.

---

## 🧩 Adding New Section Types

To add a new section type (e.g., "Awards"):

1. **Add a template** in `src/data/sectionTemplates.js`:
```js
awards: {
  id: uid(),
  title: "Awards & Honors",
  type: "awards",
  visible: true,
  items: []
}
```

2. **Create an editor** `src/components/Editors/EditAwards.jsx`

3. **Create a preview renderer** `src/components/Preview/sections/PreviewAwards.jsx`

4. **Register both** in `SectionEditor` and `SectionPreview` dispatcher components

---

## 💡 Tips & Usage Guide

### Creating Resume Versions for Different Jobs
1. Edit your resume for Job A
2. Click **Save JSON** → `resume-job-a.json`
3. Click **Create Copy** → `resume-manish-copy-[timestamp].json`
4. Import the copy, edit for Job B
5. You now have two separate resume JSON files

### Hiding Items Without Deleting
- Click the **👁 eye icon** next to any section, item, or bullet
- The item turns grey in the editor but disappears from the preview
- Click again to restore

### Keyboard Shortcuts
| Shortcut | Action |
|---|---|
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| `Ctrl+Shift+Z` | Redo (Mac style) |
| `Ctrl+P` | Print / Export PDF (browser default) |

### JSON Round-Trip Workflow
1. Make edits in the UI
2. Go to **JSON tab** to inspect the raw data
3. Edit JSON directly for bulk changes
4. Click **Apply** to push changes back to the UI
5. Use **Save JSON** to persist

---

## 🗺️ Roadmap / Potential Enhancements

- [ ] Multiple resume templates / themes
- [ ] AI-powered bullet point suggestions
- [ ] Local storage auto-save
- [ ] Cloud sync (Firebase / Supabase)
- [ ] Resume ATS score checker
- [ ] Photo/avatar support
- [ ] Multi-column layout option
- [ ] Dark mode for the editor UI
- [ ] Real-time collaboration

---

## 🧑‍💻 Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Build Tool | Vite |
| Styling | Pure CSS (no framework) |
| State | React hooks + custom useHistory |
| Fonts | Google Fonts |
| PDF Export | Browser Print / html2canvas + jsPDF |
| Storage | JSON file import/export |

---

## 📁 Data Format (JSON Schema)

```json
{
  "resume": {
    "personal": {
      "name": "string",
      "title": "string",
      "email": "string",
      "phone": "string",
      "location": "string",
      "links": [
        { "id": "string", "label": "string", "text": "string", "url": "string", "visible": true }
      ]
    },
    "sections": [
      {
        "id": "string",
        "title": "string",
        "type": "text | skills | experience | projects | education | publications | list",
        "visible": true,
        "content": "string (for type=text)",
        "items": [ "...varies by type" ]
      }
    ]
  },
  "customization": {
    "fontFamily": "Plus Jakarta Sans",
    "fontSize": 10,
    "nameSize": 26,
    "titleSize": 12,
    "headingSize": 11.5,
    "lineHeight": 1.45,
    "marginX": 20,
    "marginY": 18,
    "accentColor": "#1e293b",
    "linkColor": "#2563eb",
    "sectionLineColor": "#1e293b",
    "nameColor": "#0f172a",
    "dateColor": "#64748b",
    "bulletColor": "#374151",
    "headingWeight": "700"
  }
}
```

---

## 📜 License

MIT — free to use, modify, and distribute.

---

*Built with ❤️ using React. Inspired by FlowCV.*
