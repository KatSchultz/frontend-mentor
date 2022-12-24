import React from "react";
import "./Modal.css";

export default function Modal() {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Delete Comment</h2>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and it can't be undone.
        </p>
        <div className="modal-buttons">
          <button>NO, CANCEL</button>
          <button>YES, DELETE</button>
        </div>
      </div>
    </div>
  );
}
