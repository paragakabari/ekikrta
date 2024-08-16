import React, { useEffect } from 'react'
import './contact.scss';
import Findingsection from '../home/findingsection';
export default function Contact() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    });
    return (
        <>
            <div className='contact-page-alignment'>
                <div className='container'>
                    <div className='grid'>
                        <div className='grid-items'>
                            <h2>
                                Let Us Create <br /> Your Succes
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className='grid-items'>
                            <div className='two-col-grid'>
                                <div className='input'>
                                    <label>First Name</label>
                                    <input type='text' />
                                </div>
                                <div className='input'>
                                    <label>Last Name</label>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='input spacer'>
                                <label>Email Id</label>
                                <input type='text' />
                            </div>
                            <div className='input spacer'>
                                <label>Phone Number</label>
                                <input type='text' />
                            </div>
                            <div className='input spacer'>
                                <label>Work Type</label>
                                <input type='text' />
                            </div>
                            <div className='input spacer'>
                                <label>Message</label>
                                <textarea></textarea>
                            </div>
                            <div className='button'>
                                <button>Submit Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='contect-mails'>
                        <div className='mails-flex'>
                            <i className="fa-solid fa-envelope"></i>
                            <div>
                                <span>For Domestic Department</span><br />
                                <a href="mailto:sales@ekikrta.com">sales@ekikrta.com</a>
                            </div>
                        </div>
                        <div className='mails-flex'>
                            <i className="fa-solid fa-envelope"></i>
                            <div >
                                <span>For Export Department</span><br />
                                <a href="mailto:export@ekikrta.com">export@ekikrta.com</a>
                            </div>
                        </div>
                        <div className='mails-flex'>
                            <i className="fa-solid fa-envelope"></i>
                            <div>
                                <span>For Purchase Department</span><br />
                                <a href="mailto: purchase@ekikrta.com"> purchase@ekikrta.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Findingsection />
        </>
    )
}
