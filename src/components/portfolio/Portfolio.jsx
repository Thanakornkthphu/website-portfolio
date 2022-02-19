import React, {useState, useEffect} from 'react'
import './Portfolio.scss';
import { listMenus, userInterface, webApp } from './Portfolio-data.js';
// import 'aos/dist/aos.css';

function Portfolio() {

    const [selected, setSelected] = useState("UI");
    const [dataGridSelected, setDataGridSelected] = useState([]);

    useEffect(() => {
        
        switch (selected) {
            case "UI":
                setDataGridSelected(userInterface)
                break;
            case "Web":
                setDataGridSelected(webApp)
                break;
            default:
                setDataGridSelected(userInterface)
        }
    }, [selected]);

    useEffect (() => {
        
    })

    return (
        <div className="Portfolio-app">
                
            <div className="shape" data-aos="fade-up" data-aos-duration="1500">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
                <div className="shape-4"></div>
            </div>

            <div className="Portfolio"  >
                <h1 data-aos="zoom-in-up"  data-aos-duration="1200" >Portfolio</h1>
                <span className="span__header" data-aos="zoom-in-up"  data-aos-duration="1200" >
                    My projects UX/Ui & Web application
                </span>

                <div className="menu-list" data-aos="fade-up" data-aos-duration="1500">
                    <ul> 
                        {listMenus.map(list => {
                            return (
                                <li 
                                    className={selected === list.id ? "Portfolio-listActive active" : "Portfolio-listInactive"} 
                                    key={list.id} 
                                    onClick={() => setSelected(list.id)}
                                >
                                    { list.title }
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
                <div className="container" data-aos="fade-up" data-aos-duration="1500">
                    {dataGridSelected.map(item => {
                        return (
                            <div className="item" key={ item.id } >
                                <a href={item.link} rel="noreferrer" target="_blank" > 
                                    <img src={ item.img } alt="#"/>
                                </a>
                                <h3>{ item.title }</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
