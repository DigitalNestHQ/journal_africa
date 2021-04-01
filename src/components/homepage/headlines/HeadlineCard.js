import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const HeadlineCard = ({ post_title, slug, featured_image, category_id }) => {
  return (
    <div className="container-fluid news-bg-wrapper">
      <div className="shadow-sm row mb-3 bt-red bg-var-blue">
        <div className="col-lg-6 col-sm-12 ns-txt">
          <div className="text-bold news-hd" id="news--headline">
            <Link to={`/post/${slug}`}>
              <h3>{post_title}</h3>
            </Link>
            <p className="newssummary">{slug}</p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 hd-img-wrap">
          <Link
            to={{
              pathname: "/news/categories",
              search: `?category=${category_id}`,
            }}
          >
            <Image
              src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
              rounded
              className="hd-img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeadlineCard;
