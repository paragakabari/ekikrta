import React, { useState, useEffect } from 'react';
import './footer.scss';
import Logo from '../../assets/logo/logo-header.png';
import { NavLink, useNavigate } from 'react-router-dom';
import Loader from "../Loader/Loader";

export default function Footer() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    e.preventDefault(); // Prevent default link navigation
    setLoader(true); // Show the loader

    setTimeout(() => {
      setLoader(false); // Hide the loader after 3 seconds
      navigate(path); // Navigate to the specified path
    }, 3000);
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      {loader && <Loader />}
      <div>
        <footer>
          <div className='container'>
            <div className='footer-alignment'>
              <div className='first-contnet'>
                <NavLink to="/" onClick={(e) => handleNavigation(e, '/')}>
                  <div className='logo'>
                    <img src={Logo} alt='Logo' />
                  </div>
                </NavLink>
                <p>
                  What does Ekikrta mean to you? For us, it embodies teamwork, unity, and a shared goal of building a healthier future. Join us on this journey towards a better tomorrow.
                </p>
              </div>
              <div>
                <h2>Site Links</h2>
                <NavLink to="/" onClick={(e) => handleNavigation(e, '/')}>Home</NavLink>
                <NavLink to="/about" onClick={(e) => handleNavigation(e, '/about')}>About</NavLink>
                <NavLink to="/product" onClick={(e) => handleNavigation(e, '/product')}>Product</NavLink>
                <NavLink to="/why-us" onClick={(e) => handleNavigation(e, '/why-us')}>Why Us ?</NavLink>
                <NavLink to="/contact" onClick={(e) => handleNavigation(e, '/contact')}>Contact</NavLink>
              </div>
              <div>
                <h2>Get In Touch!</h2>
                <div className='icon-text'>
                  <i className="fa-solid fa-phone"></i>
                  <a href='callto:+917201098768'>+91 7201098768</a>
                </div>

                <div className='icon-text'>
                  <i className="fa-solid fa-envelope"></i>
                  <a href='mailto:Info.ekikrta@gmail.com'>Info.ekikrta@gmail.com</a>
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
                <h2>Contact Us</h2>
                <a href="#" onClick={(e) => handleNavigation(e, '/contact')}>Get started today</a>
                <div className='social-icon-alignment'>
                  <a target='_blank' href="https://www.facebook.com/people/Ekikrta-Industries-Pvt-Ltd/61561204992668/?mibextid=ZbWKwL">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a target='_blank' href="https://www.instagram.com/ekikrta_industries_pvt_ltd/?igsh=d3lhYjlhMG91M256">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a target='_blank' href="https://www.linkedin.com/company/ekikrta-industries-pvt-ltd/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className='copy-right'>
          <div className='container'>
            <p>Copyright © 2024 Ekikrta, All rights reserved. Powered by <a href="#" onClick={(e) => handleNavigation(e, '/')}>Ekikrta</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
