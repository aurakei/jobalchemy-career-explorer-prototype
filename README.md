🌟 Overview

The Career Explorer module expands JobAlchemy’s role-recommendation feature into a full interactive career-guidance experience.

It allows users to:

Generate a Career Identity from a CV or profile summary

View ranked career paths grouped into Closest Match / Adjacent Pivot / Stretch clusters

Identify skill gaps and recommended next steps

Seamlessly transition into JobAlchemy’s job-application workflow

This repository contains a working prototype built with:

Frontend: React + Vite + TypeScript + TailwindCSS v4

Backend: Node.js + Express

AI: Mocked locally (can be switched to OpenAI, Gemini, Claude, etc.)
```
jobalchemy-career-explorer-prototype/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── careerExplorer.js
│   ├── utils/
│   │   ├── aiClient.js
│   │   └── validation.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/Onboarding.tsx
│   │   ├── pages/Explorer.tsx
│   │   ├── components/Navbar.tsx
│   │   ├── services/api.ts
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
└── README.md
```