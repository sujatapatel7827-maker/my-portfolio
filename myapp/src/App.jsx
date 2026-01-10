import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminSetup from "./components/AdminSetup";

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

        {/* Admin Routes */}
        <Route path="/admin/setup" element={<AdminSetup />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
