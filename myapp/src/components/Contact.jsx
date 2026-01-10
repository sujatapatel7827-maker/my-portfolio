import { useState } from "react";
import SuccessModal from "./SuccessModal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

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

      // Check if response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        throw new Error(`Server Error (${res.status}): ${text.slice(0, 100)}...`); // Show first 100 chars of error
      }

      const data = await res.json();

      if (data.success) {
        setSubmittedName(form.name);
        setShowModal(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      alert(error.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact fade-in">
      <SuccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        name={submittedName}
      />

      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-underline"></div>

      <div className="contact-wrapper">

        <div className="contact-info">
          <div className="contact-info-card float">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>sujatapatel7827@gmail.com</p>
              <small>Send Email</small>
            </div>
          </div>

          <div className="contact-info-card float" style={{ animationDelay: "0.2s" }}>
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 9XXXXXXXXX</p>
              <small>Call Now</small>
            </div>
          </div>

          <div className="contact-info-card float" style={{ animationDelay: "0.4s" }}>
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Karol, Baoa Nagar</p>
              <small>View on Map</small>
            </div>
          </div>
        </div>

        <form className="contact-form-box glass-effect" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="input-field"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="input-field"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="input-field"
          />

          <button className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
