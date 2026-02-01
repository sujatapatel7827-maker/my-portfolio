@echo off
echo ================================
echo Starting Backend Server on Port 5000...
echo ================================
cd /d "%~dp0"
node server.js
pause
