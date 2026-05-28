# Rent-a-Ride Project Analysis & Setup Guide

## 📊 Project Overview

**Rent-a-Ride** is a full-stack car rental platform built with modern web technologies. It's a three-tier application with separate modules for Users, Vendors, and Admins.

### Project Type
- **Full-Stack Web Application**
- **Architecture**: MVC (Model-View-Controller)
- **Deployment**: AWS EC2 with Nginx reverse proxy

---

## 🏗️ Architecture

### Frontend (Client)
- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.1.4
- **State Management**: Redux Toolkit 2.2.1
- **Styling**: Tailwind CSS 3.4.1 + Material UI 5.15.12
- **Form Handling**: React Hook Form 7.51.0 + Zod 3.22.4
- **UI Components**: Ant Design 5.17.3, Flowbite React 0.7.3
- **Charts**: Nivo, Syncfusion
- **Authentication**: Firebase Auth, Google OAuth
- **Payment**: Razorpay integration
- **Port**: 5173

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express.js 4.18.2
- **Database**: MongoDB 8.2.0
- **Authentication**: JWT (jsonwebtoken 9.0.2)
- **File Upload**: Multer 1.4.5
- **Image Storage**: Cloudinary 2.0.3
- **Email**: Nodemailer 6.9.13
- **Password Hashing**: bcryptjs 2.4.3
- **CORS**: Enabled for frontend
- **Port**: 3000

### Database
- **Type**: MongoDB (NoSQL)
- **Hosting**: MongoDB Atlas (Cloud)
- **Models**:
  - User Model
  - Vehicle Model
  - Booking Model
  - Master Data Model

---

## 📁 Project Structure

```
Rent-a-Ride/
│
├── backend/                          # Node.js/Express server
│   ├── controllers/
│   │   ├── adminControllers/         # Admin business logic
│   │   │   ├── adminController.js
│   │   │   ├── bookingsController.js
│   │   │   ├── dashboardController.js
│   │   │   ├── masterCollectionController.js
│   │   │   └── vendorVehilceRequests.js
│   │   ├── userControllers/          # User business logic
│   │   │   ├── userAllVehiclesController.js
│   │   │   ├── userBookingController.js
│   │   │   ├── userController.js
│   │   │   └── userProfileController.js
│   │   ├── vendorControllers/        # Vendor business logic
│   │   │   ├── vendorBookingsController.js
│   │   │   ├── vendorController.js
│   │   │   └── vendorCrudController.js
│   │   └── authController.js         # Authentication logic
│   │
│   ├── models/                       # Database schemas
│   │   ├── userModel.js
│   │   ├── vehicleModel.js
│   │   ├── BookingModel.js
│   │   └── masterDataModel.js
│   │
│   ├── routes/                       # API endpoints
│   │   ├── authRoute.js
│   │   ├── userRoute.js
│   │   ├── adminRoute.js
│   │   └── venderRoute.js
│   │
│   ├── utils/                        # Helper functions
│   │   ├── cloudinaryConfig.js       # Image upload config
│   │   ├── multer.js                 # File upload middleware
│   │   ├── verifyUser.js             # JWT verification
│   │   └── error.js                  # Error handling
│   │
│   ├── services/                     # Business services
│   │   └── checkAvailableVehicle.js
│   │
│   ├── .env                          # Environment variables
│   ├── server.js                     # Express server entry point
│   └── package.json
│
├── client/                           # React frontend
│   ├── src/
│   │   ├── components/               # Reusable components
│   │   ├── pages/                    # Page components
│   │   ├── redux/                    # Redux store & slices
│   │   ├── Assets/                   # Images, icons, SVGs
│   │   ├── App.jsx                   # Main app component
│   │   └── main.jsx                  # React entry point
│   │
│   ├── index.html                    # HTML template
│   ├── package.json
│   ├── vite.config.js                # Vite configuration
│   ├── tailwind.config.js            # Tailwind CSS config
│   ├── postcss.config.js             # PostCSS config
│   └── .eslintrc.cjs                 # ESLint config
│
├── package.json                      # Root dependencies (backend)
├── README.md                         # Project documentation
├── GETTING_STARTED.md                # Quick start guide
├── QUICK_START.md                    # 5-minute setup
├── ENV_SETUP_DETAILED.md             # Credential setup
├── SETUP_GUIDE.md                    # Complete setup guide
├── run-dev.bat                       # Windows batch script
└── run-dev.ps1                       # PowerShell script
```

