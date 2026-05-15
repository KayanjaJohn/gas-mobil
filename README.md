# gas-mobil

A ready-to-clone monorepo for **gas-mobil** — a React Native (Expo) mobile app
backed by a Node.js (Express + TypeScript) API.

```
gas-mobil/
├─ apps/
│  ├─ mobile/      # Expo React Native app (iOS, Android, Web)
│  └─ api/         # Node.js + Express + TypeScript API
├─ docs/           # Architecture & onboarding docs
├─ .github/        # CI workflow
└─ package.json    # Workspace root
```

## Quick start (5 minutes)

Prerequisites: **Node.js 20 LTS**, **Git**, and the **Expo Go** app on your phone.

```bash
# 1. Clone
git clone https://github.com/KayanjaJohn/gas-mobil.git
cd gas-mobil

# 2. Install everything (uses npm workspaces)
npm install

# 3. Copy env files
cp apps/api/.env.example apps/api/.env
cp apps/mobile/.env.example apps/mobile/.env

# 4. Run API + mobile together
npm run dev
```

- **API** runs on http://localhost:3001 — try http://localhost:3001/health
- **Mobile** opens an Expo dev server. Scan the QR code with Expo Go.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Run API and mobile in parallel |
| `npm run dev:api` | Run only the Node.js API (tsx watch) |
| `npm run dev:mobile` | Run only the Expo dev server |
| `npm run build` | Build both apps |
| `npm run lint` | Lint both apps |

See `docs/SETUP.md` for a step-by-step walkthrough and `docs/ARCHITECTURE.md`
for how the pieces fit together.
