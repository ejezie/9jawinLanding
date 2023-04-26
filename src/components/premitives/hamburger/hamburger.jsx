import React from 'react';
import './hamburger.scss';

const HamburgerMenu = ({isOpen, handleClick}) => {
 

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default HamburgerMenu;
