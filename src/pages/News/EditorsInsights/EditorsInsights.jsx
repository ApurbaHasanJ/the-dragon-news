import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import sec from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { FaCalendar, FaCalendarAlt, FaRegCalendar } from "react-icons/fa";

const EditorsInsights = () => {
  return (
    <>
      <h3 className="fw-semibold mt-5">Editor Insight</h3>
      <Row xs={1} md={2} lg={3} className="g-4">
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
    </>
  );
};

export default EditorsInsights;
