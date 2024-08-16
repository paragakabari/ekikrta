import React from 'react'
import './whoWeAreBanner.scss';
import { NavLink } from 'react-router-dom';
export default function WhoWeAreBanner() {
    return (
        <div className='who-we-are-banner'>
            <div className='w-full'>
                <div className='container'>
                    <h1>
                        Who We Are
                    </h1>
                    <p>
                        Ekikrta Industries Pvt Ltd is a dynamic and rapidly growing pharmaceutical company established in 2024. Despite our young age, we have already established a robust infrastructure and a team of experienced professionals who are passionate about delivering excellence. We are committed to being a trusted partner to the pharmaceutical industry, contributing to the development of innovative and affordable healthcare solutions.
                        As a global player, we engage in both import and export of pharmaceutical products, ensuring seamless access to our offerings across markets.
                    </p><br />
                    <div className='button-outline'>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
