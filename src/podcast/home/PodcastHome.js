import React from "react";
import { PodNavBar } from "./podnavbar/PodNavBar";
import { CurrentPodCast } from "./currentPodcast/CurrentPodCast";
import { Teasers } from "./currentPodcast/Teasers";
import { LivePodCastAlert } from "./livepodcastalert/LivePodCastAlert";
import '../../components/homepage/business/business.css'
import { Link } from 'react-router-dom'
import { HtmlParseOptions } from '../../_helper/parseNewsHtml';
import ReactHtmlParser from 'react-html-parser'
import { Row, Col, Card } from 'react-bootstrap'
import '../../components/homepage/politics/politicsandgovernance.css'
import "./podcasthome.css"

//  THIS IS THE PODCAST PLAYING PAGE

export const PodcastHome = (props) => {

  let isAuth = false

  const businessNews =
    props.data && props.data.filter((news) => news.category_id === 'Business')
  console.log(businessNews)

  const handlePrem = (e) => {
    if (!isAuth) {
      e.preventDefault()
      alert('Subscribe')
    }
  }
  return (
    // <section className="podcast">
    //   <div className="podcast_container">
    //     {/* NAVBAR */}
    //     <PodNavBar />
    //     {/* LIVE PODCAST INDICATOR */}
    //     <LivePodCastAlert />
    //     <section className="pod_big_frame">
    //       <div className="pod_play_board">
    //         {/*  CURRENT PLATING PODCAST  */}
    //           <CurrentPodCast />
              
    //         {/*  3 TEASERS BESIFE CURRENT PLATING PODCAST  */}
    //         <Teasers />
    //       </div>
    //     </section>
    //     </div>
    // </section>
    <section className="commentary-section business-section">
    <div className="business-wrapper">
      <h5 className="commentary-heading">Commentary</h5>
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
                  <Card.Body className="bus-card-body">
                    <Card.Subtitle className="mb-3">
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
          search: `?category=Business`,
        }}
        className="more-business"
      >
        Explore More...
      </Link>
    </div>
  </section>
  );
};
