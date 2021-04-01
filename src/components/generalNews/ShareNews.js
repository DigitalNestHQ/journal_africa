import React from "react";
import { Link } from "react-router-dom";
import "./allNews.css";
const ShareNews = (props) => {
  return (
    <div className="row news-icons my-4 py-3 pl-2 p-lg-0">
      {/* <h4> */}
        <span className="small mb-3 mb-lg-0">Share this story</span>
        <div className="news-icon">
          {/* <i className="col-12 col-md-3 col-lg-3 fas fa-share"></i> */}
          <span className="col-12 col-md-3 col-lg-3 d fb">
            <i className="fab fa-facebook"></i>{" "}
          </span>
          <span className="col-12 col-md-3 col-lg-3 d lnk">
            <i className="fab fa-linkedin"></i> {" "}
          </span>
          <span className="col-12 col-md-3 col-lg-3 d twt">
            <i className="fab fa-twitter"></i>{" "}
          </span>
        </div>
      {/* </h4> */}
    </div>
  );
};

export default ShareNews;
