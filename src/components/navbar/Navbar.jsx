import React, { useState } from 'react';
import './navbar.css'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [setActiveItem] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false); // Track the menu state

  const handleItemClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <div className='navbar'>
      <div className='navLeft'>
        <div className='logoContainer'><img src='/logo-nav.png' alt='logo' /></div>
        <div className='companyName'>STORECODE</div>
        <div className='mobileIconHolder' onClick={toggleMenu}>
          <img src='/burger.png' alt='burger' className={menuOpen ? 'hidden' : ''} />
          <img src='/close.png' alt='close' className={!menuOpen ? 'hidden' : ''} />
        </div>
      </div>
      <div className={`navRight ${menuOpen ? 'show-menu' : ''}`}>
        <ul className={`navItems ${menuOpen ? 'column' : ''}`}>
          <li onClick={() => handleItemClick('Home')}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
          </li>
          <li onClick={() => handleItemClick('About')}>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</Link>
          </li>
          <li onClick={() => handleItemClick('Contact')}>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT</Link>
          </li>
          <li onClick={() => handleItemClick('Store')} className='storeBtn'>
            <Link to="/store" className={location.pathname === '/store' ? 'active' : 'storeBtn'}>STORE</Link>
          </li>
          <li onClick={() => handleItemClick('Register')} className='regBtn'>
            <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>REGISTER</Link>
          </li>
          <li onClick={() => handleItemClick('Login')}>
            <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>LOGIN</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
