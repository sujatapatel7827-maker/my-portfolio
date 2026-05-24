import { FaLaptopCode, FaServer, FaDatabase, FaJava, FaReact, FaGitAlt } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="services">
      <h2 className="services-heading">Professional Services</h2>
      <div className="services-underline"></div>

      <div className="services-grid">

        {/* Service 1 */}
        <div className="service-card">
          <div className="service-icon">
            <FaLaptopCode />
          </div>
          <h3>Full-Stack Web Development</h3>
          <p>
            Building responsive, feature-rich web applications with React or Angular on the frontend and Spring Boot on the backend.
          </p>
          <div className="service-tags">
            <span>React / Angular</span>
            <span>Spring Boot</span>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <div className="service-icon">
            <FaServer />
          </div>
          <h3>RESTful API & Microservices</h3>
          <p>
            Designing highly scalable, secure, and modular Microservices architectures with RESTful APIs, JWT authentication, and Spring Cloud.
          </p>
          <div className="service-tags">
            <span>Spring Cloud</span>
            <span>JWT Security</span>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <div className="service-icon">
            <FaDatabase />
          </div>
          <h3>Database Architecture</h3>
          <p>
            Developing robust databases using MySQL, PostgreSQL, or MongoDB, optimizing queries, and ensuring seamless JPA/Hibernate integrations.
          </p>
          <div className="service-tags">
            <span>MySQL & MongoDB</span>
            <span>JPA / Hibernate</span>
          </div>
        </div>

        {/* Service 4 */}
        <div className="service-card">
          <div className="service-icon">
            <FaJava />
          </div>
          <h3>Enterprise Java Solutions</h3>
          <p>
            Designing secure, robust, and transactional backend business logic using Core & Advanced Java, Spring Boot, and MVC patterns.
          </p>
          <div className="service-tags">
            <span>Java Full-Stack</span>
            <span>OOP Design</span>
          </div>
        </div>

        {/* Service 5 */}
        <div className="service-card">
          <div className="service-icon">
            <FaReact />
          </div>
          <h3>UI Component Engineering</h3>
          <p>
            Developing interactive, pixel-perfect user interfaces using modern CSS frameworks, TypeScript, Bootstrap, and reusable component libraries.
          </p>
          <div className="service-tags">
            <span>TypeScript</span>
            <span>Bootstrap / CSS</span>
          </div>
        </div>

        {/* Service 6 */}
        <div className="service-card">
          <div className="service-icon">
            <FaGitAlt />
          </div>
          <h3>DevOps & Version Control</h3>
          <p>
            Configuring reliable builds and versioning using Git/GitHub, Maven dependency management, Docker containers, and CI/CD pipelines.
          </p>
          <div className="service-tags">
            <span>Git & GitHub</span>
            <span>Docker & Maven</span>
          </div>
        </div>

      </div>
    </section>
  );
}

