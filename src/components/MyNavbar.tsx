import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


type MyNavbarProps = {
  setLockedHeight: (value: boolean) => void;
}; 


export default function MyNavbar({ setLockedHeight }: MyNavbarProps) {
   const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  };

  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand 
          href="#home"
          onClick={() => {
            setLockedHeight(false);
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }}>Anthony
        </Navbar.Brand> 

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-evenly">
            <Nav.Link 
              href="#portfolio" 
              onClick={() => {
                setLockedHeight(true);
                scrollToSection('portfolio');
              }}>Portfolio
            </Nav.Link>

            <Nav.Link 
              href="#qualifications"
              onClick={() => {
                setLockedHeight(true);
                scrollToSection('qualifications');
              }}>Qualifications
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}