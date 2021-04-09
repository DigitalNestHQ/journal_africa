import React from "react";
import EntertainmentCard from "./EntertainmentCard";
import "./entertainment.css";
import { Link } from "react-router-dom";
import { ExploreMore } from "../ExploreMore";
// this component has been changed to business and finance
class Entertainment extends React.Component {

  
  render() {
    const businessNews = this.props.data && this.props.data.filter(
      (news) => news.category_id === "Business and Finance"
    );
    return (
      <div className="entertainment">
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=Entertainment`,
          }}
          >
          <h3 className="entertainment-category-heading">
            Business & Finance
          </h3>
        </Link>
        <div className="custom-container container-fluid ent-chng-pos">
          <div className="container-fluid row w-100 bg-white mx-auto ent-pos-tp">
            {businessNews && businessNews.length &&
              businessNews.slice(0, 4).map((life) => {
                const {
                  featured_image,
                  category_id,
                  slug,
                  post_title,
                  id,
                  post_type,
                  post_description
                } = life;
                return (
                  <EntertainmentCard
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
                <ExploreMore category_id="Business and Finance"/>
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

export default Entertainment;
