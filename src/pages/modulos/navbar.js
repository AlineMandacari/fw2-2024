import {Container, Nav, Navbar} from 'react-bootstrap';
import styles from "@/styles/Navbar.module.css"
export default function Menu() {
  return (
    <Navbar expand="sm" className={`${styles.navGradiente} bg-dark navbar-dark px-3 mx-5 my-5>`}>
      <Container>
        <Navbar.Brand href="/">6A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}