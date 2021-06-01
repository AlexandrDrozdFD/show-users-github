import React from 'react'
// import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import logo from '../logo.svg'
import searchImg from "../search-img.svg";


const Navbar = ({ username, submitHandler, onChangeHandler }) => {

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <a href="/" className='logo'>
          <img src={logo} className='logo-img' alt='logo-home'></img>
        </a>

        <img src={searchImg} alt="search-img" className="search-img"/>
        <SearchForm
          username={username}
          submitHandler={submitHandler}
          onChangeHandler={onChangeHandler}
        />
      </div>
    </nav>
  );
};

export default Navbar;