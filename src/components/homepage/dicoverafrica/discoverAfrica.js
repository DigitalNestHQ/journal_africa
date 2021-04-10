import React, { useEffect, useState } from "react";
import { ExploreMore } from "../ExploreMore";
import "./discoverAfrica.css";
import { DiscoveryAfricaCard } from "./DiscoveryAfricaCard";

export const DiscoverAfrica = (props) =>{
  const feeds = props.data;
  const discoveryAfricaNews = feeds?.filter((news) => news.category_id === "Discovery Africa");
    // shuffle the news randomly for the big frame
    const shuffleDiscoveryAfricaNews = Math.floor(Math.random() * 3);
    const bigFrameNews = discoveryAfricaNews[shuffleDiscoveryAfricaNews];
  return(<>
    <div className="africa">
      <h3 className="px-5">DISCOVER AFRICA</h3>
      <div className="custom-container container-fluid row af-bg-red ml-0">
        <div 
          className="col-sm-6 af-col-tp my-2 mx-auto"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
            url(https://api.tv24africa.com/public/storage/post_image/${bigFrameNews && bigFrameNews.featured_image})center/cover fixed no-repeat`
          }}
        >
            <p>{bigFrameNews?.post_title}</p>
        </div>
        <div className="col-sm-6 af-col-bt">
          <div className="row af-sm-news">
            {
              discoveryAfricaNews?.slice(0,4).map((news)=>{
                const {
                  post_title,
                  id,
                  featured_image,
                  slug,
                  category_id,
                  post_type,
                } = news;
                return (
                  <DiscoveryAfricaCard
                    key={slug}
                    post_title={post_title}
                    post_type={post_type}
                    id={id}
                    featured_image={featured_image}
                    slug={slug}
                    category_id={category_id}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    <div className="pl-5">
      <ExploreMore category_id="Discovery Africa"/>
    </div>
    </>
  )
}

export default DiscoverAfrica;
