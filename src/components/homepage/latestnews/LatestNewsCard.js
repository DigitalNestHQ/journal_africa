import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const LatestNewsCard = ({
  post_title,
  featured_image,
  id,
  post_type,
  slug,
  category_id,
}) => {
  // console.log(category_id);

  return (
    <div className="latest-news-article card sec-2 col-6 col-md-3 col-lg-3 my-4 mx-auto" style={{
      // margin: '10px 0px',
      // padding: '0px 5px'
    }}>

            {// only show the post type for premium
        post_type == "premium" && <span className="premium-tag premium_category_indicator--latest-news">{ post_type }</span>
      } 
      {/* <Link to={`/post/${slug}`} className="h-100"> */}
      <img loading="lazy" className='responsive-img img-fluid' src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}` }></img>
      {/* </Link> */}
      <Link to={`/post/${slug}`} className="news-link latest-news-title">
          <p className="latest-news-title">{post_title.toLowerCase()}</p>
      </Link>
    </div>
  );
};
export default LatestNewsCard;
