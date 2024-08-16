import React, { useEffect } from 'react'
import './home.scss';
import Herobanner from './herobanner';
import SolutionSection from './solutionSection';
import Ensuringourclients from './ensuringourclients';
import Findingsection from './findingsection';
export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  });
  return (
    <div>
      <Herobanner/>
      <SolutionSection/>
      <Ensuringourclients/>
      <Findingsection/>
    </div>
  )
}
