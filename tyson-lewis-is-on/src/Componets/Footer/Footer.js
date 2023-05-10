import {Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../../Style/Assets/Images/Logo/logo.png';
const Footer = () => {
    return(

        <Container className="footer-container p-0">
            <footer className="footer p-0">
                <Container className="footer-logo">
                    <img style={{height: "100px", width:"100px"}} src={logo} alt="footer-logo"></img>
                </Container>
                <Container className="footer-content"> 
                <Row>
                    <Col className="footer-cols text-white " sm={3}>
                        <h5 className="imp"><span className="orange">Lorem Ipsum</span></h5>
                    <p className="m-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </p>
                    </Col>
                    <Col className="footer-cols-center" sm={3}>
                        <h5 className="imp"><span className="orange">Quick Links</span></h5>
                        <NavLink className="nav-link-footer" to="/">Home</NavLink>
                        <NavLink className="nav-link-footer" to="/team-tyson">Team Tyson</NavLink>
                        <NavLink className="nav-link-footer" to="/team-lewis">Team Lewis</NavLink>
                        <NavLink className="nav-link-footer" to="/PPV">Pay-Per-View</NavLink>
                    </Col>
                    <Col className="footer-cols-center" sm={3}>
                        <h5 className="imp"><span className="orange">Sponsors</span></h5>
                       
                            <a className="nav-link-footer" href="#address">Sponsor 1</a>
                            <a className="nav-link-footer" href="#address">Sponsor 2</a>
                            <a className="nav-link-footer" href="#address">Sponsor 3</a>
                            <a className="nav-link-footer" href="#address">Sponsor 4</a>
                            
                       
                    </Col>
                    <Col className="footer-cols" sm={3}>
                        <h5 className="imp"><span className="orange">Lorem Ipsum</span></h5>
                    <p className="text-white m-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    </Col>
                </Row>
                </Container>
                <h6 className="text-white m-0 text-center p-3">© 2023 Designed by <a className="nav-link-footer" href="https://atanas-zlatev.netlify.app/"><span className="orange"> Atanas Zlatev. </span></a> All Rights Reserved.</h6>
                
            </footer>
        </Container>
    )
}

export default Footer