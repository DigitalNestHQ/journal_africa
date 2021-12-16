import Navbar from 'components/reusables/navigation/Nav/nav'
import React from 'react'
// import CategoryNavbar from '../category/Header/CategoryNavbar';
import Footer from '../reusables/navigation/Footer/footer'
import Header from './Header'
import MainSection from './mainSection'
import './index.css'

const ContactUs = () => (
  <React.Fragment>
    <Navbar />
    <div className="cnt-page">
      <header className="contact-header" />
      <MainSection />
    </div>
    <Footer />
  </React.Fragment>
)

export default ContactUs
