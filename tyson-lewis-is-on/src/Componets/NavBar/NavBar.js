
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Style/Assets/Images/Logo/logo.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const NavBar = () => {

  const [changeColor,setChangeColor] = useState(false);

  const ChangeNavBG = () => {
    setChangeColor(current => !current);
  }

    return(
      <Container className='navbar-container p-0 m-0'>
        <Navbar style={{backgroundColor: changeColor ? 'black' : ''}} className="navbar-color p-0" expand="lg">
        <Container>
          <Navbar.Toggle onClick={ChangeNavBG} aria-controls="basic-navbar-nav" className='p-0 m-0'/>
          <Navbar.Collapse id="basic-navbar-nav" className='p-0 m-0'>
            <Nav className="me-auto nav-links d-flex justify-content-center  align-items-center">
              <NavLink className="links-nav" to="#home">Home</NavLink>
              <NavLink className="links-nav" to="#link">Team Tyson</NavLink>
              <Navbar.Brand href="#home" className='brand'><img style={{height:"100px", width:"100px"}} src={logo} alt='navbar logo'></img></Navbar.Brand>
              <NavLink className="links-nav"  to="#">Team Lewis</NavLink>
              <NavLink className="links-nav" to="#">PPV</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    )
}
export default NavBar;