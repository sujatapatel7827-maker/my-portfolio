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
            <span>HTML5</span>
            <div className="bar"><div style={{ width: "90%" }}></div></div>
          </div>

          <div className="skill">
            <span>CSS3</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>

          <div className="skill">
            <span>JavaScript</span>
            <div className="bar"><div style={{ width: "70%" }}></div></div>
          </div>

          <div className="skill">
            <span>React Js</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>
        </div>

        {/* Backend */}
        <div className="skills-card">
          <h3>Backend Development</h3>

          <div className="skill">
            <span>Java</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>
          <div className="skill">
            <span>Spring Boot</span>
            <div className="bar"><div style={{ width: "75%" }}></div></div>
          </div>
          <div className="skill">
            <span>JWT</span>
            <div className="bar"><div style={{ width: "70%" }}></div></div>
          </div>
        </div>

        {/* Database */}
        <div className="skills-card">
          <h3>Database Management</h3>

          <div className="skill">
            <span>MySQL</span>
            <div className="bar"><div style={{ width: "80%" }}></div></div>
          </div>

          <div className="skill">
            <span>MongoDB</span>
            <div className="bar"><div style={{ width: "75%" }}></div></div>
          </div>
        </div>

        {/* Tools */}
        <div className="skills-card">
          <h3> Tools</h3>

          <div className="skill">
            <span>Git & GitHub</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>

          <div className="skill">
            <span>Docker</span>
            <div className="bar"><div style={{ width: "60%" }}></div></div>
          </div>
        </div>

      </div>
    </section>
  );
}
