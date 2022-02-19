import React from 'react'
import './Skill.scss'
import {skills} from './Skill-data'

function Skill() {
    return (
        <>
            <div className="skill"  >

                <div className="shape" data-aos="fade-up" data-aos-duration="1500">
                    <div className="shape-1"></div>
                    <div className="shape-2"></div>
                    <div className="shape-3"></div>
                    <div className="shape-4"></div>
                    <div className="shape-5"></div>
                </div>

                <h1 data-aos="zoom-in-up"  data-aos-duration="1200" > Skills </h1>
                <span className="span__header" data-aos="zoom-in-up"  data-aos-duration="1200" >My technial & Tools</span>

                <div className="container" data-aos="zoom-in-up" data-aos-duration="1500">
                    {skills.map(skill => {
                        return (
                            <div className="item">
                                <div className="img">
                                    <img src={skill.img} alt="#" />
                                </div>
                                
                                <div className="title">
                                    <span>{skill.title}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Skill;