---

## 🔑 Key Features

### User Module
- ✅ Browse available vehicles
- ✅ Advanced search, filter, and sort
- ✅ Book vehicles with date selection
- ✅ View booking history
- ✅ Manage profile
- ✅ Email notifications on booking
- ✅ Google OAuth login
- ✅ Razorpay payment integration

### Vendor Module
- ✅ Vendor registration
- ✅ Add vehicles for approval
- ✅ Manage vehicle listings
- ✅ View booking orders
- ✅ Receive order notifications
- ✅ Vehicle image/video uploads

### Admin Module
- ✅ Dashboard with analytics
- ✅ User management
- ✅ Vendor management (approve/reject)
- ✅ Booking management
- ✅ Vehicle management
- ✅ Master data management

---

## 🔐 Security Features

- **JWT Authentication**: Access and refresh tokens
- **Password Hashing**: bcryptjs for secure password storage
- **Role-Based Access Control**: Different permissions for User/Vendor/Admin
- **Protected Routes**: Middleware to verify user roles
- **CORS Configuration**: Restricted to allowed origins
- **Environment Variables**: Sensitive data in .env file

---

## 🌐 API Endpoints

### Authentication
```
POST   /api/auth/signup              # User registration
POST   /api/auth/signin              # User login
POST   /api/auth/google              # Google OAuth
```

### User Routes
```
GET    /api/user/vehicles            # Get all vehicles
GET    /api/user/vehicles/:id        # Get vehicle details
POST   /api/user/booking             # Create booking
GET    /api/user/bookings            # Get user bookings
GET    /api/user/profile             # Get user profile
PUT    /api/user/profile             # Update profile
DELETE /api/user/account             # Delete account
```

### Vendor Routes
```
POST   /api/vendor/signup            # Vendor registration
POST   /api/vendor/signin            # Vendor login
POST   /api/vendor/vehicle           # Add vehicle
GET    /api/vendor/vehicles          # Get vendor vehicles
PUT    /api/vendor/vehicle/:id       # Update vehicle
DELETE /api/vendor/vehicle/:id       # Delete vehicle
GET    /api/vendor/bookings          # Get vendor bookings
```

### Admin Routes
```
GET    /api/admin/users              # Get all users
DELETE /api/admin/user/:id           # Delete user
GET    /api/admin/vendors            # Get all vendors
PUT    /api/admin/vendor/:id/approve # Approve vendor
DELETE /api/admin/vendor/:id         # Delete vendor
GET    /api/admin/bookings           # Get all bookings
GET    /api/admin/vehicles           # Get all vehicles
PUT    /api/admin/vehicle/:id        # Update vehicle
DELETE /api/admin/vehicle/:id        # Delete vehicle
```

---

## 📋 Requirements to Run

### System Requirements
- **OS**: Windows, macOS, or Linux
- **Node.js**: v16 or higher
- **npm**: v7 or higher
- **RAM**: 2GB minimum
- **Disk Space**: 500MB minimum

### External Services (Free Tier Available)
1. **MongoDB Atlas** - Database hosting
2. **Cloudinary** - Image/video storage
3. **Gmail** - Email notifications
4. **Razorpay** - Payment processing
5. **Google Cloud** - OAuth authentication

---

## 🚀 Installation Steps

### Step 1: Prerequisites
```bash
# Check Node.js version
node --version    # Should be v16+

# Check npm version
npm --version     # Should be v7+
```

### Step 2: Get Credentials
Follow `ENV_SETUP_DETAILED.md` to obtain:
- MongoDB URI
- Cloudinary credentials
- Gmail app password
- Razorpay keys
- Google OAuth credentials

### Step 3: Configure Environment
Edit `backend/.env` with all credentials

### Step 4: Install Dependencies
```bash
# Backend dependencies
npm install

# Frontend dependencies
cd client
npm install
cd ..
```

