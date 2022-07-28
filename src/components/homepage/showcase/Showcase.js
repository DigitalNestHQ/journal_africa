import React from 'react';
import { Card, Carousel, Row, Col } from 'react-bootstrap';
import { useViewPort } from '../../hooks/Viewport';
import { Link } from 'react-router-dom';
import '../../../pages/home/homepage.css';
import '../ads/ads.css';
import { LargeSizeAds } from '../ads/Ads';
import bannerAds from '../../../assets/images/bannerads.png';

const Showcase = ({ data }) => {
  const { width } = useViewPort();
  const breakpoint = 991;

  return (
    <section className='showcase section-content-default'>
      <div className='section-wrapper-default'>
        <div className='ad-wrapper'>
          <LargeSizeAds img={bannerAds} />
        </div>
        <div className='flex-container'>
          <Row>
            <Col lg={8} className='right-grid'>
              <Carousel
                fade={false}
                indicators={false}
                interval={5000}
                wrap={true}
                slide={true}
              >
                {data.slice(0, 3).map((categ) => {
                  const { featured_image, id, slug, category_id } = categ;
                  return (
                    <Carousel.Item className='caro-item' key={id}>
                      <img
                        className='d-block w-100 h-100 caro-img-cover'
                        src={featured_image}
                        alt='tv24africanews'
                      />
                      <Carousel.Caption className='caro-capxn'>
                        <Link
                          to={{
                            pathname: '/news/categories',
                            search: `?category=${category_id}`,
                          }}
                          className='caro-link text-decoration-none p-2 text-left cap-ancor'
                        >
                          {category_id}
                        </Link>
                        <Link
                          to={`/post/${slug}`}
                          className='text-white text-left car-p text-capitalize'
                        >
                          {slug.toLowerCase()}
                        </Link>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
            {width > breakpoint ? (
              <Col lg={4} className='left-grid'>
                {data.slice(3, 4).map((categ) => (
                  <div className='cnt-1' key={categ.id}>
                    <Card className='text-white h-100'>
                      <Card.Img
                        src={categ.featured_image}
                        alt='Card image'
                        className='h-100 w-100 caro-img-cover'
                      />
                      <Card.ImgOverlay className='cnt-txt-wrap'>
                        <Link
                          to={{
                            pathname: '/news/categories',
                            search: `?category=${categ.category_id}`,
                          }}
                          className='card-tag text-decoration-none p-2 cap-anco text-left'
                        >
                          {categ.category_id}
                        </Link>

                        <Link
                          to={`/post/${categ.slug}`}
                          className='card-msg text-left text-capitalize text-white'
                        >
                          {categ.slug}
                        </Link>
                      </Card.ImgOverlay>
                    </Card>
                  </div>
                ))}
                {data.slice(4, 5).map((categ) => (
                  <div className='cnt-2' key={categ.id}>
                    <Card className='text-white h-100'>
                      <Card.Img
                        src={categ.featured_image}
                        alt='Card image'
                        className='h-100 w-100 caro-img-cover'
                      />
                      <Card.ImgOverlay className='cnt-txt-wrap'>
                        <Link
                          to={{
                            pathname: '/news/categories',
                            search: `?category=${categ.category_id}`,
                          }}
                          className='card-tag text-decoration-none p-2 cap-anco text-left'
                        >
                          {categ.category_id}
                        </Link>
                        <Link
                          to={`/post/${categ.slug}`}
                          className='card-msg text-left text-white'
                        >
                          {categ.slug}
                        </Link>
                      </Card.ImgOverlay>
                    </Card>
                  </div>
                ))}
              </Col>
            ) : (
              ''
            )}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
