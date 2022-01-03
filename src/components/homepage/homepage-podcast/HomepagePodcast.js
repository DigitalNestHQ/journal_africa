import React from 'react'
import '../business/business.css'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import '../politics/politicsandgovernance.css'
import './homepagepodcast.css'

const HomepagePodcast = ({ data }) => {
  const businessNews = data.filter((news) => news.category_id === 'Business')
  return (
    <section className="business-section section-content-default">
      <div className="section-wrapper-default">
        <h5 className="business-header text-center section-heading-default">Podcast</h5>
        <div className="business-content">
          <Row xs={1} lg={4} className="g-4">
            {businessNews.slice(3, 7).map((categ, idx) => (
              <Col className="bus-col" key={categ.id}>
                <Link
                  to={`/post/${categ.slug}`}
                  className="bus-link"
                >
                  <Card className="com-card">
                    <Card.Img
                      variant="top"
                      src={`https://api.tv24africa.com/public/storage/post_image/${categ.featured_image}`}
                      className="mb-3 card-img-business"
                    />
                    <i className="fas fa-microphone-alt"></i>
                    <Card.Body className="pod-card-body">
                      <Card.Subtitle className="pod-title mb-3 font-bold slug-default">
                        {categ.slug}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <Link
          to='/podcast'
          className="more-pod"
        >
          Explore More...
        </Link>
      </div>
    </section>
  )
}

export default HomepagePodcast
