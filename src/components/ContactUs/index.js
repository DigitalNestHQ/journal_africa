import Navbar from "components/reusables/navigation/Nav/Nav"
import React from "react"
import Footer from "../reusables/navigation/Footer/Footer"
import Header from "./Header"
import MainSection from "./mainSection"
import "./index.css"

const ContactUs = () => (
  <React.Fragment>
    <Navbar />
    <div className="cnt-page">
      {/* <header className="contact-header" /> */}
      <Header />
      <MainSection />
    </div>
    <Footer />
  </React.Fragment>
)

export default ContactUs
