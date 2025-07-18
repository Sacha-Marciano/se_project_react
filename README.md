# WTWR (What To Wear) – Weather & Clothing Recommendation App

A modern React + Vite web application that helps users decide what to wear based on the current weather at their location. WTWR fetches real-time weather data and suggests appropriate clothing items, allowing users to manage their own wardrobe, like items, and update their profile.

---

## Table of Contents
- [Features](#features)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API & Authentication](#api--authentication)
- [Available Scripts](#available-scripts)
- [Styling & Assets](#styling--assets)
- [Credits](#credits)
- [License](#license)

---

## Features
- **Weather-based clothing suggestions**: See what to wear based on real-time weather at your location.
- **User authentication**: Register, log in, and manage your profile (name, avatar).
- **Personal wardrobe**: Add, view, and delete clothing items tagged for specific weather types (hot, warm, cold).
- **Like system**: Like your own clothing items.
- **Responsive UI**: Clean, modern design with modals for forms and popups.
- **Protected routes**: Profile and wardrobe management are only accessible to logged-in users.
- **Temperature unit toggle**: Switch between Fahrenheit and Celsius.

---

## Live Demo
- [Production site](https://watowear.jumpingcrab.com) *(if available)*
- Or run locally (see below)

---

## Screenshots
*(Add screenshots here if desired)*

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [WTWR Backend API](https://github.com/Sacha-Marciano/se_project_express) (clone and run locally for full functionality)

### Installation
1. **Clone this repository:**
   ```bash
   git clone <this-repo-url>
   cd se_project_react(mine)
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will open at [http://localhost:5173](http://localhost:5173) by default.

4. **Start the backend server:**
   - Follow instructions in [se_project_express](https://github.com/Sacha-Marciano/se_project_express) to run the backend on `http://localhost:3001`.

---

## Project Structure
```
se_project_react(mine)/
├── public/                # Static assets (SVGs, favicon)
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # React components (modals, cards, UI)
│   ├── contexts/          # React context providers (user, temp unit)
│   ├── utils/             # API, auth, constants, weather logic
│   ├── vendor/            # Fonts and CSS resets
│   ├── index.css          # Global styles
│   └── main.jsx           # App entry point
├── db.json                # Example/mock data for local dev
├── index.html             # HTML template
├── package.json           # Project config and scripts
└── README.md              # This file
```

---

## API & Authentication

### Backend API
- **Base URL:** `http://localhost:3001` (local) or `https://api.watowear.jumpingcrab.com` (production)
- **Endpoints:**
  - `POST /signup` – Register a new user `{ email, password, name, avatar }`
  - `POST /signin` – Log in `{ email, password }` (returns JWT)
  - `GET /users/me` – Get current user (requires JWT)
  - `PATCH /users/me` – Update user profile `{ name, avatar }` (requires JWT)
  - `GET /items` – Get all clothing items
  - `POST /items` – Add new item `{ name, imageUrl, weather }` (requires JWT)
  - `DELETE /items/:id` – Delete item (requires JWT, owner only)
  - `PUT /items/:id/likes` – Like item (requires JWT)
  - `DELETE /items/:id/likes` – Remove like (requires JWT)

### Weather API
- Uses [OpenWeatherMap](https://openweathermap.org/) for real-time weather data.
- API key is hardcoded for demo purposes in `src/utils/constants.js`.

### Authentication Flow
- JWT is stored in `localStorage` after login.
- Protected routes/components check for valid JWT.
- User info and wardrobe are only accessible when logged in.

---

## Available Scripts
- `npm run dev` – Start development server with hot reload
- `npm run build` – Build for production
- `npm run preview` – Preview production build locally
- `npm run lint` – Run ESLint on the codebase
- `npm run deploy` – Build and deploy to production server (custom, see `package.json`)

---

## Styling & Assets
- **Fonts:** [Cabinet Grotesk](https://fonts.google.com/specimen/Cabinet+Grotesk) (included in `src/vendor/fonts/`)
- **CSS:** Custom styles per component, global reset via `normalize.css`
- **Images:** Weather icons, clothing images, and avatars in `src/assets/`

---

## Credits
- Developed by Sacha M. Marciano
- Weather data by [OpenWeatherMap](https://openweathermap.org/)
- Inspired by Practicum by Yandex WTWR project

---

## License
This project is for educational/demo purposes. See [LICENSE](LICENSE) if present.
