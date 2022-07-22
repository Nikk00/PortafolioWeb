import React from "react";
import {Card, Container/* , Row, Col */} from 'react-bootstrap';
import codeImg from '../assets/images/codigos.png'
import meImg from '../assets/images/fotoperfil.jpeg'
import '../assets/css/Home.css';

function Home(){
    
    
        var b = "{";
        var d = "}";
        return(
            <body className="bodi content">
                <main className="cardIMG ">
                    <Container>
                        <Card className="bg-dark">
                        <Card.Img src={codeImg} alt="Card image"className="codeImg"/>
                            <Card.ImgOverlay className="homeCardImgOver">
                                <input type="image" img src={meImg} alt="image"className="meImg"/>
                                <Card className="descrip">
                                    <Card.Text>
                                    {b}Hola, mi nombre es Nicolás Luza, soy Desarrollador Frontend y me apasiona la programación.{d}
                                    </Card.Text> 
                                </Card>
                            </Card.ImgOverlay>
                        </Card>
                    </Container>
                </main>
            </body>
        );
    
}

export default Home;