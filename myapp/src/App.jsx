import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// ================= ADMIN PANEL =================
// Admin panel components (future use / practice purpose)
// Currently not used in production portfolio
// import AdminLogin from "./components/AdminLogin";
// import AdminDashboard from "./components/AdminDashboard";
// import AdminSetup from "./components/AdminSetup";

function App() {
  return (
    <>
      {/* Navbar sab pages pe dikhega */}
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
{/* ================= ADMIN ROUTES =================
    Admin panel routes (future use)
    Currently disabled to keep portfolio clean
*/}
        {/* Admin Pages */}
        {/* <Route path="/admin/setup" element={<AdminSetup />} /> */}
        {/* <Route path="/admin" element={<AdminLogin />} /> */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
      </Routes>
    </>
  );
}

export default App;
