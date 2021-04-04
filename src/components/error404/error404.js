import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { pageurl } from "../../utils/constants";
import Nav from "../reusables/navigation/Nav/Nav";
import Footer from "../reusables/navigation/Footer/Footer";

import "./error404.css";

const Error404 = () => {
  return (
    <Fragment>
      <Nav />
        <div className="error404-page">
          <div className="text-center heading-title">
            <h1 className="error404-heading">Oops!</h1>
            <p className="error404-text mb-5">Error 404: Page Not Found</p>
            <Link className="error404-btn" to={pageurl.HOMEPAGE}>
              Go back Home
            </Link>
          </div>
        </div>
      <Footer />
    </Fragment>
  );
};

export default Error404;
