import React, { useState } from 'react'
import "./missionVision.scss"
import mission from "../../../assets/imges/mission.jpg"
import vision from "../../../assets/imges/vision.jpg"
import Accordion from './Accordian';

function MissionVision() {

    const [activeImage, setActiveImage] = useState(0)
    const imageHandle =(index)=>{
        setActiveImage(index)
    }

    return (
        <div className='ensuringourclients-section-design'>
            <div className='container'>
                <div className='text'>
                    <h2>
                        Our <span>Mission</span> and<span> Vision</span>
                    </h2>
                </div>
                <div className='grid'>
          <div className='grid-items'>
            <h2>Our <span>Mission</span></h2>
            <p> Ekikrta Industries Pvt Ltd envisions a world where access to high-quality,
                        affordable medicines is a reality for all. We aspire to be a leading global
                        provider of APIs, Excipients, and Herbal Extracts, contributing significantly
                        to the healthcare industry's advancement.</p>
          </div>
          <div className='grid-items'>
            <div className='img'>
              <img src={mission} alt='InVisionImage' />
            </div>
          </div>
        </div>
        <div className='grid'>
          <div className='grid-items'>
            <div className='img'>
              <img src={vision} alt='InVisionImage' />
            </div>
          </div>
          <div className='grid-items'>
            <h2>Our <span>Vision</span></h2>
            <p> Ekikrta Industries Pvt Ltd is committed to delivering exceptional value to
                        our customers by providing consistent, reliable, and compliant
                        pharmaceutical raw materials. We strive to build long-lasting partnerships
                        based on trust, transparency, and mutual growth, supporting the development
                        of life-enhancing medications.</p>
          </div>
        </div>
                {/* <div className='grid'>
                    <div className='grid-items'>
                        <Accordion imageHandle={imageHandle}/>
                    </div>
                    <div className='grid-items'>
                        <div className='img'>
                            <img src={activeImage === 0 ? mission : vision} alt='Mission  & Vision' />
                        </div>
                    </div>
                </div> */}
            </div>
        </div >
    )
}

export default MissionVision;