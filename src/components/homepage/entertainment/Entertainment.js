import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExploreMore } from "../ExploreMore";
import "./entertainment.css";
import { EntertainmentCard } from "./EntertainmentCard";
import img from "../../../assets/images/Mambilla-Plateau.jpg";
import { Card } from "react-bootstrap";

// this component has been changed to Investigation
export const Entertainment = (props) => {
  const feeds = props.data;
  const entertainmentNews = feeds?.filter(
    (news) => news.category_id === "Investigation"
  );
  // shuffle the news randomly for the big frame
  const shuffleEntertainmentNews = Math.floor(Math.random() * 3);
  const bigFrameNews = entertainmentNews[shuffleEntertainmentNews];
  return (
    <>
      <div className="entertainment custom-container ">
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=Investigation`,
          }}
        >
          <h3 className="entertainment-category-heading">Investigation</h3>
        </Link>
        <div className="inner-container container-fluid row entertainment-bg-red ml-0">
          <div className="col-12 col-md-6 col-lg-6 entertainment-col-tp my-2 mx-auto">
            <Card>
              <Card.Img
                className="big-frame-img"
                src={`https://api.tv24africa.com/public/storage/post_image/${
                  bigFrameNews && bigFrameNews.featured_image
                }`}
              />
              <Card.ImgOverlay>
                <Card.Title>
                  <p>{bigFrameNews?.post_title}</p>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-sm-6 entertainment-col-bt">
            <div className="row entertainment-sm-news">
              {entertainmentNews?.slice(0, 4).map((news) => {
                const {
                  post_title,
                  id,
                  featured_image,
                  slug,
                  category_id,
                  post_type,
                } = news;
                return (
                  <EntertainmentCard
                    key={slug}
                    post_title={post_title}
                    post_type={post_type}
                    id={id}
                    featured_image={featured_image}
                    slug={slug}
                    category_id={category_id}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="entertainment-more-btn">
          <ExploreMore category_id="Investigation" />
        </div>
      </div>
    </>
  );
};

export default Entertainment;
