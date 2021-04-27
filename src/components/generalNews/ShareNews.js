import React from "react";
import { Link } from "react-router-dom";
import "./allNews.css";
const ShareNews = (props) => {
  const { post_title, post_description,  } = props;
  return (
    <div className="row share-icons-container">
        <span className="small">Share this story</span>
        <div className="share-news">
          <a target="_blank" href={`http://twitter.com/intent/tweet/?text=${post_title}. Read More on&url=tv24africa.com`}>
            <span className="share-icon-wrap twt">
              <i className="fab fa-twitter"></i>{" "}
            </span>
          </a>
          <a target="_blank" href="https://facebook.com/sharer/sharer.php?u=tv24africa.com">
            <span className="share-icon-wrap fb">
              <i className="fab fa-facebook"></i>{" "}
            </span>
          </a>
          <a target="_blank" hreh="">
            <span className="share-icon-wrap insta">
              <i className="fab fa-instagram"></i>{" "}
            </span>
          </a>
          <a target="_blank" href={`http://api.whatsapp.com/send?text=${post_title}. Read More on tv24africa.com`}>
            <span className="share-icon-wrap twt">
              <i className="fab fa-whatsapp wtsapp"></i>{" "}
            </span>
          </a>
          <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=http://demo.tv24africa.com&title=${post_title} &summary=${post_title}&source=tv24africa`}>
            <span className="share-icon-wrap lnk">
              <i className="fab fa-linkedin"></i> {" "}
            </span>
          </a>
        </div>
    </div>
  );
};

export default ShareNews;
