import React from "react";
import EntertainmentCard from "./EntertainmentCard";
import "./entertainment.css";
import { Link } from "react-router-dom";

class Entertainment extends React.Component {
  render() {
    const entertainment = this.props.data && this.props.data.filter(
      (news) => news.category_id === "Entertainment"
    );
    return (
      <div className="entertainment">
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=Entertainment`,
          }}
        >
          <h3 className="text-center py-2">
            ENTERTAINMENT
          </h3>
        </Link>
        <div className="container-fluid ent-chng-pos">
          <div className="container-fluid row w-100 bg-white mx-auto ent-pos-tp">
            {entertainment && entertainment.length &&
              entertainment.slice(0, 4).map((life) => {
                const {
                  featured_image,
                  category_id,
                  slug,
                  post_title,
                  id,
                  post_type
                } = life;
                return (
                  <EntertainmentCard
                    key={id}
                    featured_image={featured_image}
                    category_id={category_id}
                    slug={slug}
                    post_title={post_title}
                    post_type={post_type}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Entertainment;
