# Rent-a-Ride Development Server Launcher
# This PowerShell script starts both backend and frontend servers

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Rent-a-Ride Development Environment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Starting development servers..." -ForegroundColor Yellow
Write-Host ""

# Start backend server in a new window
Write-Host "Starting Backend Server (Port 3000)..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev" -WorkingDirectory $PSScriptRoot

# Wait a moment for backend to start
Start-Sleep -Seconds 3

# Start frontend server in a new window
Write-Host "Starting Frontend Server (Port 5173)..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd client; npm run dev" -WorkingDirectory $PSScriptRoot

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Servers Starting..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend:  http://localhost:3000" -ForegroundColor Green
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the servers" -ForegroundColor Yellow
Write-Host ""

# Keep the main window open
Read-Host "Press Enter to close this window"
