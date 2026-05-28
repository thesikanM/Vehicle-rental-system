# Getting Started with Rent-a-Ride

## 📋 What You Need to Know

This is a **full-stack car rental application** with:
- **Frontend**: React + Vite (runs on port 5173)
- **Backend**: Node.js + Express (runs on port 3000)
- **Database**: MongoDB Atlas (cloud)
- **Storage**: Cloudinary (images/videos)
- **Payments**: Razorpay
- **Auth**: JWT + Google OAuth

---

## 🚀 Quick Start (Choose One)

### Option 1: Easiest - Use Batch Script (Windows)
```bash
# Double-click this file:
run-dev.bat
```
This opens two windows - one for backend, one for frontend.

### Option 2: Use PowerShell Script (Windows)
```bash
# Right-click PowerShell and run as Administrator:
.\run-dev.ps1
```

### Option 3: Manual - Two Terminal Windows

**Terminal 1 - Backend:**
```bash
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

### Option 4: Backend Only
```bash
npm start
```

---

## 📝 Step-by-Step Setup

### 1. Prerequisites
- [ ] Node.js v16+ installed
- [ ] npm installed
- [ ] Git installed

### 2. Get Credentials (5-10 minutes)
Follow `ENV_SETUP_DETAILED.md` to get:
- [ ] MongoDB URI
- [ ] Cloudinary credentials
- [ ] Gmail app password
- [ ] Razorpay keys
- [ ] Google OAuth credentials

### 3. Update .env File
Edit `backend/.env` and add all credentials:
```env
mongo_uri=your_mongodb_uri
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
JWT_SECRET=your_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
PORT=3000
```

### 4. Install Dependencies
```bash
# Backend dependencies
npm install

# Frontend dependencies
cd client
npm install
cd ..
```

### 5. Run the Application
```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

### 6. Access the App
- Open browser: http://localhost:5173
- Sign up or use Google OAuth
- Start booking vehicles!

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `QUICK_START.md` | Fast 5-minute setup |
| `ENV_SETUP_DETAILED.md` | Detailed credential setup |
| `SETUP_GUIDE.md` | Complete setup guide |
| `README.md` | Project overview |
| `run-dev.bat` | Windows batch script |
| `run-dev.ps1` | PowerShell script |

---

## 🔑 Environment Variables

### Required for Backend (.env file)

```env
# Database
mongo_uri=mongodb+srv://user:pass@cluster.mongodb.net/?appName=Cluster0

# Image Storage
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

# Authentication
JWT_SECRET=your_random_secret_key

# Email
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Payments
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret

# Social Login
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret

# Server
PORT=3000
```

---

## 🌐 Access Points

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:5173 | User interface |
| Backend API | http://localhost:3000/api | API endpoints |
| MongoDB | Cloud | Database |
| Cloudinary | Cloud | Image storage |

---

## 📱 Features by Role

### User
- Browse available vehicles
- Book vehicles
- View booking history
- Manage profile
- Receive email confirmations

### Vendor
- Sign up as vendor
- Add vehicles for approval
- View bookings
- Receive order notifications

### Admin
- Manage all users
- Manage all vendors
- Manage all bookings
- Manage all vehicles
- Approve/reject vendors

---

## 🛠️ Available Commands

```bash
# Backend
npm run dev          # Start with hot reload
npm start            # Start production mode

# Frontend
cd client
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run linter
```

---

## 🐛 Troubleshooting

### npm install fails
```bash
npm config set strict-ssl false
npm install
```

### Port already in use
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID)
taskkill /PID <PID> /F
```

### MongoDB connection error
- Check `.env` has correct `mongo_uri`
- Verify IP is whitelisted in MongoDB Atlas
- Check username/password

### Email not sending
- Use Gmail app password (not regular password)
- Enable 2-factor authentication
- Check EMAIL_USER and EMAIL_PASSWORD

### Google OAuth not working
- Check redirect URIs in Google Cloud Console
- Verify Client ID and Secret
- Clear browser cookies

---

## 📊 Project Structure

```
Rent-a-Ride/
├── backend/
│   ├── controllers/      # Business logic
│   ├── models/           # Database schemas
│   ├── routes/           # API endpoints
│   ├── utils/            # Helper functions
│   ├── services/         # Business services
│   ├── .env              # Environment variables
│   └── server.js         # Express server
├── client/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── redux/        # State management
│   │   ├── Assets/       # Images/icons
│   │   └── App.jsx       # Main app
│   ├── package.json
│   └── vite.config.js
├── package.json          # Root dependencies
├── QUICK_START.md        # Quick setup
├── ENV_SETUP_DETAILED.md # Credential setup
├── SETUP_GUIDE.md        # Complete guide
├── run-dev.bat           # Windows batch script
└── run-dev.ps1           # PowerShell script
```

---

## 🔐 Security Notes

⚠️ **Important:**
- Never commit `.env` to Git
- Never share credentials
- Use strong passwords
- Regenerate keys if compromised
- Use test keys for development
- Use production keys only for production

---

## 📞 Support

1. Check the relevant documentation file
2. Review the `.env` file configuration
3. Check browser console for errors
4. Check terminal for backend errors
5. Verify all credentials are correct

---

## 🎯 Next Steps

1. **Read** `ENV_SETUP_DETAILED.md` to get credentials
2. **Update** `backend/.env` with your credentials
3. **Run** `npm install` in root and `client` directories
4. **Start** backend: `npm run dev`
5. **Start** frontend: `cd client && npm run dev`
6. **Open** http://localhost:5173 in browser
7. **Sign up** and start exploring!

---

## 🎉 You're Ready!

Everything is set up. Now you can:
- Browse and book vehicles
- Manage your profile
- Receive email notifications
- Make payments with Razorpay
- Use Google OAuth for quick login

**Happy coding! 🚀**

---

**Last Updated**: May 27, 2026
