import React from 'react'
import './Hero.scss';
import { Link } from 'react-scroll';

function Hero() {
    return (
        <>
            <div className="img-header">
                <div className="container">
                    <div className="text" data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                        <h2> HELLO </h2>
                        <p className="head"> I'm Thanakorn </p>
                        <h2 className="details"> Welcome to my portfolio </h2>
                    </div>

                    <Link to="Portfolio" smooth={true} duration={900} offset={-85} >
                        <button className="btn-header" data-aos="fade-up" data-aos-easing="ease-in-out-cubic" data-aos-duration="1200" data-aos-delay="300"> Portfolio </button>
                    </Link>

                    <div className="icon-arrow" data-aos="fade-up" data-aos-easing="ease-in-out-cubic" data-aos-duration="1500" data-aos-offset="0"  data-aos-delay="800">
                        <p> Scroll down </p>
                        <Link to="About" smooth={true} duration={900} offset={-60} >
                            <i className="fas fa-chevron-down"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
