import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const LifeStyleCard = ({ featured_image, category_id, post_type, post_title, slug }) => {
  return (
    <div className="col-sm-3 my-2 mg-sm-scr">
      <Card className="bg-dark text-white mt-wrap lifestyle-card">
        <Card.Img src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`} 
          alt="Card image" 
          className="ent-h-100" />
        <Card.ImgOverlay className="overlay">
          <Card.Text className="">
            {post_type === "premium" ? (
              <span className="premium_category_indicator--life">
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

export default LifeStyleCard