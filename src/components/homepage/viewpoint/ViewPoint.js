import React, { Component } from "react";
import SportCard from "./ViewPointCard";
import "./viewpoint.css";
import { Link } from "react-router-dom";
import { ExploreMore } from "../ExploreMore";
import ViewPointCard from "./ViewPointCard";

// This component has been changed to Governance
export class ViewPoint extends Component {
  render() {
    const viewpointNews =
      this.props.data &&
      this.props.data.filter((news) => news.category_id === "Governance");
    return (
      <div className="viewpoint">
        <div className="custom-container container-fluid">
          <Link
            to={{
              pathname: "/news/categories",
              search: `?category=View Point`,
            }}
          >
            <span className="viewpoint-category-heading">Governance</span>
          </Link>
          <div className="container-flui mt-3 mb-4 row viewpoint-card-wrap">
            {viewpointNews &&
              viewpointNews.length > 0 &&
              viewpointNews.slice(0, 4).map((news) => {
                const {
                  post_title,
                  id,
                  featured_image,
                  slug,
                  category_id,
                  post_description,
                  post_type,
                } = news;
                return (
                  <ViewPointCard
                    key={id}
                    post_title={post_title}
                    post_type={post_type}
                    featured_image={featured_image}
                    slug={slug}
                    category_id={category_id}
                    post_description={post_description}
                  />
                );
              })}
          </div>
          <div className="viewpoint-more-btn">
            <ExploreMore category_id="View Point" />
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPoint;
