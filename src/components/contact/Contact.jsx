import React from 'react'

import './Contact.scss'
import FormEmail from './FormEmail.jsx'

function Contact() {

    return (
        <div className="Contact" id="Contact" >

            <div className="shape" data-aos="fade-up" data-aos-duration="1500">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
                <div className="shape-4"></div>
                <div className="shape-5"></div>
            </div>  

            <h1 data-aos="zoom-in-up"  data-aos-duration="1200" > Contact </h1>
            <span className="span__header" data-aos="zoom-in-up"  data-aos-duration="1200" >
                You can contact me at any time, I'll reply to your email as soon as possible
            </span>

            <div className="container" data-aos="fade-up" data-aos-duration="1500">
                <div className="top">
                    <div className="dot" id="red"></div>
                    <div className="dot" id="yellow"></div>
                    <div className="dot" id="green"></div>
                </div>

                <div className="left-right">
                    <div className="left" data-aos="zoom-in-right" data-aos-easing="ease-in-out-back" data-aos-duration="1200">
                        <h1> Contact Me</h1>

                        <div className="text">
                            <i className="fas fa-envelope"></i><p>Thanakorn.kthphu@gmail.com</p>
                            <i className="fab fa-line"></i><p><a href="http://line.me/ti/p/~kay.tthanakorn" target="_blank" rel="noreferrer">kay.tthanakorn</a></p>
                            <i className="fas fa-phone-square-alt"></i><p>+66 865191858</p>
                        </div>
                    </div>

                    <div className="right">
                        <FormEmail />
                    </div>
                </div>

            </div> 
        </div>
    )
}
export default Contact;
