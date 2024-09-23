import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';
import './Sidebar.css';  // Import the stylesheet

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`icon-container ${isActive && isActive === name && 'active-icon'} ${!disabled && 'clickable'} ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="icon-image" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`icon-image ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="sidebar-container">
      <Link to="/">
        <Icon styles="logo-icon" imgUrl={logo} />
      </Link>

      <div className="sidebar-content">
        <div className="icon-gap">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <Icon styles="shadow-secondary" imgUrl={sun} />
      </div>
    </div>
  );
};

export default Sidebar;
