import React, { Component } from "react";
import SportCard from "./ViewPointCard";
import "./viewpoint.css";
import { Link } from "react-router-dom";
import { ExploreMore } from "../ExploreMore";
import ViewPointCard from "./ViewPointCard";

export class ViewPoint extends Component {
  render() {
      const viewpointNews = this.props.data && this.props.data.filter(
        (news) => news.category_id === "Sport Africa"
      );
    return (
      <div className="viewpoint">
        <div className="custom-container container-fluid shadow-sm">
        <Link
        to={{
          pathname: "/news/categories",
          search: `?category=Development`,
        }}
        >
        <span className="viewpoint-category-heading">
          Viewpoint
        </span>
        </Link>
          <div className="container-fluid mt-3 mb-4 py-2  d-flex row viewpoint-card-wrap">
            {viewpointNews && viewpointNews.length > 0 &&
              viewpointNews.map((news) => {
                const {
                  post_title,
                  id,
                  featured_image,
                  slug,
                  category_id,
                } = news;
                return (
                  <ViewPointCard
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

export default ViewPoint;
