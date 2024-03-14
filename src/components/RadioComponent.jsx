import React, { useState } from 'react';
import { useTheme } from "../contexts/DarkModeContext";

function RadioComponent() {
  const { toggleTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);

  const handleRadioClick = () => {
    setIsActive(!isActive);
    toggleTheme();
  };

  return (
    <div className="radio-btn" onClick={handleRadioClick}>
      <div className={isActive ? "radio-inner active" : "radio-inner"}></div>
    </div>
  );
}

export default RadioComponent;
