import React from 'react'
import './invisionStory.scss';
import Img1 from '../../../assets/imges/InVision.webp';
import Img2 from "../../../assets/imges/Firefly Market Intelligence and Consultation 65048.jpg"
import Img3 from "../../../assets/imges/tech.jpg"
import Img4 from "../../../assets/imges/contract.jfif"
export default function InvisionStory() {
  return (
    <div className='invision-story-alignment'>
      <div className='container'>
        <h1 className='title'>Our Services</h1>
        <div className='grid'>
          <div className='grid-items'>
            <h2>Supply of API, Excipients and  Herbal Extract</h2>
            <p>Procuring and supplying high-quality active pharmaceutical ingredients from reputable manufacturers to meet client needs.</p>
          </div>
          <div className='grid-items'>
            <div className='img'>
              <img src={Img1} alt='InVisionImage' />
            </div>
          </div>
        </div>
        <div className='grid'>
          <div className='grid-items'>
            <div className='img'>
              <img src={Img2} alt='InVisionImage' />
            </div>
          </div>
          <div className='grid-items'>
            <h2>Market Intelligence and Consultation</h2>
            <p>Providing insights and advice on market trends, regulatory changes, and industry developments to help clients make informed decisions.</p>
          </div>
        </div>
        <div className='grid'>
          <div className='grid-items'>
            <h2>Technical Support</h2>
            <p>Offering expert guidance on API usage, formulation challenges, and technical issues to ensure successful integration into clients’ products.</p>
          </div>
          <div className='grid-items'>
            <div className='img'>
              <img src={Img3} alt='InVisionImage' />
            </div>
          </div>
        </div>
        <div className='grid'>
          <div className='grid-items'>
            <div className='img'>
              <img src={Img4} alt='InVisionImage' />
            </div>
          </div>
          <div className='grid-items'>
            <h2>Contract Manufacturing Support</h2>
            <p>Assisting in finding and coordinating with contract manufacturers for API production and scale-up.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
