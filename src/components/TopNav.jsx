import React from 'react';
import logo from '../img/logo.png';

import '../styles/header.scss';

const TopNav = () => {
  return (
    <header>
      <div className="header-logo-container">
        <img src={logo} alt="jm initials" />
      </div>
    </header>
  );
};

export default TopNav;
