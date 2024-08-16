import React from 'react'
import './ensuringourclients.scss';
import FindImage from '../../../assets/imges/find.webp';
import Candidate  from '../../../assets/imges/Candidate.webp';
import Staffing  from '../../../assets/imges/Staffing.jpg';
export default function Ensuringourclients() {
  return (
    <div className='ensuringourclients-section-design'>
      <div className='container'>
        <div className='text'>
            <h2>
            Ensuring Our Clients and Candidates <br/><span> Achieve Their Vision</span>
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat.
            </p>
        </div>
        <div className='repat-grid'>
            <div className='grid'>
                <div className='grid-items'>
                    <div className='img'>
                        <img src={FindImage} alt='FindImage'/>
                    </div>
                    <h3>
                    Find Your Career 
                    </h3>
                    <p>
                        If you need help looking for job opportunities, turn to In Vision. We provide updated 
                        listings of available positions in technical industries.
                    </p>
                </div>
                <div className='grid-items'>
                    <div className='img'>
                        <img src={Candidate} alt='Candidate'/>
                    </div>
                    <h3>
                    Find Your Candidate 
                    </h3>
                    <p>
                        Employers face many challenges when it comes to recruitment. Because of this, we work individually with 
                        clients to create a strategic and effective recruitment plan.
                    </p>
                </div>
                <div className='grid-items'>
                    <div className='img'>
                        <img src={Staffing} alt='Staffing'/>
                    </div>
                    <h3>
                    Staffing Markets
                    </h3>
                    <p>
                        Employers face many challenges when it comes to recruitment. Because of this, we work individually with 
                        clients to create a strategic and effective recruitment plan.
                    </p>
                </div>
                <div className='grid-items'>
                 
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
