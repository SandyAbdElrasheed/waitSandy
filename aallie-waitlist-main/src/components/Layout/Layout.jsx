import React, { useRef } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const lastSectionRef = useRef(null);  // Create ref for the last section

  // Scroll handler to scroll to the last section
  const scrollToLastSection = () => {
    lastSectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the last section
  };

  return (
    <>
      {/* Pass the scroll handler to Header */}
      <Header onJoinClick={scrollToLastSection} />
      <div>
        {/* Pass the lastSectionRef to Main through Outlet */}
        <Outlet context={{ lastSectionRef }} />
      </div>
    </>
  );
};

export default Layout;
