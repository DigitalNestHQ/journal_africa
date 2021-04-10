import React, { Component } from "react";
import SportCard from "./SportCard";
import "./sport.css";
import { Link } from "react-router-dom";
import { ExploreMore } from "../ExploreMore";

export class SportComponent extends Component {
  render() {
      const sportNews = this.props.data && this.props.data.filter(
        (news) => news.category_id === "Sport Africa"
      );
    return (
      <div className="sport">
        <div className="custom-container container-fluid shadow-sm">
          <Link
          to={{
            pathname: "/news/categories",
            search: `?category=Sport`,
          }}
        >
          <h3 className="">
          SPORTS
          </h3>
        </Link>
          <div className="container-fluid mt-3 mb-4 py-2  d-flex row sport-card-wrap">
            {sportNews && sportNews.length > 0 &&
              sportNews.map((news) => {
                const {
                  post_title,
                  id,
                  featured_image,
                  slug,
                  category_id,
                } = news;
                return (
                  <SportCard
                    key={id}
                    post_title={post_title}
                    featured_image={featured_image}
                    slug={slug}
                    category_id={category_id}
                  />
                );
              })}
          </div>
          <div className="col-12 ml-2 ml-lg-0">
            <ExploreMore category_id="Sport Africa" />
          </div>
        </div>
      </div>
    );
  }
}

export default SportComponent;
