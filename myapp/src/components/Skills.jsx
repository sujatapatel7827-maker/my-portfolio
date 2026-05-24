export default function Skills() {
  return (
    <section id="skills" className="skills">
       <div className="skills-spacer"></div>
      <h2 className="skills-heading">Skills & Expertise</h2>
      <div className="skills-underline"></div>

      <div className="skills-grid">

        {/* Frontend */}
        <div className="skills-card">
          <h3>Frontend Development</h3>

          <div className="skill">
            <span>HTML & CSS</span>
            <div className="bar"><div style={{ width: "95%" }}></div></div>
          </div>

          <div className="skill">
            <span>JavaScript</span>
            <div className="bar"><div style={{ width: "88%" }}></div></div>
          </div>

          <div className="skill">
            <span>BootStrap</span>
            <div className="bar"><div style={{ width: "90%" }}></div></div>
          </div>

          <div className="skill">
            <span>React.js</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>

          <div className="skill">
            <span>TypeScript</span>
            <div className="bar"><div style={{ width: "75%" }}></div></div>
          </div>

          <div className="skill">
            <span>Angular</span>
            <div className="bar"><div style={{ width: "70%" }}></div></div>
          </div>
        </div>

        {/* Backend */}
        <div className="skills-card">
          <h3>Backend Development</h3>

          <div className="skill">
            <span>Java (Core & Advanced)</span>
            <div className="bar"><div style={{ width: "90%" }}></div></div>
          </div>

          <div className="skill">
            <span>JDBC, Servlet & JSP</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>

          <div className="skill">
            <span>Spring & SpringBoot</span>
            <div className="bar"><div style={{ width: "88%" }}></div></div>
          </div>

          <div className="skill">
            <span>Microservices</span>
            <div className="bar"><div style={{ width: "80%" }}></div></div>
          </div>

          <div className="skill">
            <span>RESTful API & JWT</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>
        </div>

        {/* Database */}
        <div className="skills-card">
          <h3>Database Management</h3>

          <div className="skill">
            <span>MySQL</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>

          <div className="skill">
            <span>MongoDB</span>
            <div className="bar"><div style={{ width: "80%" }}></div></div>
          </div>
        </div>

        {/* Tools & IDEs */}
        <div className="skills-card">
          <h3>Tools & IDEs</h3>

          <div className="skill">
            <span>VS Code & Eclipse</span>
            <div className="bar"><div style={{ width: "90%" }}></div></div>
          </div>

          <div className="skill">
            <span>IntelliJ IDEA</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>

          <div className="skill">
            <span>Git & GitHub</span>
            <div className="bar"><div style={{ width: "88%" }}></div></div>
          </div>
        </div>

      </div>
    </section>
  );
}

