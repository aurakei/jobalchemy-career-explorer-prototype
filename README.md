## 🌟 Overview

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

## Structure
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

## Requirements
Tool	Version
Node.js	v18+ (LTS recommended)
npm	v9+
Browser	Chrome, Edge, Firefox

## Developer Setup
1️. Clone Repository
```
git clone https://github.com/<your-username>/jobalchemy-career-explorer-prototype.git
cd jobalchemy-career-explorer-prototype
```
2️. Backend Setup
```
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend runs on:
http://localhost:5000

By default, the backend uses mock AI responses.

3️. Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:
http://localhost:5173

## Demo

Open http://localhost:5173

Paste a short CV or professional summary

Click Generate Career Identity

Review the generated identity

Explore career clusters:

✅ Closest Match

🔄 Adjacent Pivot

🚀 Stretch Roles

Navigate between views using the top navbar

No AI key is required for demo purposes.

## Feature Highlights

✨ Clean responsive UI (React + Tailwind v4)

🎨 Branded gradient theme aligned with JobAlchemy design

⚡ Express API simulating structured AI JSON output

🧱 Zod validation for safe AI responses

💾 LocalStorage persistence

🧭 Shared navigation across views

📊 Clustered recommendation engine

## Enable Real AI Integration

## 1. To replace mock AI with a real LLM:

```
cd backend
npm install openai
```
## 2. Update backend/utils/aiClient.js

```
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.AI_API_KEY,
});

export async function getAIIdentity(profileText) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a professional career coach." },
      { role: "user", content: profileText },
    ],
  });

  return JSON.parse(response.choices[0].message.content);
}
```
 
## 3. Add API Key
```
AI_API_KEY=your_api_key_here
```

##Common commands.
Backend
```
npm run dev       # Start development server (nodemon)
npm run start     # Production mode
```

Frontend
```
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

##License & Usage

Prototype for internal evaluation and testing.
Not for public distribution without permission.

© 2026 JobAlchemy Inc.

##Author

Aura
Email: aurakeith@gmail.com
