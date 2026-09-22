# 🚗 Uber Clone - Full Stack MERN Application

A feature-rich, full-stack Uber Clone application built with the **MERN** stack (MongoDB, Express.js, React, Node.js), featuring real-time socket communication, interactive Google Maps integration, fare calculation, and separate user and captain (driver) flows.

---

## 🌐 Live Demo

- **Frontend (Vercel)**: [https://uber-clone-git-main-dev11bpis-8899s-projects.vercel.app/](https://uber-clone-git-main-dev11bpis-8899s-projects.vercel.app/)
- **Backend API (Render)**: [https://uberclone-6gap.onrender.com](https://uberclone-6gap.onrender.com)

---

## ✨ Key Features

### 👤 User Features
- **User Authentication**: Secure Register, Login, Profile, and Logout with JWT token blacklisting.
- **Location Autocomplete**: Real-time address suggestions powered by Google Maps API.
- **Fare Estimation**: Instant fare calculation for multiple vehicle options (*Car*, *Moto*, *Auto*).
- **Ride Request & OTP System**: Real-time ride booking with OTP verification for ride startup.
- **Live Ride Tracking**: Real-time driver location updates on Google Maps via WebSockets.

### 🚖 Captain (Driver) Features
- **Captain Authentication & Vehicle Registration**: Register with vehicle details (type, plate number, color, capacity).
- **Real-Time Ride Alerts**: Receive nearby ride requests instantly via Socket.io.
- **Accept/Reject Rides**: Captains can accept ride requests and receive pickup/drop location details.
- **OTP Verification**: Enter user's OTP to start the ride safely.
- **Active Ride Status**: Start, monitor, and complete rides seamlessly.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Real-time Communication**: Socket.io-client
- **HTTP Client**: Axios
- **Icons & UI**: Remix Icons

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Real-time Engine**: Socket.io
- **Security & Auth**: JSON Web Token (JWT), bcrypt
- **Validation**: express-validator
- **Maps API**: Google Maps Places & Distance Matrix API

### Deployment & Infrastructure
- **Frontend Hosting**: Vercel
- **Backend Hosting**: Render
- **Database Hosting**: MongoDB Atlas

---

## 📁 Project Structure

```text
UberClone/
├── Backend/
│   ├── controllers/      # Request handlers for users, captains, rides, maps
│   ├── db/               # Database connection setup
│   ├── middlewares/      # Authentication & token verification middleware
│   ├── models/           # Mongoose schemas (user, captain, ride, blacklistToken)
│   ├── routes/           # Express API endpoints
│   ├── services/         # Business logic for maps, rides, user, captain
│   ├── socket.js         # Socket.io connection & event handling
│   ├── app.js            # Express app configuration
│   └── server.js         # HTTP server entry point
│
└── frontend/
    ├── src/
    │   ├── components/   # UI panels, vehicle selection, ride popups
    │   ├── context/      # React context for User, Captain, and Socket
    │   ├── pages/        # User & Captain screens (Login, Signup, Home, Riding)
    │   ├── App.jsx       # Main App component with Protected Routes
    │   └── main.jsx      # Entry point
    ├── public/
    └── vercel.json       # Vercel SPA rewrite configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- MongoDB installed locally or MongoDB Atlas connection string
- Google Maps API Key (Places API, Geocoding API, Distance Matrix API)

### 1. Clone the repository
```bash
git clone https://github.com/dev13x/UberClone.git
cd UberClone
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend/` directory:
```env
PORT=3000
DB_CONNECT=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Run the backend server:
```bash
npm start
# or for development:
npx nodemon server.js
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file inside the `frontend/` directory:
```env
VITE_BASE_URL=http://localhost:3000
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Run the frontend development server:
```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📡 API Endpoints Overview

| Module | Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- | :---: |
| **Users** | `POST` | `/users/register` | Register a new user | ❌ |
| | `POST` | `/users/login` | Login user | ❌ |
| | `GET` | `/users/profile` | Get user profile | ✅ |
| | `GET` | `/users/logout` | Logout user & blacklist token | ✅ |
| **Captains** | `POST` | `/captains/register` | Register a new captain | ❌ |
| | `POST` | `/captains/login` | Login captain | ❌ |
| | `GET` | `/captains/profile` | Get captain profile | ✅ |
| | `GET` | `/captains/logout` | Logout captain | ✅ |
| **Maps** | `GET` | `/maps/get-coordinates` | Get lat/lng for address | ✅ |
| | `GET` | `/maps/get-distance-time` | Get distance & time between 2 places | ✅ |
| | `GET` | `/maps/get-suggestions` | Autocomplete address suggestions | ✅ |
| **Rides** | `POST` | `/rides/create` | Create a new ride request | ✅ |
| | `GET` | `/rides/get-fare` | Calculate fare estimates | ✅ |
| | `POST` | `/rides/confirm` | Confirm ride (Captain) | ✅ |
| | `GET` | `/rides/start-ride` | Start ride with OTP | ✅ |
| | `POST` | `/rides/end-ride` | End ride | ✅ |

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## 📝 License

This project is open source under the [ISC License](LICENSE).
