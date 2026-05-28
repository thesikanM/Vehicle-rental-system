# 🚗 Rent-a-Ride - START HERE

Welcome! This guide will help you get the Rent-a-Ride application running on your local machine in minutes.

---

## ⚡ Quick Start (5 Minutes)

### For Windows Users - Easiest Way

**Option 1: Double-click the batch file**
```
run-dev.bat
```
This opens two windows automatically - one for backend, one for frontend.

**Option 2: Use PowerShell script**
```powershell
.\run-dev.ps1
```

**Option 3: Manual setup (two terminals)**

Terminal 1:
```bash
npm run dev
```

Terminal 2:
```bash
cd client
npm run dev
```

Then open: http://localhost:5173

---

## 📋 What You Need First

Before running the app, you need to set up credentials. This takes about 10 minutes.

### Step 1: Get Credentials
Read this file: **`ENV_SETUP_DETAILED.md`**

It will guide you through getting:
- ✅ MongoDB URI (database)
- ✅ Cloudinary credentials (image storage)
- ✅ Gmail app password (email)
- ✅ Razorpay keys (payments)
- ✅ Google OAuth credentials (social login)

### Step 2: Update .env File
Edit `backend/.env` and add all your credentials:

```env
mongo_uri=your_mongodb_uri_here
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
JWT_SECRET=your_random_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
PORT=3000
```

### Step 3: Install Dependencies
```bash
npm install
cd client
npm install
cd ..
```

### Step 4: Run the App
```bash
# Terminal 1
npm run dev

# Terminal 2
cd client
npm run dev
```

### Step 5: Open in Browser
http://localhost:5173

---

## 📚 Documentation Guide

Choose the guide that matches your needs:

| Guide | Best For | Time |
|-------|----------|------|
| **QUICK_START.md** | Fast setup with minimal explanation | 5 min |
| **ENV_SETUP_DETAILED.md** | Getting all credentials step-by-step | 10 min |
| **GETTING_STARTED.md** | Complete beginner's guide | 15 min |
| **SETUP_GUIDE.md** | Detailed setup with troubleshooting | 20 min |
| **PROJECT_ANALYSIS.md** | Understanding the project structure | 10 min |

---

## 🎯 Choose Your Path

### Path 1: I Just Want to Run It (Fastest)
1. Read: `ENV_SETUP_DETAILED.md` (get credentials)
2. Update: `backend/.env` file
3. Run: `run-dev.bat` (Windows) or `run-dev.ps1` (PowerShell)
4. Open: http://localhost:5173

### Path 2: I Want to Understand It First
1. Read: `PROJECT_ANALYSIS.md` (understand structure)
2. Read: `ENV_SETUP_DETAILED.md` (get credentials)
3. Read: `GETTING_STARTED.md` (step-by-step)
4. Follow the setup steps
5. Run the app

### Path 3: I'm a Beginner
1. Read: `GETTING_STARTED.md` (complete guide)
2. Read: `ENV_SETUP_DETAILED.md` (credentials)
3. Read: `SETUP_GUIDE.md` (detailed help)
4. Follow all steps carefully
5. Use troubleshooting section if needed

---

## 🔑 Environment Variables Explained

| Variable | What It Is | Where to Get |
|----------|-----------|-------------|
| `mongo_uri` | Database connection | MongoDB Atlas |
| `CLOUDINARY_*` | Image storage | Cloudinary |
| `JWT_SECRET` | Auth token secret | Generate random string |
| `EMAIL_*` | Email sending | Gmail |
| `RAZORPAY_*` | Payment processing | Razorpay |
| `GOOGLE_*` | Social login | Google Cloud |

**Detailed instructions**: See `ENV_SETUP_DETAILED.md`

---

## 🚀 Running the App

### Option A: Automatic (Windows)
```bash
run-dev.bat
```

### Option B: PowerShell
```powershell
.\run-dev.ps1
```

