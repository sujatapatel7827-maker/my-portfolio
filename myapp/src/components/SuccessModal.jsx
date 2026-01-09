import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessModal({ show, onClose, name }) {
    if (!show) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <FaCheckCircle size={50} color="#22c55e" />
                <h2 style={styles.heading}>Success!</h2>
                <p style={styles.text}>
                    Thank you, <b>{name}</b>! <br />
                    Your message has been sent successfully.
                </p>
                <button onClick={onClose} style={styles.button}>
                    Close
                </button>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    modal: {
        background: "#1f2933",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        color: "#e5e7eb",
        maxWidth: "350px",
        width: "90%",
        animation: "fadeIn 0.3s ease-in-out",
    },
    heading: {
        margin: "15px 0 10px",
        fontSize: "24px",
    },
    text: {
        fontSize: "16px",
        marginBottom: "20px",
        lineHeight: "1.5",
    },
    button: {
        background: "#22c55e",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
    },
};
