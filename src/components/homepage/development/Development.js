import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExploreMore } from "../ExploreMore";
import "./development.css";
import { DevelopmentCard } from "./DevelopmentCard";

export const Development = (props) =>{
  const feeds = props.data;
  const discoveryAfricaNews = feeds?.filter((news) => news.category_id === "Development");
    // shuffle the news randomly for the big frame
    const shuffleDiscoveryAfricaNews = Math.floor(Math.random() * 4);
    const bigFrameNews = discoveryAfricaNews[shuffleDiscoveryAfricaNews];
  return(<>
    <div className="custom-container development--container">
      <Link
        to={{
          pathname: "/news/categories",
          search: `?category=Development`,
        }}
        >
        <h3 className="development-category-heading">
          Development
        </h3>
      </Link>
      <div className="custom-cntainer container-fluid row development-bg-red ml-0">
        <div 
          className="col-sm-6 development-col-tp mx-auto"
          // style={{
          //   background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
          //   url(https://api.tv24africa.com/public/storage/post_image/${bigFrameNews && bigFrameNews.featured_image})center/cover fixed no-repeat`
          // }}
        >
          <img loading="lazy" className="bigframe--image" src={`https://api.tv24africa.com/public/storage/post_image/${bigFrameNews && bigFrameNews.featured_image}`}></img>
            {/* <p>{bigFrameNews?.post_title}</p> */}
        </div>
        <div className="col-sm-6 development-col-bt">
          <div className="row development-sm-news">
            {
              discoveryAfricaNews?.slice(1,3).map((news)=>{
                const {
                  post_title,
                  id,
                  featured_image,
                  slug,
                  category_id,
                  post_type,
                  post_description
                } = news;
                return (
                  <DevelopmentCard
                    key={slug}
                    post_title={post_title}
                    post_type={post_type}
                    id={id}
                    featured_image={featured_image}
                    slug={slug}
                    category_id={category_id}
                    post_description={post_description}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    <div className="development-more-btn">
      <ExploreMore category_id="Development"/>
    </div>
    </div>
    </>
  )
}

export default Development;
