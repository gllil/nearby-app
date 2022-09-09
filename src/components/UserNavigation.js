import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

const UserNavigation = () => {
  const [active, setActive] = useState("/home");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const logout = () => {
    signOut(auth).then(() => {
      navigate("/", { replace: true });
    });
  };

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
              //   onSelect={(selected) => setActive(selected)}
            >
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/transactions">Transactions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default UserNavigation;
