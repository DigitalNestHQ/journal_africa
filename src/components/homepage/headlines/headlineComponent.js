import React, { Component } from "react";
import HeadlineCard from "./HeadlineCard";
import ReaderList from "./ReaderList";
import "./headline.css";

class HeadlineComponent extends Component {
  render() {
    const newsHeadlines = this.props.data && this.props.data.filter(
      (newsHD) => newsHD.post_type === "free"
    );
    return (
      <div className="hl-wrapper">
        <div className="custom-container container-fluid hl-tp-cont mx-auto">
          <div className="row container-fluid mx-auto">
            <div className="col-sm-9 ns-txt-wrap">
              { newsHeadlines && newsHeadlines.length &&
                newsHeadlines.slice(2, 5).map((news) => {
                  const {
                    post_title,
                    id,
                    slug,
                    featured_image,
                    category_id,
                  } = news;
                  return (
                    <HeadlineCard
                      key={id}
                      post_title={post_title}
                      slug={slug}
                      featured_image={featured_image}
                      category_id={category_id}
                    />
                  );
                })}
            </div>
            <div className="col-sm-3 ns-art-wrap mx-auto shadow">
              <h2>MUST READ</h2>
              <div>
                {newsHeadlines && newsHeadlines.length &&
                  newsHeadlines.slice(-10).map((news) => {
                    const { slug, post_title, id} = news;
                    return <ReaderList key={id} slug={slug} post_title={post_title} />;
                  })}
              </div>

              <div className="shadow-sm ads">
                <span>Ads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadlineComponent;
