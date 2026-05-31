# ⚡ Quick Environment Setup Guide

## 🚀 Fastest Way to Get Running

### Option A: Use Local MongoDB (Fastest - 5 minutes)

#### Step 1: Install MongoDB
- **Windows:** Download from https://www.mongodb.com/try/download/community
- **Mac:** `brew install mongodb-community`
- **Linux:** Follow official docs

#### Step 2: Create `backend/.env`
```env
MONGO_URI=mongodb://localhost:27017/rent-a-ride
CLOUD_NAME=demo
API_KEY=demo
API_SECRET=demo
ACCESS_TOKEN=your_random_secret_key_min_32_chars_long_string_here_12345
REFRESH_TOKEN=your_random_secret_key_min_32_chars_long_string_here_67890
EMAIL_HOST=demo@gmail.com
EMAIL_PASSWORD=demo
RAZORPAY_KEY_ID=rzp_test_demo
RAZORPAY_SECRET=demo
GOOGLE_CLIENT_ID=demo.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=demo
PORT=3000
```

#### Step 3: Create `client/.env`
```env
VITE_PRODUCTION_BACKEND_URL=http://localhost:3000
RAZORPAY_KEY_ID=rzp_test_demo
VITE_FIREBASE_API_KEY=demo
```

#### Step 4: Start Services
```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd client
npm run dev
```

✅ **Done!** Visit http://localhost:5173/

---

### Option B: Use MongoDB Atlas (Recommended - 10 minutes)

#### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Sign Up"
3. Create account with email
4. Verify email

#### Step 2: Create Cluster
1. Click "Create" button
2. Select "Free" tier
3. Choose region (closest to you)
4. Click "Create Cluster"
5. Wait 5-10 minutes for deployment

#### Step 3: Get Connection String
1. Click "Connect" button
2. Select "Drivers"
3. Copy connection string
4. Should look like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/rent-a-ride?retryWrites=true&w=majority`

#### Step 4: Create `backend/.env`
```env
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/rent-a-ride?retryWrites=true&w=majority
CLOUD_NAME=demo
API_KEY=demo
API_SECRET=demo
ACCESS_TOKEN=your_random_secret_key_min_32_chars_long_string_here_12345
REFRESH_TOKEN=your_random_secret_key_min_32_chars_long_string_here_67890
EMAIL_HOST=demo@gmail.com
EMAIL_PASSWORD=demo
RAZORPAY_KEY_ID=rzp_test_demo
RAZORPAY_SECRET=demo
GOOGLE_CLIENT_ID=demo.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=demo
PORT=3000
```

#### Step 5: Create `client/.env`
```env
VITE_PRODUCTION_BACKEND_URL=http://localhost:3000
RAZORPAY_KEY_ID=rzp_test_demo
VITE_FIREBASE_API_KEY=demo
```

#### Step 6: Start Services
```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd client
npm run dev
```

✅ **Done!** Visit http://localhost:5173/

---

## 🔑 Generate Random Secrets

Run these commands in terminal to generate random strings for JWT:

```bash
# Generate ACCESS_TOKEN
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate REFRESH_TOKEN
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output and paste into `.env` files.

---

## ✅ Verification

After setup, check:

1. **Backend Console** should show:
   ```
   MongoDB connected successfully!
   Server listening on port 3000!
   ```

2. **Frontend Console** should show:
   ```
   VITE v5.4.21 ready in XXX ms
   ➜  Local:   http://localhost:5173/
   ```

3. **Browser** at http://localhost:5173/ should show:
   - Rent-a-Ride homepage
   - Navigation menu
   - Hero section with car image
   - No red errors in console (F12)

---

## 🐛 Common Issues & Fixes

### Issue: "MongoDB connection error"
**Fix:** Check MONGO_URI in backend/.env is correct

### Issue: "Cannot GET /api/..."
**Fix:** Make sure backend is running on port 3000

### Issue: "VITE_PRODUCTION_BACKEND_URL is undefined"
**Fix:** Create client/.env file with correct URL

### Issue: "Port 3000 already in use"
**Fix:** Change PORT in backend/.env or kill process using port 3000

---

## 📊 What Works Without Full Setup

✅ **Frontend Features (No Backend Needed):**
- Home page display
- Navigation
- Responsive design
- Static pages (About, Contact, Enterprise)
- UI/UX interactions

❌ **Features Requiring Backend:**
- User authentication
- Vehicle search
- Booking
- Payment
- User profile
- Admin dashboard

---

## 🎯 Full Setup (All Features)

For complete functionality, you'll need:

1. **MongoDB** - Database
2. **Cloudinary** - Image hosting
3. **Razorpay** - Payment processing
4. **Gmail** - Email notifications
5. **Google OAuth** - Social login

See `ERROR_REPORT_AND_FIXES.md` for detailed setup instructions.

---

## 🚀 Next Steps

1. Choose Option A (Local) or Option B (Atlas)
2. Create `.env` files
3. Start services
4. Visit http://localhost:5173/
5. Test the application

**Estimated Time:** 5-15 minutes depending on option chosen

---

**Happy Coding! 🎉**
