import React from 'react';
import '../business/business.css';
import { Link } from 'react-router-dom';
import { HtmlParseOptions } from '../../../_helper/parseNewsHtml';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col, Card } from 'react-bootstrap';
import './politicsandgovernance.css';

const Commentary = ({ data }) => {
  const businessNews = data.filter(
    (news) => news.category_id.toLowerCase() === 'politics and government'
  );

  return (
    <section className='commentary-section business-section section-content-default'>
      <div className='section-wrapper-default'>
        <h5 className='commentary-heading section-heading-default'>
          Commentary
        </h5>
        <div className='business-content'>
          <Row xs={1} lg={4} className='g-4'>
            {businessNews.slice(0, 4).map((categ, idx) => (
              <Col className='bus-col' key={categ.id}>
                <Link to={`/post/${categ.slug}`} className='bus-link'>
                  <Card className='com-card'>
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
                      <Card.Subtitle className='mb-3 font-bold slug-default text-white'>
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
            search: `?category=Commentary`,
          }}
          className='explore-red-btn'
        >
          Explore More...
        </Link>
      </div>
    </section>
  );
};

export default Commentary;
