import { Container, Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
export const NavigationMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navigationBar">
      <Container>
        <Navbar.Brand href="#home">
          Bi3<span className="text-orange">Li</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products/men">Men</Nav.Link>
          <Nav.Link href="/products/women">Women</Nav.Link>
          <Nav.Link href="/products/electronics">Electronics</Nav.Link>
          <Nav.Link href="/products/jewelery">Jewelery</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
