import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ post_title, featured_image, id, post_type, slug }) => {
  return (
    <div className="main-section-card card-only sec-2">
      <div className="image category-img">
        <img
          src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
          alt={id}
        />
        {/* {// only show the post type for premium
          // post_type == "premium" && <span className="premium_category_indicator ml-">{ post_type }</span>
        }  */}
      </div>

      <div className="card-caption mt-3 mt-lg-0">
        <h3 className="card-caption-title">
          {" "}
          {post_title.toLowerCase().slice(0, 100)}{" "}
        </h3>
        <br />
        <Link to={`/post/${slug}`}>
          <p className="card-caption-content">
            {" "}
            {slug.toLowerCase()} <br /> <span>Read more...</span>
          </p>
        </Link>
      </div>
    </div>
  );
};
export default CategoryCard;
