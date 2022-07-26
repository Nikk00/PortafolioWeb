import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import folioImg from '../assets/images/portafolio.png'
import lookwhatImg from '../assets/images/lookwhattoplay.png'
import '../assets/css/Projects.css';


function Projects() {
   
            return(
                <>
                <Header></Header>
                <hr className="hrr"></hr>
                <br></br>
                <div className="clearfix"></div>

                <body className="bodi">
                <Container>
                        <div>
                            <h1 className="aboutH">Proyectos</h1>
                        </div>
                <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card className="bg-dark text-white">
                                <Card.Img  className="projectCardImg" src={folioImg} alt="Card image" />
                                <Card.ImgOverlay className="projectCardImgOverlay">
                                    <Card.Title className="showContent">Portafolio Web</Card.Title>
                                    <Card.Text className="showContent">
                                    Reactjs Bootstrap
                                    </Card.Text>
                                    <Button  className="showContent" href='https://github.com/Nikk00/portafolioweb' target="_blank" rel="noopener noreferrer" variant="primary">Github</Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-dark text-white">
                                <Card.Img  className="projectCardImg look" src={lookwhatImg} alt="Card image" />
                                <Card.ImgOverlay className="projectCardImgOverlay">
                                    <Card.Title className="showContent">Look What To Play</Card.Title>
                                    <Card.Text className="showContent">
                                    Nextjs Tailwindcss API
                                    </Card.Text>
                                    <Button className="showContent" href='https://github.com/Nikk00/look-what-to-play' target="_blank" rel="noopener noreferrer" variant="primary">Github</Button>
                                    <Button className="showContent button" href='https://lookwhattoplay.netlify.app/' target="_blank" rel="noopener noreferrer" variant="primary">Ir</Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                </Row>
                </Container>
                <br></br>
                </body>
                
                <div className="clearfix"></div>
                <br></br>
                <hr className="hrr"></hr>
                <Footer></Footer>
                </>
            )
    
}
export default Projects;