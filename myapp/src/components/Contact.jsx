import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // ✅ added only

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully 🚀");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-underline"></div>

      <div className="contact-wrapper">

        <div className="contact-info">
          <div className="contact-info-card">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>sujatapatel7827@gmail.com</p>
              <small>Send Email</small>
            </div>
          </div>

          <div className="contact-info-card">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 9XXXXXXXXX</p>
              <small>Call Now</small>
            </div>
          </div>

          <div className="contact-info-card">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Karol, Baoa Nagar</p>
              <small>View on Map</small>
            </div>
          </div>
        </div>

        <form className="contact-form-box" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
