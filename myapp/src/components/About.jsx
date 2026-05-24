import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaDownload, FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-wrapper">

        {/* LEFT SECTION: About Narrative */}
        <div className="about-left">
          <h2 className="about-tag">About Me</h2>
          <div className="skills-underline"></div>
          <h2 className="about-title">
            Passionate <span>Java Full Stack Developer</span>
          </h2>
          <p className="about-text">
            I am a dedicated developer focused on building clean, modular, and user-centric web applications. I specialize in backend business architectures using Java and Spring Boot, coupled with dynamic, interactive interfaces built with React.
          </p>

          <p className="about-text">
            Driven by clean-coding principles and design patterns, I strive to write readable, reusable, and efficient code to solve complex real-world engineering problems.
          </p>
        </div>

        {/* RIGHT SECTION: Details Cards & Checklist */}
        <div className="about-right">

          <div className="about-card">
            <h3>Core Engineering Focus</h3>
            <ul>
              <li>
                <FaCheckCircle /> <span>Frontend Architecture (React.js, Angular)</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Enterprise Backend (Java, Spring Boot)</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Database Designs (MySQL, MongoDB)</span>
              </li>
              <li>
                <FaCheckCircle /> <span>RESTful Microservices & Security</span>
              </li>
            </ul>
          </div>

          <div className="about-info-card">
            <div className="info-icon-wrapper">
              <FaGraduationCap className="info-icon" />
            </div>
            <div>
              <h4>Education</h4>
              <p>Bachelor of Computer Science</p>
            </div>
          </div>

          <div className="about-info-card">
            <div className="info-icon-wrapper">
              <FaMapMarkerAlt className="info-icon" />
            </div>
            <div>
              <h4>Location</h4>
              <p>Belagavi, Karnataka, India</p>
            </div>
          </div>

          <div className="about-info-card">
            <div className="info-icon-wrapper">
              <FaBriefcase className="info-icon" />
            </div>
            <div>
              <h4>Experience</h4>
              <p>Java Full-Stack Developer</p>
            </div>
          </div>

          <a
            href="/sujataCV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="about-download-btn"
          >
            <FaDownload /> Download CV
          </a>

        </div>

      </div>
    </section>
  );
}

