import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SportCard = ({ post_title, featured_image, slug, category_id, post_type }) => {
  return (
    // <div className="col-lg-3 col-sm-12  sport-sec">
    <div className="col-lg-3 col-sm-6 col-6 sport-sec"
    style={{
      // margin: '10px 10px',
      padding: '0px auto'
    }}>
      <Card className="sport-crd sec-2">
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=${category_id}`,
          }}
        >
          <Card.Img
            variant="top"
            src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
            className="sprt-crd-img"
          />
             {
            //  only show the post type for premium
              post_type !== "premium" && <span className="premium_category_indicator--sport">Premium{ post_type }</span>
            } 
        </Link>
        <Card.Body className="sprt-txt">
          <Link to={`/post/${slug}`}>
            <Card.Text>{post_title.toLowerCase()}</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default SportCard;
