import React from 'react'
import './About.scss';

function About() {
    return (
        <div className="About" >

            <div className="shape" data-aos="fade-up" data-aos-duration="1500">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
                <div className="shape-4"></div>
                <div className="shape-5"></div>
            </div>

            <div className="container">
            <h1 className="h1__intro" data-aos="fade-right"  data-aos-duration="1200" >Introduction</h1>
            
                {/* text-details */}
                <div className="about__text" data-aos="fade-right"  data-aos-duration="1200">
                    <h1 className="about__header" >Hi, I'm Thanakorn</h1>
                    <p className="about__detail" >
                        I'm 24 years old I'm currently working as an administrator at Deves Insurance
                        and I'm interested Front-end developer because before I studied UX/UI
                        and during that time I also studied Front-end therefore, but I feel like Front-end
                        more than and it feel like have developed products by myself.
                    </p>
                {/* text-details */}    

                {/* btn */}
                    <a href="https://drive.google.com/file/d/1YAyY5MPiJZY8nLZkGM1V9keL_WFfLv2j/view?usp=sharing" target="_blank" rel="noreferrer">
                        <button className="btn__resume" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out-back" data-aos-offset="0">
                            <span className="btn__resume__span" > 
                                Resume
                            </span>

                            <div className="arrow__icon">
                                <i className="fas fa-chevron-right" id='left'/>
                                <i className="fas fa-chevron-right" id='right'/>
                            </div>
                        </button>
                    </a>
                {/* btn */}    

                </div>
            </div>
        </div>
    )
}

export default About;
