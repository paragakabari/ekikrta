import React, { useState } from 'react'
import './header.scss';
import Logo from '../../../assets/logo/logo-sm.png';
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
                <span>Hunter skill inc</span>
              </div>
            </NavLink>
            <div className='menu'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/who-we-are">Who We Are</NavLink>
              <NavLink to="/employers">Employers</NavLink>
              <NavLink to="/job-seekers">Job Seekrs</NavLink>
              <a>Markets</a>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className='mobile-menu' onClick={()=> setHeader(!header)}>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
      <div className={header ? 'mobile-header show' : 'mobile-header hide' }>
        <div className='header-sm'>
          <div className='logo' onClick={()=> setHeader(false)}>
            <img src={Logo} alt='logo' />
            <span>Hunter skill inc</span>
          </div>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div className='header-body'>
        <NavLink onClick={()=> setHeader(false)} to="/">Home</NavLink>
              <NavLink onClick={()=> setHeader(false)} to="/who-we-are">Who We Are</NavLink>
              <NavLink onClick={()=> setHeader(false)} to="/employers">Employers</NavLink>
              <NavLink onClick={()=> setHeader(false)} to="/job-seekers">Job Seekrs</NavLink>
              <a onClick={()=> setHeader(false)}>Markets</a>
              <NavLink onClick={()=> setHeader(false)} to="/contact">Contact</NavLink>
        </div>
      </div>
    </>
  )
}
