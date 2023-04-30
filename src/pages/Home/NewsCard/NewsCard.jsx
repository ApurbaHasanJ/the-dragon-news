import React from "react";
import { Card, Image } from "react-bootstrap";
import { BsShare, BsBookmark, BsEyeFill } from "react-icons/bs";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import moment from "moment/moment";
// import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { _id, number, image_url, title, details, author, total_view, rating } =
    news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image
          style={{ width: "40px", height: "40px" }}
          src={author?.img}
          roundedCircle
        />
        <div className="ms-3">
          <h5 className="fw-semibold mb-0">{author.name}</h5>
          <p className="text-secondary mb-0">
            {moment(author.published_date).format("yyyy-MM-DD")}
          </p>
        </div>
        <div className="ms-auto">
          <BsBookmark className="fs-5" />
          <BsShare className="fs-5 ms-2" />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="fs-4 fw-bold mb-4">{title}</Card.Title>
        <Card.Img className="mb-4" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <br />{" "}
              <Link
                to={`/news/${_id}`}
                className="text-danger fs-5 fw-semibold"
              >
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted fs-5 d-flex mx-3 p-3 align-items-center bg-white">
        <div className="d-flex flex-grow-1 align-items-center gap-2">
          <Rating
            className="text-warning"
            style={{ maxWidth: 150 }}
            value={rating}
            readOnly
          />
          {rating?.number}
        </div>
        <div className="d-flex align-items-center gap-3 fs-5 m-0 p-0">
          <BsEyeFill />
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
