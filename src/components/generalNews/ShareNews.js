import React from 'react'
import { Link } from 'react-router-dom'

const ShareNews = ({ next, previous }) => {
  return (
    <div className="next-prev-section">
      <div className="news-social-icons">
        <p className="share">Share this story</p>
        <span className="news-social-icons-items n-facebook">
          <i className="fab fa-facebook"></i>
        </span>
        <span className="news-social-icons-items n-twitter">
          <i className="fab fa-twitter"></i>
        </span>
        <span className="news-social-icons-items n-instagram">
          <i className="fab fa-instagram"></i>
        </span>
        <span className="news-social-icons-items n-whatsapp">
          <i className="fab fa-whatsapp"></i>
        </span>
        <span className="news-social-icons-items n-linkedin">
          <i className="fab fa-linkedin"></i>
        </span>
      </div>
      <div className="next-or-prev-section">
        <div className="previous">
          <p className="previous-article">Previous Article</p>
          <Link to={`/post/${previous.slug}`} className="prev-link">
            {previous.slug}
          </Link>
        </div>
        <div className="next">
          <p className="next-article">Next Article</p>
          <Link to={`/post/${next.slug}`} className="next-link">
            {next.slug}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ShareNews
