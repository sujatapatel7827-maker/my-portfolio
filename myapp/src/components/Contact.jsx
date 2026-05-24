import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setForm({ name: "", email: "", message: "" });
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 4000);
      } else {
        alert("Submission failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact fade-in">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-underline"></div>

      <div className="contact-wrapper">
        {/* LEFT SIDE: Clickable Contact Info Cards */}
        <div className="contact-info">
          
          <a href="mailto:sujatapatel7827@gmail.com" className="contact-info-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email</h4>
              <p>sujatapatel7827@gmail.com</p>
              <small>Send an Email &rarr;</small>
            </div>
          </a>

          <a href="tel:+918076801200" className="contact-info-card">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91 80768012XX</p>
              <small>Call or WhatsApp &rarr;</small>
            </div>
          </a>

          <a 
            href="https://maps.google.com/?q=New+Delhi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-info-card"
          >
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>Location</h4>
              <p>New Delhi, India</p>
              <small>View on Google Maps &rarr;</small>
            </div>
          </a>
          
        </div>

        {/* RIGHT SIDE: Styled Input Form */}
        <form className="contact-form-box glass-effect" onSubmit={handleSubmit}>
          <div className="form-input-wrapper">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-input-wrapper">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <button className="contact-btn" disabled={loading}>
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send Message <FaPaperPlane />
              </>
            )}
          </button>

          {showSuccess && (
            <div className="contact-success-banner">
              <span>✅</span> Message Sent Successfully! Notification email delivered to owner.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

