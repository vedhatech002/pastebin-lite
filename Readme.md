# Pastebin‑Lite

A lightweight Pastebin‑like application where users can create text pastes, share them via a link, and view them with optional expiry constraints.

This project was built as a take‑home assignment and focuses on **correctness, robustness, and clean architecture** rather than heavy UI styling.

---

## ✨ Features

- Create a paste with arbitrary text
- Get a shareable URL for each paste
- View pastes via:
  - **App View (React UI)**
  - **Raw HTML View (Server‑rendered)**

- Optional constraints per paste:
  - Time‑based expiry (TTL)
  - View‑count limit

- Automatic unavailability once constraints are triggered
- Deterministic time support for automated testing

---

## 🏗️ Tech Stack

### Frontend

- React + TypeScript (Vite)
- Tailwind CSS
- Axios (with interceptors)
- React Router
- react‑icons

### Backend

- Node.js + Express
- TypeScript
- MongoDB Atlas
- Mongoose

### Repo Structure

This is a **monorepo** with independent frontend and backend apps:

```
pastebin-lite/
├── package.json          # Root (orchestration only)
├── apps/
│   ├── web/              # Frontend (React)
│   └── api/              # Backend (Express)
└── README.md
```

The root `package.json` contains only helper scripts to run both apps together.

---

## 🚀 Getting Started (Local Development)

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9
- A MongoDB Atlas connection string

---

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd pastebin-lite
```

---

### 2️⃣ Install dependencies (frontend + backend)

From the repo root:

```bash
npm install
npm run install:all
```

---

### 3️⃣ Environment variables

#### Backend (`apps/api/.env`)

```env
PORT=3001
MONGO_URI=<your-mongodb-atlas-uri>
TEST_MODE=0
```

> **Note:** When switching networks, ensure your IP is allowed in MongoDB Atlas Network Access.

#### Frontend (`apps/web/.env`)

```env
VITE_API_BASE_URL=http://localhost:3001
```

---

### 4️⃣ Run the app

From the repo root:

```bash
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:3001](http://localhost:3001)

---

## 🔗 API Endpoints

### Health Check

```
GET /api/healthz
```

Response:

```json
{ "ok": true }
```

---

### Create Paste

```
POST /api/pastes
```

Request body:

```json
{
  "content": "string",
  "ttl_seconds": 60,
  "max_views": 5
}
```

Response:

```json
{
  "id": "string",
  "url": "https://your-app.vercel.app/p/<id>"
}
```

---

### Fetch Paste (API)

```
GET /api/pastes/:id
```

Response:

```json
{
  "content": "string",
  "remaining_views": 4,
  "expires_at": "2026-01-01T00:00:00.000Z"
}
```

Unavailable pastes return **404 (JSON)**.

---

### View Paste (HTML)

```
GET /p/:id
```

- Returns server‑rendered HTML
- Content is safely escaped (no script execution)
- Returns **404** if unavailable

---

## ⏱️ Deterministic Time (Testing Support)

When `TEST_MODE=1` is set:

- The request header

  ```
  x-test-now-ms: <milliseconds since epoch>
  ```

  is used as the current time for TTL checks.

This enables reliable automated testing of expiry behavior.

---

## 🧠 Design Decisions

- **Monorepo without workspaces**: keeps frontend and backend independent while enabling simple orchestration
- **Service / repository separation (backend)**: avoids logic duplication and keeps controllers thin
- **Axios interceptors (frontend)**: centralizes error handling
- **Custom hooks (`usePaste`)**: UI components remain declarative
- **Dual paste links**:
  - _Open in App_ → React UI
  - _Open Raw Paste_ → Server‑rendered HTML

---

## 📦 Deployment Notes

- Frontend and backend can be deployed independently (e.g., Vercel)
- MongoDB Atlas is used as a persistent storage layer
- No in‑memory storage is relied upon

---

## ✅ Assignment Coverage Checklist

- [x] Create paste
- [x] Shareable URL
- [x] View paste (HTML)
- [x] TTL support
- [x] View‑count limit
- [x] Combined constraints
- [x] Deterministic testing support
- [x] JSON‑only API responses
- [x] Persistent storage

---

## 📝 Notes

This project prioritizes **correct behavior, clarity, and robustness** over heavy styling. UI is intentionally minimal but user‑friendly.

---

**Author:** Vijayavedhasekaran
