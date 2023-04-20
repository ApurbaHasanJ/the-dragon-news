import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";

import amazingNewsBg from "../../../assets/bg.png";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h3 className="fw-bold mb-4 ">Login With</h3>

      {/* Login with */}
      <div className="d-flex flex-column gap-3">
        <Button className="py-2" variant="outline-primary">
          <FaGoogle /> Login With Google
        </Button>
        <Button className="py-2" variant="outline-secondary">
          <FaGithub /> Login With GitHub
        </Button>
      </div>

      {/* Find Us */}
      <div className="mt-5">
        <h3 className="fw-bold mb-4">Find Us On</h3>
        <ListGroup variant="secondary" className=" fw-semibold">
          <ListGroup.Item className="d-flex  align-items-center p-3 gap-3">
            <div
              className="bg-light d-flex justify-content-center align-items-center rounded-circle"
              style={{ width: "30px", height: "30px" }}
            >
              <img
                className="w-50 h-50"
                src="https://i.postimg.cc/d0Yz1tks/facebook.png"
                alt=""
              />
            </div>
            <span className="text-secondary">Facebook</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex  align-items-center p-3 gap-3">
            <div
              className="bg-light d-flex justify-content-center align-items-center rounded-circle"
              style={{ width: "30px", height: "30px" }}
            >
              <img
                className="w-50 h-50"
                src="https://i.postimg.cc/t4PKpVgv/twitter.png"
                alt=""
              />
            </div>
            <span className="text-secondary">Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex p-3 align-items-center gap-3">
            <div
              className="bg-light d-flex justify-content-center align-items-center rounded-circle"
              style={{ width: "30px", height: "30px" }}
            >
              <img
                className="w-50 h-50"
                src="https://i.postimg.cc/rF7BB9qt/instagram.png"
                alt=""
              />
            </div>
            <span className="text-secondary">Instagram</span>
          </ListGroup.Item>
        </ListGroup>
      </div>

      {/* Q Zone */}
      <QZone />

      {/* Create an Amazing Newspaper */}
      <div className="position-relative">
        <img className="w-100" src={amazingNewsBg} alt="" />
        <div className="position-absolute top-50 start-50 text-center translate-middle">
          <h2 className="text-white mb-4">Create an Amazing Newspaper</h2>
          <p className="text-white mb-3">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button className="p-3 px-4 fw-semibold fs-5" variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

{
  /* <h2 className="text-white">Create an Amazing Newspaper</h2>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger">Learn More</Button> */
}

export default RightNav;
