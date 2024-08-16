import React, { useEffect } from 'react'
import './jobDetails.scss';
export default function JobDetails() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      });
    return (
        <div className='job-details-alignment'>
            <div className='container'>
                <div className='title'>
                    <h2>Intern UX/UI Designer
                    </h2>
                    <p>EByte software solutions Pvt Ltd</p>
                </div>
                <div className='sec-title'>
                    <h3>Job description
                    </h3>
                    <ul>
                        <li>
                            Proven experience 3+ in Microsoft C#.net , Microsoft Technologies.
                        </li>
                        <li>
                            Experience with MS SQL server, Query Analyzer.
                        </li>
                        <li>
                            Proven experience 3+ with Angular is a plus.
                        </li>
                        <li>
                            Passion for the quality of the product and a drive and desire to contribute to its technical direction.
                        </li>
                        <li>
                            Good Knowledge with Azure DevOps (ADO).
                        </li>
                        <li>
                            Experience working in an Agile environment.
                        </li>
                        <li>
                            Good communication skills.
                        </li>
                        <li>
                            Good Troubleshooting skills.
                        </li>
                        <li>
                            Should be able to react in emergency situations.
                        </li>
                        <li>
                            Knowledge of microservice architecture is preferred.
                        </li>
                    </ul>
                    <p>
                        <b>Role:</b> Software Development - Other
                    </p>
                    <p>
                        <b>Industry Type: </b>
                        Software Product
                    </p>
                    <p>
                        <b>Department</b>
                        Engineering - Software & QA
                    </p>
                    <p>
                        <b>Education</b>
                    </p>
                    <p> Any Graduate</p>
                    <p>
                        <b>About company
                        </b>
                    </p>
                    <p>Yosa india
                    </p>
                    <p>
                        <b>Beware of imposters!
                        </b>
                    </p>
                    <p>
                    Naukri.com does not promise a job or an interview in exchange of money. Fraudsters may ask you to pay in the pretext of registration fee, Refundable Fee…Read more

                    </p>
                    <div className='button'>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
