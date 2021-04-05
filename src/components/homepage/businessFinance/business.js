import React, { Component, Fragment } from "react";
import BusinessCard from "./BusinessCard";
import "./business.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import bg from '../../../assets/images/business_image.jpg'
import { ExploreMore } from "../ExploreMore";

class Business extends Component {
  render() {
    AOS.init();
    const businessNews = this.props.data && this.props.data.filter((bnews) => bnews.category_id === "Business and Finance");
    // shuffle the news randomly for the big frame
    const shuffleBussinessNews = Math.floor(Math.random() * 3);
    const singleBussinessNews = businessNews[shuffleBussinessNews];
    return (
      <Fragment>
        <div className="custom-container business my-4 container-fluid">
          <Link
          to={{
            pathname: "/news/categories",
            search: `?category=Business and Finance`,
          }}
        >
          <h3 className="">
            BUSINESS AND FINANCE 
          </h3>
        </Link>
          <div className=" shadow-sm row bs-col-wrap">
            <div 
              className="col-sm-6 sme_bg"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                url(https://api.tv24africa.com/public/storage/post_image/${singleBussinessNews && singleBussinessNews.featured_image})left/contain fixed no-repeat`
              }}></div>
            <div className="col-sm-6 sme_rght">
              {/* <h5>Bank highlights business support solutions</h5> */}
              <h5>{ singleBussinessNews && singleBussinessNews.post_title}</h5>
              <p>
                {singleBussinessNews && singleBussinessNews.slug}
                {/* Modified date: November 27, 20200 The United Kingdom Trade Envoy
                to Nigeria, Hon. Helen Grant, has said that Nigeria was the
                fastest growing economy in Africa. Grant said this at... */}
              </p>
            </div>
          </div>
          <div
            className="row bus-article-wrap my-4 pl-0"
            data-aos="flip-right"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            { businessNews && businessNews.length &&
              businessNews.slice(0, 4).map((news) => {
                const {
                  post_title,
                  featured_image,
                  id,
                  slug,
                  category_id,
                } = news;
                return (
                  <BusinessCard
                    key={id}
                    post_title={post_title}
                    featured_image={featured_image}
                    category_id={category_id}
                    slug={slug}
                  />
                );
              })}
          <ExploreMore category_id="Business and Finance"/>
          </div>
          <div className="bus-ad"></div>
        </div>
      </Fragment>
    );
  }
}

export default Business;
