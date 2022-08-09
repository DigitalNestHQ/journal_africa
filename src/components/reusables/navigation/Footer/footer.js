/* eslint-disable no-restricted-globals */
import React from 'react';
import GooglePlayImg from '../../../../assets/images/playstoreimg.png';
import ApplePlayImg from '../../../../assets/images/apple.jpg';
import './footer.css';
import { Link } from 'react-router-dom';
import { pageurl } from '../../../../utils/constants';
const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-wrapper'>
        <div className='footer-content'>
          <div className='footer-grid'>
            <h6 className='footer-heading'>About</h6>
            <ul className='footer-list'>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link to='/about' className='footer-link'>
                  About Us
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link to={pageurl.TERMSANDCONDITIONS} className='footer-link'>
                  Terms and Conditions
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link to='/code-of-ethics' className='footer-link'>
                  Code of Ethics
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link to={pageurl.PRIVACYPOLICY} className='footer-link'>
                  Privacy Policy
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link to='/faq' className='footer-link'>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-grid'>
            <h6 className='footer-heading'>Connect</h6>
            <ul className='footer-list'>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link to='/contact' className='footer-link'>
                  Contact Us
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link to='/advertising' className='footer-link'>
                  Advertise
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link to='/' className='footer-link'>
                  Newsletters
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link to='/write-for-us' className='footer-link'>
                  Write for us
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link to='/copyright' className='footer-link'>
                  Copyright Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-grid'>
            <h6 className='footer-heading'>Section</h6>
            <ul className='footer-list'>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link to='/podcast' className='footer-link'>
                  Podcast
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: `?category=Gender and human rights`,
                  }}
                  className='footer-link'
                >
                  Gender and human rights
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=Commentary',
                  }}
                  className='footer-link'
                >
                  Commentary
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=Fact Check Africa',
                  }}
                  className='footer-link'
                >
                  Fact Check Africa
                </Link>
              </li>
              <li
                className='footer-list-item'
                onClick={() =>
                  scrollTo({
                    behavior: 'auto',
                    top: 0,
                  })
                }
              >
                <Link
                  to={{
                    pathname: '/news/categories',
                    search: '?category=In-Depth Africa',
                  }}
                  className='footer-link'
                >
                  In-Depth Africa
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-grid'>
            <h6 className='footer-heading'>Download app</h6>
            <div className='img-footer-cont'>
              <div className='img-google-container'>
                <img src={GooglePlayImg} alt='google' className='google' />
              </div>
              <div className='img-apple-container'>
                <img src={ApplePlayImg} alt='apple' className='apple' />
              </div>
            </div>
            <ul className='download-list'>
              <li className='download-list-item'>
                <a
                  href='https://www.instagram.com/journalafrica/'
                  target='_blank'
                  rel='noreferrer'
                  className='download-link'
                >
                  {' '}
                  <i className='fab fa-instagram'></i>{' '}
                </a>
              </li>
              <li className='download-list-item'>
                <a
                  href='https://www.facebook.com/JournalAfrica'
                  target='_blank'
                  rel='noreferrer'
                  className='download-link'
                >
                  {' '}
                  <i className='fab fa-facebook'></i>{' '}
                </a>
              </li>
              <li className='download-list-item'>
                <a
                  href='https://twitter.com/JournalAfrica_'
                  className='download-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  <i className='fab fa-twitter'></i>{' '}
                </a>
              </li>
              <li className='download-list-item'>
                <a
                  href='https://www.linkedin.com/company/53142545/'
                  target='_blank'
                  rel='noreferrer'
                  className='download-link'
                >
                  {' '}
                  <i className='fab fa-linkedin'></i>{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='rights'>
          <p className='copy-rights'>
            &copy; 2021 Journal Africa Newspaper Limited,{' '}
            <a href='https://newsmediaafrica.com/' className='copy-right-red'>
              A Subsidiary of News Media Africa Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
