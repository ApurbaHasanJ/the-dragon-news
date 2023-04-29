import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page", location);
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container className="bg-white w-50 mx-auto p-5">
      <h3 className="text-center fw-bold border-bottom pb-5 mb-5">
        Login your account
      </h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold fs-5 mb-2">Email address</Form.Label>
          <Form.Control
            className="bg-light p-3"
            required
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold fs-5 mb-2">Password</Form.Label>
          <Form.Control
            className="bg-light p-3"
            required
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Show password" />
        </Form.Group>
        <Button
          className="w-100 p-2 fw-semibold fs-5 mt-3"
          variant="dark"
          type="submit"
        >
          Login
        </Button>
        <p className="text-center text-secondary fw-medium mt-2">
          Don't Have An Account ?{" "}
          <Link to="/register" className="text-danger">
            Register
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
