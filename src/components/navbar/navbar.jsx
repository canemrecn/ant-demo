// src/components/Navbar.js
import React from 'react';
import { useAppContext } from '../../context/appcontext/appcontext';

const Navbar = () => {
    
  const { toggleSidebar } = useAppContext();


  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', background: '#001529', color: 'white', padding: '35px', boxSizing: 'border-box', zIndex: 100 }}>
    </nav>
  );
};

export default Navbar;
