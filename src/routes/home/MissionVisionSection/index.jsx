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
                        Our Mission and<span> Vision</span>
                    </h2>
                </div>
                <div className='grid'>
                    <div className='grid-items'>
                        <Accordion imageHandle={imageHandle}/>
                    </div>
                    <div className='grid-items'>
                        <div className='img'>
                            <img src={activeImage === 0 ? mission : vision} alt='Mission  & Vision' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MissionVision;