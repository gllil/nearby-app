import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import nearbylogo from "../images/nearbyrealtylogo.png";

const Navigation = () => {
  const [active, setActive] = useState("/");
  const location = useLocation();
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <img src={nearbylogo} width="150px" alt="Nearby Realty Logo" />
        </Navbar.Brand>
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
              //   onSelect={(selected) => setActive(selected)}
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
