import React, { Component } from "react";
import PoliticsAndGovernanceCard from "./PoliticsAndGovernanceCard";
import ReaderList from "./ReaderList";
import "./politicsandgovernance.css";
import { Link } from "react-router-dom";
import { ExploreMore } from "../ExploreMore";

// THE FIRST FRONTEND GUY MADE SEVERAL CONFUSING NAMING CONVENTION 
// THIS COMPONENT HAS BEEN CHANGED TO POLITICS COMPONENT

class PoliticsAndGovernance extends Component {
  render() {
    const feeds = this.props.data;
    const getPoliticsNews = feeds && feeds.filter(
      (news) => news.category_id === "Politics and Governance"
    );
    const getPremiumNews = getPoliticsNews && getPoliticsNews.filter(
      (newsHD) => newsHD.post_type === "free"
    );
    return (
      <div className="politics">
        <div className="custom-container container-fluid hl-tp-cont mx-auto">
          <div className="row container-fluid mx-auto">
            <div className="col-12 col-md-12 col-lg-8 ns-txt-wrap">
            <Link to="/">
              <label className="politics-category-heading">Politics and Governance</label>
            </Link>
              { getPremiumNews && getPremiumNews.length &&
                getPremiumNews.slice(0, 3).map((news) => {
                  const {
                    post_title,
                    id,
                    slug,
                    featured_image,
                    category_id,
                    post_description,
                  } = news;
                  return (
                    <PoliticsAndGovernanceCard
                      key={id}
                      post_title={post_title}
                      slug={slug}
                      featured_image={featured_image}
                      category_id={category_id}
                      post_description={post_description}
                    />
                  );
                })}
            </div>
            <div className="col-12 col-md-10 col-lg-4 mx-auto must-read-container">
              {/* <h2>MUST READ</h2> */}
              <div>
                {feeds && feeds.length &&
                  feeds.slice(0, 2).map((news) => {
                    const { slug, post_title, id, created_at, post_description, post_type} = news;
                    return <ReaderList 
                            key={id} 
                            slug={slug} 
                            post_title={post_title}
                            post_description={post_description}
                            created_at={created_at}
                            post_type={post_type}
                          />;
                  })}
              </div>

              <div className="politics-ads">
                  {/* <img src="data:image/png;base64,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"></img> */}
                <span>Ads</span>
              </div>
            </div>
            <div className="explore-more-politics">
              <ExploreMore />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PoliticsAndGovernance;
