import React from 'react'
import { Link } from 'react-router-dom'

const ShareNews = ({ next, previous }) => {
  return (
    <div className="next-prev-section">
      <div className="news-social-icons">
        <h5 className="slug-default mb-0">Share this story</h5>
        <ul className="share-icons">
          <li className="news-social-icons-items n-facebook">
            <i className="fab fa-facebook"></i>
          </li>
          <li className="news-social-icons-items n-twitter">
            <i className="fab fa-twitter"></i>
          </li>
          <li className="news-social-icons-items n-instagram">
            <i className="fab fa-instagram"></i>
          </li>
          <li className="news-social-icons-items n-whatsapp">
            <i className="fab fa-whatsapp"></i>
          </li>
          <li className="news-social-icons-items n-linkedin">
            <i className="fab fa-linkedin"></i>
          </li>
        </ul>
      </div>
      <div className="next-or-prev-section">
        <div className="previous">
          {previous.slug ? (
            <div>
              <p className="previous-article">Previous Article</p>
              <Link to={`/post/${previous.slug}`} className="prev-link">
                {previous.slug}
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="next">
          {next.slug ? (
            <div>
              <p className="next-article">Next Article</p>
              <Link to={`/post/${next.slug}`} className="next-link">
                {next.slug}
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default ShareNews
