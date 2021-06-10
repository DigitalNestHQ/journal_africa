import React, { Component } from "react";
import { Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./homepage.css";
import "./ads/ads.css";
// ads
import { LargeSizeAds } from "./ads/Ads";
import bannerAds from "./../../assets/images/bannerads.png";

class Banner extends Component {
  render() {
    const feeds = this.props.data;

    // METHOD 1
    // // filter out the premium news from feeds
    // const getPremiumNews = feeds.filter((feed)=>feed.post_type=='premium')
    // // filter out the politics news
    // const getPoliticsNews = getPremiumNews.filter((premiumNews)=>premiumNews.category_id.toLowerCase()=='politics')
    // // filter out the lifestyle news
    // const getLifeStyleNews = getPremiumNews.filter((premiumNews)=>premiumNews.category_id.toLowerCase()=='lifestyle')
    // // set the news to display
    // const firstFeed = Array.isArray(getPoliticsNews) && getPoliticsNews.length ? getPoliticsNews[0] : {};
    // const secondFeed = Array.isArray(getLifeStyleNews) && getLifeStyleNews.length ? getLifeStyleNews[0] : {};
    // console.log(feeds)

    // METHOD 2
    const getPremiumNews =
      feeds && feeds.filter((feed) => feed.post_type == "premium"); // extract premium news
    const firstFeed =
      Array.isArray(getPremiumNews) && getPremiumNews.length
        ? getPremiumNews[6]
        : {};
    const secondFeed =
      Array.isArray(getPremiumNews) && getPremiumNews.length
        ? getPremiumNews[1]
        : {};

    return (
      <React.Fragment>
        <div className="custom-container container-fluid banner-ads--container">
          <div className="col-sm-12">
            <LargeSizeAds img={bannerAds} />
          </div>
        </div>
        <div className="custom-container container-fluid flex-container banner">
          <div className="col-sm-8 carousel-ct">
            <Carousel slide={false} fade={false} className="carosel">
              {feeds &&
                feeds.slice(0, 3).map((categ) => {
                  const { featured_image, id, slug, category_id } = categ;
                  return (
                    <Carousel.Item className="caro-item" key={id}>
                      <img
                        className="d-block"
                        src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
                        alt="tv24africanews image"
                        width="100%"
                        height="100%"
                      />
                      <Carousel.Caption className="caro-capxn">
                        <Link
                          to={{
                            pathname: "/news/categories",
                            search: `?category=${category_id}`,
                          }}
                        >
                          <button className="text-decoration-none p-2 text-left cap-ancor">
                            {category_id}
                          </button>
                        </Link>
                        <Link to={`/post/${slug}`}>
                          <p className="text-white text-left car-p text-capitalize">
                            {slug.toLowerCase()}
                          </p>
                        </Link>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
          <div className="col-sm-4">
            {/* { firstFeed &&
              <div className="cnt-1"
                style={{
                    background: `
                    linear-gradient(rgba(0, 0, 0, 0.5), 
                    rgba(0, 0, 0, 0.6)),
                    url(https://api.tv24africa.com/public/storage/post_image/${firstFeed.featured_image}) bottom/cover fixed no-repeat`,
                    color: '#fff',
                }}
              >
                <div className="cnt-txt-wrap">
                  <Link
                    to={{
                      pathname: "/news/categories",
                      search: `?category=${firstFeed.category_id}`,
                    }}
                  >
                    <button className="text-decoration-none inline-block p-2  cap-anco feed-btn text-left mt-5">
                      {firstFeed.category_id}
                    </button>
                  </Link>
                  <Link to={`/post/${firstFeed.slug}`}>
                    <p className="text-capitalize pb-4">{firstFeed.slug}</p>
                  </Link>
                </div>
              </div>
            } */}

            {firstFeed && (
              <div className="cnt-1">
                <Link to={`/post/${firstFeed.slug}`}>
                  <Card className="text-white mt-wrap h-100">
                    <Card.Img
                      src={`https://api.tv24africa.com/public/storage/post_image/${firstFeed.featured_image}`}
                      alt="Card image"
                      className="h-100"
                    />
                    <Card.ImgOverlay className="s-overlay cnt-txt-wrap">
                      <Link
                        to={{
                          pathname: "/news/categories",
                          search: `?category=${firstFeed.category_id}`,
                        }}
                      >
                        <button className="text-decoration-none inline-block p-2  cap-anco feed-btn text-left mt-5">
                          {firstFeed.category_id}
                        </button>
                      </Link>
                      <Card.Text className="ts-card-txt">
                        <Link to={`/post/${firstFeed.slug}`}>
                          <p
                            className="text-left text-capitalize pb-4"
                            style={{ width: "84%" }}
                          >
                            {firstFeed.slug}
                          </p>
                        </Link>
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </div>
            )}
            {secondFeed && (
              <div className="cnt-2">
                <Link to={`/post/${secondFeed.slug}`}>
                  <Card className="text-white mt-wrap h-100">
                    <Card.Img
                      src={`https://api.tv24africa.com/public/storage/post_image/${secondFeed.featured_image}`}
                      alt="Card image"
                      className="h-100"
                    />
                    <Card.ImgOverlay className="ts-overlay cnt-txt-wrap">
                      <Link
                        to={{
                          pathname: "/news/categories",
                          search: `?category=${secondFeed.category_id}`,
                        }}
                      >
                        <button className="text-decoration-none inline-block p-2  cap-anco feed-btn text-left mt-5">
                          {secondFeed.category_id}
                        </button>
                      </Link>
                      <Card.Text className="ts-card-txt">
                        <Link to={`/post/${secondFeed.slug}`}>
                          <p
                            className="text-left text-capitalize pb-4"
                            style={{ width: "84%" }}
                          >
                            {secondFeed.slug}
                          </p>
                        </Link>
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </div>
            )}
            {/* {
              secondFeed &&
                <div className="cnt-2"
                style={{
                  background: `
                  linear-gradient(rgba(0, 0, 0, 0.5), 
                  rgba(0, 0, 0, 0.6)),
                  url(https://api.tv24africa.com/public/storage/post_image/${secondFeed.featured_image}) top/cover fixed no-repeat`,
                  color: '#fff'
                }}
              >
                <div className="cnt-txt-wrap">
                  <Link
                    to={{
                      pathname: "/news/categories",
                      search: `?category=${secondFeed.category_id}`,
                    }}
                    >
                    <button className="text-decoration-none inline-block p-2 text-left feed-btn cap-anco mt-5">
                      {secondFeed.category_id}
                    </button>
                  </Link>
                  <Link to={`/post/${secondFeed.slug}`} className="slug">
                    <p className="text-capitalize pb-4">{secondFeed.post_title}</p>
                  </Link>
                </div>
              </div>
            } */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
