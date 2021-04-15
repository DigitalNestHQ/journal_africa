import React from "react";
import { Link } from "react-router-dom";
import "./allNews.css";
const ShareNews = (props) => {
  return (
    <div className="row share-icons-container">
        <span className="small">Share this story</span>
        <div className="share-news">
          <span className="share-icon-wrap twt">
            <i className="fab fa-twitter"></i>{" "}
          </span>
          <span className="share-icon-wrap fb">
            <i className="fab fa-facebook"></i>{" "}
          </span>
          <span className="share-icon-wrap insta">
            <i className="fab fa-instagram"></i>{" "}
          </span>
          <span className="share-icon-wrap twt">
            <i className="fab fa-whatsapp wtsapp"></i>{" "}
          </span>
          <span className="share-icon-wrap lnk">
            <i className="fab fa-linkedin"></i> {" "}
          </span>
        </div>
    </div>
  );
};

export default ShareNews;
