import { useState } from "react";

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

        // success message show
        setShowSuccess(true);

        // 3 sec baad hide
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
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
        {/* LEFT SIDE SAME */}
        <div className="contact-info">
          <div className="contact-info-card float">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>sujatapatel7827@gmail.com</p>
              <small>Send Email</small>
            </div>
          </div>

          <div className="contact-info-card float">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 9XXXXXXXXX</p>
              <small>Call Now</small>
            </div>
          </div>

          <div className="contact-info-card float">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>New Delhi</p>
              <small>View on Map</small>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
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

          {/* ✅ ONLY THIS controls the message */}
          {showSuccess && (
            <p className="success-text">
              Message Sent Successfully ✅
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
