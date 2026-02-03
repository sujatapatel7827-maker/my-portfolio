import p1 from "../assets/image.webp";
import p2 from "../assets/image.webp";
import p3 from "../assets/image.webp";
import p4 from "../assets/image.webp";
import p5 from "../assets/image.webp";
import p6 from "../assets/image.webp";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-heading">Featured Projects</h2>
      <div className="projects-underline"></div>

      <div className="projects-grid">

        <div className="project-card">
          <img src={p1} alt="E-commerce Platform" />
          <div className="project-content">
            <h3>E-commerce Platform</h3>
            <p>
              A full-stack e-commerce application with product management,
              authentication, and secure checkout.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>Spring Boot</span>
              <span>My SQL</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={p2} alt="Task Management App" />
          <div className="project-content">
            <h3>Task Management App</h3>
            <p>
              A productivity app to manage tasks, deadlines, and progress with
              a clean and modern UI.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>Firebase</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={p3} alt="Weather Dashboard" />
          <div className="project-content">
            <h3>Weather Dashboard</h3>
            <p>
              Real-time weather application using external APIs with responsive
              UI and search functionality.
            </p>
            <div className="project-tags">
              <span>JavaScript</span>
              <span>API</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={p4} alt="Portfolio Website" />
          <div className="project-content">
            <h3>Portfolio Website</h3>
            <p>
              Personal portfolio website showcasing skills, projects, and
              contact information.
            </p>
            <div className="project-tags">
              <span>React</span>
               <span>Node, Express</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={p5} alt="Blog Platform" />
          <div className="project-content">
            <h3>Blog Platform</h3>
            <p>
              A blogging platform with authentication, rich text editor,
              and admin dashboard.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>Node</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={p6} alt="Social Media Dashboard" />
          <div className="project-content">
            <h3>Social Media Dashboard</h3>
            <p>
              Analytics dashboard to track engagement, growth, and performance
              across platforms.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>Charts</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
