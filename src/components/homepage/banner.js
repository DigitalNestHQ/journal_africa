import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./homepage.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


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
    const getPremiumNews = feeds && feeds.filter((feed)=>feed.post_type=='premium') // extract premium news
    const firstFeed = Array.isArray(getPremiumNews) && getPremiumNews.length ? getPremiumNews[6] : {};
    const secondFeed = Array.isArray(getPremiumNews) && getPremiumNews.length ? getPremiumNews[1] : {};

    if(feeds?.length == 0){// if there is no feeds display loader
      return(
        <div className="custom-container container-fluid flex-container banner">
          <div className="col-sm-12 py-3 carousel-ct">
            <div className="mt-3 carosel" style={{ fontSize: 20, lineHeight: 2 }}>
              <SkeletonTheme color="#EEE" highlightColor="#CCC">
                  <p>
                  <Skeleton count={10} duration={7} />
                  </p>
              </SkeletonTheme>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="custom-container container-fluid flex-container banner">
        <div className="col-sm-8 py- carousel-ct">
          <Carousel slide={false} fade={false} className="mt-3 carosel">
            {feeds &&
              feeds.slice(0, 3).map((categ) => {
                const { featured_image, id, slug, category_id } = categ;
                return (
                  <Carousel.Item className="caro-item" key={id}>
                    <img
                      className="d-block"
                      src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
                      alt="tv24africanews image"
                      width='100%'
                      height='100%'
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
        <div className="col-sm-4 mt-3">
          { firstFeed &&
            <div className="cnt-1"
              style={{
                // backgroundImage:`url(https://api.tv24africa.com/public/storage/post_image/${firstFeed.featured_image})`,
                // background: 'rgba(0,0,0,0.8)',
                // backgroundPosition: 'center',
                // height: '100%'
                // background: `
                // linear-gradient(rgba(0, 0, 0, 0.5), 
                // rgba(0, 0, 0, 0.6)),
                // url(https://api.tv24africa.com/public/storage/post_image/${firstFeed.featured_image}) top/cover fixed no-repeat`,
                // color: '#fff'
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
          }
          {
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
          }

        </div>
      </div>
    );
  }
}

export default Banner;
