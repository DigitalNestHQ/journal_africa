import React, { useEffect, useState } from "react";
import PoliticsAndGovernanceCard from "./PoliticsAndGovernanceCard";
import ReaderList from "./ReaderList";
import "./politicsandgovernance.css";
import { Link } from "react-router-dom";
import { ExploreMore } from "../ExploreMore";
import axios from "axios";

// import firstbankAd from "./../../../assets/images/homepage/first_bank.jpg";

// THE FIRST FRONTEND GUY MADE SEVERAL CONFUSING NAMING CONVENTION

// THIS COMPONENT HAS BEEN CHANGED TO POLITICS COMPONENT

const PoliticsAndGovernance = (props) => {
  const [wordpressNews, setWordpressNews] = useState();

  useEffect(() => {
    async function getWordpressNews() {
      const wordpressNews = await axios.get(
        "https://api.tv24africa.com/api/v1/wordpress/posts"
      );
      setWordpressNews(wordpressNews.data.data);
    }
    getWordpressNews();
  }, []);
  // console.log(wordpressNews);
  const feeds = props?.data;
  const getPoliticsNews =
    feeds && feeds.filter((news) => news.category_id === "Politics");
  const getPremiumNews =
    feeds && feeds.filter((allNews) => allNews.post_type === "premium");
  return (
    <div className="politics">
      <div className="custom-container container-fluid hl-tp-cont mx-auto">
        <div className="row container-fluid mx-auto">
          <div className="col-12 col-md-12 col-lg-8 ns-txt-wrap">
            <Link
              to={{
                pathname: "/news/categories",
                search: `?category=Politics`,
              }}
            >
              <label className="politics-category-heading">Politics</label>
            </Link>
            {getPremiumNews &&
              getPremiumNews.length &&
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
            <h3>LATEST DAILY NEWS</h3>
            <div>
              {wordpressNews &&
                wordpressNews.length &&
                wordpressNews.slice(0, 4).map((news) => {
                  const { guid, post_title, post_content, ID, post_date } =
                    news;
                  return (
                    <ReaderList
                      key={ID}
                      slug={guid}
                      post_title={post_title}
                      post_description={post_content}
                      created_at={post_date}
                      description_slice={136}
                      redirect_to_wordpress={true}
                    />
                  );
                })}
            </div>

            {/* <div className="politics-ads">
              <span>
                <img src={firstbankAd} />
              </span>
            </div> */}
          </div>
          <div className="explore-more-politics">
            <ExploreMore category_id="Politics and Governance" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticsAndGovernance;
