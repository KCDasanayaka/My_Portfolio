import React from 'react';
import "./toggle.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';  // Light mode icon
import DarkModeIcon from '@mui/icons-material/DarkMode';  // Dark mode icon

export const Toggle = ({ isChecked, handleChange }) => {
  return (
    <div className="toggle-container">
      <label htmlFor="check" className="toggle-label">
        {/* Use Material UI icons based on isChecked state */}
        <span>{isChecked ? <DarkModeIcon /> : <WbSunnyIcon />}</span>
      </label>
      <input
        type="checkbox"
        id="check"
        className="toggle-checkbox"
        onChange={handleChange}
        checked={isChecked}
      />
    </div>
  );
};
