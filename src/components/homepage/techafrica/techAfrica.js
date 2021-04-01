import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Microscope from "../../../assets/images/top_lab.jpg";
import Truck from "../../../assets/images/cybertruck1.jpg";
import Telescope from "../../../assets/images/tech2.jpg";
import "./tech.css";

class TechAfrica extends Component {
  render() {
    // const sportNews = this.props.data && this.props.data.filter(
    //       (news) => news.category_id === "Sport"
    //     );
    //     const {featured_image} = sportNews[0];
    return (
      <div className="tech">
        <h3>TECH AFRICA</h3>
        <div className="tech-top">
          <div className="tech-top-left"></div>
          <div className="tech-top-right d-none d-lg-block"></div>
        </div>
        <div className="tech-bottom">
          <div className="row tech-bottom-left">
            <div className="col-12 col-lg-3 tech-sq tech-sq-1">
              <a href="/" className="tch-anchor">
                <Card className="tech-crd px-3 px-lg-0">
                  <Card.Img
                    variant="top"
                    src={Telescope}
                    // src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}

                    className="tech-crd-img"
                  />
                  <Card.Body>
                    <Card.Text className="tech-crd-caption  p-2">
                      The secret to moving this ancient sphinx screening
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-12 col-lg-3 tech-sq tech-sq-">
              <a href="/" className="tch-anchor">
                <Card className="tech-crd px-3 px-lg-0">
                  <Card.Img
                    variant="top"
                    src={Microscope}
                    className="tech-crd-img"
                  />
                  <Card.Body>
                    <Card.Text className="tech-crd-caption  p-2">
                      How Lab Courses Can Teach More Than Science
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-12 col-lg-3 tech-sq tech-sq-3">
              <a href="/" className="tch-anchor">
                <Card className="tech-crd px-3 px-lg-0">
                  <Card.Img
                    variant="top"
                    src={Truck}
                    className="tech-crd-img"
                  />
                  <Card.Body>
                    <Card.Text className="tech-crd-caption p-2">
                      Elon Musk unveils Tesla's Cybertruck electric off-road
                      vehicle
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </div>
          <div className="tech-top-right left-equiv d-none d-lg-block"></div>
        </div>
      </div>
    );
  }
}

export default TechAfrica;
