import React from 'react'
import './footer.scss';
import Logo from '../../assets/logo/logo-sm.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className='container'>
          <div className='footer-alignment'>
            <div className='first-contnet'>
             <NavLink to="/">
             <div className='logo'>
                <img src={Logo} alt='Logo' />
                <span>Hunter skill inc</span>
              </div>
              </NavLink>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                pulvinar dapibus leo.
              </p>
            </div>
            <div>
              <h2>Site Links</h2>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/who-we-are">Who We Are</NavLink>
              <NavLink to="/employers">Employers</NavLink>
              <NavLink to="/job-seekers">Job Seekrs</NavLink>
              <a>Markets</a>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div>
              <h2>Get In Touch!
              </h2>
              <p style={{ fontSize:'14px' , color:'#0263cc'}}>Ashish pansheriya</p>
              <br/>
              <div className='icon-text'>
                <i class="fa-solid fa-phone"></i>
                <a href='callto:3069618071'>+1 (306) 961-8071</a>
              </div>
              <p style={{ fontSize:'14px' , color:'#0263cc'}}>Ashish pansheriya</p>
              <br/>
              <div className='icon-text'>
                <i class="fa-solid fa-phone"></i>
                <a>+1 (613) 617-2133</a>
              </div>
              <div className='icon-text'>
                <i class="fa-solid fa-envelope"></i>
                <a href='mailto:hunterskill@gmail.com'>hunterskill@gmail.com</a>
              </div>
            </div>
            <div>
              <h2>Contact Us
              </h2>
              <a>Get started today</a>
              <div className='social-icon-alignment'>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='copy-right'>
        <div className='container'>
          <p>Copyright © 2024 Hunter skill, All rights reserved. Powered by <a>Hunter skill inc</a></p>
        </div>
      </div>
    </div>
  )
}
