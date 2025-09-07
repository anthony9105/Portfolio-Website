import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">Anthony</Navbar.Brand> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-evenly">
            <Nav.Link href="#blog">Work</Nav.Link>
            <Nav.Link href="#about">Qualifications</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}