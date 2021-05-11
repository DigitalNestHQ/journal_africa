import React, { Fragment } from "react";
import Nav from "../reusables/navigation/Nav/Nav";
import { Card, Button } from "react-bootstrap";
import Image3 from "../../assets/images/calabar-carnival-3.jpg";
import Image4 from "../../assets/images/travel1.jpg";
// import Trump from "../../assets/images/trump1.jpg";
// import logo from "../../assets/images/TV24E.png";
// import { Link } from "react-router-dom";
import Footer from "../reusables/navigation/Footer/Footer";
import "./about.css";

const AboutComponent = (props) => {
  return (
    <Fragment>
        <Nav />
        <div className="about">
          <div className="bg-header">
            <p className="about-txt">ABOUT TV24 AFRICA NEWSPAPER</p>
          </div>
          <div className="container abt-main">
            <div className="about-left">
              <div className="abt-txt">
                <p>
                  TV24 Africa Newspaper was established in the year 2020 by News
                  Media Africa Limited to give the African people the chance to
                  tell their stories in ways never told. It is a multi-platform
                  online news and analysis publication reaching everyone across
                  the world via various digital media platforms.
                </p>
                <p>
                  TV24Africa Newspaper aims to become the number one in Africa
                  and one of the world’s most trusted source of informative and
                  inspiring. It is poised to give Africans access to independent
                  and well researched national, regional and international news
                  in all spheres.
                </p>
                <p>
                  {" "}
                  The emphasis of its reporting will be more focused more on
                  promoting development issues in the sub-region, especially
                  those that are under reported, but capable of empowering the
                  Africa people
                </p>
              </div>
              <div className="about-crds">
                <div className="row">
                  <div className="col-sm-6 s-card">
                    <Card className="text-white mt-wrap h-100">
                      <Card.Img
                        src={Image4}
                        alt="Card image"
                        className="h-100"
                      />
                      <Card.ImgOverlay className="m-t text-center ts-overlay">
                        <Button variant="outline-danger" className="butn">
                          Travel
                        </Button>
                        <Card.Text className="ts-card-txt">
                          Travelstart is Africa's leading online travel agency.
                          Based in sunny Cape Town, we have offices across
                          Africa and the Middle East where hundreds of
                          Travelstarters
                        </Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </div>
                  <div className="col-sm-6 s-card">
                    <Card className="text-white mt-wrap h-100">
                      <Card.Img
                        src={Image3}
                        alt="Card image"
                        className="h-100 bg-none"
                      />
                      <Card.ImgOverlay className="m-t text-center ts-overlay">
                        <Button variant="outline-danger" className="butn">
                          Event
                        </Button>
                        <Card.Text className="ts-card-txt">
                          Calabar Carnival festival in Nigeria, also tagged
                          "Africa's Biggest Street Party", was created as part
                          of the vision of making the Cross River State,
                          Nigeria, the ...
                        </Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-right">
              <button>TRENDS</button>
              <p classNAme="text-white">
                Trump Administration Seeks to Stifle Protests Near White House
                and on National Mall
              </p>
              {/* <img loading="lazy" src={Trump} alt="Donald"/> */}
            </div>
          </div>
          <div className="txt-btm container-fluid abt-txt" style={{width: "100%", padding: "50px 145px"}}>
            <p>
              TV24 Africa Newspaper will dig deep into important issues capable
              of spurring real social change and reforms with no corporate,
              political or sectional agenda but through a fact based and
              unbiased reporting.
            </p>
            <p>
              Through our medium, we consider it our main responsibility to
              carry out an important work of informing and empowering Africans
              both at home and abroad, but also to equally support the present
              and future generations in achieving a voice in the world of modern
              media.
            </p>
            <p>
              TV24Africa Newspaper is available worldwide on all digital media
              platforms and mobile applications.
            </p>
          </div>
        </div>
        <div style={{width: "34%"}}>
        </div>
        <Footer />
    </Fragment>
  );
};

export default AboutComponent;
