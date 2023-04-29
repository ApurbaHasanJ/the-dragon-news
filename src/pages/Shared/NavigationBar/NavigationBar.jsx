import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUser } from "react-icons/fa";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Navbar className="mb-5 pt-4" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            style={{ color: "" }}
            className="mx-auto fs-5 text-decoration-none d-flex gap-3 text-secondary"
          >
            <Link
              className="text-secondary text-decoration-none"
              to="/category/0"
            >
              Home
            </Link>
            <Link className="text-secondary text-decoration-none" to="/about">
              About
            </Link>
            <Link className="text-secondary text-decoration-none" to="/career">
              Career
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center gap-3">
            {user && (
              <Link>
                <FaUser className="fs-3 text-secondary" />
              </Link>
            )}
            {user ? (
              <Link to="/">
                <Button
                  onClick={handleLogOut}
                  className="p-2 px-4"
                  variant="dark"
                >
                  Logout
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button className="p-2 px-4" variant="dark">
                  Login
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
