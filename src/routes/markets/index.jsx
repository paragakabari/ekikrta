import React, { useEffect } from 'react'
import './markets.scss';
import Jobseekersbanner from '../jobseekers/jobseekersbanner';
import Marketsdetails from './marketsdetails';
import Findingsection from '../home/findingsection';
export default function Markets() {
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
      <Marketsdetails/>
      <Findingsection/>
    </div>
  )
}
