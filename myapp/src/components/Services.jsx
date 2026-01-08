export default function Services() {
  return (
    <section id="services" className="services">
      <h2 className="services-heading">What I Do</h2>
      <div className="services-underline"></div>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Web Development</h3>
          <p>
            Building responsive and scalable web applications using modern
            technologies with clean UI and performance in mind.
          </p>
          <div className="service-tags">
            <span>Responsive Design</span>
            <span>SEO Friendly</span>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">📱</div>
          <h3>Mobile Development</h3>
          <p>
            Developing fast and reliable mobile-friendly applications with
            smooth user experience and modern architecture.
          </p>
          <div className="service-tags">
            <span>Cross Platform</span>
            <span>User Friendly</span>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3>UI/UX Design</h3>
          <p>
            Designing intuitive user interfaces with a focus on usability,
            accessibility, and modern design principles.
          </p>
          <div className="service-tags">
            <span>User Centered</span>
            <span>Accessibility</span>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">⚡</div>
          <h3>Performance Optimization</h3>
          <p>
            Optimizing applications for speed, scalability, and smooth
            performance across all devices.
          </p>
          <div className="service-tags">
            <span>Fast Loading</span>
            <span>Scalable</span>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">🛒</div>
          <h3>E-commerce Solutions</h3>
          <p>
            Creating secure and scalable e-commerce platforms with payment
            integration and admin dashboards.
          </p>
          <div className="service-tags">
            <span>Secure Payments</span>
            <span>Admin Panel</span>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">🔗</div>
          <h3>API Development</h3>
          <p>
            Designing and developing RESTful APIs to connect applications
            efficiently and securely.
          </p>
          <div className="service-tags">
            <span>REST APIs</span>
            <span>Integration</span>
          </div>
        </div>

      </div>
    </section>
  );
}
