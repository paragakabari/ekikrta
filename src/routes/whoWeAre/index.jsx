import React, { useEffect } from 'react'
import WhoWeAreBanner from './whoWeAreBanner'
import InvisionStory from './invisionStory'
import Whowearesection from './whowearesection'
import Findingsection from '../home/findingsection'

export default function WhoWeAre() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  });
  return (
    <div>
      <WhoWeAreBanner/>
      <InvisionStory/>
      <Whowearesection/>
      <Findingsection/>
    </div>
  )
}
