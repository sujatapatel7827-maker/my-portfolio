export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-wrapper">

        {/* LEFT */}
        <div className="about-left">
          <h2 className="about-tag">About Me</h2>
          <div className="skills-underline"></div>
          <h2 className="about-title">
            Passionate <span>Java Full Stack Developer</span>
          </h2>
          <p className="about-text">
            I am a passionate developer who loves building clean, modern,
            and user-friendly web applications. I enjoy turning complex
            problems into simple, beautiful, and intuitive solutions.
          </p>

          <p className="about-text">
            With a strong foundation in Java, React, and modern web
            technologies, I focus on writing clean code and creating
            scalable applications.
          </p>
        </div>

        {/* RIGHT */}
        <div className="about-right">

          <div className="about-card">
            <h3>What I Do</h3>
            <ul>
              <li>✔ Frontend Development (React)</li>
              <li>✔ Backend Development (Java, Spring Boot)</li>
              <li>✔ REST APIs & Databases</li>
              <li>✔ Clean & Responsive UI</li>
            </ul>
          </div>
          <div className="about-info-card">
            <span className="info-icon">🎓</span>
            <div>
              <h4>Education</h4>
              <p>Computer Science</p>
            </div>
          </div>

          <div className="about-info-card">
            <span className="info-icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>Sadalga, Tal: Chikodi, Dist: Belagavi</p>
            </div>
          </div>

          <div className="about-info-card">
            <span className="info-icon">💼</span>
            <div>
              <h4>Experience</h4>
              <p>Fresher in Web Development</p>
            </div>
          </div>

          <a
            href="/sujataCV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="about-download-btn"
          >
            ⬇ Download CV
          </a>

        </div>

      </div>
    </section>
  );
}
