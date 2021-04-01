import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const EntertainmentCard = ({
  featured_image,
  category_id,
  slug,
  post_title,
  post_type
}) => {
  return (
    <div className="col-lg-3 col-sm-12 my-2 mg-sm-scr">
      <Card className="bg-dark text-white mt-wrap ent-card">
        <Card.Img
          src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
          alt="Card image"
          className="ent-h-100"
        />
        <Card.ImgOverlay className="overlay">
          <Card.Text className="">
            {post_type === "premium" ? (
            <span className="premium_category_indicator--entertainment">
                { post_type }
              </span>
            ) : ""}
          </Card.Text>
        </Card.ImgOverlay>
        <Link to={`/post/${slug}`}>{post_title}</Link>
      </Card>
    </div>
  );
};

export default EntertainmentCard;
