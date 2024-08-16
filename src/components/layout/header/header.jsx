import React, { useState } from 'react'
import './header.scss';
import Logo from '../../../assets/logo/logo-header.png';
import { NavLink } from 'react-router-dom';
export default function Header() {
  const [ header , setHeader ] = useState(false);
  return (
    <>
      <header>
        <div className='container'>
          <div className='header-alignment'>
            <NavLink to="/">
              <div className='logo'>
                <img src={Logo} alt='logo' />
                
              </div>
            </NavLink>
            <div className='menu'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/product">Product</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/why-us">Why Us ?</NavLink>
            </div>
            <div className='mobile-menu' onClick={()=> setHeader(!header)}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
      <div className={header ? 'mobile-header show' : 'mobile-header hide' }>
        <div className='header-sm'>
          <div className='logo' onClick={()=> setHeader(false)}>
            <img src={Logo} alt='logo' />
            <span>Ekikrta</span>
          </div>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className='header-body'>
        <NavLink onClick={()=> setHeader(false)} to="/">Home</NavLink>
              <NavLink onClick={()=> setHeader(false)} to="/product">Product</NavLink>
              <NavLink onClick={()=> setHeader(false)} to="/about">About</NavLink>
              <NavLink onClick={()=> setHeader(false)} to="/contact">Contact</NavLink>
              <NavLink onClick={()=> setHeader(false)} to="/why-us">Why Us ?</NavLink>
        </div>
      </div>
    </>
  )
}
