import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../EditorsInsights/EditorsInsights";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;
  return (
    <>
      <h5 className="fw-semibold mb-4">Dragon News</h5>
      <Card className="border p-4 pb-3">
        <Card.Img variant="top" src={image_url} />
        <Card.Body className="mt-2">
          <Card.Title className="fw-bold fs-4">{title}</Card.Title>
          <Card.Text className="mt-1 text-secondary">{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button className="mt-3 p-2 px-4 fw-semibold" variant="danger">
              <FaArrowLeft className="me-2 " />
              All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsights/>
    </>
  );
};

export default News;
