# PrepApp — Revision Board

PrepApp is a modern, responsive, and dynamic interview and exam preparation tool designed to help you organize concepts, track learning progress, and master subject materials. With dynamic category management, rich note formatting, local persistence, and backup options, PrepApp is a self-contained productivity hub for students and developers alike.

---

## 🚀 Key Features

### 1. Dynamic Subject & Category Management
*   **Custom Categories**: Organize your questions into custom categories (e.g., *React*, *System Design*, *Data Structures*).
*   **Dynamic Sidebar**: Easily switch views, monitor counts of pending vs. total questions per category, and delete unused categories.
*   **All Subjects View**: Combine all category contents into a single unified revision board.

### 2. Full Question & Answer Lifecycle (CRUD)
*   **Seamless Add/Edit**: Add question cards with descriptive text, detailed notes, and code snippets. Edit questions, change their text/answers, or reassign them to a different category inline.
*   **Double-Confirmation Safety**: Protect your data with custom confirmation modals before performing deletions or database wipes.

### 3. Interactive Progress Stats & Status Queue
*   **Stats Panel**: Visualize mastering rate dynamically. Track total, revised (completed), and pending questions inside the active view.
*   **Radial Progress Circle**: Interactive, animated progress indicator updating in real-time as questions are marked done.
*   **Status Filters**: Group questions by **All**, **Pending** (remaining revision queue), and **Revised** (done) tabs.
*   **Bulk Actions**: Mark all visible questions as revised, restore them back to the queue, or reset progress entirely for a category with one click.

### 4. Rich Code & Text Formatting
*   **Inline Code**: Highlight inline expressions, classes, or keywords using the standard backtick syntax (e.g., `` `const x = 5` ``) styled with modern color accents.
*   **Preformatted Code Blocks**: Support multi-line blocks using triple backticks (e.g. ` ```javascript `), complete with custom language tags and syntax-specific container rendering.
*   **Proper Newline Handling**: Render multi-paragraph answers and notes organically without layout distortion.

### 5. Local Storage Persistence & Data Portability
*   **Zero Hardcoding**: All data is dynamically managed by the user—no static starter datasets.
*   **Autosave**: Automatic synchronization of questions, categories, theme choice, and active tab to `localStorage`.
*   **Export Backups**: Download your entire revision history, including progress, questions, and custom categories, as a timestamped JSON file.
*   **Import Backups**: Restore or load existing JSON backups. Includes integrity checks and validation to prevent malformed data insertion.
*   **Database Wipes**: Securely wipe all stored info inside the "Danger Zone" using double confirmation.

### 6. Premium Responsive Design System
*   **Curated Aesthetics**: Smooth gradients (Sky Blue to Purple), modern typography (`Inter`, `Outfit`, `JetBrains Mono`), and subtle micro-animations (like animated custom checkbox checkmarks).
*   **Glassmorphic Overlays**: Modern styling using blur backdrops (`glass-panel`) for cards and modals.
*   **Adaptive Sidebar**: Collapses on mobile with a clean slide-out menu, while remaining persistent on larger screens.
*   **Three-way Theme Switcher**: Toggle between **Light**, **Dark**, and **System Default** modes instantly.

---

## 🛠️ Technology Stack

*   **Framework**: [React 19](https://react.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for a clean, modern layout
*   **Bundler**: [Vite](https://vite.dev/) for ultra-fast Hot Module Replacement (HMR) and development
*   **Icons**: [Lucide React](https://lucide.dev/) for modern icons

---

## 📂 Project Architecture

```
frontend-prep/
├── public/                 # Static assets & redirects
├── src/
│   ├── components/         # Reusable UI widgets and Modals
│   │   ├── AddQuestionModal.tsx   # Modal form to add a new question
│   │   ├── AddSetModal.tsx        # Modal form to create custom categories
│   │   ├── BackupModal.tsx        # JSON Import/Export & database reset controller
│   │   ├── ConfirmModal.tsx       # Custom design confirmation prompts
│   │   ├── QuestionCard.tsx       # Main card component (inline editing, toggle status, formatted code answers)
│   │   └── StatsPanel.tsx         # Dashboard overview (radial progress tracker)
│   ├── hooks/
│   │   └── usePrepStore.ts # Centralized Hook managing State, LocalStorage Sync, and Filtering
│   ├── types.ts            # Type definitions for Questions and QuestionSets
│   ├── App.tsx             # Main Layout, Navigation, and Modal Router
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Tailwind system, custom fonts, glassmorphism tokens, and custom animations
│   └── App.css             # Supplementary layout tweaks
├── vite.config.ts          # Vite build configurations
├── tsconfig.json           # TypeScript configuration
└── package.json            # Scripts and dependencies
```

---

## 🏃 Getting Started

### 📋 Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 🔧 Installation
1. Navigate to the `frontend-prep` project directory:
   ```bash
   cd frontend-prep
   ```
2. Install the project dependencies:
   ```bash
   npm install
   ```

### 💻 Running Locally
To launch the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 📦 Building for Production
To bundle the application for production deployment:
```bash
npm run build
```
The compiled, optimized files will be output to the `dist/` directory.

---

## 💾 Database Schema

The JSON backups export and consume the following structure:

```json
{
  "sets": [
    {
      "id": "set-1723961111111",
      "name": "JavaScript Basics",
      "description": "Core concepts, scopes, closures, and promises."
    }
  ],
  "questions": [
    {
      "id": "custom-1723962222222",
      "text": "What is a closure in JavaScript?",
      "answer": "A closure is the combination of a function bundled together with references to its surrounding state (the `lexical environment`).\n\nExample:\n```javascript\nfunction outer() {\n  const name = 'PrepApp';\n  return function inner() {\n    console.log(name);\n  };\n}\n```",
      "isRevised": false,
      "setId": "set-1723961111111"
    }
  ]
}
```

---

## 📜 License
This project is open-source and free to customize for your exam or interview preparations.
