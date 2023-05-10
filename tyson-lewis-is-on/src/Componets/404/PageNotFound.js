import {Container } from "react-bootstrap";
import {NavLink} from 'react-router-dom';

const PageNotFound = () => {

    return (

        <Container className="d-flex justify-content-center align-items-center not-found-404 flex-column">

            <h1 className="m-0 font-10 imp">404</h1>
            <p className="m-0 orange">Page Not Found</p>
                <NavLink to="/" className='custom-nav-link m-3'>Home Page</NavLink>

        </Container>
    )
}

export default PageNotFound;