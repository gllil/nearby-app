import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const Navigation = () => {
  const [active, setActive] = useState("/");
  console.log(active);
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>Nearby Realty</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              Nearby Realty
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              activeKey={active}
              className="justify-content-end flex-grow-1 pe-3"
              onSelect={(selected) => setActive(selected)}
            >
              <Nav.Item>
                <Nav.Link href="/">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/signup">SignUp</Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
