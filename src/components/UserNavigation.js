import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import nearbylogo from "../images/nearbyrealtylogo.png";

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
        <Navbar.Brand href="/home">
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
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              activeKey={active}
              className="justify-content-end flex-grow-1 pe-3"
              //   onSelect={(selected) => setActive(selected)}
            >
              <Nav.Item>
                <Nav.Link href="/home">
                  <i className="fa-solid fa-house"></i> Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contacts">
                  <i className="fa-solid fa-address-book"></i> Contacts
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/transactions">
                  <i className="fa-solid fa-dollar-sign"></i> Transactions
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title={<i className="fa-solid fa-gear"></i>}>
                <NavDropdown.Item>
                  <Nav.Link onClick={logout}>
                    Logout <i className="fa-solid fa-right-from-bracket"></i>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Item>
                <Nav.Link onClick={logout}>
                  Logout <i className="fa-solid fa-right-from-bracket"></i>
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default UserNavigation;
