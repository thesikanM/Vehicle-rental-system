# 🚗 Vehicle Rental System (Rent-a-Ride)

A full-stack web application for vehicle rental management built with **React**, **Node.js**, **Express**, and **MongoDB**. This system allows users to browse, book, and manage vehicle rentals with integrated payment processing via Razorpay.
                  LINK :https://autocare-vehicle-service-management.vercel.app/login
![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-v18+-green.svg)
![React](https://img.shields.io/badge/react-v19+-blue.svg)
![MongoDB](https://img.shields.io/badge/mongodb-v7+-green.svg)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Security Features](#security-features)
- [Bug Fixes & Improvements](#bug-fixes--improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## ✨ Features

### User Features
- 🔐 **User Authentication** - Sign up, sign in, Google OAuth integration
- 🚗 **Browse Vehicles** - View available vehicles with detailed information
- 🔍 **Advanced Search & Filter** - Filter by location, price, vehicle type, fuel type
- 📅 **Date-based Availability** - Check vehicle availability for specific dates
- 💳 **Secure Booking** - Book vehicles with Razorpay payment integration
- 📦 **Order Management** - View booking history and order details
- 👤 **Profile Management** - Update user profile and preferences
- 📧 **Email Notifications** - Receive booking confirmation emails

### Vendor Features
- 🏢 **Vendor Dashboard** - Manage vehicle inventory
- ➕ **Add/Edit Vehicles** - Upload vehicle details with images
- 📊 **Booking Management** - View and manage vendor bookings
- 📈 **Analytics** - Track rental statistics and revenue

### Admin Features
- 🛡️ **Admin Dashboard** - Complete system management
- 🚗 **Vehicle Management** - Approve/reject vendor vehicles
- 👥 **User Management** - Manage users and vendors
- 📋 **Booking Management** - Monitor all bookings
- 📊 **Analytics & Reports** - System-wide statistics

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Material-UI** - Component library
- **Framer Motion** - Animations
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Sonner** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Razorpay** - Payment gateway
- **Nodemailer** - Email service
- **Cloudinary** - Image hosting
- **Multer** - File upload handling

### Tools & Services
- **Git** - Version control
- **GitHub** - Repository hosting
- **Cloudinary** - Cloud storage for images
- **Razorpay** - Payment processing
- **Gmail** - Email service
- **MongoDB Atlas** - Cloud database

---

## 📁 Project Structure

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
│   │   ├── bookingModel.js
│   │   └── masterDataModel.js
│   ├── routes/
│   │   ├── authRoute.js
│   │   ├── userRoute.js
│   │   ├── adminRoute.js
│   │   └── vendorRoute.js
│   ├── utils/
│   │   ├── verifyUser.js
│   │   ├── error.js
│   │   ├── multer.js
│   │   └── cloudinaryConfig.js
│   ├── services/
│   │   └── checkAvailableVehicle.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── pages/
│   │   │   ├── user/
│   │   │   ├── vendor/
│   │   │   └── admin/
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── user/
│   │   │   ├── adminSlices/
│   │   │   └── vendor/
│   │   ├── Assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── BUG_FIXES_SUMMARY.md
├── ALL_FIXES_COMPLETE.md
└── README.md
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js
- **MongoDB** (v7 or higher) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)

### Required Accounts & Services

1. **MongoDB Atlas** - Cloud database
   - Create account at https://www.mongodb.com/cloud/atlas
   - Create a cluster and get connection string

2. **Cloudinary** - Image hosting
   - Sign up at https://cloudinary.com/
   - Get API credentials

3. **Razorpay** - Payment gateway
   - Create account at https://razorpay.com/
   - Get API keys from dashboard

4. **Gmail** - Email service
   - Enable 2-factor authentication
   - Generate app password for Nodemailer

5. **Google OAuth** - Social authentication
   - Create project at https://console.cloud.google.com/
   - Get OAuth credentials

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/thesikanM/Vehicle-rental-system.git
cd Vehicle-rental-system
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## ⚙️ Configuration

### Backend Configuration

Create a `.env` file in the `backend/` directory:

```env
# MongoDB Connection
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/rent-a-ride

# Cloudinary Configuration
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret

# JWT Secrets (Generate random strings, min 32 characters)
ACCESS_TOKEN=your_access_token_secret_key_here_min_32_chars
REFRESH_TOKEN=your_refresh_token_secret_key_here_min_32_chars

# Email Configuration (Gmail)
EMAIL_HOST=your_email@gmail.com
EMAIL_PASSWORD=your_app_password_here

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Server Port
PORT=3000
```

### Frontend Configuration

Create a `.env` file in the `client/` directory:

```env
VITE_PRODUCTION_BACKEND_URL=http://localhost:3000
RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

---

## ▶️ Running the Application

### Option 1: Run Both Services Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

### Option 2: Run Backend Only (Production)

```bash
cd backend
npm start
```

### Access the Application

- **Frontend:** http://localhost:5173/
- **Backend API:** http://localhost:3000/

---

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /signin` - User login
- `POST /signup` - User registration
- `POST /google` - Google OAuth login
- `POST /refreshToken` - Refresh access token

### User Routes (`/api/user`)
- `GET /listAllVehicles` - Get all vehicles
- `POST /showVehicleDetails` - Get vehicle details
- `POST /filterVehicles` - Filter vehicles
- `POST /getVehiclesWithoutBooking` - Get available vehicles
- `POST /bookCar` - Create booking
- `POST /razorpay` - Create Razorpay order
- `POST /findBookingsOfUser` - Get user bookings
- `POST /editUserProfile/:id` - Update profile
- `POST /update/:id` - Update user
- `DELETE /delete/:id` - Delete user
- `GET /signout` - Logout

### Admin Routes (`/api/admin`)
- `POST /dashboard` - Admin login
- `POST /profile` - Get admin profile
- `GET /showVehicles` - Get all vehicles
- `POST /addProduct` - Add vehicle
- `PUT /editVehicle/:id` - Edit vehicle
- `DELETE /deleteVehicle/:id` - Delete vehicle
- `GET /fetchVendorVehilceRequests` - Get vendor requests
- `POST /approveVendorVehicleRequest` - Approve vehicle
- `GET /allBookings` - Get all bookings
- `POST /changeStatus` - Update booking status

### Vendor Routes (`/api/vendor`)
- `POST /vendorSignin` - Vendor login
- `POST /vendorSignup` - Vendor registration
- `POST /vendorGoogle` - Vendor Google OAuth
- `POST /addVehicle` - Add vehicle
- `PUT /editVehicle/:id` - Edit vehicle
- `DELETE /deleteVehicle/:id` - Delete vehicle
- `GET /vendorBookings` - Get vendor bookings

---

## 🗄️ Database Models

### User Model
```javascript
{
  username: String,
  email: String,
  password: String (hashed),
  profilePicture: String,
  phone: String,
  isUser: Boolean,
  isVendor: Boolean,
  isAdmin: Boolean,
  refreshToken: String,
  createdAt: Date
}
```

### Vehicle Model
```javascript
{
  registeration_number: String (unique),
  company: String,
  model: String,
  year_made: Number,
  fuel_type: String,
  seats: Number,
  transmition: String,
  price: Number,
  location: String,
  district: String,
  image: Array,
  isDeleted: Boolean,
  isBooked: Boolean,
  isAdminAdded: Boolean,
  isAdminApproved: Boolean,
  addedBy: String,
  createdAt: Date
}
```

### Booking Model
```javascript
{
  userId: ObjectId,
  vehicleId: ObjectId,
  pickupDate: Date,
  dropOffDate: Date,
  pickUpLocation: String,
  dropOffLocation: String,
  totalPrice: Number,
  status: String,
  razorpayPaymentId: String,
  razorpayOrderId: String,
  createdAt: Date
}
```

---

## 🔒 Security Features

✅ **Implemented Security Measures:**
- JWT-based authentication with access and refresh tokens
- Password hashing using bcryptjs (async)
- Input validation on all endpoints
- Authorization middleware on protected routes
- CORS configuration for secure cross-origin requests
- Environment variables for sensitive data
- SQL injection prevention through Mongoose
- XSS protection via React's built-in escaping
- CSRF token validation
- Secure password requirements (minimum 6 characters)
- Email format validation
- Date range validation for bookings
- Duplicate email/username prevention

---

## 🐛 Bug Fixes & Improvements

### Recent Fixes (29/32 bugs resolved)

✅ **Critical Fixes:**
- Removed exposed credentials from repository
- Added comprehensive input validation
- Fixed token refresh mechanism
- Corrected database field types
- Added authorization checks to all protected routes

✅ **High Priority Fixes:**
- Converted bcrypt from sync to async
- Added proper error handling for email sending
- Implemented Razorpay validation
- Fixed infinite loop in useEffect
- Corrected state initialization

✅ **Medium Priority Fixes:**
- Standardized error response formats
- Added duplicate email checking
- Fixed boolean type consistency
- Added middleware to admin routes
- Improved filter validation

See [BUG_FIXES_SUMMARY.md](./BUG_FIXES_SUMMARY.md) for detailed information.

---

## 📝 Environment Variables Reference

### Backend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| MONGO_URI | MongoDB connection string | mongodb+srv://user:pass@cluster.mongodb.net/db |
| CLOUD_NAME | Cloudinary cloud name | your_cloud_name |
| API_KEY | Cloudinary API key | 123456789 |
| API_SECRET | Cloudinary API secret | secret_key |
| ACCESS_TOKEN | JWT access token secret | random_string_32_chars |
| REFRESH_TOKEN | JWT refresh token secret | random_string_32_chars |
| EMAIL_HOST | Gmail address | your_email@gmail.com |
| EMAIL_PASSWORD | Gmail app password | app_password |
| RAZORPAY_KEY_ID | Razorpay key ID | rzp_test_xxxxx |
| RAZORPAY_SECRET | Razorpay secret | secret_xxxxx |
| GOOGLE_CLIENT_ID | Google OAuth client ID | xxxxx.apps.googleusercontent.com |
| GOOGLE_CLIENT_SECRET | Google OAuth secret | secret_xxxxx |
| PORT | Server port | 3000 |

### Frontend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| VITE_PRODUCTION_BACKEND_URL | Backend API URL | http://localhost:3000 |
| RAZORPAY_KEY_ID | Razorpay key ID | rzp_test_xxxxx |
| VITE_FIREBASE_API_KEY | Firebase API key | xxxxx |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👤 Author

**Thesikan M**
- GitHub: [@thesikanM](https://github.com/thesikanM)
- Repository: [Vehicle-rental-system](https://github.com/thesikanM/Vehicle-rental-system)

---

## 📞 Support

For support, email your-email@example.com or open an issue on GitHub.

---

## 🙏 Acknowledgments

- React and Vite communities
- MongoDB and Mongoose documentation
- Razorpay for payment integration
- Cloudinary for image hosting
- All contributors and testers

---

## 📊 Project Statistics

- **Total Bugs Fixed:** 29/32
- **Security Issues Resolved:** 5
- **Code Quality Improvements:** 24
- **Test Coverage:** In progress
- **Documentation:** Complete

---

**Last Updated:** May 28, 2026  
**Version:** 1.0.0  
**Status:** Production Ready ✅

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/thesikanM/Vehicle-rental-system.git
cd Vehicle-rental-system

# Install dependencies
cd backend && npm install
cd ../client && npm install

# Configure environment variables
# Create .env files in backend/ and client/ directories

# Run the application
# Terminal 1: cd backend && npm run dev
# Terminal 2: cd client && npm run dev

# Access at http://localhost:5173/
```

---

**Happy Coding! 🎉**
