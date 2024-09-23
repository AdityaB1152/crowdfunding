import React from 'react';
import { loader } from '../assets';
import './FormField.css'; // Importing the CSS file

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loader} alt="loader" className="loader-image" />
      <p className="loader-text">
        Transaction is in progress <br /> Please wait...
      </p>
    </div>
  );
};

export default Loader;
