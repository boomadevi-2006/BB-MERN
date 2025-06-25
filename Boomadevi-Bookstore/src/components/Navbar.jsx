import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className='brand'>BB</div>

      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to='/' className='link' onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to='/shop' className='link' onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to='/cart' className='link' onClick={() => setMenuOpen(false)}>Cart</Link>
        <Link to='/about' className='link' onClick={() => setMenuOpen(false)}>About</Link>
        <Link to='/signup' className='link' onClick={() => setMenuOpen(false)}>Signup</Link>
        <Link to='/login' className='link' onClick={() => setMenuOpen(false)}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
