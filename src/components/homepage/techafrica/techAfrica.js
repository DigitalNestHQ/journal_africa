import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Microscope from "../../../assets/images/top_lab.jpg";
import Truck from "../../../assets/images/cybertruck1.jpg";
import Telescope from "../../../assets/images/tech2.jpg";
import "./tech.css";
import { TechAfricaCard } from "./TechAfricaCard";

class TechAfrica extends Component {
  render() {
    const techNews = this.props.data && this.props.data.filter(
          (news) => news.category_id === "Tech Africa"
        );
    //     const {featured_image} = techNews[0];
    // console.log(techNews)
    return (
      <div className="tech">
        <h3 className="px-4">TECH AFRICA</h3>
        <div className="tech-top">
          <div className="tech-top-left"></div>
          {/* <div className="tech-top-right d-none d-lg-block"></div> */}
        </div>
        <div className="custom-container tech-bottom">
          <div className="row tech-bottom-left">
            {
              techNews && techNews.length > 0 && techNews.slice(0,4).map((news) => {
                const {
                  post_title,
                  id,
                  featured_image,
                  slug,
                  category_id,
                } = news;
                return (
                  <TechAfricaCard
                    key={slug}
                    post_title={post_title}
                    id={id}
                    featured_image={featured_image}
                    slug={slug}
                    category_id={category_id}
                  />
                  )
                }
              )
            }         
          </div>
        </div>
      </div>
    );
  }
}

export default TechAfrica;
