import React from 'react';
import '../business/business.css';
import { Link } from 'react-router-dom';
import { HtmlParseOptions } from '../../../_helper/parseNewsHtml';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col, Card } from 'react-bootstrap';
import './lifestyle.css';

const Business = ({ data }) => {
  const businessNews = data.filter(
    (news) => news.category_id.toLowerCase() === 'gender and human rights'
  );

  return (
    <section className='business-section section-content-default'>
      <div className='section-wrapper-default'>
        <h5 className='business-header section-heading-default'>
          Gender and Human Rights
        </h5>
        <div className='business-content'>
          <Row xs={1} lg={2} className='g-4'>
            {/* {businessNews.slice(3, 5).map((categ, idx) => ( */}
            {businessNews.slice(0, 2).map((categ, idx) => (
              <Col className='com-col' key={categ.id}>
                <Link to={`/post/${categ.slug}`} className='bus-link'>
                  <Card className='bus-card'>
                    <Card.Img
                      variant='top'
                      src={categ.featured_image}
                      className='card-img-business'
                    />
                    <a href='#!' className='com-title text-white slug-default'>
                      Human Rights
                    </a>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <div className='business-content'>
          <Row xs={1} lg={3} className='g-4'>
            {businessNews.slice(3, 6).map((categ, idx) => (
              <Col className='bus-col' key={categ.id}>
                <Link to={`/post/${categ.slug}`} className='bus-link'>
                  <Card className='bus-card'>
                    <Card.Img
                      variant='top'
                      src={`https://api.tv24africa.com/public/storage/post_image/${categ.featured_image}`}
                      className='mb-3 card-img-business'
                    />
                    <p className='premium-badge'>
                      {categ.post_type === 'premium'
                        ? `${categ.post_type}`
                        : ''}
                    </p>
                    <Card.Body className='com-card-body'>
                      <Card.Subtitle className='mb-3 slug-default'>
                        {categ.slug}
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
            search: `?category=Gender and human rights`,
          }}
          className='explore-red-btn'
        >
          Explore More...
        </Link>
      </div>
    </section>
  );
};

export default Business;
