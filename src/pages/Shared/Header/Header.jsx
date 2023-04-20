import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="my-5">
      <div className="text-center">
        <img src={logo} alt="Logo" />
        <p className="text-secondary fs-5">Journalism Without Fear or Favor</p>
        <p className="fs-5 fw-semibold">
          {moment().format("dddd, ")}
          <span className="text-secondary">
            {moment().format("MMMM D, YYYY")}
          </span>
        </p>
      </div>
      <div className="bg-light p-3 d-flex mt-4">
        <Button className="p-2 px-4 fs-3" variant="danger">
          Latest
        </Button>
        <Marquee
          className="text-danger "
          gradientColor={[250, 245, 245]}
          speed={50}
          pauseOnHover={true}
        >
          <h4>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain...
          </h4>
        </Marquee>
      </div>
      <Navbar className="mt-3" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fs-5">
              <Nav.Link to="#home">Home</Nav.Link>
              <Nav.Link to="#about">About</Nav.Link>
              <Nav.Link to="#Career">Career</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link to="#profile">Profile</Nav.Link>
              <Nav.Link to="/login">
                <Button className="p-2 px-4" variant="dark">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
