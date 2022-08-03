import React, { useEffect } from 'react';
import Showcase from '../../components/homepage/showcase/Showcase';
import TeaserSection from '../../components/homepage/homepageTeaser/teaserSection';
import PoliticsAndGovernance from '../../components/homepage/politics/PoliticsAndGovernance';
import Tech from '../../components/homepage/lifestyle/LifeStyle';
import './homepage.css';
import FactCheck from '../../components/homepage/development/FactCheck';
import Economy from '../../components/homepage/economy/EconomyComponent';
import Business from '../../components/homepage/business/Business';
import { SignupTeaser } from '../../components/reusables/news/SignupTeaser';
import LatestNews from '../../components/homepage/latestnews/LatestNews';
import Loader from '../../components/loader/Loader';
import HomepagePodcast from '../../components/homepage/homepage-podcast/HomepagePodcast';
import Layout from '../../components/layout/mainlayout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import * as newsActions from '../../store/actions/newsActions';

const Homepage = () => {
  const dispatch = useDispatch();
  const getNews = useSelector((state) => state.getNews);
  const { loading, news } = getNews;
  const getWordpress = useSelector((state) => state.getWordpress);
  const { loading: wordpressLoading } = getWordpress;

  useEffect(() => {
    dispatch(newsActions.getNews());
    dispatch(newsActions.getWordpressNews());
  }, [dispatch]);

  if (loading || wordpressLoading) {
    return <Loader />;
  } else if (!loading && news.length !== 0) {
    const sorted = news.sort((a, b) => (a.created_at > b.created_at ? -1 : 1));

    return (
      <Layout>
        <main>
          <Showcase data={sorted} />
          <LatestNews data={sorted} />
          <TeaserSection data={sorted} />
          <Business data={sorted} />
          <FactCheck data={sorted} />
          <Economy data={sorted} />
          <PoliticsAndGovernance data={sorted} />
          <Tech data={sorted} />
          <HomepagePodcast data={sorted} />
          <SignupTeaser />
        </main>
      </Layout>
    );
  } else {
    return (
      <Layout category={true}>
        <h3 className='error-message'>
          No news Found - Please check your internet connection or reload the
          page
        </h3>
      </Layout>
    );
  }
};

export default Homepage;
