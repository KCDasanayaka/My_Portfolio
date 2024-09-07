import React from 'react';
import "./toggle.css";

export const Toggle = ({ isChecked, handleChange }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle-checkbox"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check" className="toggle-label">
        <span>{isChecked ? '🌒' : '☀️'}</span>
      </label>
    </div>
  );
};
