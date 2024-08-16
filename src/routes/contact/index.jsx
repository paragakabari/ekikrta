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
            In Vision provides recruitment, staffing, and placement services to clients throughout Canada. Utilizing our team’s combined expertise and resources, we seek out and identify qualified candidates. We
            analyze their strengths, conduct cultural fit assessments, and match them with the right employers.
          </p>
                        </div>
                        <form form method="post" action="mailto:email.com?subject=subject&message=message">
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
                        </form>
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
