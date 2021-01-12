import React from 'react';
import logo from '../img/logo.png';

const TopNav = () => {
  return (
    <header className="flex w-screen h-16 items-stretch">
      <div className="flex-initial flex justify-center items-center pl-4 pr-4 bg-red-600 text-white">
        Menu
      </div>
      <div className="flex flex-auto justify-center items-start">
        <div className="w-auto h-full">
          <img
            className="w-auto h-full"
            src={logo}
            alt="jm initials in cursive"
          />
        </div>
      </div>
      <div className="flex-initial"></div>
    </header>
  );
};

export default TopNav;
