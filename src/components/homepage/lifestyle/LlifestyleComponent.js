import React, { Component } from "react";
import LifeStyleCard from "./LifeStyleCard";
import "./lifestyle.css";
import { Link } from "react-router-dom";

class Lifestyle extends Component {
  render() {
    const lifeStyles = this.props.data && this.props.data.filter(
      (news) => news.category_id === "Lifestyle"
    );
    return (
      <div className="lifestyle mt-3 mb-3 pt-3">
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=Lifestyle`,
          }}
        >
          <h3 className="text-center py-2 text-white">
            LIFESTYLES
          </h3>
        </Link>
        <div className="container-fluid">
          <div className="container-fluid row mx-auto lf-wrap bg-white">
            {lifeStyles && lifeStyles.length &&
              lifeStyles.slice(0, 4).map((life) => {
                const { featured_image, category_id, id, post_title, post_type, slug } = life;
                return (
                  <LifeStyleCard
                    key={id}
                    featured_image={featured_image}
                    category_id={category_id}
                    post_type={post_type}
                    post_title={post_title}
                    slug={slug}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Lifestyle;
