import heroImg from "../assets/Profile.webp";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaArrowRight, 
  FaJava, 
  FaReact, 
  FaDatabase, 
  FaCode, 
  FaServer, 
  FaBriefcase, 
  FaTerminal, 
  FaLaptopCode 
} from "react-icons/fa";

export default function Hero() {
  const navigate = useNavigate();
  const roles = [
    "Java Full-Stack Developer",
    "Spring Boot Specialist",
    "Database & API Architect",
    "Modern React Developer"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeState("fade-in");
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Glow Backdrops */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="grid-overlay"></div>

      <div className="hero-container">
        {/* LEFT COLUMN */}
        <div className="hero-content-left">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span>Available for Opportunities</span>
          </div>

          <h1 className="hero-heading">
            Hey, I’m <span className="hero-name-gradient">Sujata</span>
          </h1>

          <div className="role-rotator-container">
            <span className="role-prefix">I am a </span>
            <span className={`role-text ${fadeState}`}>{roles[roleIndex]}</span>
          </div>

          <p className="hero-description">
            Passionate about architecting highly scalable enterprise systems, designing robust backend APIs, and building interactive, high-performance web frontends.
          </p>

          {/* Mini Tech Bar */}
          <div className="hero-tech-bar">
            <span className="tech-bar-label">Stack Focus:</span>
            <div className="tech-bar-icons">
              <span className="tech-bar-badge" title="Java"><FaJava className="java-color" /> Java</span>
              <span className="tech-bar-badge" title="Spring Boot"><FaServer className="spring-color" /> Spring Boot</span>
              <span className="tech-bar-badge" title="React"><FaReact className="react-color" /> React</span>
              <span className="tech-bar-badge" title="SQL / MongoDB"><FaDatabase className="db-color" /> SQL & NoSQL</span>
              <span className="tech-bar-badge" title="RESTful APIs"><FaCode className="api-color" /> APIs</span>
            </div>
          </div>

          <div className="hero-actions">
            <button 
              onClick={() => navigate("/contact")} 
              className="btn-primary-hero"
            >
              Get In Touch <FaArrowRight className="arrow-icon" />
            </button>
            <button 
              onClick={() => navigate("/projects")} 
              className="btn-secondary-hero"
            >
              View Projects
            </button>
            <a
              href="/sujataCV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download-hero"
              title="Download CV"
            >
              Download CV
            </a>
          </div>

          <div className="hero-social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero-social-icon" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-social-icon" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:sujatapatel7827@gmail.com" className="hero-social-icon" title="Email Message">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-content-right">
          <div className="profile-wrapper">
            <div className="glow-ring ring-outer"></div>
            <div className="glow-ring ring-middle"></div>
            <div className="glow-ring ring-inner"></div>
            
            <div className="profile-image-box">
              <img src={heroImg} alt="Sujata Patel - Profile" />
            </div>

            {/* Floating Info Badges */}
            <div className="glass-badge badge-top-left float-badge-1">
              <span className="badge-icon"><FaLaptopCode /></span>
              <div className="badge-text">
                <strong>Spring</strong>
                <span>Architecture</span>
              </div>
            </div>

            <div className="glass-badge badge-bottom-right float-badge-2">
              <span className="badge-icon"><FaTerminal /></span>
              <div className="badge-text">
                <strong>Clean Code</strong>
                <span>Practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className="hero-stats-bar">
        <div className="stat-item">
          <h3>2+</h3>
          <p>Years Tech Focus</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>15+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>10+</h3>
          <p>Technologies Mastered</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Dedicated Learner</p>
        </div>
      </div>
    </section>
  );
}


