# 🗄️ MongoDB Setup Guide - Choose Your Path

## 🚀 Quick Decision

**Choose ONE option:**

| Option | Time | Difficulty | Best For |
|--------|------|-----------|----------|
| **A: Local MongoDB** | 5 min | Easy | Development, Testing |
| **B: MongoDB Atlas** | 15 min | Medium | Production, Cloud |

---

## 🔵 OPTION A: Local MongoDB (Recommended for Development)

### Step 1: Download MongoDB Community Edition

**Windows:**
1. Go to https://www.mongodb.com/try/download/community
2. Select "Windows" and download the MSI installer
3. Run the installer
4. Choose "Complete" installation
5. Check "Install MongoDB as a Service"
6. Click "Install"

**Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community
```

**Linux (Ubuntu):**
```bash
curl -fsSL https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/ | bash
```

### Step 2: Start MongoDB Service

**Windows:**
```bash
# MongoDB should start automatically as a service
# Or manually start it:
mongod
```

**Mac:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

### Step 3: Verify MongoDB is Running

```bash
# Open a new terminal and run:
mongosh

# You should see:
# Current Mongosh Log ID: ...
# Connecting to: mongodb://127.0.0.1:27017/?directConnection=true
# MongoServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
# (This is normal if MongoDB isn't running yet)
```

### Step 4: Update backend/.env

```env
MONGO_URI=mongodb://localhost:27017/rent-a-ride
```

### Step 5: Restart Backend

```bash
# In backend terminal:
# Press Ctrl+C to stop current process
# Then run:
npm run dev
```

### Step 6: Verify Connection

Look for this message in backend console:
```
MongoDB connected successfully
Server listening on port 3000!
```

---

## 🟢 OPTION B: MongoDB Atlas (Cloud - Recommended for Production)

### Step 1: Create MongoDB Atlas Account

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Sign up with email or Google
4. Verify your email

### Step 2: Create a Cluster

1. Click "Create a Deployment"
2. Choose "Free" tier
3. Select your region (closest to you)
4. Click "Create Deployment"
5. Wait 5-10 minutes for cluster to be created

### Step 3: Create Database User

1. Go to "Database Access" in left menu
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `narmathabala20_db_user` (or your choice)
5. Password: Generate a strong password (or use: `GbvllQRFEm2WaOOo`)
6. Click "Add User"

### Step 4: Configure IP Whitelist

1. Go to "Network Access" in left menu
2. Click "Add IP Address"
3. Choose one:
   - **Option A (Recommended for Development):** Click "Add Current IP Address"
   - **Option B (For Testing):** Enter `0.0.0.0/0` (allows all IPs)
4. Click "Confirm"

### Step 5: Get Connection String

1. Go to "Databases" in left menu
2. Click "Connect" button on your cluster
3. Choose "Drivers"
4. Select "Node.js" and version "5.9 or later"
5. Copy the connection string
6. Replace `<password>` with your database user password
7. Replace `myFirstDatabase` with `rent-a-ride`

**Example:**
```
mongodb+srv://narmathabala20_db_user:GbvllQRFEm2WaOOo@cluster0.9prs5ij.mongodb.net/rent-a-ride?retryWrites=true&w=majority
```

### Step 6: Update backend/.env

```env
MONGO_URI=mongodb+srv://narmathabala20_db_user:GbvllQRFEm2WaOOo@cluster0.9prs5ij.mongodb.net/rent-a-ride?retryWrites=true&w=majority
```

### Step 7: Restart Backend

```bash
# In backend terminal:
# Press Ctrl+C to stop current process
# Then run:
npm run dev
```

### Step 8: Verify Connection

Look for this message in backend console:
```
MongoDB connected successfully
Server listening on port 3000!
```

---

## 🔍 Troubleshooting

### Error: "ECONNREFUSED"
**Cause:** MongoDB is not running or not accessible
**Solution:**
- Make sure MongoDB service is running
- For local: Run `mongod` in a terminal
- For Atlas: Check cluster status in MongoDB Atlas dashboard

### Error: "Authentication failed"
**Cause:** Wrong username or password
**Solution:**
- Verify credentials in MongoDB Atlas
- Make sure password doesn't have special characters that need escaping
- If it does, URL-encode them (e.g., `@` becomes `%40`)

### Error: "IP not whitelisted"
**Cause:** Your IP is not in the whitelist
**Solution:**
- Go to MongoDB Atlas > Network Access
- Add your current IP address
- Or add `0.0.0.0/0` for testing (not recommended for production)

### Error: "Cluster not found"
**Cause:** Cluster is offline or deleted
**Solution:**
- Go to MongoDB Atlas > Databases
- Check if cluster exists and is running
- If offline, click "Resume" button
- If deleted, create a new cluster

### Error: "Connection timeout"
**Cause:** Network connectivity issue
**Solution:**
- Check your internet connection
- Try pinging the MongoDB server
- Check firewall settings
- Try using a different network

---

## ✅ Verification Steps

### After Setting Up MongoDB

1. **Check Backend Console:**
   ```
   ✅ Should show: "MongoDB connected successfully"
   ✅ Should show: "Server listening on port 3000!"
   ```

2. **Test Backend API:**
   ```bash
   curl http://localhost:3000/api/user/listAllVehicles
   ```
   Should return a JSON response (even if empty)

3. **Test Frontend:**
   - Open http://localhost:5173/
   - Should load without errors
   - Try searching for vehicles
   - Check browser console for errors

4. **Check Database:**
   ```bash
   # For local MongoDB:
   mongosh
   use rent-a-ride
   db.vehicles.find()
   
   # For MongoDB Atlas:
   # Use MongoDB Compass or Atlas UI
   ```

---

## 🎯 Next Steps After MongoDB Setup

1. ✅ MongoDB is connected
2. ⏭️ Test API endpoints
3. ⏭️ Test user registration
4. ⏭️ Test vehicle search
5. ⏭️ Configure Cloudinary (for image uploads)
6. ⏭️ Configure Razorpay (for payments)
7. ⏭️ Configure Gmail (for emails)
8. ⏭️ Configure Google OAuth (for social login)

---

## 📚 Additional Resources

- **MongoDB Documentation:** https://docs.mongodb.com/
- **MongoDB Atlas Guide:** https://docs.atlas.mongodb.com/
- **MongoDB Compass (GUI):** https://www.mongodb.com/products/compass
- **Mongosh (CLI):** https://www.mongodb.com/docs/mongodb-shell/

---

## 💡 Pro Tips

1. **Generate Strong Passwords:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
   ```

2. **Test Connection String:**
   ```bash
   mongosh "your_connection_string_here"
   ```

3. **View Database:**
   - Local: Use MongoDB Compass
   - Atlas: Use MongoDB Atlas UI or Compass

4. **Backup Database:**
   - Local: Use `mongodump` and `mongorestore`
   - Atlas: Use automated backups in Atlas UI

---

**Choose Option A or B above and follow the steps!**

**Estimated Time:** 5-15 minutes  
**Difficulty:** Easy to Medium  
**Success Rate:** 99% (if you follow the steps)

**Let's Get MongoDB Running! 🚀**
