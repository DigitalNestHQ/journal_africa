import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const BusinessCard = ({
  post_title,
  featured_image,
  category_id,
  slug,
}) => {
  return (
    <div className="col-6 col-md-3 col-lg-3 bus-col-wrap bus-sec my-3">
      <Card className="bus-crd">
          <Card.Img
            variant="top"
            src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
            className="bus-crd-img"
          />
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=${category_id}`,
          }}
        >
        </Link>
        <Link to={`/post/${slug}`} className="">
          <Card.Body className="custom-card-body">
            <Card.Text className="bus-crd-caption custom-news-title">{post_title}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};
export default BusinessCard;
