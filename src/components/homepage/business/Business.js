import React from 'react';
import './business.css';
import { Link } from 'react-router-dom';
import { HtmlParseOptions } from '../../../_helper/parseNewsHtml';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col, Card } from 'react-bootstrap';
import { LargeSizeAds } from '../ads/Ads';
import bannerAds from '../../../assets/images/heritage-ad.jpg';
import '../ads/ads.css';

const Business = ({ data }) => {
  const businessNews = data.filter(
    (news) => news.category_id.toLowerCase() === 'business and economy'
  );

  return (
    <section className='business-section section-content-default'>
      <div className='section-wrapper-default'>
        <h5 className='business-heading section-heading-default'>
          Business and Economy
        </h5>
        <div className='business-content'>
          <Row xs={1} lg={3} className='g-4'>
            {businessNews.slice(0, 3).map((categ, idx) => (
              <Col className='bus-col' key={categ.id}>
                <Link to={`/post/${categ.id}`} className='bus-link'>
                  <Card>
                    <Card.Img
                      variant='top'
                      src={categ.featured_image}
                      className='mb-3 card-img-business'
                    />
                    <p className='premium-badge'>
                      {categ.post_type === 'premium'
                        ? `${categ.post_type}`
                        : ''}
                    </p>
                    <Card.Body className='bus-card-body'>
                      <Card.Subtitle className='text-danger mb-3 font-bold slug-default'>
                        {categ.post_title}
                      </Card.Subtitle>
                      <Card.Text>
                        {ReactHtmlParser(
                          `${categ.post_description.substring(0, 130)}...`,
                          HtmlParseOptions
                        )}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <Link
          to={{
            pathname: '/news/categories',
            search: `?category=Business`,
          }}
          className='explore-red-btn'
        >
          Explore More...
        </Link>
        <div className='ad-sense mt-5'>
          <LargeSizeAds img={bannerAds} />
        </div>
      </div>
    </section>
  );
};

export default Business;
