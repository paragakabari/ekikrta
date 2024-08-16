import React from 'react'
import './AvailablePositions.scss';
import { NavLink } from 'react-router-dom';
export default function AvailablePositions() {
    return (
        <div className='available-positions-all-contnet-alignment'>
            <div className='container'>
                <div className='title'>
                    <h2>Available Positions
                    </h2>
                    <p>We are continually filling positions, so our listings are up to date. Our team specializes in finding opportunities for jobseekers to start or grow their careers in the following fields:</p>
                </div>
                <div className='two-col-grid'>
                    {
                        [...Array(5)].map(() => {
                            return (
                                <NavLink to="/contact">
                                <div className='two-col-grid-items'>
                                    <h2>Intern UX/UI Designer</h2>
                                    <div className='details-text'>
                                        <p>EByte software solutions Pvt Ltd</p>
                                        <span>Remote</span>
                                    </div>
                                    <ul>
                                        <li>Work closely with developers to ensure the feasibility and implementation of designs.
                                        </li>
                                        <li>
                                            Collaborate with the design team to create user-friendly and visually…
                                        </li>
                                        <li>Your day-to-day tasks will include web design, graphic design, front-end development, and responsive web design.
                                        </li>
                                    </ul>
                                    <div className='link-text'>
                                        <span>Active 2 days ago</span>
                                    </div>
                                    <div className='button'>
                                        <button>Apply Now</button>
                                    </div>
                                </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
