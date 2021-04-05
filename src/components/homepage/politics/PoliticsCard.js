import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const PoliticsCard = ({
  post_title,
  featured_image,
  id,
  post_type,
  slug,
  category_id,
}) => {
  // console.log(category_id);

  return (
    <div className="card sec-2 col-lg-3 col-sm-6 col-6 my-4 mx-auto" style={{
      margin: '10px 0px',
      padding: '0px 5px'
    }}>
            {// only show the post type for premium
        post_type == "premium" && <span className="premium_category_indicator--politics">{ post_type }</span>
      } 
      <img className='responsive-img img-fluid' src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}` }></img>
      <Link to={`/post/${slug}`} className="news-link custom-news-title">
          <p className="custom-news-title">{post_title.toLowerCase()}</p>
      </Link>
    </div>
  );
};
export default PoliticsCard;
