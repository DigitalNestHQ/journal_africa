import React, { Component } from "react";
import "./lifestyle.css";
import { LifeStyleCard } from "./LifeStyleCard";
import { ExploreMore } from "../ExploreMore";
import { Link } from "react-router-dom";

class LifeStyle extends Component {
  render() {
    const lifestyleNews = this.props.data && this.props.data.filter((news) => news.category_id === "Lifestyle");
    // shuffle the news randomly for the big frame
    const shuffleLifeStyleNews = Math.floor(Math.random() * 4);
    const bigFrameNews = lifestyleNews[shuffleLifeStyleNews];
    // const {featured_image} = lifestyleNews[0];
    // console.log(lifestyleNews)
    return (
      <div className="lifestyle custom-container">
        <Link 
          to={{
            pathname: "/news/categories",
            search: `?category=Lifestyle`,
          }}
        >
          <h3 className="lifestyle-category-heading">
            Lifestyle
          </h3>
        </Link>
        <div className="lifestyle-top">
          <div className="lifestyle-top-left"></div>
          {/* <div className="lifestyle-top-right d-none d-lg-block"></div> */}
        </div>
        <div className="custom-cntainer lifestyle-bottom">
          <div 
            className="row lifestyle-bottom-left"
            style={{
              // background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
              // url("https://api.tv24africa.com/public/storage/post_image/${bigFrameNews?.featured_image}")center/cover no-repeat`
            }}
          >
            {
              lifestyleNews && lifestyleNews.length > 0 && lifestyleNews.slice(0,3).map((news) => {
                const {
                  post_title,
                  id,
                  featured_image,
                  slug,
                  category_id,
                  post_description
                } = news;
                return (
                  <LifeStyleCard
                    key={slug}
                    post_title={post_title}
                    id={id}
                    featured_image={featured_image}
                    slug={slug}
                    category_id={category_id}
                    post_description={post_description}
                  />
                  )
                }
              )
            }
          </div>
        </div>
            <div className="lifestyle-more-btn">
              <ExploreMore category_id="Lifestyle"/>
            </div>
      </div>
    );
  }
}

export default LifeStyle;
