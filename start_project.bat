@echo off
echo ===================================================
echo       Starting Portfolio Project...
echo ===================================================

echo Starting Backend Server...
start "Backend Server (Port 5000)" cmd /k "cd backend && npm run dev"

echo Waiting for backend to initialize...
timeout /t 5

echo Starting Frontend Server...
start "Frontend Application" cmd /k "cd myapp && npm run dev"

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
