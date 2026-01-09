# AssetVerse 🏢💼

Project Name AssetVerse

# Purpose

AssetVerse is a Corporate Asset Management System designed to help companies efficiently manage physical assets (laptops, accessories, furniture, etc.) and track asset assignments across employees.
It simplifies HR operations, improves accountability, and prevents asset loss.

# 🌐 Live URL

- Client:
 ```
 https://final-assignment-4c484.web.app/
 ```
- Server:
 ```
https://final-assignment-server-swart.vercel.app/
```

# 🚀 Key Features

- 🔐 Role-based authentication (HR & Employee)
- 🏢 HR can manage company assets (add, update, delete)
- 👨‍💼 Employee can request assets
- ✅ HR approval & rejection system
- 📊 Asset tracking (returnable & non-returnable)
- 📈 Dashboard with summary & charts
- 💳 Subscription-based employee limits (Stripe payment)
- 🔍 Search & filter assets and requests
- 📱 Fully responsive UI
- 🔒 Protected routes & authorization
- 📦 npm Packages Used

# Frontend

- react
- react-router-dom
- axios
- @tanstack/react-query
- firebase
- stripe-js
- recharts
- lottie-react
- tailwindcss
- daisyui

# Backend

- express
- cors
- mongodb
- dotenv
- jsonwebtoken
- stripe

# ⚙️ Setup Instructions

1️⃣ Clone the Repository
```bash
https://github.com/hsagor703/final-assignment-client.git
```

2️⃣ Client Setup
```bash
cd assetverse-client
npm install
npm run dev
```

3️⃣ Server Setup
```bash
cd assetverse-server
npm install
nodemon index.js
```

🔐 Environment Variables Configuration
Client `.env`
```
VITE_apiKey=AIzaSyDnrZ1aIr1tCXuvnphSsVWQDmwiOgKd4lE
VITE_authDomain=final-assignment-4c484.firebaseapp.com
VITE_projectId=final-assignment-4c484
VITE_storageBucket=final-assignment-4c484.firebasestorage.app
VITE_messagingSenderId=836894616664

VITE_appId=1:836894616664:web:d0d8f7eba1750096362e2d
VITE_IMGBB_API_URL=1f856e0cab89155e1dd3a07a901e1439
VITE_API_URL=https://final-assignment-server-swart.vercel.app
```

Server `.env`
```
PORT=5000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
ACCESS_TOKEN_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
SITE_DOMAIN=https://your-client-live-url.vercel.app
```

📦 Dependencies
```
 "dependencies": {
    "@headlessui/react": "^2.2.9",
    "@tailwindcss/vite": "^4.1.17",
    "@tanstack/react-query": "^5.90.12",
    "axios": "^1.13.2",
    "firebase": "^12.6.0",
    "framer-motion": "^12.23.25",
    "lucide-react": "^0.556.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.68.0",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.6",
    "react-spinners": "^0.17.0",
    "sweetalert2": "^11.26.4",
    "tailwindcss": "^4.1.17"
    }
```

# 🧪 Default Roles

- HR Manager: Can manage assets & employees
- Employee: Can request & track assigned assets


