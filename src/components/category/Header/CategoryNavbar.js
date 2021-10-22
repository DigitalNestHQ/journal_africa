import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/TV24Ergb.png';
// ../assets/images/TV24Ergb.png";
// import "./nav.css";
import './categorynavbar.css';
// import { HandleAuthButton } from "./HandleAuthButton";
import TopNav from '../../reusables/topnav';
import { pageurl } from '../../../utils/constants';
import { HandleAuthButton } from '../../reusables/navigation/Nav/HandleAuthButton';

const CategoryNavbar = () => {
  // state for showing navLinks or not - the setShow method is then attached to the onCLick handler for all navLinks
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="Navigation">
      <TopNav />
      <header>
        <div className="container-fluid">
          <nav
            className="navbar category-navbar navbar-expand-lg navbar-light navigation py-2 px-1 "
            style={{ flexDirection: 'row-reverse' }}
          >
            <Link
              to="/subscribe"
              className="nav-link mobile-subscribe-btn"
              style={{ marginRight: '0', marginTop: '20px' }}
            >
              subscribe
            </Link>

            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ marginTop: '20px', paddingLeft: '10px' }}
              onClick={() => setShowNav(true)}
            >
              {' '}
              <i style={{ color: '#E7332B' }} className="fas fa-bars" />
            </button>

            {/* nav-links */}
            {showNav && (
              <div
                className="collapse navbar-collapse category-collapse"
                id="collapsibleNavId"
              >
                <ul className="navbar-nav ml- mt-2 mt-lg-0 nav-mn">
                  <li className="nav-item">
                    <Link
                      className="nav-link ml-lg-1"
                      activeclassname="activeLink"
                      exact
                      to={pageurl.HOMEPAGE}
                      onClick={() => setShowNav(false)}
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link ml-lg-1"
                      activeclassname="activeLink"
                      // to={pageurl.GOVERNANCE}
                      to={{
                        pathname: '/news/categories',
                        search: `?category=Politics`,
                      }}
                      onClick={() => setShowNav(false)}
                    >
                      POLITICS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link ml-lg-1"
                      activeclassname="activeLink"
                      to={{
                        pathname: '/news/categories',
                        search: `?category=Business`,
                      }}
                      onClick={() => setShowNav(false)}
                    >
                      BUSINESS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link ml-lg-1"
                      activeclassname="activeLink"
                      to={{
                        pathname: '/news/categories',
                        search: `?category=Development`,
                      }}
                      onClick={() => setShowNav(false)}
                    >
                      DEVELOPMENT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link ml-lg-1"
                      activeclassname="activeLink"
                      to={{
                        pathname: '/news/categories',
                        search: `?category=Economy`,
                      }}
                      onClick={() => setShowNav(false)}
                    >
                      ECONOMY
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link ml-lg-1"
                      activeclassname="activeLink"
                      to={{
                        pathname: '/news/categories',
                        search: `?category=Finance`,
                      }}
                      onClick={() => setShowNav(false)}
                    >
                      FINANCE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link ml-lg-1"
                      activeclassname="activeLink"
                      to={{
                        pathname: '/news/categories',
                        search: `?category=Discover Africa`,
                      }}
                      onClick={() => setShowNav(false)}
                    >
                      DISCOVER AFRICA
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link ml-lg-1"
                      activeclassname="activeLink"
                      to={{
                        pathname: '/news/categories',
                        search: `?category=Tech Africa`,
                      }}
                      onClick={() => setShowNav(false)}
                    >
                      TECH AFRICA
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link ml-lg-1"
                      href="https://news.tv24africa.com/"
                      onClick={() => setShowNav(false)}
                    >
                      NEWS DAILY
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav mr- pr-  mt-2 mt-lg-0 nav-sub-i">
                  {/* {localStorage.token ? (
                  HandleAuthButton()
                ) : (
                  <Link
                    to="/login"
                    className="nav-link mt-3 mt-lg-0 px-4 text-white nav-sub-tp"
                  >
                    <i className="fas fa-sign-in-alt"></i> SIGN IN
                  </Link>
                )}
                <Link id="subscribe" to="/subscribe">
                  SUBSCRIBE
                </Link> */}
                  <li className="nav-item hd-bd">
                    {localStorage.token ? (
                      HandleAuthButton()
                    ) : (
                      <Link
                        to="/login"
                        className="nav-link mt-3 mt-lg-0 px- text-white nav-sub-tp"
                      >
                        <i className="fas fa-sign-in-alt"></i> SIGN IN
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            )}
            {/* end of nav-links */}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default CategoryNavbar;
