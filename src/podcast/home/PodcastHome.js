import React, { useEffect } from 'react';
import PodcastCategories from './podcategories/PodcastCategories';
import { useViewPort } from '../../components/hooks/Viewport';
import '../../components/homepage/politics/politicsandgovernance.css';
import './podcasthome.css';
import NavBar from '../../components/reusables/navigation/Nav/nav';
import Footer from '../../components/reusables/navigation/Footer/footer';
import Loader from '../../components/loader/Loader';
import cybertruck from '../../assets/images/cybertruck1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import * as podcastsActions from '../../store/actions/podcastActions';

const PodcastHome = () => {
  const dispatch = useDispatch();
  const getPodcast = useSelector((state) => state.getPodcast);
  const { loading, error, podcasts } = getPodcast;
  const { width } = useViewPort();
  const breakpoint = 993;
  useEffect(() => {
    dispatch(podcastsActions.getPodcasts());
  }, [dispatch]);

  // let digitalPodcasts, radioPodcasts;

  if (loading) {
    return <Loader />;
  }

  // digitalPodcasts = podcasts.slice(0, 10);
  // radioPodcasts = podcasts.slice(10, 20);

  return (
    <section className='pod-bg'>
      <NavBar />
      <div className='section-content-default pod-content'>
        <div className='section-wrapper-default'>
          <div className='pod-content-grid'>
            {(podcasts.length === 0 && !loading) || error ? (
              <h5>
                Podcast unavailable - Please check your internet connection
              </h5>
            ) : (
              <div className='pod-categories'>
                <PodcastCategories
                  header={'Journal Africa Podcast'}
                  podcasts={podcasts}
                />
                {/* <PodcastCategories
                  header={"Radio & TV Podcasts"}
                  podcasts={radioPodcasts}
                /> */}
              </div>
            )}
            {width > breakpoint ? (
              <div className='pod-ads'>
                <div className='pod-home-ad-sense'>
                  <img
                    src={cybertruck}
                    alt='ads'
                    className='pod-home-ad-sense-img'
                  />
                </div>
                <div className='pod-home-ad-sense'>
                  <img
                    src={cybertruck}
                    alt='ads'
                    className='pod-home-ad-sense-img'
                  />
                </div>
                <div className='pod-home-ad-sense'>
                  <img
                    src={cybertruck}
                    alt='ads'
                    className='pod-home-ad-sense-img'
                  />
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PodcastHome;
