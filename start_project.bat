@echo off
echo ===================================================
echo       Starting Portfolio Project...
echo ===================================================

echo Starting Backend Server...
echo (If this is the first run, it may take a minute to install dependencies)
start "Backend Server (Port 5000)" cmd /k "cd backend && echo Installing dependencies (if missing)... && npm install && echo Starting Server... && npm run dev"

echo Waiting for backend to initialize...
timeout /t 5

echo Starting Frontend Server...
echo (If this is the first run, it may take a minute to install dependencies)
start "Frontend Application" cmd /k "cd myapp && echo Installing dependencies (if missing)... && npm install && echo Starting Frontend... && npm run dev"

echo ===================================================
echo       Project Started Successfully!
echo ===================================================
echo.
echo Backend is running on: http://localhost:5000
echo Frontend is running on: http://localhost:5173
echo.
echo DO NOT CLOSE THE POPUP WINDOWS.
echo If you close them, the site will stop working.
echo.
pause