### Option C: Manual (Any OS)
```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

### Option D: Backend Only
```bash
npm start
```

---

## 🌐 Access Points

Once running:

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:5173 | User interface |
| Backend API | http://localhost:3000/api | API endpoints |

---

## 🧪 Test the App

After starting:

1. **Sign Up**: Create a new account
2. **Browse Vehicles**: View available cars
3. **Book a Vehicle**: Select dates and book
4. **Check Email**: Verify booking confirmation
5. **View Profile**: Manage your account

---

## 🐛 Troubleshooting

### npm install fails
```bash
npm config set strict-ssl false
npm install
```

### Port 3000 already in use
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### MongoDB connection error
- Check `.env` has correct `mongo_uri`
- Verify IP is whitelisted in MongoDB Atlas
- Check username/password are correct

### Email not sending
- Use Gmail app password (not regular password)
- Enable 2-factor authentication first
- Check EMAIL_USER and EMAIL_PASSWORD in `.env`

### Google OAuth not working
- Check redirect URIs in Google Cloud Console
- Verify Client ID and Secret are correct
- Clear browser cookies and try again

**More help**: See `SETUP_GUIDE.md` troubleshooting section

---

## 📊 Project Overview

**Rent-a-Ride** is a full-stack car rental platform with:

- **Frontend**: React + Vite (modern, fast)
- **Backend**: Node.js + Express (scalable)
- **Database**: MongoDB (flexible)
- **Storage**: Cloudinary (images/videos)
- **Payments**: Razorpay (secure)
- **Auth**: JWT + Google OAuth (secure)

**Three user roles**:
- 👤 **User**: Browse and book vehicles
- 🚗 **Vendor**: List vehicles for rent
- 👨‍💼 **Admin**: Manage everything

---

## ✅ Checklist Before Running

- [ ] Node.js v16+ installed
- [ ] npm v7+ installed
- [ ] MongoDB URI obtained
- [ ] Cloudinary credentials obtained
- [ ] Gmail app password generated
- [ ] Razorpay keys obtained
- [ ] Google OAuth credentials created
- [ ] `.env` file updated
- [ ] `npm install` completed
- [ ] Ready to run!

---

## 🎓 Learning Resources

### Understanding the Project
- `PROJECT_ANALYSIS.md` - Architecture and structure
- `README.md` - Original project documentation

### Setting Up
- `ENV_SETUP_DETAILED.md` - Credential setup
- `SETUP_GUIDE.md` - Complete setup guide
- `GETTING_STARTED.md` - Beginner's guide

### Quick Reference
- `QUICK_START.md` - 5-minute setup
- This file - Overview and quick start

---

## 🎯 Next Steps

1. **Choose your path** (see "Choose Your Path" section above)
2. **Read the appropriate guide** (5-20 minutes)
3. **Get credentials** (10 minutes)
4. **Update .env file** (2 minutes)
5. **Install dependencies** (5-10 minutes)
6. **Run the app** (1 minute)
7. **Test it out** (5 minutes)

**Total time**: 30-60 minutes

---

## 💡 Pro Tips

1. **Use the batch script**: `run-dev.bat` opens both servers automatically
2. **Keep terminals open**: Don't close the terminal windows while developing
3. **Check .env file**: Most issues are due to missing/wrong credentials
4. **Use test keys**: Razorpay and Google OAuth have test modes
5. **Check logs**: Look at terminal output for error messages

---

## 🆘 Need Help?

1. **Quick question?** → Check `QUICK_START.md`
2. **Setup issue?** → Check `ENV_SETUP_DETAILED.md`
3. **Detailed help?** → Check `SETUP_GUIDE.md`
4. **Understanding code?** → Check `PROJECT_ANALYSIS.md`
5. **Still stuck?** → Check troubleshooting sections in guides

---

## 🎉 Ready to Go!

You're all set! Follow the steps above and you'll have Rent-a-Ride running in no time.

**Happy coding! 🚀**

---

## 📞 Quick Reference

```bash
# Install dependencies
npm install
cd client && npm install && cd ..

# Run backend
npm run dev

# Run frontend
cd client && npm run dev

# Run both (Windows)
run-dev.bat

# Access app
http://localhost:5173
```

---

**Last Updated**: May 27, 2026
**Status**: Ready for Development ✅
