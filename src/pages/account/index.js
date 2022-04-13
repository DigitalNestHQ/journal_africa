import React from "react";
import Layout from "../../components/layout/mainlayout/Layout";
import "./index.css";
import Header from "./Header";
import { MainAccountSection } from "./MainAccountSection";

const ContactUs = () => (
  <Layout>
    <div className="cnt-page">
      <Header />
      <MainAccountSection />
    </div>
  </Layout>
);

export default ContactUs;
