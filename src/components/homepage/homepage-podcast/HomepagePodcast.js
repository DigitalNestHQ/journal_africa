import React, { useEffect } from 'react';
import '../business/business.css';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import '../politics/politicsandgovernance.css';
import './homepagepodcast.css';
import { useDispatch, useSelector } from 'react-redux';
import * as podcastsActions from '../../../store/actions/podcastActions';

const HomepagePodcast = () => {
  const dispatch = useDispatch();
  const getPodcast = useSelector((state) => state.getPodcast);
  const { loading, error, podcasts } = getPodcast;

  const uniqueIds = [];

  useEffect(() => {
    dispatch(podcastsActions.getPodcasts());
  }, [dispatch]);

  const uniquePodcast = podcasts.filter((item) => {
    const isDuplicate = uniqueIds.includes(item.category);

    if (!isDuplicate) {
      uniqueIds.push(item.category);
      return true;
    }
    return false;
  });

  return (
    <section className='business-section section-content-default'>
      <div className='section-wrapper-default'>
        <h5 className='business-header text-center section-heading-default'>
          Podcast
        </h5>
        <div className='business-content'>
          <Row xs={1} lg={4} className='g-4'>
            {uniquePodcast.slice(0, 4).map((categ, idx) => (
              <Col className='bus-col' key={categ.id}>
                <Link to={`/podcast`} className='bus-link'>
                  <Card className='com-card'>
                    <div className='card-img'>
                      <Card.Img
                        variant='top'
                        src={categ.image}
                        className='mb-3'
                      />
                    </div>
                    <i className='fas fa-microphone-alt'></i>
                    <Card.Body className='pod-card-body'>
                      <Card.Subtitle className='pod-title mb-3 font-bold slug-default'>
                        {categ.episode}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <Link to='/podcast' className='more-pod'>
          Explore More...
        </Link>
      </div>
    </section>
  );
};

export default HomepagePodcast;
