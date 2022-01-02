import React from 'react'
import '../business/business.css'
import { Link } from 'react-router-dom'
import { HtmlParseOptions } from '../../../_helper/parseNewsHtml'
import ReactHtmlParser from 'react-html-parser'
import { Row, Col, Card } from 'react-bootstrap'

const Economy = ({ data }) => {
  const businessNews = data.filter((news) => news.category_id === 'Development')

  return (
    <section className="business-section  section-content-default">
      <div className="section-wrapper-default">
        <h5 className="business-heading section-heading-default"> Policy and Development</h5>
        <div className="business-content">
          <Row xs={1} lg={3} className="g-4">
            {businessNews.slice(0, 3).map((categ, idx) => (
              <Col className="bus-col" key={categ.id}>
                <Link to={`/post/${categ.slug}`} className="bus-link">
                  <Card className="bus-card">
                    <Card.Img
                      variant="top"
                      src={`https://api.tv24africa.com/public/storage/post_image/${categ.featured_image}`}
                      className="mb-3 card-img-business"
                    />
                    <p className="premium-badge">
                      {categ.post_type === 'premium'
                        ? `${categ.post_type}`
                        : ''}
                    </p>
                    <Card.Body className="bus-card-body">
                      <Card.Subtitle className="text-danger mb-3 font-bold slug-default">
                        {categ.slug}
                      </Card.Subtitle>
                      <Card.Text>
                        {ReactHtmlParser(
                          `${categ.post_description.substring(0, 130)}...`,
                          HtmlParseOptions,
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
            search: `?category=Development`,
          }}
          className="explore-red-btn"
        >
          Explore More...
        </Link>
      </div>
    </section>
  )
}

export default Economy
