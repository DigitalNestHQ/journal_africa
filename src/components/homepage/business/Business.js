import React from "react";
import BusinessCard from "./BusinessCard";
import "./business.css";
import { Link } from "react-router-dom";
import { ExploreMore } from "../ExploreMore";
// this component has been changed to finance
class Business extends React.Component {
  render() {
    const businessNews =
      this.props.data &&
      this.props.data.filter((news) => news.category_id === "Business");
    return (
      <div className="business">
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=Business`,
          }}
        >
          <h3 className="business-category-heading">Business</h3>
        </Link>
        <div className="custom-container container-fluid ent-chng-pos">
          <div className="container-fluid row w-100 bg-white mx-auto ent-pos-tp">
            {businessNews &&
              businessNews.length &&
              businessNews.slice(0, 4).map((life) => {
                const {
                  featured_image,
                  category_id,
                  slug,
                  post_title,
                  id,
                  post_type,
                  post_description,
                } = life;
                return (
                  <BusinessCard
                    key={id}
                    featured_image={featured_image}
                    category_id={category_id}
                    slug={slug}
                    post_title={post_title}
                    post_type={post_type}
                    post_description={post_description}
                  />
                );
              })}
            <div className="">
              <ExploreMore category_id="Finance" />
            </div>
          </div>
        </div>
        <div className="custom-container">
          <div className="bus-ad"></div>
        </div>
      </div>
    );
  }
}

export default Business;
