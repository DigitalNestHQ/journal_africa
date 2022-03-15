import React, { Fragment, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import Nav from "../reusables/navigation/Nav/Nav"
import { Card, Row, Col } from "react-bootstrap"
import Loader from "../loader/Loader"
import Footer from "../reusables/navigation/Footer/Footer"
import "./about.css"
import newsContext from "../../context/news/NewsContext"
import { LargeSizeAds } from "../homepage/ads/Ads"
import bannerAds from "./../../assets/images/bannerads.png"
import { useViewPort } from "../hooks/Viewport"

const AboutComponent = () => {
  const context = useContext(newsContext)
  const { loading, getNews, news } = context
  const { width } = useViewPort()
  const breakPoint = 991

  useEffect(() => {
    getNews()
    //eslint-disable-next-line
  }, [])

  if (news === null || loading) {
    return <Loader />
  }
  return (
    <Fragment>
      <Nav />
      <div className="cnt-page">
        <div className="about-us-header"></div>
        <div className="contact-section">
          <div className="register-signup-wrapper contact-wrapper">
            <div className="contact-page-main">
              <h5 className="contact-heading">
                About Journal Africa newspaper
              </h5>
              <div className="about-board-bg">
                <div className="about-board-content-grid">
                  <div className="about-board">
                    <div className="about-left-text">
                      <p>
                        Journal Africa is a research and fact based analytical
                        publication focused on the political, business,
                        governance, development and lifestyle of the African
                        people.
                      </p>
                      <p>
                        Journal Africa is a subscription-driven publication
                        offered on a monthly, quarterly and annual basis and
                        hosts several features and categories including a
                        podcast section, all of which deals with contemporary
                        socio-economic and development issues in the African
                        continent.
                      </p>
                      <p>
                        Journal Africa provides original, analytical,
                        well-written stories that helps to engender debate and
                        shape ideological conclusions of all users.
                      </p>
                    </div>
                    <div className="about-board-cards">
                      <Row xs={1} md={2} className="g-4">
                        {news === null || loading ? (
                          <div></div>
                        ) : !loading && news.length === 0 ? (
                          <div></div>
                        ) : (
                          news.slice(6, 8).map((eachCard) => (
                            <Col
                              key={eachCard.id}
                              className="about-us-each-card"
                            >
                              <Card className="text-white h-100">
                                <Card.Img
                                  src={`https://api.tv24africa.com/public/storage/post_image/${eachCard.featured_image}`}
                                  alt="Card image"
                                  className="h-100 w-100 caro-img-cover"
                                />
                                <Card.ImgOverlay className="cnt-txt-wrap">
                                  <Link
                                    to={{
                                      pathname: "/news/categories",
                                      search: `?category=${eachCard.category_id}`,
                                    }}
                                    className="text-decoration-none p-2 text-left cap-anco about-link-tag"
                                  >
                                    {eachCard.category_id}
                                  </Link>

                                  <Link
                                    to={`/post/${eachCard.slug}`}
                                    className="text-left text-white about-card-msg"
                                  >
                                    {eachCard.slug}
                                  </Link>
                                </Card.ImgOverlay>
                              </Card>
                            </Col>
                          ))
                        )}
                      </Row>
                    </div>
                  </div>
                  {width > breakPoint ? (
                    <div className="trump-board">
                      {news === null || loading ? (
                        ""
                      ) : !loading && news.length === 0 ? (
                        <h5>No trends</h5>
                      ) : (
                        news.slice(8, 9).map((eachCard) => (
                          <div
                            className="text-center trump-container"
                            key={eachCard.id}
                          >
                            <div className="aboutimg-container">
                              <img
                                src={`https://api.tv24africa.com/public/storage/post_image/${eachCard.featured_image}`}
                                alt="img"
                                className="about-card-left-img"
                              />
                            </div>
                            <h5 className="about-trends text-center ">
                              Trends
                            </h5>
                            <div className="about-left-overlay">
                              <Link
                                to={`/post/${eachCard.slug}`}
                                className="about-overlay-text slug-default text-white"
                              >
                                {eachCard.slug}
                              </Link>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="add-container">
                  <LargeSizeAds img={bannerAds} />
                </div>
                <div className="rem-text-container">
                  <p>
                    Journal Africa has a sub publication better known as “News
                    Journal Africa” which offers free access to independent
                    national, regional and international news in all spheres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default AboutComponent
