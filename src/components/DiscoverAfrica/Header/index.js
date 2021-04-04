import React, { useContext } from "react";
import logo from "./logo.png";
import "./index.css";
import { Link } from "react-router-dom";
import authContext from "../../../context/auth/authContext";

const Header = () => {
  const userContext = useContext(authContext)
  const { isAuthenticated } = userContext;
  return (
    <header className="discover-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="discover_header">
        <nav className="discover_nav">
          <ul>
            <li className="nav-items">
              <a className="nav-links discover" href="/">
                HOME
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="/vod">
                VOD
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="/discover">
                DISCOVER AFRICA
              </a>
            </li>
            <li className="nav-items">
              {/* <a className="nav-links discover" href="/politics">
                POLITICS & GOVERNANCE
              </a> */}
              <Link
                className="nav-links discover"
                activeclassname="activeLink"
                // to={pageurl.GOVERNANCE}
                to={{
                  pathname: "/news/categories",
                  search: `?category=Politics`,
                }}
              >
                POLITICS/GOVERNANCE
              </Link>
            </li>
            <li className="nav-items">
              {/* <a className="nav-links discover" href="/business">
                BUSINESS
              </a> */}
              <Link
                className="nav-links discover"
                activeclassname="activeLink"
                // to={pageurl.BUSINESS}
                  to={{
                  pathname: "/news/categories",
                  search: `?category=Business News`,
                }}
              >
                BUSINESS
              </Link>
            </li>
            <li className="nav-items">
              {/* <a className="nav-links discover" href="/entertainment">
                ENTERTAINMENT
              </a> */}
              <Link
                className="nav-links discover"
                activeclassname="activeLink"
                  to={{
                  pathname: "/news/categories",
                  search: `?category=Entertainment`,
                }}
              >
                ENTERTAINMENT
              </Link>
            </li>
            <li className="nav-items" id="last">
              {/* <a className="nav-links discover" href="/lifestyle">
                LIFESTYLE
              </a> */}
              <Link
                className="nav-links discover"
                activeclassname="activeLink"
                // to={pageurl.LIFESTYLE}
                  to={{
                  pathname: "/news/categories",
                  search: `?category=Lifestyle`,
                }}
              >
                LIFESTYLE
              </Link>
            </li>
          </ul>
        </nav>
        <h1>DISCOVER AFRICA</h1>
        <div className="africa-auth">
          {/* <a href="/login">SIGN IN</a> */}
          {
            isAuthenticated ?
            <Link
              // path={withRouter(pageurl.SIGNIN)}
              to="/login"
              className="nav-link mt-3 mt-lg-0 px-4 text-white nav-sub-tp"
            >
              <i className="fas fa-sign-in-alt"></i>
              LOGOUT
            </Link>
            :
            <Link
              // path={withRouter(pageurl.SIGNIN)}
              to="/login"
              className="nav-link mt-3 mt-lg-0 px-4 text-white nav-sub-tp"
            >
              <i className="fas fa-sign-in-alt"></i>
              SIGN IN
            </Link>
          }
          <a id="subscribe" href="/subscribe">
            SUBSCRIBE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
