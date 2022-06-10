import { Container, Navbar, Offcanvas, Nav, Form, Button, NavDropdown, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom";
const NavigationBar = () => {
    return (
        <Navbar key="false" bg="primary" expand="false" className="mb-3" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        alt=""
                        src="https://icon-library.com/images/playstation-logo-icon/playstation-logo-icon-9.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Gamepedia</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-false`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                    placement="end" >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 text-white">
                            <Nav.Link as={Link} to="/"><i className="fa fa-home"></i>&nbsp;Home</Nav.Link>
                            <Nav.Link as={Link} to="/shop"><i className="fa fa-shopping-cart"></i>&nbsp;Shop</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavigationBar