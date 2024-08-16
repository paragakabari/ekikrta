import React, { useEffect } from 'react'
import Employersbanner from './employersbanner'
import StaffingDetails from './staffingDetails'
import TemporaryPlacement from './TemporaryPlacement'
import PermanentPlacement from './PermanentPlacement'
import Payrolling from './payrolling'
import Findingsection from '../home/findingsection'

export default function Employers() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  });
  return (
    <div>
      <Employersbanner/>
      <StaffingDetails/>
      <TemporaryPlacement/>
      <PermanentPlacement/>
      <Payrolling/>
      <Findingsection/>
    </div>
  )
}
