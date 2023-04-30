import React, { useState } from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser, userProfile, user } = useContext(AuthContext);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const navigate = useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    // create user
    createUser(email, password)
      .then((result) => {
        userProfile(name, photo)
        const createdUser = result.user;
        console.log(createdUser);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const handleAcceptTerms = (e) => {
    setAcceptTerms(e.target.checked);
    console.log(e.target.checked);
  };

  return (
    <Container className="bg-white w-50 mx-auto p-5">
      <h3 className="text-center fw-bold border-bottom pb-5 mb-5">
        Register your account
      </h3>
      <Form onSubmit={handleRegistration}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold fs-5 mb-2">Your name</Form.Label>
          <Form.Control
            className="bg-light p-3"
            required
            name="name"
            type="name"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold fs-5 mb-2">Photo URL</Form.Label>
          <Form.Control
            className="bg-light p-3"
            required
            name="photo"
            type="text"
            placeholder="Enter your png photo URL"
          />
        </Form.Group>
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
        <Form.Group
          className="mb-3 text-secondary d-flex gap-1"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            onClick={handleAcceptTerms}
            name="accept"
            type="checkbox"
            label={
              <>
                Accept{" "}
                <Link
                  className="fw-semibold text-decoration-none hover-underline "
                  to="/terms"
                >
                  Term & Conditions
                </Link>{" "}
              </>
            }
          />
        </Form.Group>
        <Button
          disabled={!acceptTerms}
          className="w-100 p-2 fw-semibold fs-5 mt-3"
          variant="dark"
          type="submit"
        >
          Register
        </Button>
        <p className="text-center text-secondary fw-medium mt-2">
          Already Have An Account ?{" "}
          <Link to="/login" className="text-danger">
            Login
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
