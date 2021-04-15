import React from "react";
import CategoryNavbar from "../category/Header/CategoryNavbar";
import Header from "./Header";
import MainSection from "./mainSection";

const ContactUs = () => (
  <React.Fragment>
  <CategoryNavbar />
  <div className="cnt-page">
    <Header />
    <MainSection />
  </div>
  </React.Fragment>
);

export default ContactUs;
