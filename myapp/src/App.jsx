import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// ================= ADMIN PANEL =================
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminSetup from "./components/AdminSetup";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Navbar sab pages pe dikhega except admin routes */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Pages */}
        <Route path="/admin/setup" element={<AdminSetup />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;

