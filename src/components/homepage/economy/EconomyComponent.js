import React, { Component } from "react";
import "./economy.css";
import { Link } from "react-router-dom";
import { ExploreMore } from "../ExploreMore";
import EconomyCard from "./EconomyCard";

class EconomyComponent extends Component {
  render() {
    const economy = this.props.data && this.props.data.filter(
      (news) => news.category_id === "Economy"
    );
    return (
      <>
      <div className="economy custom-container mt-3 pt-3">
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=Lifestyle`,
          }}
        >
          <h3 className="economy-category-heading">
            Economy
          </h3>
        </Link>
        <div className="container-fluid">
          <div className="container-fluid row lf-wrap bg-white">
            {economy && economy.length &&
              economy.slice(0, 4).map((life) => {
                const { featured_image, category_id, id, post_title, post_type, slug, post_description } = life;
                return (
                  <EconomyCard
                    key={id}
                    featured_image={featured_image}
                    category_id={category_id}
                    post_type={post_type}
                    post_title={post_title}
                    slug={slug}
                    post_description={post_description}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div style={{position:'relative'}} className="custom-container ecomony-more-btn">
        <ExploreMore category_id="Economy"/>
      </div>
      </>
    );
  }
}

export default EconomyComponent;
