import React from 'react'
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import logo from '../logo.svg'
import searchImg from "../search-img.svg";


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/' className='logo'>
          <img src={logo} className='logo-img' alt='logo-home'></img>
        </Link>

        <img src={searchImg} alt="search-img" className="search-img"/>
        <SearchForm />
      </div>
    </nav>
  );
};

export default Navbar;