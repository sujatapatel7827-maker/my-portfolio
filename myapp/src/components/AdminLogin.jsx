import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5001/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem("adminLoggedIn", "true");
                localStorage.setItem("adminUsername", data.admin.username);
                navigate("/admin/dashboard");
            } else {
                setError(data.message || "Login failed");
            }
        } catch (err) {
            setError("Connection error. Make sure backend is running.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-box">
                <h1 className="admin-login-title">Admin Login</h1>
                <p className="admin-login-subtitle">Enter your credentials to access dashboard</p>

                <form onSubmit={handleLogin} className="admin-login-form">
                    <div className="admin-input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div className="admin-input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    {error && <div className="admin-error">{error}</div>}

                    <button type="submit" className="admin-login-btn" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="admin-login-footer">
                    <a href="/">← Back to Portfolio</a>
                </div>
            </div>
        </div>
    );
}
