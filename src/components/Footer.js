import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap';

class Footer extends Component{
    render(){
        return(
            <footer id="footer">
                <div class="center">
                    <Container>
                        <Row>
                            <Col sm>
                            <p>
                                &copy; Developed By <span className="text-white">Nicolás Luza </span>
                            </p>
                            </Col>
                            <Col sm>
                            <p>
                                <span className="text-white">With ReactJs </span>
                            </p>
                            </Col>
                        </Row>
                    </Container>
                
                </div>
            </footer>
        );
    }
}

export default Footer;
