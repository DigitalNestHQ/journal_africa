import React from 'react';
import CategoryNavbar from '../category/Header/CategoryNavbar';
import Footer from '../reusables/navigation/Footer/footer';
import Header from './Header';
import MainSection from './mainSection';

const ContactUs = () => (
  <React.Fragment>
    <CategoryNavbar />
    <div className="cnt-page">
      <Header />
      <MainSection />
      <Footer />
    </div>
  </React.Fragment>
);

export default ContactUs;
