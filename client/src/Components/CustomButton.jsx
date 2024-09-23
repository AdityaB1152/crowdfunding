import React from 'react';
import './Navbar.css'; // Import CSS file

const CustomButton = ({ btnType, title, styles, handleClick }) => {
  return (
    <button
      type={btnType}
      className={`custom-button ${styles}`} // Base class and dynamic styles
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
