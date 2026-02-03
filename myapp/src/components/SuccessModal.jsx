export default function SuccessModal({ onClose }) {
  return (
    <div className="success-modal">
      <div className="success-box">
        <h2>Message Sent Successfully ✅</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
