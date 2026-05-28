@echo off
REM Rent-a-Ride - Local Development Setup Script
REM This script will install dependencies and start both backend and frontend

echo.
echo ========================================
echo Rent-a-Ride - Local Development Setup
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js is installed
echo.

REM Install Backend Dependencies
echo Installing Backend Dependencies...
cd backend
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install backend dependencies
    pause
    exit /b 1
)
echo ✓ Backend dependencies installed
cd ..
echo.

REM Install Frontend Dependencies
echo Installing Frontend Dependencies...
cd client
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install frontend dependencies
    pause
    exit /b 1
)
echo ✓ Frontend dependencies installed
cd ..
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start the application:
echo.
echo 1. Open Terminal 1 and run:
echo    cd backend
echo    npm run dev
echo.
echo 2. Open Terminal 2 and run:
echo    cd client
echo    npm run dev
echo.
echo 3. Open your browser to:
echo    http://localhost:5173
echo.
echo Backend will run on: http://localhost:3000
echo Frontend will run on: http://localhost:5173
echo.
pause
