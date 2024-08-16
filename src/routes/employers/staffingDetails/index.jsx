import React from 'react'
import './staffingDetails.scss';
export default function StaffingDetails() {
  return (
    <div className='staffing-details-alignment'>
      <div className='container'>
        <div className='title'>
            <h2>Individualized Staffing Solutions for Employers</h2>
            <p>
                In Vision recognizes that all businesses are different and their staffing needs are constantly evolving. For this reason, we work individually with each employer to create a strategic recruitment plan 
                with the goal of finding and attracting the right candidates.
            </p>
            <p>
                We provide full recruitment services that can be tailored according to your staffing goals. Our 
                team will assist you with the following:
            </p>
        </div>
        <div className='grid'>
            <div className='grid-items'>
            <i class="fa-regular fa-circle-check"></i>
            <p>Contract and Temporary Placement
            </p>
            </div>
            <div className='grid-items'>
            <i class="fa-regular fa-circle-check"></i>
            <p>Permanent Placement
            </p>
            </div>
            <div className='grid-items'>
            <i class="fa-regular fa-circle-check"></i>
            <p>Payrolling
            </p>
            </div>
        </div>
      </div>
    </div>
  )
}
