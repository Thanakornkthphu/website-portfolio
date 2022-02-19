import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.scss';
import Logo from './../../assets/logo192.png';

function Navbar() {

    const [openHamburger, setOpenHamburger] = useState(false);
    const [sticky, setSticky] = useState(false); 

    const onClickHamburger = () => {
        setOpenHamburger(!openHamburger);
    }
    // function memu toggle

    const stickyChange = () => {
        if (window.scrollY >= 1) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    window.addEventListener('scroll', stickyChange);
    // function sticky

    const scrollToTop = () => {
        scroll.scrollToTop()
        setOpenHamburger(false);
    }
    // function scroll to top
    
    return ( 
        <div className={ sticky ? "app-header active" : "app-header" }>
            <div className="container" >
                
                <div className="logo" >
                    <a href="/">
                        <img src= {Logo}  alt="" />
                        <div className="text-logo"> Portfolio </div>
                    </a>
                </div>

                <div className={openHamburger ? "menu-list open" : "menu-list"}>
                    <div className="navbar-menu">
                        <li>
                            <Link activeclassName='active' to='Hero' onClick={scrollToTop} spy={true} > 
                                Home 
                            </Link>
                        </li>
                        <li>
                            <Link activeclassName='active' onClick={() => setOpenHamburger(false)} 
                            to="About" smooth={true} duration={900} offset={-60} spy={true} > 
                                About 
                            </Link>
                        </li>
                        <li>
                            <Link activeclassName='active' onClick={() => setOpenHamburger(false)} 
                            to="skill" smooth={true} duration={900} offset={-50} spy={true} > 
                                Skill 
                            </Link>
                        </li>
                        <li>
                            <Link activeclassName='active' onClick={() => setOpenHamburger(false)} 
                            to="Portfolio" smooth={true} duration={900} offset={-110} spy={true} >  
                                Portfolio 
                            </Link>
                        </li>
                        <li>
                            <Link activeclassName='active' onClick={() => setOpenHamburger(false)} 
                            to="Contact" smooth={true} duration={900} offset={-40} spy={true} > 
                                Contact 
                            </Link>
                        </li>
                    </div>
                    {/* left-menulist */}

                    <div className="social-menu">
                        <li>
                            <a href="https://www.behance.net/thanakophuntha" target='_blank' rel="noreferrer">
                                <i className="fab fa-behance"></i>
                            </a>
                        </li>
                        <li>
                            <Link to="Contact" smooth={true} duration={900} offset={-60}>
                                <i className="fas fa-envelope"></i>
                            </Link>
                        </li>
                        <li>
                            <a href="https://github.com/Thanakornkthphu" target='_blank' rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </div>
                    {/* right-menulsit */}
                </div>

                <div className={openHamburger ? "menu-icon active" : "menu-icon"}>
                    <div className="hamburger" onClick={onClickHamburger}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
                {/* menu toggle */}
                
            </div>
        </div>
    );
}

export default Navbar;
