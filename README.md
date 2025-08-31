# React Events & Authentication App

This project is a React application built with Vite. It features authentication (login/signup) and event management, using Firebase Authentication for user accounts.

## Features
- User authentication (signup & login)
- Event creation, editing, and listing
- Newsletter signup
- Error handling and navigation

## Project Structure
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   ├── Events/
│   │   ├── Home/
│   │   └── NewsLetter/
│   ├── loader-action/
│   └── routes/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or later recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables
- The app uses a Firebase Web API key for authentication. Update the API key in `src/loader-action/authAction.js` with your own Firebase project's key.

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## License
MIT
