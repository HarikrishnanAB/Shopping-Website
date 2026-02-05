import "./ConfirmModal.css";

function ConfirmModal({ show, title, message, onCancel, onConfirm }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>{title}</h3>
        <p>{message}</p>

        <div className="modal-actions">
          <button className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn-primary" onClick={onConfirm}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
