export default function Navbar() {
  const handleLetsTalk = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">Sujata_codes.</div>

      {/* Center Menu */}
      <ul className="navbar-menu">
        <li className="#home"><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      {/* Button */}
      <button className="navbar-btn" onClick={handleLetsTalk}>Let’s Talk</button>
    </nav>
  );
}
