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
                    Hello, my nickname is Kay. I’m a Frontend Developer with 3 years of experience building scalable, 
                    user-focused web applications using React and Javascript and Typescript. 
                    Experienced in translating UI/UX designs into clean, maintainable code, identifying and fixing complex bugs, 
                    and collaborating with cross-functional teams.
                    </p>
                {/* text-details */}    

                {/* btn */}
                    <a href="https://github.com/Thanakornkthphu/resume_frontend/blob/main/Thanakorn_Frontend_resume_2026pdf.pdf" target="_blank" rel="noreferrer">
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
