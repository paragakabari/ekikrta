import React from 'react'
import './payrolling.scss';
export default function Payrolling() {
    return (
        <div className='payrolling-all-contnet-alignment'>
            <div className='container'>
                <div className='title'>
                    <h2>Payrolling</h2>
                    <p>
                        Some of our clients have projects where they have their own qualified pool of candidates but are faced with difficulties in meeting all employment obligations. We can employ client-identified contractors on our
                        payroll to meet flexible staffing needs at a reduced cost.
                    </p>
                    <p>
                        Additionally, our payroll service helps ensure that our clients have a flexible and productive workforce. Employers we work with have the peace of mind that comes with knowing they are fully
                        covered and protected. Other benefits of our payrolling service are:
                    </p>
                </div>
                <div className='three-col-grid'>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Reduced pricing for client-identified candidates
                        </p>
                    </div>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Preparation and issuance of all payroll documentation, including T4s and ROEs

                        </p>
                    </div>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Full coverage of contractor’s WSIB
                        </p>
                    </div>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Indemnifying clients on payroll tax issues
                        </p>
                    </div>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Accurate and on time payroll systems
                        </p>
                    </div>
                    <div className='three-col-grid-items'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Eliminating clients’ liabilities for termination, severance, wrongful dismissal, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
