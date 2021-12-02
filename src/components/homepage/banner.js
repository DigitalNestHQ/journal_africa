import React from 'react'
import { Card, Carousel, Row, Col } from 'react-bootstrap'
import { useViewPort } from '../hooks/Viewport'
import { Link } from 'react-router-dom'
import './homepage.css'
import './ads/ads.css'
// ads
import { LargeSizeAds } from './ads/Ads'
import bannerAds from './../../assets/images/bannerads.png'

const Banner = ({ data, sportCount, economyCount }) => {
  const free = data.filter((post) => post.post_type === 'free')
  const discoverAfrica = free.filter(
    (post) => post.category_id === 'Discover Africa',
  )
  const sportAfrica = free.filter((post) => post.category_id === 'Sport Africa')
  const economyAfrica = free.filter((post) => post.category_id === 'Economy')
  const economy = economyAfrica[economyCount]
  const sport = sportAfrica[sportCount]
  const { width } = useViewPort()
  const breakpoint = 991

  return (
    <section className="showcase">
      <div className="showcase-wrapper">
        <Row>
          <Col className="col-sm-12 ad-wrapper" lg={12}>
            <LargeSizeAds img={bannerAds} />
          </Col>
        </Row>
        <div className="flex-container">
          <Row>
            <Col lg={8} className="right-grid">
              <Carousel
                fade={false}
                className="carousel-slide"
                indicators={false}
                interval={5000}
                wrap={true}
                slide={false}
              >
                {discoverAfrica.slice(6, 11).map((categ) => {
                  const { featured_image, id, slug, category_id } = categ
                  return (
                    <Carousel.Item className="caro-item" key={id}>
                      <img
                        className="d-block w-100 h-100"
                        src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
                        alt="tv24africanews"
                      />
                      <Carousel.Caption className="caro-capxn">
                        <Link
                          to={{
                            pathname: '/news/categories',
                            search: `?category=${category_id}`,
                          }}
                          className="caro-link text-decoration-none p-2 text-left cap-ancor"
                        >
                          {category_id}
                        </Link>
                        <Link
                          to={`/post/${slug}`}
                          className="text-white text-left car-p text-capitalize"
                        >
                          {slug.toLowerCase()}
                        </Link>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </Col>
            {width > breakpoint ? <Col lg={4} className="left-grid">
              {economy && (
                <div className="cnt-1">
                  <Card className="text-white h-100">
                    <Card.Img
                      src={`https://api.tv24africa.com/public/storage/post_image/${economy.featured_image}`}
                      alt="Card image"
                      className="h-100 w-100"
                    />
                    <Card.ImgOverlay className="cnt-txt-wrap">
                      <Link
                        to={{
                          pathname: '/news/categories',
                          search: `?category=${economy.category_id}`,
                        }}
                        className="card-tag text-decoration-none p-2 cap-anco text-left"
                      >
                        {economy.category_id}
                      </Link>

                      <Link
                        to={`/post/${economy.slug}`}
                        className="card-msg text-left text-capitalize text-white"
                      >
                        {economy.slug}
                      </Link>
                    </Card.ImgOverlay>
                  </Card>
                </div>
              )}
              {sport && (
                <div className="cnt-2">
                  <Card className="text-white h-100">
                    <Card.Img
                      src={`https://api.tv24africa.com/public/storage/post_image/${sport.featured_image}`}
                      alt="Card image"
                      className="h-100 w-100"
                    />
                    <Card.ImgOverlay className="cnt-txt-wrap">
                      <Link
                        to={{
                          pathname: '/news/categories',
                          search: `?category=${sport.category_id}`,
                        }}
                        className="card-tag text-decoration-none p-2 cap-anco text-left"
                      >
                        {sport.category_id}
                      </Link>
                      <Link
                        to={`/post/${sport.slug}`}
                        className="card-msg text-left text-white"
                      >
                        {sport.slug}
                      </Link>
                    </Card.ImgOverlay>
                  </Card>
                </div>
              )}
            </Col> : ''}
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Banner
