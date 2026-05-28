# Complete Environment Variables Setup Guide

## Overview
This guide walks you through getting all the credentials needed to run Rent-a-Ride locally.

---

## 1. MongoDB Atlas (Database)

### Step 1: Create MongoDB Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Sign Up" and create a free account
3. Verify your email

### Step 2: Create a Cluster
1. Click "Create" to create a new project
2. Click "Create a Deployment"
3. Select "Free" tier (M0)
4. Choose your region (closest to you)
5. Click "Create Deployment"
6. Wait for cluster to be created (5-10 minutes)

### Step 3: Create Database User
1. Go to "Database Access" in left menu
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Enter username: `narmathabala20_db_user` (or your choice)
5. Enter password: Generate a strong password
6. Click "Add User"

### Step 4: Whitelist Your IP
1. Go to "Network Access" in left menu
2. Click "Add IP Address"
3. Click "Add Current IP Address" (or add 0.0.0.0/0 for development)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Databases" → Click "Connect"
2. Select "Drivers"
3. Choose "Node.js" and version "4.x or later"
4. Copy the connection string
5. Replace `<username>` and `<password>` with your credentials
6. Replace `<password>` with your actual password

**Example:**
```
mongodb+srv://narmathabala20_db_user:YourPassword123@cluster0.9prs5ij.mongodb.net/?appName=Cluster0
```

**Add to .env:**
```env
mongo_uri=mongodb+srv://narmathabala20_db_user:YourPassword123@cluster0.9prs5ij.mongodb.net/?appName=Cluster0
```

---

## 2. Cloudinary (Image/Video Storage)

### Step 1: Create Cloudinary Account
1. Go to https://cloudinary.com/
2. Click "Sign Up Free"
3. Create account with email
4. Verify email

### Step 2: Get Credentials
1. Go to Dashboard (https://cloudinary.com/console)
2. You'll see your credentials:
   - **Cloud Name**: `dmoxojrau` (example)
   - **API Key**: `441978847395571` (example)
   - **API Secret**: `hcTrCfOFw071nqexMgBN_a3GBEM` (example)

**Add to .env:**
```env
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 3. JWT Secret (Authentication)

### Generate JWT Secret
This is just a random string for securing tokens. Generate any random string (at least 32 characters).

**Examples:**
```
rent_a_ride_jwt_secret_key_2024_super_secure_token_xyz123
my_super_secret_jwt_key_12345_abcdefghijklmnop
```

**Add to .env:**
```env
JWT_SECRET=your_random_secret_key_here
```

---

## 4. Gmail Configuration (Email Notifications)

### Step 1: Enable 2-Factor Authentication
1. Go to https://myaccount.google.com/
2. Click "Security" in left menu
3. Scroll to "2-Step Verification"
4. Click "Get Started"
5. Follow the steps to enable 2FA

### Step 2: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer"
3. Click "Generate"
4. Copy the 16-character password (without spaces)

**Example:**
```
vcmd yrqp rpmt xrth
```

**Add to .env:**
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=vcmd yrqp rpmt xrth
```

---

## 5. Razorpay (Payment Processing)

### Step 1: Create Razorpay Account
1. Go to https://razorpay.com/
2. Click "Sign Up"
3. Create account with email
4. Verify email

### Step 2: Get API Keys
1. Go to Dashboard (https://dashboard.razorpay.com/)
2. Click "Settings" → "API Keys"
3. You'll see:
   - **Key ID**: `rzp_test_...` (for testing)
   - **Key Secret**: Your secret key

**Add to .env:**
```env
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
```

---

## 6. Google OAuth (Social Login)

### Step 1: Create Google Cloud Project
1. Go to https://console.cloud.google.com/
2. Click "Select a Project" → "New Project"
3. Enter project name: "Rent-a-Ride"
4. Click "Create"
5. Wait for project to be created

### Step 2: Enable Google+ API
1. Go to "APIs & Services" → "Library"
2. Search for "Google+ API"
3. Click on it
4. Click "Enable"

### Step 3: Create OAuth Credentials
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth Client ID"
3. Select "Web application"
4. Under "Authorized JavaScript origins", add:
   - `http://localhost:3000`
   - `http://localhost:5173`
5. Under "Authorized redirect URIs", add:
   - `http://localhost:3000/api/auth/google/callback`
   - `http://localhost:5173/auth/callback`
6. Click "Create"
7. Copy:
   - **Client ID**: `421235398336-...`
   - **Client Secret**: `GOCSPX-...`

**Add to .env:**
```env
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```

---

## 7. Server Port

**Add to .env:**
```env
PORT=3000
```

---

## Complete .env File Template

```env
# MongoDB Connection
mongo_uri=mongodb+srv://username:password@cluster.mongodb.net/?appName=Cluster0

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# JWT Secret
JWT_SECRET=your_random_secret_key_here

# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key

# Google OAuth
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret

# Server Port
PORT=3000
```

---

## Verification Checklist

After setting up all credentials, verify:

- [ ] MongoDB connection works
- [ ] Cloudinary credentials are valid
- [ ] JWT secret is set
- [ ] Gmail app password is generated
- [ ] Razorpay keys are in test mode
- [ ] Google OAuth credentials are created
- [ ] All values are in `.env` file
- [ ] No spaces around `=` in `.env`

---

## Testing Credentials

### Test MongoDB Connection
```bash
# In backend directory
npm run dev
# Check console for "connected" message
```

### Test Email
- Create a booking and check if email is sent

### Test Razorpay
- Use test card: `4111 1111 1111 1111`
- Any future date and any CVV

### Test Google OAuth
- Click "Sign in with Google" button
- Should redirect to Google login

---

## Troubleshooting

### MongoDB Connection Failed
- Check username and password are correct
- Verify IP is whitelisted
- Check connection string format

### Cloudinary Upload Failed
- Verify API key and secret
- Check cloud name is correct
- Ensure account is active

### Email Not Sending
- Use Gmail app password (not regular password)
- Enable 2-factor authentication first
- Check EMAIL_USER and EMAIL_PASSWORD

### Google OAuth Not Working
- Verify redirect URIs match exactly
- Check Client ID and Secret are correct
- Clear browser cookies and try again

---

## Security Notes

⚠️ **Important:**
- Never commit `.env` file to Git
- Never share your credentials
- Use strong passwords
- Regenerate keys if compromised
- Use test keys for development
- Use production keys only for production

---

## Next Steps

1. Fill in all credentials in `.env`
2. Run `npm install` in root and `client` directories
3. Run `npm run dev` to start backend
4. Run `cd client && npm run dev` to start frontend
5. Open http://localhost:5173 in browser

---

**Happy coding! 🚀**
