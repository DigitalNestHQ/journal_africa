import React, { Fragment } from 'react';
import Header from './Header/index';
import MainSection from './MainSection';
import DailyNews from './DailyNews';
import TopNav from '../reusables/topnav';
import Footer from '../reusables/navigation/Footer/footer';
import './index.css';

const DiscoverAfrica = () => {
  return (
    <Fragment>
      <TopNav />
      <Header />
      <div className="container-africa">
        <MainSection />
        <DailyNews />
      </div>
      <Footer />
    </Fragment>
  );
};

export default DiscoverAfrica;
