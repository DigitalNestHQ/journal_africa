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

      <div className="card-caption mt-lg-0">
        <h3 className="card-caption-title">
          {" "}
          {post_title.toLowerCase().slice(0, 100)}{" "}
        </h3>
        {/* <br /> */}
        <Link to={`/post/${slug}`}>
          <div  className="card-caption-content">
            <p className="mb-1">
              {" "}
              {/* {slug.toLowerCase().slice(0, 50)}... <br /> <span>Read more</span> */}
              {slug.toLowerCase().slice(0, 50)}<br />
            </p>
              <span> Read more... </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default CategoryCard;
