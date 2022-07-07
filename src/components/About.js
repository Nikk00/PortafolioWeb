import React, {Component} from "react";
import '../assets/css/About.css';
import { Container, Row, Col} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import gitImage from '../assets/images/github.png'
import linkeImage from '../assets/images/linkedin.png'
import gmailImage from "../assets/images/gmail.png"
import api from "../assets/images/api.png"
import css from "../assets/images/css.png"
import git from "../assets/images/git.png"
import html from "../assets/images/html-5.png"
import js from "../assets/images/js.png"
import react from "../assets/images/react.png"
import mongodb from "../assets/images/mongodb.png"
import nodejs from "../assets/images/nodejs.png"

const skillItems = [
    {
        name: html,
        class: 'iconImg'
    },
    {
        name: css,
        class: 'iconImg'
    },
    {
        name: js,
        class: 'iconImg'
    },
    {
        name: react,
        class: 'iconImg'
    },
    {
        name: nodejs,
        class: 'iconImg'
    },
    {
        name: mongodb,
        class: 'iconImg mongo'
    },
    {
        name: git,
        class: 'iconImg'
    },
    {
        name: api,
        class: 'iconImg'
    }
]
class About extends Component{
    
    render(){
        return(
        <>
            <Header></Header>
        <hr className="hrr"></hr>
        <br></br>
        <div className="clearfix"></div>

        <body className="bodi">
            <main>
            <Container>
                    <Row>
                        <Col xs={18} md={12}>
                        <div>
                            <h1 className="aboutH">About Me</h1>
                            <p className="sobreMi">Hola! Soy Nicolás Luza y me titule como Ingeniero Civil en Informatica en la Universidad de Tarapaca el año 2022, me considero una persona autodidacta que le apasiona la programación y conocer nuevas tecnologías. </p>
                        </div>
                        <div>
                            <h2 className="aboutH">My Skills</h2>
                            <p className="contactMe">Estas son las tecnologías que manejo: </p>
                            <div className="content">
                            {skillItems.map((item, index) => {
                                    return(
                                            <Col sm className="">
                                            <div key={index}>
                                                <input type="image" img alt="" src={item.name} className={item.class}/>
                                            </div>
                                            </Col>
                                    )
                            })}
                            </div>
                        </div>
                        <div>
                            <h2 className="aboutH">Contact Me</h2>
                            <p className="contactMe">Me puedes contactar por los siguientes medios: </p>
                        
                            <div className="content">
                                <div sm className="socialIcon">
                                    <div>
                                        <input type="image" img alt="" src={gitImage} className="contactIcon"/>
                                        <a href="https://github.com/Nikk00" target="_blank" rel="noopener noreferrer" className="textIcon">@NicolásLuza</a>
                                    </div>
                                </div>
                                <div sm className="socialIcon">
                                    <div>
                                        <input type="image" img alt="" src={linkeImage} className="contactIcon"/>
                                        <a href="https://www.linkedin.com/in/nicolasluzapino" target="_blank" rel="noopener noreferrer" className="textIcon">@NicolásLuza</a>
                                    </div>
                                </div>
                                <div sm className="socialIcon">
                                    <div>
                                    <input type="image" img alt="" src={gmailImage} className="contactIcon" />
                                    <span className="textIcon"><a href="mailto:nicolas.luza.pino@gmail.com" target="_blank" rel="noopener noreferrer" >@NicolásLuza</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    </Container> 
            </main>
        </body>
        
        <div className="clearfix"></div>
        <br></br>
        <hr className="hrr"></hr>
        <Footer></Footer>
        </>
        );
    }
}

export default About;