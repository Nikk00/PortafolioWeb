import React from "react";
import '../assets/css/About.css';
import { Container, Row, Col} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
function About(){

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
                            <h1 className="aboutH">Sobre Mi</h1>
                            <p className="sobreMi">Hola! Soy Nicolás Luza, me titulé como Ingeniero Civil en Informática en la Universidad de Tarapacá el año 2022.  Me considero una persona autodidacta que le apasiona la programación y conocer nuevas tecnologías. </p>
                        </div>
                        <div>
                            <h2 className="aboutH">Mis Habilidades</h2>
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
                            <h2 className="aboutH">Contáctame</h2>
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

export default About;