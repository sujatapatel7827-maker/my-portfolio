import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => navigate("/")}>
        Sujata_codes.
      </div>

      {/* MENU */}
      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      {/* BUTTON */}
      <button className="navbar-btn" onClick={() => navigate("/contact")}>
        Let’s Talk
      </button>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
}
