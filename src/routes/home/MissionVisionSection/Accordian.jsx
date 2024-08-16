import React, { useState } from 'react';
import "./missionVision.scss"

const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        props.imageHandle(index);
    };

    return (
        <div className="accordion">
            <div className="accordion-item">
                <div
                    className={`accordion-title ${activeIndex === 0 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(0)}
                >
                    <h2>Mission</h2>
                    {/* Toggle arrow based on active state */}
                    <i className={`fa-solid ${activeIndex === 0 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                </div>
                <div
                    className="accordion-content"
                    style={{ maxHeight: activeIndex === 0 ? '200px' : '0px' }}
                >
                    <p>
                        Ekikrta Industries Pvt Ltd is committed to delivering exceptional value to
                        our customers by providing consistent, reliable, and compliant
                        pharmaceutical raw materials. We strive to build long-lasting partnerships
                        based on trust, transparency, and mutual growth, supporting the development
                        of life-enhancing medications.
                    </p>
                </div>
                <hr />
            </div>

            <div className="accordion-item">
                <div
                    className={`accordion-title ${activeIndex === 1 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(1)}
                >
                    <h2>Vision</h2>
                    {/* Toggle arrow based on active state */}
                    <i className={`fa-solid ${activeIndex === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                </div>
                <div
                    className="accordion-content"
                    style={{ maxHeight: activeIndex === 1 ? '200px' : '0px' }}
                >
                    <p>
                        Ekikrta Industries Pvt Ltd envisions a world where access to high-quality,
                        affordable medicines is a reality for all. We aspire to be a leading global
                        provider of APIs, Excipients, and Herbal Extracts, contributing significantly
                        to the healthcare industry's advancement.
                    </p>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Accordion;
