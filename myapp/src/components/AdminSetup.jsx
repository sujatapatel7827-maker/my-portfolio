import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminSetup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSetup = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/admin/setup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                setMessage("✅ Admin created successfully! Redirecting to login...");
                setTimeout(() => {
                    navigate("/admin");
                }, 2000);
            } else {
                setError(data.message || "Setup failed");
            }
        } catch (err) {
            setError("❌ Connection error. Make sure backend is running on port 5000.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-box">
                <h1 className="admin-login-title">🔧 Admin Setup</h1>
                <p className="admin-login-subtitle">Create your first admin account</p>

                <form onSubmit={handleSetup} className="admin-login-form">
                    <div className="admin-input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter admin username"
                            required
                        />
                    </div>

                    <div className="admin-input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter admin password"
                            required
                        />
                    </div>

                    {error && <div className="admin-error">{error}</div>}
                    {message && <div className="admin-success">{message}</div>}

                    <button type="submit" className="admin-login-btn" disabled={loading}>
                        {loading ? "Creating Admin..." : "Create Admin"}
                    </button>
                </form>

                <div className="admin-login-footer">
                    <a href="/admin">← Already have an account? Login</a>
                </div>
            </div>
        </div>
    );
}
