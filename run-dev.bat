@echo off
REM Rent-a-Ride Development Server Launcher
REM This script starts both backend and frontend servers

echo.
echo ========================================
echo   Rent-a-Ride Development Environment
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js found: 
node --version

echo.
echo Starting development servers...
echo.

REM Start backend server in a new window
echo Starting Backend Server (Port 3000)...
start "Rent-a-Ride Backend" cmd /k npm run dev

REM Wait a moment for backend to start
timeout /t 3 /nobreak

REM Start frontend server in a new window
echo Starting Frontend Server (Port 5173)...
start "Rent-a-Ride Frontend" cmd /k cd client && npm run dev

echo.
echo ========================================
echo   Servers Starting...
echo ========================================
echo.
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:5173
echo.
echo Press any key to close this window...
pause
