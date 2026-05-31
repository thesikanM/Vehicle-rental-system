# 🗄️ Install MongoDB - Quick Guide

MongoDB is not currently installed on your system. Follow these steps to install it:

## Option 1: Download MongoDB Community Edition (Recommended)

### Step 1: Download
1. Go to: https://www.mongodb.com/try/download/community
2. Select **Windows** as your OS
3. Click **Download** (MSI installer)

### Step 2: Install
1. Run the downloaded `.msi` file
2. Click **Next** through the installer
3. When asked about "Install MongoDB as a Service", **CHECK** this option
4. Complete the installation

### Step 3: Verify Installation
Open PowerShell and run:
```powershell
mongod --version
```

You should see the MongoDB version number.

### Step 4: Start MongoDB Service
MongoDB should start automatically as a Windows service. To verify it's running:

```powershell
# Check if MongoDB service is running
Get-Service MongoDB
```

If it shows "Running", you're good to go!

### Step 5: Restart Backend
Once MongoDB is running, restart the backend:
```bash
# In backend terminal:
# Press Ctrl+C to stop
# Then: npm run dev
```

You should see:
```
Server listening on port 3000!
MongoDB connected successfully
```

---

## Option 2: Use MongoDB Atlas (Cloud - No Installation Needed)

If you don't want to install MongoDB locally, use MongoDB Atlas instead:

1. Go to: https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Get connection string
5. Update `backend/.env` with the connection string
6. Restart backend

---

## Troubleshooting

### MongoDB service won't start
```powershell
# Start MongoDB service manually
Start-Service MongoDB
```

### MongoDB not found in PATH
- Restart your terminal/PowerShell
- Or add MongoDB to your PATH manually

### Still getting connection error
- Make sure MongoDB is running: `Get-Service MongoDB`
- Check if port 27017 is available
- Try connecting with: `mongosh`

---

## Next Steps

1. **Install MongoDB** using Option 1 above
2. **Verify** MongoDB is running
3. **Restart** backend service
4. **Check** backend console for "MongoDB connected successfully"
5. **Refresh** frontend at http://localhost:5173/

---

**Need Help?**
- MongoDB Docs: https://docs.mongodb.com/
- MongoDB Community: https://www.mongodb.com/community/forums/

**Let's get MongoDB running! 🚀**
