# Project Setup Instructions

Follow these steps to run the project on your local machine.

## 1. Install Dependencies

You need to install dependencies for both the backend and the frontend.

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd myapp
npm install
```

## 2. Environment Variables

The `.env` file is not included in the repository for security. You need to create one in the `backend` folder.

1. Create a file named `.env` in the `backend/` directory.
2. Copy the content from `.env.example` into `.env`.
3. Replace the `MONGO_URI` with your actual MongoDB Atlas connection string.

## 3. MongoDB Network Access

Make sure your IP address is whitelisted in MongoDB Atlas:
1. Go to **Network Access** in MongoDB Atlas.
2. Add your current IP address, or add `0.0.0.0/0` to allow access from anywhere (recommended for testing).

## 4. Running the Project

**Start Backend:**
```bash
cd backend
npm run dev
```
The server will run on `http://localhost:5001`.

**Start Frontend:**
```bash
cd myapp
npm run dev
```
The frontend will usually run on `http://localhost:5173`.

## 5. Admin Setup

If the database is new, you need to create an admin account:
1. Go to `http://localhost:5173/admin/setup`.
2. Create your username and password.
3. Login at `http://localhost:5173/admin`.
