import React from 'react'
import { Link } from 'react-router-dom'
import './latestnews.css'
import { Row, Col, Card } from 'react-bootstrap'
import { LargeSizeAds } from '../ads/Ads'
import bannerAds from '../../../assets/images/bannerads.png'
import '../ads/ads.css'

const LatestNews = ({ data }) => {
  let isAuth = false

  const handlePrem = (e) => {
    if (!isAuth) {
      e.preventDefault()
      alert('Subscribe')
    }
  }
  return (
    <section className="latest my-4">
      <div className="latest-container">
        <h5 className="categories-heading">Personalised Stories For Me</h5>
        <div className="personalized-content">
          <Row xs={1} md={4} className="g-4">
            {data.slice(0, 4).map((categ, idx) => (
              <Col className="per-card" key={categ.id}>
                <Link
                  to={`/post/${categ.slug}`}
                  className="per-link"
                  onClick={(e) => {
                    if (categ.post_type === 'premium') {
                      handlePrem(e)
                    }
                  }}
                >
                  <Card className="l-card">
                    <Card.Img
                      variant="top"
                      src={`https://api.tv24africa.com/public/storage/post_image/${categ.featured_image}`}
                      className="mb-3"
                    />
                    <Card.Body>
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
