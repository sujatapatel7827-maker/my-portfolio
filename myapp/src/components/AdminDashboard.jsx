import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Check if admin is logged in
        const isLoggedIn = localStorage.getItem("adminLoggedIn");
        if (!isLoggedIn) {
            navigate("/admin");
            return;
        }

        fetchMessages();
    }, [navigate]);

    const fetchMessages = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/messages");
            const data = await response.json();

            if (data.success) {
                setMessages(data.messages);
            } else {
                setError("Failed to fetch messages");
            }
        } catch (err) {
            setError("Connection error. Make sure backend is running.");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminLoggedIn");
        localStorage.removeItem("adminUsername");
        navigate("/admin");
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (loading) {
        return (
            <div className="admin-dashboard-container">
                <div className="admin-loading">Loading messages...</div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard-container">
            <div className="admin-dashboard-header">
                <h1>Admin Dashboard</h1>
                <div className="admin-header-actions">
                    <span className="admin-username">
                        Welcome, {localStorage.getItem("adminUsername")}
                    </span>
                    <button onClick={handleLogout} className="admin-logout-btn">
                        Logout
                    </button>
                </div>
            </div>

            {error && <div className="admin-error-banner">{error}</div>}

            <div className="admin-stats">
                <div className="admin-stat-card">
                    <h3>{messages.length}</h3>
                    <p>Total Messages</p>
                </div>
                <div className="admin-stat-card">
                    <h3>{messages.filter(m => m.status === "Pending").length}</h3>
                    <p>Pending</p>
                </div>
            </div>

            <div className="admin-messages-section">
                <h2>Contact Messages</h2>

                {messages.length === 0 ? (
                    <div className="admin-no-messages">No messages yet</div>
                ) : (
                    <div className="admin-messages-table-wrapper">
                        <table className="admin-messages-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((msg, index) => (
                                    <tr key={msg._id}>
                                        <td>{index + 1}</td>
                                        <td>{msg.name}</td>
                                        <td>{msg.email}</td>
                                        <td className="admin-message-text">{msg.message}</td>
                                        <td>
                                            <span className={`admin-status-badge ${msg.status.toLowerCase()}`}>
                                                {msg.status}
                                            </span>
                                        </td>
                                        <td>{formatDate(msg.createdAt)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
