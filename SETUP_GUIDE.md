# Rent-a-Ride - Complete Setup Guide

## Project Overview
This is a full-stack car rental application with three modules:
- **User Module**: Browse and book vehicles
- **Admin Module**: Manage bookings, vendors, vehicles, and users
- **Vendor Module**: List vehicles and manage orders

**Tech Stack:**
- Frontend: React, Vite, Redux Toolkit, Tailwind CSS, Material UI
- Backend: Node.js, Express.js, MongoDB, Cloudinary, Nodemailer
- Database: MongoDB Atlas
- Payment: Razorpay
- Authentication: JWT + Google OAuth

---

## Prerequisites

Before running the project, ensure you have:
1. **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
2. **npm** (comes with Node.js)
3. **Git** - [Download](https://git-scm.com/)
4. **MongoDB Atlas Account** - [Sign up](https://www.mongodb.com/cloud/atlas)
5. **Cloudinary Account** - [Sign up](https://cloudinary.com/)
6. **Gmail Account** (for email notifications)
7. **Razorpay Account** (for payments) - [Sign up](https://razorpay.com/)
8. **Google OAuth Credentials** - [Setup](https://console.cloud.google.com/)

---

## Step 1: Environment Variables Setup

### Backend Configuration (.env file)

The `.env` file is already created at `backend/.env`. Update it with your credentials:

```env
# MongoDB Connection
# Get from: https://www.mongodb.com/cloud/atlas
# Format: mongodb+srv://username:password@cluster.mongodb.net/rent-a-ride
mongo_uri=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/?appName=Cluster0

# Cloudinary Configuration
# Get from: https://cloudinary.com/console
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# JWT Secret
# Generate any random string (at least 32 characters)
JWT_SECRET=your_random_jwt_secret_key_here

# Email Configuration (Nodemailer - Gmail)
# Use Gmail app password, not your regular password
# Generate at: https://myaccount.google.com/apppasswords
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Razorpay Configuration
# Get from: https://dashboard.razorpay.com/app/keys
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key

# Google OAuth
# Get from: https://console.cloud.google.com/
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Server Port
PORT=3000
```

### How to Get Each Credential:

#### 1. MongoDB URI
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster
- Click "Connect" → "Drivers"
- Copy the connection string
- Replace `<username>` and `<password>` with your database user credentials

#### 2. Cloudinary Credentials
- Sign up at [Cloudinary](https://cloudinary.com/)
- Go to Dashboard
- Copy: Cloud Name, API Key, API Secret

#### 3. Gmail App Password
- Enable 2-factor authentication on your Google account
- Go to [App Passwords](https://myaccount.google.com/apppasswords)
- Select "Mail" and "Windows Computer"
- Copy the generated password

#### 4. Razorpay Keys
- Sign up at [Razorpay](https://razorpay.com/)
- Go to Settings → API Keys
- Copy Key ID and Key Secret (use test keys for development)

#### 5. Google OAuth
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a new project
- Enable Google+ API
- Create OAuth 2.0 credentials (Web application)
- Add `http://localhost:5173` and `http://localhost:3000` to authorized origins
- Copy Client ID and Client Secret

---

## Step 2: Install Dependencies

### Install Root Dependencies (Backend)
```bash
npm install
```

### Install Frontend Dependencies
```bash
cd client
npm install
cd ..
```

---

## Step 3: Run the Application

### Option A: Run Both Servers Separately (Recommended for Development)

**Terminal 1 - Backend Server:**
```bash
npm run dev
```
Backend will run on: `http://localhost:3000`

**Terminal 2 - Frontend Server:**
```bash
cd client
npm run dev
```
Frontend will run on: `http://localhost:5173`

### Option B: Run Backend Only
```bash
npm start
```

### Option C: Run Frontend Only
```bash
cd client
npm run dev
```

---

## Step 4: Access the Application

Once both servers are running:

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api

### Test Accounts (if available):
- **User**: Sign up or use Google OAuth
- **Admin**: Contact project owner
- **Vendor**: Sign up as vendor

---

## Project Structure

```
Rent-a-Ride/
├── backend/
│   ├── controllers/
│   │   ├── adminControllers/
│   │   ├── userControllers/
│   │   └── vendorControllers/
│   ├── models/
│   │   ├── userModel.js
│   │   ├── vehicleModel.js
│   │   ├── BookingModel.js
│   │   └── masterDataModel.js
│   ├── routes/
│   │   ├── authRoute.js
│   │   ├── userRoute.js
│   │   ├── adminRoute.js
│   │   └── venderRoute.js
│   ├── utils/
│   │   ├── cloudinaryConfig.js
│   │   ├── multer.js
│   │   ├── verifyUser.js
│   │   └── error.js
│   ├── services/
│   │   └── checkAvailableVehicle.js
│   ├── .env
│   └── server.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── package.json
```

---

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User signup
- `POST /api/auth/signin` - User signin
- `POST /api/auth/google` - Google OAuth

### User Routes
- `GET /api/user/vehicles` - Get all vehicles
- `POST /api/user/booking` - Create booking
- `GET /api/user/bookings` - Get user bookings
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Vendor Routes
- `POST /api/vendor/signup` - Vendor signup
- `POST /api/vendor/vehicle` - Add vehicle
- `GET /api/vendor/vehicles` - Get vendor vehicles
- `GET /api/vendor/bookings` - Get vendor bookings

### Admin Routes
- `GET /api/admin/users` - Get all users
- `GET /api/admin/vendors` - Get all vendors
- `GET /api/admin/bookings` - Get all bookings
- `GET /api/admin/vehicles` - Get all vehicles
- `DELETE /api/admin/user/:id` - Delete user
- `DELETE /api/admin/vendor/:id` - Delete vendor

---

## Troubleshooting

### Issue: npm install fails with SSL error
**Solution:**
```bash
npm config set strict-ssl false
npm install
```

### Issue: MongoDB connection fails
**Solution:**
- Check your MongoDB URI in `.env`
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify username and password are correct

### Issue: Cloudinary upload fails
**Solution:**
- Verify Cloudinary credentials in `.env`
- Check if your Cloudinary account is active

### Issue: Email not sending
**Solution:**
- Use Gmail app password, not regular password
- Enable "Less secure app access" if using regular password
- Check EMAIL_USER and EMAIL_PASSWORD in `.env`

### Issue: Port 3000 or 5173 already in use
**Solution:**
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

---

## Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload during development
2. **Redux DevTools**: Install Redux DevTools browser extension for debugging
3. **MongoDB Compass**: Use MongoDB Compass to visualize your database
4. **Postman**: Use Postman to test API endpoints
5. **Git**: Commit frequently with meaningful messages

---

## Deployment

For production deployment:
1. Build frontend: `cd client && npm run build`
2. Deploy to AWS EC2 or Vercel
3. Use environment variables for sensitive data
4. Set up Nginx as reverse proxy
5. Use PM2 for process management

---

## Support

For issues or questions:
- Check the README.md
- Review the code comments
- Check MongoDB and Cloudinary documentation
- Verify all environment variables are set correctly

---

**Last Updated**: May 27, 2026
