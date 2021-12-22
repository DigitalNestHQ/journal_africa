import React from 'react'
import { Link } from 'react-router-dom'
import './latestnews.css'
import { Row, Col, Card } from 'react-bootstrap'
import { LargeSizeAds } from '../ads/Ads'
import bannerAds from '../../../assets/images/bannerads.png'
import '../ads/ads.css'

const LatestNews = ({ data }) => {
  return (
    <section className="section-content-default my4">
      <div className="section-wrapper-default">
        <h5 className="categories-heading section-heading-default">
          Personalised Stories For Me
        </h5>
        <div className="personalized-content">
          <Row xs={1} md={4} className="g-4">
            {data.slice(0, 4).map((categ) => (
              <Col className="per-card" key={categ.id}>
                <Link to={`/post/${categ.slug}`} className="per-link">
                  <Card className="l-card">
                    <Card.Img
                      variant="top"
                      src={`https://api.tv24africa.com/public/storage/post_image/${categ.featured_image}`}
                      className="mb-3 card-img-latest"
                    />
                    <p className="premium-badge">
                      {categ.post_type === 'premium'
                        ? `${categ.post_type}`
                        : ''}
                    </p>
                    <Card.Body className="l-card-body">
                      <Card.Text>{categ.slug}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <div className="ad-sense">
          <LargeSizeAds img={bannerAds} />
        </div>
      </div>
    </section>
  )
}

export default LatestNews
