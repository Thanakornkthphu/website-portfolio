import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="text">
                        <div className="footer-responsive">
                            <h1> Contact Me </h1>
                                <div className="footer-responsive-text">
                                    <i className="fas fa-envelope"></i>
                                    <li>Thanakorn.kthphu@gmail.com</li>
                                </div>
                                <div className="footer-responsive-text">
                                    <i className="fab fa-line"></i>
                                    <li>
                                        <a href="http://line.me/ti/p/~kay.tthanakorn" target="_blank" rel="noreferrer">
                                            kay.tthanakorn
                                        </a>
                                    </li>
                                </div>
                                <div className="footer-responsive-text">
                                    <i className="fas fa-phone-square-alt"></i>
                                    <li>+66 865191858</li>
                                </div>
                        </div>

                        <span>
                            Developed & Design By 
                            <a className='link' target='_blank' rel="noreferrer" href="https://github.com/Thanakornkthphu">
                                Thanakorn. 
                            </a>
                            Using React JS.
                        </span>
                    </div>
                </div>        
            </div>   
        </>
    )
}

export default Footer
