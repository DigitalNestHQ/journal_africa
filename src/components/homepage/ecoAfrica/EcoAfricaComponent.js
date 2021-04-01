import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./politicsComponent.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import EcoAfricaCard from "./EcoAfricaCard";


class EcoAfricaComponent extends Component {
  render() {
    const feeds = this.props.data;
    // console.log(feeds)
    if(feeds.length === 0){
      return (
        <>
          <div className="politics-wrap container-fluid my-4">
            <Link to="/">
              <h3>Eco Africa</h3>
            </Link>
            <div className="container-fluid my-3 p-2 row  pol-news-card-wrap">
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
      <div className="politics-wrap container-fluid my-4">
        <Link to="/">
          <h3>ECO AFRICA</h3>
        </Link>
        <div className="container-fluid my-3 p-2 row  pol-news-card-wrap">
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
                <EcoAfricaCard
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

export default EcoAfricaComponent;
