import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/' className='logo'>
          <img src={logo} className='logo-img' alt='logo-home'></img>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;