import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as podcastsAction from '../../../store/actions/podcastActions';
import NavBar from '../../../components/reusables/navigation/Nav/nav';
import Footer from '../../../components/reusables/navigation/Footer/footer';
import Loader from '../../../components/loader/Loader';
import CurrentPodcastDetails from './CurrentPodcastDetails';
import CurrentPodcastHeader from './CurrentPodcastHeader';
import './currentpodcast-style.css';

const CurrentPodCast = () => {
  const { collectionId } = useParams();
  const dispatch = useDispatch();

  const getPodcasts = useSelector((state) => state.getPodcast);
  const { loading, error, podcasts } = getPodcasts;

  useEffect(() => {
    dispatch(podcastsAction.getPodcasts());
    // eslint-disable-next-line
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  const podcastList = podcasts.filter((item) => item.category === collectionId);
  const podcastDetails = podcastList[0];

  return (
    <section className='pod-bg'>
      <NavBar />
      <div className='section-content-default pod-content'>
        <div className='section-wrapper-default'>
          {podcastList.length === 0 && !loading ? (
            <h5>
              No episodes available - Please check your internet connection
            </h5>
          ) : (
            <div>
              <CurrentPodcastHeader podcastDetails={podcastDetails} />
              <CurrentPodcastDetails podcastList={podcastList} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default CurrentPodCast;
