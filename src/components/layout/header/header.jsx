import React, { useState } from 'react';
import './header.scss';
import Logo from '../../../assets/logo/logo-header.png';
import { NavLink, useNavigate } from 'react-router-dom';
import Loader from "../../Loader/Loader";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    e.preventDefault(); // Prevent default link navigation
    setLoader(true); // Show the loader
    setHeader(false); // Close the mobile menu

    setTimeout(() => {
      setLoader(false); // Hide the loader after 3 seconds
      navigate(path); // Navigate to the specified path
    }, 2000);
  };

  return (
    <>
      {loader && <Loader />}
      <header>
        <div className='container'>
          <div className='header-alignment'>
            <NavLink to="/">
              <div className='logo'>
                <img src={Logo} alt='logo' />
              </div>
            </NavLink>
            <div className='menu'>
              <NavLink to="/" onClick={(e) => handleNavigation(e, '/')}>Home</NavLink>
              <NavLink to="/product" onClick={(e) => handleNavigation(e, '/product')}>Product</NavLink>
              <NavLink to="/about" onClick={(e) => handleNavigation(e, '/about')}>About</NavLink>
              <NavLink to="/why-us" onClick={(e) => handleNavigation(e, '/why-us')}>Why Us?</NavLink>
              <NavLink to="/contact" onClick={(e) => handleNavigation(e, '/contact')}>Contact</NavLink>
            </div>
            <div className='mobile-menu' onClick={() => setHeader(!header)}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
      <div className={header ? 'mobile-header show' : 'mobile-header hide'}>
        <div className='header-sm'>
          <div className='logo' onClick={() => setHeader(false)}>
            <img src={Logo} alt='logo' />
            <span>Ekikrta</span>
          </div>
          <div className='mobile-menu' onClick={() => setHeader(!header)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className='header-body'>
          <NavLink onClick={(e) => handleNavigation(e, '/')} to="/">Home</NavLink>
          <NavLink onClick={(e) => handleNavigation(e, '/product')} to="/product">Product</NavLink>
          <NavLink onClick={(e) => handleNavigation(e, '/about')} to="/about">About</NavLink>
          <NavLink onClick={(e) => handleNavigation(e, '/why-us')} to="/why-us">Why Us?</NavLink>
          <NavLink onClick={(e) => handleNavigation(e, '/contact')} to="/contact">Contact</NavLink>
        </div>
      </div>
    </>
  );
}
