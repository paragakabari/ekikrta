import React, { useEffect } from 'react'
import Jobseekersbanner from './jobseekersbanner'
import Opportunities from './opportunities'
import AvailablePositions from './AvailablePositions'

export default function Jobseekers() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  });
  return (
    <div>
      <Jobseekersbanner/>
      <Opportunities/>
      <AvailablePositions/>
    </div>
  )
}
