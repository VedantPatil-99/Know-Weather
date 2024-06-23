import React from "react";

const Alert = ({ message1, message2, onClose }) => (
  <>
    <div className="alert-1">
      <span className="closebtn" onClick={onClose}>
        &times;
      </span>
      {message1}
    </div>
    <div className="alert-2">
      <span className="closebtn" onClick={onClose}>
        &times;
      </span>
      {message2}
    </div>
  </>
);

export default Alert;
