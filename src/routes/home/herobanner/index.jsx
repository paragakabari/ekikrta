import React from 'react'
import './herobanner.scss';
export default function Herobanner() {
  return (
    <div className='hero-banner-design'>
       <div className='w-full'>
        <div className='container'>
            <h1>
            Recruitment Services for Employers and Job Seekers
            </h1>
            <p>
                In Vision provides recruitment, staffing, and placement services to clients throughout Canada. Utilizing our team’s combined expertise and resources, we seek out and identify qualified candidates. We 
                analyze their strengths, conduct cultural fit assessments, and match them with the right employers.
            </p>
            <div className='button-outline'>
                <button>Contact Us</button>
            </div>
        </div>
       </div>
    </div>
  )
}
