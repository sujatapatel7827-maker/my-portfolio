import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        color: "#e5e7eb",
        minHeight: "100vh",
        background: "#0f172a",
      }}
    >
      <h2>📩 Admin Panel - Messages</h2>

      {loading && <p>Loading...</p>}
      {!loading && <p>Total Messages: {messages.length}</p>}

      {messages.map((msg) => (
        <div
          key={msg._id}
          style={{
            background: "#1f2933",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        >
          <h4>{msg.name}</h4>
          <p>Email: {msg.email}</p>
          <p>Message: {msg.message}</p>
          <p>Status: <b>{msg.status}</b></p>
        </div>
      ))}
    </div>
  );
}
