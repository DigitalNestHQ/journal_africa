import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

const LatestRelatedNews = ({ slug, featured_image, post_type }) => {
  return (
    <Col className='related-card'>
      <Link to={`/latest/${slug}`} className='related-link'>
        <Card className='l-card'>
          <Card.Img
            variant='top'
            src={featured_image}
            className='mb-3 card-img-related'
            alt='Image'
          />
          <p className='premium-badge-left'>
            {post_type === 'premium' ? `${post_type}` : ''}
          </p>
          <Card.Body className='l-card-body'>
            <Card.Text>{slug}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default LatestRelatedNews;
