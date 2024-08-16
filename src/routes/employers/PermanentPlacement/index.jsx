import React from 'react'
import './PermanentPlacement.scss';
import PlacementBanner from '../../../assets/imges/placement.webp';

export default function PermanentPlacement() {
  return (
    <div className='PermanentPlacement-section-alignment'>
      <div className='container'>
        <div className='grid'>
            <div className='grid-items'>
                <h2>Permanent Placement
                </h2>
                <p>
                    We work with clients to identify candidates who possess the critical skills required to match their companies’ technical and organizational needs. Our “Help Us Help You” profile ensures our ability to 
                    find and qualify candidates that match our clients’ specific requirements.
                </p>
                <p>
                    We believe that the key to a successful business can be found in its staff. We network with industry-leading “passive” candidates to ensure that our clients have access to the best talent in the market. These are the other 
                    reasons why you should trust us for your permanent staffing:
                </p>
            </div>
            <div className='grid-items'>
                <div className='img'>
                    <img src={PlacementBanner} alt='PlacementBanner'/>
                </div>
            </div>
        </div>
        <div className='two-col-grid'>
            <div className='two-col-grid-items'>
            <i class="fa-regular fa-circle-check"></i>
            <p>We network with industry-leading “passive” candidates to ensure that our clients have access to the best talents in the market.
            </p>
            </div>
            <div className='two-col-grid-items'>
            <i class="fa-regular fa-circle-check"></i>
            <p>We work with integrity, alerting you to any potential red flags during the interview process to make sure you are matched with a reliable and trustworthy candidate.

            </p>
            </div>
            <div className='two-col-grid-items'>
            <i class="fa-regular fa-circle-check"></i>
            <p>We are capable of accurately assessing a candidate’s technical skills and potential to “fit” within a specific work environment.
            </p>
            </div>
            <div className='two-col-grid-items'>
            <i class="fa-regular fa-circle-check"></i>
            <p>We can incorporate client-specific testing methods to identify the right candidate.

            </p>
            </div>
            <div className='two-col-grid-items'>
            <i class="fa-regular fa-circle-check"></i>
            <p>As an extension of your HR department, we perform reference checks and background checks upon request.


            </p>
            </div>
            <div className='two-col-grid-items'>
            <i class="fa-regular fa-circle-check"></i>
            <p>We track the satisfaction of both our clients and candidates during the first three months of the placement being made.
            </p>
            </div>
        </div>
      </div>
    </div>
  )
}
