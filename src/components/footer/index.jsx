import React from 'react'
import './footer.scss';
import Logo from '../../assets/logo/logo-header.png';
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
              <NavLink to="/about">About</NavLink>
              <NavLink to="/product">Product</NavLink>
              <NavLink to="/why-us">Why Us ?</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div>
              <h2>Get In Touch!
              </h2>
              <div className='icon-text'>
                <i className="fa-solid fa-phone"></i>
                <a href='callto:+917201098768'>+91 7201098768</a>
              </div>

              <div className='icon-text'>
                <i className="fa-solid fa-envelope"></i>
                <a href='mailto:info@ekikrta.com'>info@ekikrta.com</a>
              </div>
              <div className='icon-text' style={{ alignItems: "start" }}>
                <i className="fa-solid fa-location-dot"></i>
                <p>208, 2nd floor, Gruham plaza, <br />
                  near kosad lake garden, Kosad, <br />
                  Surat, Gujarat, India - 394107
                </p>
              </div>
            </div>
            <div>
              <h2>Contact Us
              </h2>
              <a>Get started today</a>
              <div className='social-icon-alignment'>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='copy-right'>
        <div className='container'>
          <p>Copyright © 2024 Ekikrta, All rights reserved. Powered by <a>Ekikrta</a></p>
        </div>
      </div>
    </div>
  )
}
