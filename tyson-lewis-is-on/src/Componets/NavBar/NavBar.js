
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Style/Assets/Images/Logo/logo.png';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return(
      <Container className='navbar-container p-0 m-0'>
        <Navbar className='navbar-color p-0' expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='p-0 m-0'/>
          <Navbar.Collapse id="basic-navbar-nav" className='p-0 m-0'>
            <Nav className="me-auto nav-links d-flex justify-content-center  align-items-center">
              <NavLink className="links-nav" to="#home">Home</NavLink>
              <NavLink className="links-nav" to="#link">Pay-Per-View</NavLink>
              <Navbar.Brand href="#home" className='brand'><img style={{height:"100px", width:"100px"}} src={logo} alt='navbar logo'></img></Navbar.Brand>
              <NavLink className="links-nav"  to="#">Location</NavLink>
              <NavLink className="links-nav" to="#">Contacts</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    )
}
export default NavBar;