import p1 from "../assets/library_system.png";
import p2 from "../assets/portfolio_screenshot.png";
import p3 from "../assets/fitai_screenshot.png";
import p4 from "../assets/hotel_screenshot.jpg";
import p5 from "../assets/vortex_screenshot.png";
import p6 from "../assets/ziva_screenshot.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-heading">Featured Projects</h2>
      <div className="projects-underline"></div>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <div className="project-img-wrapper">
            <img src={p1} alt="Library Management System" />
          </div>
          <div className="project-content">
            <h3>Library Management System</h3>
            <p>
              Developed a full-stack Library Management System using React.js and Spring Boot. The system allows admin to manage student records, seat booking, and payments efficiently. Implemented CRUD operations, dynamic seat allocation, and real-time status updates.
            </p>
            <div className="project-tags">
              <span>React.js</span>
              <span>Spring Boot</span>
              <span>REST APIs</span>
              <span>MySQL</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/sujatapatel7827-maker/Library-Management-System" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <FaGithub /> Code
              </a>
              <a href="https://library-management-system-sooty.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link-btn secondary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-img-wrapper">
            <img src={p2} alt="Developer Portfolio Website" />
          </div>
          <div className="project-content">
            <h3>Developer Portfolio Website</h3>
            <p>
              A premium developer portfolio featuring a sleek dark-mode glassmorphic theme, an interactive typing role rotator, a statistics counter panel, and custom layouts. Integrated with a secure admin dashboard to review, track, and reply to client inquiries.
            </p>
            <div className="project-tags">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Nodemailer</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/sujatapatel7827-maker/my-portfolio" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <FaGithub /> Code
              </a>
              <a href="https://my-portfolio-beige-two-18.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link-btn secondary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-img-wrapper">
            <img src={p3} alt="FITAI - AI Fitness Tracker" />
          </div>
          <div className="project-content">
            <h3>FITAI - AI Fitness Tracker</h3>
            <p>
              A next-generation AI-powered fitness intelligence platform offering personalized workout routines, real-time posture correction analysis, and advanced nutrition tracking. Built with React (v19) & TypeScript frontend, and a Spring Boot backend.
            </p>
            <div className="project-tags">
              <span>React (v19)</span>
              <span>TypeScript</span>
              <span>Tailwind (v4)</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
              <span>Framer Motion</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/sujatapatel7827-maker/AI-Fitness-Tracker" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <FaGithub /> Code
              </a>
              <a href="https://demo.com" target="_blank" rel="noopener noreferrer" className="project-link-btn secondary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div className="project-img-wrapper">
            <img src={p4} alt="Hotel Management System" />
          </div>
          <div className="project-content">
            <h3>Hotel Management System</h3>
            <p>
              A comprehensive Hotel Management System desktop application built with Java Swing GUI and MySQL database persistence. Designed to manage hotel operations efficiently including guest check-in, check-out, room allocations, billing, staff records, and financial reporting.
            </p>
            <div className="project-tags">
              <span>Java Swing</span>
              <span>MySQL</span>
              <span>Maven</span>
              <span>Desktop App</span>
              <span>JDBC</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/sujatapatel7827-maker/Hotel_MS" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <FaGithub /> Code
              </a>
              <a href="https://demo.com" target="_blank" rel="noopener noreferrer" className="project-link-btn secondary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="project-card">
          <div className="project-img-wrapper">
            <img src={p5} alt="Vortex Trading Platform" />
          </div>
          <div className="project-content">
            <h3>Vortex Trading Platform</h3>
            <p>
              A lightning-fast, zero-brokerage modern trading platform allowing users to buy, sell, and manage asset portfolios efficiently. Implemented robust REST APIs, security with Spring Security and JWT, and an intuitive Next.js frontend.
            </p>
            <div className="project-tags">
              <span>Next.js</span>
              <span>Spring Boot</span>
              <span>Spring Security</span>
              <span>JWT</span>
              <span>MySQL</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/sujatapatel7827-maker/Vortex-Trading-Platform" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <FaGithub /> Code
              </a>
              <a href="https://demo.com" target="_blank" rel="noopener noreferrer" className="project-link-btn secondary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 6 */}
        <div className="project-card">
          <div className="project-img-wrapper">
            <img src={p6} alt="Ziva - Stark Multi-Mode AI" />
          </div>
          <div className="project-content">
            <h3>Ziva - Stark Multi-Mode AI</h3>
            <p>
              A futuristic Iron Man-style AI assistant platform featuring specialized runtime modes including General Assistant, Technical & HR Interview Prep, and English Learning Tutor. Built on a React (v19) client and a Java Spring Boot backend.
            </p>
            <div className="project-tags">
              <span>React (v19)</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
              <span>Framer Motion</span>
              <span>Tailwind (v4)</span>
              <span>Lucide React</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/sujatapatel7827-maker" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <FaGithub /> Code
              </a>
              <a href="https://demo.com" target="_blank" rel="noopener noreferrer" className="project-link-btn secondary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

