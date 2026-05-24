import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Reply Modal state
    const [selectedMsg, setSelectedMsg] = useState(null);
    const [replyStatus, setReplyStatus] = useState("Interested");
    const [replyText, setReplyText] = useState("");
    const [sending, setSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        // Check if admin is logged in
        const isLoggedIn = localStorage.getItem("adminLoggedIn");
        if (!isLoggedIn) {
            navigate("/admin");
            return;
        }

        fetchMessages();
    }, [navigate]);

    // Handle changing reply default text when status changes
    useEffect(() => {
        if (selectedMsg) {
            if (selectedMsg.status !== "Pending") {
                setReplyStatus(selectedMsg.status);
                setReplyText(selectedMsg.replyMessage || "");
            } else {
                // For new message, initialize with default text based on current replyStatus selection
                updateDefaultMessage(selectedMsg.name, replyStatus);
            }
        } else {
            setReplyText("");
            setSuccessMessage("");
            setError("");
        }
    }, [selectedMsg]);

    const updateDefaultMessage = (contactName, status) => {
        if (status === "Interested") {
            setReplyText(`Hi ${contactName},\n\nThank you for reaching out to me! I am interested in this opportunity and would love to connect to discuss details further.\n\nLet me know your availability.\n\nBest regards,\nPortfolio Owner`);
        } else {
            setReplyText(`Hi ${contactName},\n\nThank you for reaching out to me. Unfortunately, I am unable to take on new opportunities or projects at this time.\n\nI appreciate your interest and wish you the best!\n\nBest regards,\nPortfolio Owner`);
        }
    };

    const handleStatusChange = (status) => {
        setReplyStatus(status);
        if (selectedMsg && selectedMsg.status === "Pending") {
            updateDefaultMessage(selectedMsg.name, status);
        }
    };

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

    const handleSendReply = async (e) => {
        e.preventDefault();
        if (!selectedMsg) return;
        setSending(true);
        setError("");
        setSuccessMessage("");

        try {
            const response = await fetch(`http://localhost:5000/api/admin/messages/${selectedMsg._id}/reply`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: replyStatus, replyMessage: replyText }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccessMessage("Reply sent and recorded successfully!");
                // Update messages state
                setMessages(prev => prev.map(m => m._id === selectedMsg._id ? data.messageData : m));
                // Update selected message so UI updates
                setSelectedMsg(data.messageData);
            } else {
                setError(data.message || "Failed to send reply");
            }
        } catch (err) {
            setError("Connection error. Failed to reach the server.");
        } finally {
            setSending(false);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return "";
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

            {error && !selectedMsg && <div className="admin-error-banner">{error}</div>}

            <div className="admin-stats">
                <div className="admin-stat-card">
                    <h3>{messages.length}</h3>
                    <p>Total Messages</p>
                </div>
                <div className="admin-stat-card">
                    <h3>{messages.filter(m => m.status === "Pending").length}</h3>
                    <p>Pending Replies</p>
                </div>
                <div className="admin-stat-card">
                    <h3>{messages.filter(m => m.status === "Interested").length}</h3>
                    <p>Interested</p>
                </div>
                <div className="admin-stat-card">
                    <h3>{messages.filter(m => m.status === "Not Interested").length}</h3>
                    <p>Not Interested</p>
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((msg, index) => (
                                    <tr key={msg._id} className={selectedMsg?._id === msg._id ? "active-row" : ""}>
                                        <td>{index + 1}</td>
                                        <td>{msg.name}</td>
                                        <td>{msg.email}</td>
                                        <td className="admin-message-text" title={msg.message}>{msg.message}</td>
                                        <td>
                                            <span className={`admin-status-badge ${msg.status.toLowerCase().replace(" ", "_")}`}>
                                                {msg.status}
                                            </span>
                                        </td>
                                        <td>{formatDate(msg.createdAt)}</td>
                                        <td>
                                            <button 
                                                onClick={() => {
                                                    setSelectedMsg(msg);
                                                    setSuccessMessage("");
                                                    setError("");
                                                }} 
                                                className={`admin-action-btn ${msg.status === 'Pending' ? 'reply' : 'view'}`}
                                            >
                                                {msg.status === "Pending" ? "Reply" : "View"}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* REPLY/VIEW MODAL */}
            {selectedMsg && (
                <div className="admin-modal-overlay" onClick={() => setSelectedMsg(null)}>
                    <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="admin-modal-header">
                            <h2>{selectedMsg.status === "Pending" ? "Send Reply" : "Reply Details"}</h2>
                            <button className="admin-modal-close" onClick={() => setSelectedMsg(null)}>&times;</button>
                        </div>
                        
                        <div className="admin-modal-body">
                            {error && <div className="admin-error-banner">{error}</div>}
                            {successMessage && <div className="admin-success-banner">{successMessage}</div>}

                            <div className="admin-message-details">
                                <div className="detail-row">
                                    <strong>From:</strong> <span>{selectedMsg.name} ({selectedMsg.email})</span>
                                </div>
                                <div className="detail-row">
                                    <strong>Date Received:</strong> <span>{formatDate(selectedMsg.createdAt)}</span>
                                </div>
                                <div className="detail-box">
                                    <strong>Message:</strong>
                                    <p className="original-message">{selectedMsg.message}</p>
                                </div>
                            </div>

                            <hr className="modal-divider" />

                            {selectedMsg.status === "Pending" ? (
                                <form onSubmit={handleSendReply} className="admin-reply-form">
                                    <div className="form-group">
                                        <label>Response Status</label>
                                        <div className="status-selector">
                                            <button 
                                                type="button" 
                                                onClick={() => handleStatusChange("Interested")}
                                                className={`status-btn interested ${replyStatus === "Interested" ? "active" : ""}`}
                                            >
                                                Interested
                                            </button>
                                            <button 
                                                type="button" 
                                                onClick={() => handleStatusChange("Not Interested")}
                                                className={`status-btn not-interested ${replyStatus === "Not Interested" ? "active" : ""}`}
                                            >
                                                Not Interested
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="reply-text">Reply Message</label>
                                        <textarea
                                            id="reply-text"
                                            value={replyText}
                                            onChange={(e) => setReplyText(e.target.value)}
                                            rows={6}
                                            required
                                            placeholder="Write your response email here..."
                                        ></textarea>
                                    </div>

                                    <div className="modal-actions">
                                        <button 
                                            type="button" 
                                            onClick={() => setSelectedMsg(null)} 
                                            className="btn-secondary"
                                            disabled={sending}
                                        >
                                            Cancel
                                        </button>
                                        <button 
                                            type="submit" 
                                            className="btn-primary"
                                            disabled={sending}
                                        >
                                            {sending ? "Sending..." : "Send Reply"}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="admin-reply-history">
                                    <h3>Your Reply History</h3>
                                    <div className="detail-row">
                                        <strong>Status Decision:</strong>
                                        <span className={`admin-status-badge ${selectedMsg.status.toLowerCase().replace(" ", "_")}`}>
                                            {selectedMsg.status}
                                        </span>
                                    </div>
                                    <div className="detail-row">
                                        <strong>Replied On:</strong> <span>{formatDate(selectedMsg.repliedAt)}</span>
                                    </div>
                                    <div className="detail-box">
                                        <strong>Reply Sent:</strong>
                                        <p className="replied-message">{selectedMsg.replyMessage}</p>
                                    </div>

                                    {selectedMsg.emailPreviewUrl && (
                                        <div className="ethereal-preview-box">
                                            <span className="email-icon">✉️</span>
                                            <div>
                                                <h4>Ethereal Email Preview (Local Testing)</h4>
                                                <p>An email was mock-sent to <strong>{selectedMsg.email}</strong>. You can view the sent mail in your browser below:</p>
                                                <a href={selectedMsg.emailPreviewUrl} target="_blank" rel="noopener noreferrer" className="preview-link">
                                                    Open Email Preview &rarr;
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

