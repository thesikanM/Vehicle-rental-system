# Rent-a-Ride - Quick Start Guide

## ✅ Issues Fixed

1. **Created backend/package.json** - Backend dependencies now properly configured
2. **Fixed environment variables** - Updated .env with correct variable names:
   - `MONGO_URI` (was `mongo_uri`)
   - `CLOUD_NAME`, `API_KEY`, `API_SECRET` (was `CLOUDINARY_*`)
   - `ACCESS_TOKEN`, `REFRESH_TOKEN` (was `JWT_SECRET`)
   - `RAZORPAY_SECRET` (was `RAZORPAY_KEY_SECRET`)
   - `EMAIL_HOST` (was `EMAIL_USER`)

3. **Fixed deprecated Buffer constructor** - Updated multer.js to use `Buffer.from()` instead of `new Buffer.from()`

4. **Fixed model typos**:
   - Vehicle model: `electirc` → `electric`, `requrired` → `required`, rating type fixed
   - Booking model: Schema variable renamed from `userSchema` to `bookingSchema`

5. **Fixed server.js** - Improved error handling and logging

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (connection string in .env)

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Verify .env file has all required variables
# Check: MONGO_URI, CLOUD_NAME, API_KEY, API_SECRET, ACCESS_TOKEN, REFRESH_TOKEN, etc.

# Start backend server
npm run dev
# or
npm start
```

Backend will run on: `http://localhost:3000`

### Frontend Setup

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on: `http://localhost:5173`

## 📋 Environment Variables Checklist

### Backend (.env)
- ✅ `MONGO_URI` - MongoDB connection string
- ✅ `CLOUD_NAME` - Cloudinary cloud name
- ✅ `API_KEY` - Cloudinary API key
- ✅ `API_SECRET` - Cloudinary API secret
- ✅ `ACCESS_TOKEN` - JWT access token secret
- ✅ `REFRESH_TOKEN` - JWT refresh token secret
- ✅ `EMAIL_HOST` - Email address for notifications
- ✅ `EMAIL_PASSWORD` - Email app password
- ✅ `RAZORPAY_KEY_ID` - Razorpay key ID
- ✅ `RAZORPAY_SECRET` - Razorpay secret key
- ✅ `GOOGLE_CLIENT_ID` - Google OAuth client ID
- ✅ `GOOGLE_CLIENT_SECRET` - Google OAuth secret
- ✅ `PORT` - Server port (default: 3000)

### Frontend (.env)
- ✅ `VITE_PRODUCTION_BACKEND_URL` - Backend URL (http://localhost:3000)
- ✅ `RAZORPAY_KEY_ID` - Razorpay key ID

## 🔗 API Endpoints

- User Routes: `http://localhost:3000/api/user`
- Auth Routes: `http://localhost:3000/api/auth`
- Admin Routes: `http://localhost:3000/api/admin`
- Vendor Routes: `http://localhost:3000/api/vendor`

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify `MONGO_URI` in .env is correct
- Check MongoDB Atlas IP whitelist includes your IP
- Ensure database user has proper permissions

### Cloudinary Upload Error
- Verify `CLOUD_NAME`, `API_KEY`, `API_SECRET` are correct
- Check Cloudinary account is active

### CORS Error
- Ensure frontend URL is in `allowedOrigins` in server.js
- Default: `http://localhost:5173`

### Port Already in Use
- Change `PORT` in .env or kill process using port 3000

## 📝 Notes

- All critical bugs have been fixed
- Backend dependencies are now properly configured
- Environment variables are correctly named
- Ready for local development

## 🎯 Next Steps

1. Install backend dependencies: `cd backend && npm install`
2. Install frontend dependencies: `cd client && npm install`
3. Start backend: `npm run dev` (from backend directory)
4. Start frontend: `npm run dev` (from client directory)
5. Open browser to `http://localhost:5173`

---

**Last Updated:** May 28, 2026
**Status:** ✅ All critical issues fixed and ready to run locally
