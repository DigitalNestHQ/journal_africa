import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../reusables/navigation/Nav/nav';
import Banner from './banner';
import TeaserSection from './homepageTeaser/teaserSection';
import PoliticsAndGovernance from './politics/PoliticsAndGovernance';
import Entertainment from './entertainment/Entertainment';
import { getNewsFeed } from '../../context/news/NewsApi';
import Tech from './lifestyle/LifeStyle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../reusables/navigation/Footer/footer';
import './homepage.css';
import Development from './development/Development';
import EconomyComponent from './economy/EconomyComponent';
import ViewPoint from './viewpoint/ViewPoint';
import Business from './business/Business';
import { SignupTeaser } from '../reusables/news/SignupTeaser';
import LatestNews from './latestnews/LatestNews';
import Loader from '../loader/Loader';
import { HomepagePodcast } from './homepage-podcast/HomepagePodcast';
import ExternalNews from './external-freenews/ExternalNews';

function Homepage() {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  // your useeffct function will cause memory  leaks
  useEffect(() => {
    AOS.init();
    let subscribe = true;
    if (subscribe) {
      getNewsFeed()
        .then((data) => {
          setNews(data);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
      return () => (subscribe = null);
    }

    // eslint-disable-next-line
  }, [slug, setNews]);
  if (!news) {
    return <Loader />;
  }

  return (
    <Fragment>
      <Nav />
      <Banner data={news} />
      {/* <ExternalNews data={news} /> */}
      <LatestNews data={news} />
      <TeaserSection data={news} />
      <PoliticsAndGovernance data={news} />
      <Business data={news} />
      <Development data={news} />
      <EconomyComponent data={news} />
      <Tech data={news} />
      <ViewPoint data={news} />
      <Entertainment data={news} />
      <HomepagePodcast />
      <SignupTeaser />
      {/* <SubscribeForm /> */}
      <Footer />
    </Fragment>
  );
}

export default Homepage;
