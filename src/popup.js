// Popup.js
import React, { useEffect } from "react";
import "./Popup.css";

const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.className === "popup-overlay") {
        onClose();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose} className="popup-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
