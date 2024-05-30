import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/Logo_White.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// const customClass = "myCustomNavLink";
// bsPrefix={customClass}

function NavbarTED() {
  return (
    <Container>
      <div>
        <Navbar expand="lg md" bg="myColor" variant="light" className="navbar">
          <Navbar.Brand>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "150px", marginLeft: "15px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto align-items-center">
              <Nav.Link></Nav.Link>
            </Nav>
            <Nav className="nav justify-content-center">
              <NavLink
                activeClassName="menu_active"
                to="/"
                exact
                className="myCustomNavLink d-flex flex-column mr-auto"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="menu_active"
                to="/about-us"
                className="myCustomNavLink d-flex flex-column mr-auto"
              >
                About Us
              </NavLink>
              <NavLink
                activeClassName="menu_active"
                to="/partners"
                className="myCustomNavLink d-flex flex-column mr-auto"
              >
                Partners
              </NavLink>
              <NavLink
                activeClassName="menu_active"
                to="/past-editions"
                className="myCustomNavLink d-flex flex-column mr-auto"
              >
                Past Editions
              </NavLink>
              <NavLink
                activeClassName="menu_active"
                to="/forums"
                className="myCustomNavLink d-flex flex-column mr-auto"
              >
                Blogs
              </NavLink>
              <NavLink
                activeClassName="menu_active"
                to="/contact-us"
                className="myCustomNavLink d-flex flex-column mr-auto mr-auto"
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
}

export default NavbarTED;
