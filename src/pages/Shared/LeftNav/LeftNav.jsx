import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import sec from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { FaCalendar, FaCalendarAlt, FaRegCalendar } from "react-icons/fa";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-dragon-news-server-apurbahasanj.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h3 className="fw-bold mb-4">All Category</h3>
      <div>
        <h3
          style={{ backgroundColor: "#e8e6e6" }}
          className="fw-bold py-2 px-4 text-center rounded mb-4"
        >
          National News
        </h3>
        {categories.map((category) => (
          <div key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-secondary fw-semibold ps-5 fs-6 text-decoration-none"
            >
              <h5 className="ps-5">{category.name}</h5>
            </Link>
          </div>
        ))}
      </div>
      <Row xs={1} className="g-4 mt-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Footer className="fs-5 d-flex align-items-center mt-4">
                <FaRegCalendar className="me-2" />
                Jan 4, 2022
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={sec} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Footer className="fs-5 d-flex align-items-center mt-4">
                <FaRegCalendar className="me-2" />
                Jan 4, 2022
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Footer className="fs-5 d-flex align-items-center mt-4">
                <FaRegCalendar className="me-2" />
                Jan 4, 2022
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LeftNav;
