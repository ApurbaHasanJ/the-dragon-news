import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUser, FaUserCircle } from "react-icons/fa";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
  const { user } = useContext(AuthContext);
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
      
    </Container>
  );
};

export default Header;
