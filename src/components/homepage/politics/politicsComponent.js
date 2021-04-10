import React, { Component } from "react";
import { Link } from "react-router-dom";
import PoliticsCard from "./PoliticsCard";
import "./politicsComponent.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


class politicsComponent extends Component {
  render() {
    const feeds = this.props.data;
    // console.log(feeds)
    if(feeds.length === 0){
      return (
        <>
          <div className="politics-wrap container-fluid my-4">
            <Link to="/">
            {/* <label className="categories-heading">Latest Stories For Me</label> */}
            </Link>
            <div className="container-fluid row pol-news-card-wrap">
                  <div className="card sec-2 col-lg-6 col-sm-6 col-6 my-2 mx-auto" style={{
                    margin: '10px 0px',
                    padding: '0px 5px'
                  }}>
                  <SkeletonTheme color="#EEE" highlightColor="#CCC">
                      <p>
                      <Skeleton count={3} duration={4} />
                      </p>
                  </SkeletonTheme>
                </div>
              </div>
          </div>
        </>
      )
    }
    return (
      <div className="custom-container politics-wrap container-fluid my-4">
        <Link to="/">
          <label className="categories-heading">Latest Stories For Me</label>
        </Link>
        <div className="container-fluid row pol-news-card-wrap">
          {feeds && feeds.length > 0 &&
            feeds.slice(0, 4).map((categ) => {
              const {
                post_type,
                post_title,
                featured_image,
                id,
                slug,
                category_id,
              } = categ;
              return (
                <PoliticsCard
                  key={id}
                  post_title={post_title}
                  post_type={post_type}
                  featured_image={featured_image}
                  id={id}
                  slug={slug}
                  category_id={category_id}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default politicsComponent;
