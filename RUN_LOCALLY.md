# 🚀 RUN RENT-A-RIDE LOCALLY - MANUAL INSTRUCTIONS

## ⚠️ Important: npm install is taking time

The npm install process is running but taking longer than expected due to the large number of dependencies. This is normal for a full-stack project with many packages.

---

## 🎯 Quick Start - Copy & Paste These Commands

### Step 1: Open Command Prompt or PowerShell
Navigate to your project directory:
```
cd c:\Users\thesi\GitHup\Rent-a-Ride-main\Rent-a-Ride-main
```

### Step 2: Install Backend Dependencies
```bash
npm install --legacy-peer-deps
```
**Time**: 10-20 minutes (first time only)

### Step 3: Install Frontend Dependencies
```bash
cd client
npm install --legacy-peer-deps
cd ..
```
**Time**: 10-20 minutes (first time only)

### Step 4: Start Backend Server (Terminal 1)
```bash
npm run dev
```
**Expected Output**:
```
server listening !
connected
```

### Step 5: Start Frontend Server (Terminal 2)
```bash
cd client
npm run dev
```
**Expected Output**:
```
VITE v5.1.4  ready in XXX ms

➜  Local:   http://localhost:5173/
```

### Step 6: Open in Browser
```
http://localhost:5173
```

---

## 📋 What You Need Before Running

### 1. Update .env File
Edit `backend/.env` and add your credentials:

```env
# MongoDB Connection
mongo_uri=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/?appName=Cluster0

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# JWT Secret
JWT_SECRET=your_random_secret_key_here

# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Server Port
PORT=3000
```

**How to get credentials**: See `ENV_SETUP_DETAILED.md`

---

## 🔧 Troubleshooting

### npm install fails with SSL error
```bash
npm config set strict-ssl false
npm install --legacy-peer-deps
```

### npm install is too slow
- This is normal for first install
- Can take 15-30 minutes
- Don't close the terminal
- Check your internet connection

### Port 3000 already in use
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID with actual number)
taskkill /PID <PID> /F
```

### Port 5173 already in use
```bash
# Find process using port 5173
netstat -ano | findstr :5173

# Kill process
taskkill /PID <PID> /F
```

### MongoDB connection error
- Check `.env` has correct `mongo_uri`
- Verify IP is whitelisted in MongoDB Atlas
- Check username/password are correct

### "nodemon not found" error
- Run `npm install` again
- Make sure you're in the root directory

### "vite not found" error
- Run `npm install` in the `client` directory
- Make sure you're in the `client` directory when running `npm run dev`

---

## 📊 Expected Timeline

| Step | Time | Notes |
|------|------|-------|
| npm install (backend) | 10-20 min | First time only |
| npm install (frontend) | 10-20 min | First time only |
| npm run dev (backend) | 1-2 min | Starts server |
| npm run dev (frontend) | 1-2 min | Starts dev server |
| **Total** | **30-45 min** | First time only |

---

## ✅ Verification Checklist

After everything is running:

- [ ] Backend server shows "server listening !"
- [ ] Backend shows "connected" (MongoDB connected)
- [ ] Frontend shows "Local: http://localhost:5173/"
- [ ] Can open http://localhost:5173 in browser
- [ ] Can see the Rent-a-Ride homepage
- [ ] Can click "Sign Up" button
- [ ] Can see form fields

---

## 🎯 Next Steps After Running

1. **Sign Up**: Create a new account
2. **Browse Vehicles**: View available cars
3. **Book a Vehicle**: Select dates and book
4. **Check Email**: Verify booking confirmation
5. **View Profile**: Manage your account

---

## 📞 Quick Reference

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

# Utilities
npm config set strict-ssl false  # Fix SSL errors
npm cache clean --force          # Clear npm cache
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

## 💡 Pro Tips

1. **Keep terminals open**: Don't close the terminal windows while developing
2. **Check .env file**: Most issues are due to missing/wrong credentials
3. **Use test keys**: Razorpay and Google OAuth have test modes
4. **Check logs**: Look at terminal output for error messages
5. **Hot reload**: Changes auto-reload in dev mode

---

## 🎉 You're Ready!

Follow the steps above and you'll have Rent-a-Ride running locally in 30-45 minutes.

**Happy coding! 🚀**

---

## 📚 Additional Resources

- **QUICK_START.md** - 5-minute overview
- **ENV_SETUP_DETAILED.md** - Credential setup
- **GETTING_STARTED.md** - Complete guide
- **PROJECT_ANALYSIS.md** - Project structure
- **SETUP_GUIDE.md** - Detailed troubleshooting

---

**Last Updated**: May 27, 2026
**Status**: Ready to Run ✅
