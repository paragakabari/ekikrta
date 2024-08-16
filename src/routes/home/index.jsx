import React, { useEffect } from 'react'
import './home.scss';
import Herobanner from './herobanner';
import Ensuringourclients from './ensuringourclients';
import Findingsection from './findingsection';
import MissionVision from './MissionVisionSection';
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
      <MissionVision />
      <Findingsection/>
    </div>
  )
}