### Step 5: Run Application
```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

### Step 6: Access Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000/api

---

## 🛠️ Development Commands

### Backend
```bash
npm run dev          # Start with hot reload (nodemon)
npm start            # Start production mode
```

### Frontend
```bash
cd client
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 📊 Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  address: String,
  role: String (user/vendor/admin),
  profileImage: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Vehicle Model
```javascript
{
  name: String,
  model: String,
  year: Number,
  price: Number,
  location: String,
  images: [String],
  vendor: ObjectId (ref: User),
  available: Boolean,
  features: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Booking Model
```javascript
{
  user: ObjectId (ref: User),
  vehicle: ObjectId (ref: Vehicle),
  pickupDate: Date,
  dropoffDate: Date,
  pickupLocation: String,
  dropoffLocation: String,
  totalPrice: Number,
  status: String (pending/confirmed/completed/cancelled),
  paymentStatus: String (pending/completed),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔄 Data Flow

```
User Interface (React)
        ↓
Redux Store (State Management)
        ↓
API Calls (Axios/Fetch)
        ↓
Express Routes
        ↓
Controllers (Business Logic)
        ↓
Models (Database Queries)
        ↓
MongoDB (Data Storage)
```

---

## 🌍 Deployment

### Current Deployment
- **Frontend**: Vercel (https://rent-a-ride-two.vercel.app)
- **Backend**: AWS EC2
- **Reverse Proxy**: Nginx
- **DNS**: Cloudflare
- **Process Manager**: PM2

### Deployment Steps
1. Build frontend: `cd client && npm run build`
2. Deploy to Vercel or AWS S3
3. Deploy backend to AWS EC2
4. Configure Nginx as reverse proxy
5. Set up SSL certificate
6. Use PM2 for process management

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| npm install fails | `npm config set strict-ssl false` |
| Port 3000 in use | `netstat -ano \| findstr :3000` then `taskkill /PID <PID> /F` |
| MongoDB connection error | Check `.env` URI, verify IP whitelisted |
| Email not sending | Use Gmail app password, enable 2FA |
| Google OAuth fails | Check redirect URIs in Google Cloud Console |
| Cloudinary upload fails | Verify API credentials |

---

## 📚 Technology Stack Summary

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Redux Toolkit, Tailwind CSS |
| Backend | Node.js, Express.js, MongoDB |
| Database | MongoDB Atlas |
| Storage | Cloudinary |
| Authentication | JWT, Google OAuth |
| Payment | Razorpay |
| Email | Nodemailer (Gmail) |
| Deployment | AWS EC2, Nginx, Cloudflare |

---

## 📞 Support Resources

1. **Documentation**: Check GETTING_STARTED.md
2. **Setup Guide**: Follow ENV_SETUP_DETAILED.md
3. **Quick Start**: Use QUICK_START.md
4. **Scripts**: Run run-dev.bat or run-dev.ps1
5. **Logs**: Check browser console and terminal output

---

## ✅ Verification Checklist

- [ ] Node.js v16+ installed
- [ ] npm v7+ installed
- [ ] MongoDB URI obtained
- [ ] Cloudinary credentials obtained
- [ ] Gmail app password generated
- [ ] Razorpay keys obtained
- [ ] Google OAuth credentials created
- [ ] .env file updated with all credentials
- [ ] npm install completed successfully
- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] Can access http://localhost:5173
- [ ] Can sign up/login
- [ ] Can browse vehicles
- [ ] Can make bookings

---

## 🎯 Next Steps

1. **Read** GETTING_STARTED.md
2. **Follow** ENV_SETUP_DETAILED.md to get credentials
3. **Update** backend/.env file
4. **Run** npm install
5. **Start** both servers
6. **Test** the application
7. **Explore** the codebase
8. **Deploy** when ready

---

## 📝 Notes

- This is a development setup guide
- For production, use environment-specific configurations
- Keep .env file secure and never commit to Git
- Use test keys for development, production keys for live
- Regularly update dependencies for security

---

**Last Updated**: May 27, 2026
**Project Status**: Ready for Development
