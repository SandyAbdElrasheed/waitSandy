import React, { useContext } from 'react';
import lightLogo from './../../assets/images/black logo 1.png';
import darkLogo from './../../assets/images/Group 11.png';
import ThemeToggle from '../themeToggle/themeToggle';
import { ThemeContext } from '../../contexts/ThemeContext';

const Header = ({ onJoinClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mt-3 container">
        {/* Theme Toggle on the left */}
        <div className="d-flex align-items-center">
          <ThemeToggle />
        </div>

        {/* Logo in the center */}
        <div className="mx-auto d-flex justify-content-center">
          <img
            src={theme === 'dark' ? darkLogo : lightLogo}
            width="146"
            height="56"
            className="d-inline-block align-top"
            alt="aallie logo"
          />
        </div>

        {/* Join button on the right */}
        <div className="d-flex align-items-center ml-auto">
          <button className="btn btn-join-aallie" onClick={onJoinClick}>
            Join aallie
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
