import React from 'react'
import GooglePlayImg from '../../../../assets/images/playstoreimg.png'
import ApplePlayImg from '../../../../assets/images/apple.jpg'
// import { pageurl } from '../../../../utils/constants'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-grid">
            <h6 className="footer-heading">About</h6>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  About Us
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Terms and Conditions
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Code of Ethics
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Cookie Policy
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-grid">
            <h6 className="footer-heading">Connect</h6>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Advertise
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Newsletters
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Write for us
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-grid">
            <h6 className="footer-heading">Section</h6>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Podcast
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Places
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Lifestyle
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  Culture
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" className="footer-link">
                  People
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-grid">
            <h6 className="footer-heading">Download app</h6>
            <div className="img-footer-cont">
              <div className="img-google-container">
                <img src={GooglePlayImg} alt="google" className="google" />
              </div>
              <div className="img-apple-container">
                <img src={ApplePlayImg} alt="apple" className="apple" />
              </div>
            </div>
            <ul className="download-list">
              <li className="download-list-item">
                <Link to="/" className="download-link">
                  {' '}
                  <i className="fab fa-instagram"></i>{' '}
                </Link>
              </li>
              <li className="download-list-item">
                <Link to="/" className="download-link">
                  {' '}
                  <i className="fab fa-facebook"></i>{' '}
                </Link>
              </li>
              <li className="download-list-item">
                <Link to="/" className="download-link">
                  {' '}
                  <i className="fab fa-twitter"></i>{' '}
                </Link>
              </li>
              <li className="download-list-item">
                <Link to="/" className="download-link">
                  {' '}
                  <i className="fab fa-youtube"></i>{' '}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rights">
          <p className="copy-rights">
            &copy; 2021 TV24 Africa Newspaper Limited,{' '}
            <span className="copy-right-red">
              A Subsidiary of News Media Africa Limited
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
