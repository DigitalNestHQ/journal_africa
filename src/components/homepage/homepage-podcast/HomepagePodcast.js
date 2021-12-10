import React from 'react'
import '../business/business.css'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import '../politics/politicsandgovernance.css'
import './homepagepodcast.css'

const HomepagePodcast = (props) => {
  let isAuth = false

  const businessNews =
    props.data && props.data.filter((news) => news.category_id === 'Business')

  const handlePrem = (e) => {
    if (!isAuth) {
      e.preventDefault()
      alert('Subscribe')
    }
  }
  return (
    <section className="business-section">
      <div className="business-wrapper">
        <h5 className="business-heading">Podcast</h5>
        <div className="business-content">
          <Row xs={1} lg={4} className="g-4">
            {businessNews.slice(3, 7).map((categ, idx) => (
              <Col className="bus-col" key={categ.id}>
                <Link
                  to={`/post/${categ.slug}`}
                  className="bus-link"
                  onClick={(e) => {
                    if (categ.post_type === 'premium') {
                      handlePrem(e)
                    }
                  }}
                >
                  <Card className="com-card">
                    <Card.Img
                      variant="top"
                      src={`https://api.tv24africa.com/public/storage/post_image/${categ.featured_image}`}
                      className="mb-3 card-img-business"
                    />
                    <i class="fas fa-microphone-alt"></i>
                    <Card.Body className="pod-card-body">
                      <Card.Subtitle className="pod-title mb-3">
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
          to={{
            pathname: '/news/categories',
            search: `?category=Business`,
          }}
          className="more-pod"
        >
          Explore More...
        </Link>
      </div>
    </section>
  )
}

export default HomepagePodcast
