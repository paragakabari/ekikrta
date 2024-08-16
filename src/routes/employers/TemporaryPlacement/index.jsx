import React from 'react'
import './TemporaryPlacement.scss';
import PlacementBanner from '../../../assets/imges/placement.webp';
export default function TemporaryPlacement() {
    return (
        <div className='temporary-placement'>
            <div className='container'>
                <div className='grid'>
                    <div className='grid-items'>
                        <div className='img'>
                            <img src={PlacementBanner} alt='PlacementBanner' />
                        </div>
                    </div>
                    <div className='grid-items'>
                        <h2>Contract and Temporary Placement
                        </h2>
                        <p>
                            We can provide flexible staffing solutions comprised of a talented workforce that will ensure all short- and long-term project needs are met. As an extension of your HR department, we will also address and cover critical areas such as the Workplace Safety
                            and Insurance Board (WSIB), payroll deductions, severance, and terminations.
                        </p>
                        <p>
                            Since many of our clients experience cyclical workforce demands, we ensure that we have a network of available and quality candidates who can hit the ground running from day one. The following
                            are some of the advantages of hiring a temporary workforce:
                        </p>
                    </div>
                </div>
                <div className='three-col-grid'>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>The ability to meet the demands of changing workloads
                        </p>
                    </div>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Reduced administrative costs, including HR, payroll, training, etc.
                        </p>
                    </div>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Protection against co-employment liabilities pertaining to severance and termination
                        </p>
                    </div>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>WSIB or Workers' Compensation Board (WCB) coverage in Alberta for all contractors
                        </p>
                    </div>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Access to an extensive network of skilled candidates
                        </p>
                    </div>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Management of contractor performance, disciplinary issues, and terminations
                        </p>
                    </div>
                    <div className='three-col-grid-items'></div>
                    <div className='three-col-grid-items'></div>
                    <div className='three-col-grid-items'></div>
                </div>
            </div>
        </div>
    )
}
