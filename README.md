# AssetVerse 🏢💼

Project Name AssetVerse

# Purpose

AssetVerse is a Corporate Asset Management System designed to help companies efficiently manage physical assets (laptops, accessories, furniture, etc.) and track asset assignments across employees.
It simplifies HR operations, improves accountability, and prevents asset loss.

# 🌐 Live URL

Client: https://final-assignment-4c484.web.app/
Server:https://final-assignment-server-swart.vercel.app/

# 🚀 Key Features

🔐 Role-based authentication (HR & Employee)
🏢 HR can manage company assets (add, update, delete)
👨‍💼 Employee can request assets
✅ HR approval & rejection system
📊 Asset tracking (returnable & non-returnable)
📈 Dashboard with summary & charts
💳 Subscription-based employee limits (Stripe payment)
🔍 Search & filter assets and requests
📱 Fully responsive UI
🔒 Protected routes & authorization
📦 npm Packages Used

# Frontend

react
react-router-dom
axios
@tanstack/react-query
firebase
stripe-js
recharts
lottie-react
tailwindcss
daisyui

# Backend

express
cors
mongodb
dotenv
jsonwebtoken
stripe

# ⚙️ Setup Instructions

1️⃣ Clone the Repository
git clone https://github.com/your-username/assetverse.git

2️⃣ Client Setup
cd assetverse-client
npm install
npm run dev

3️⃣ Server Setup
cd assetverse-server
npm install
nodemon index.js

🔐 Environment Variables Configuration
Client .env
VITE_apiKey=AIzaSyDnrZ1aIr1tCXuvnphSsVWQDmwiOgKd4lE
VITE_authDomain=final-assignment-4c484.firebaseapp.com
VITE_projectId=final-assignment-4c484
VITE_storageBucket=final-assignment-4c484.firebasestorage.app
VITE_messagingSenderId=836894616664

VITE_appId=1:836894616664:web:d0d8f7eba1750096362e2d
VITE_IMGBB_API_URL=1f856e0cab89155e1dd3a07a901e1439
VITE_API_URL=https://final-assignment-server-swart.vercel.app

Server .env
PORT=5000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
ACCESS_TOKEN_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
SITE_DOMAIN=https://your-client-live-url.vercel.app

# 🧪 Default Roles

HR Manager: Can manage assets & employees
Employee: Can request & track assigned assets
