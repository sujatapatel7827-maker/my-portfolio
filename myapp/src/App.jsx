import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import AdminDashboard from "./admin/AdminDashboard";
import AdminLogin from "./admin/AdminLogin";
import ProtectedRoute from "./admin/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portfolio */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Services />
              <Projects />
              <Contact />
            </div>
          }
        />
        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* Admin Panel */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
