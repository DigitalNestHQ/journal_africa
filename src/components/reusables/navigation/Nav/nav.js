import React, { useEffect } from "react";
import {
  Link,
} from "react-router-dom";
import logo from "../../../../assets/images/TV24Ergb.png";
import { pageurl } from "../../../../utils/constants";
import TopNav from "../../Topnav";
import "./nav.css";
import "../../header.css";
import { HandleAuthButton } from "./HandleAuthButton";

const Navbar = () => {
  return (
    <div className="Navigation">
      <TopNav />
      <header>
        <div className="container-fluid nav-wrapper">
          <nav className="navbar d-print navbar-expand-lg navbar-light navigation py-2 px-1 ">
            <Link
              to={pageurl.HOMEPAGE}
              className="navbar-brand logo"
              style={{ color: "#fff" }}
            >
              <img loading="lazy" src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <i style={{ color: "#E7332B" }} className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse justify-content-space-between" id="collapsibleNavId">
              <ul className="navbar-nav ml- mt-2 mt-lg-0 nav-mn d-flex justify-cntent-center" style={{width:"100%"}}>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-1"
                    activeclassname="activeLink"
                    exact
                    to={pageurl.HOMEPAGE}
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
                      pathname: "/news/categories",
                      search: `?category=Politics and Governance`,
                    }}
                  >
                    POLITICS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-1 remov--item-3"
                    activeclassname="activeLink"
                     to={{
                       pathname: "/news/categories",
                       search: `?category=Business and Finance`,
                      }}
                  >
                    BUSINESS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                  className="nav-link ml-lg-1"
                  activeclassname="activeLink"
                  to={{
                    pathname: "/news/categories",
                    search: `?category=Development`,
                  }}
                  >
                    DEVELOPMENT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-1 remov--item-2"
                    activeclassname="activeLink"
                     to={{
                       pathname: "/news/categories",
                       search: `?category=Politics and Governance`,
                      }}
                  >
                    GOVERNANCE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-1"
                    activeclassname="activeLink"
                    to={{
                      pathname: "/news/categories",
                      search: `?category=Economy`,
                    }}
                  >
                    ECONOMY
                  </Link>
                </li>
               
                {/* <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-1 remov--item-3"
                    activeclassname="activeLink"
                    to={{
                      pathname: "/news/categories",
                      search: `?category=Discovery Africa`,
                    }}
                  >
                    DISCOVER AFRICA
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-1 remov--item-1"
                    activeclassname="activeLink"
                      to={{
                      pathname: "/news/categories",
                      search: `?category=View Point`,
                    }}
                  >
                    VIEWPOINT
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-1 remov--item-2"
                    activeclassname="activeLink"
                      to={pageurl.PODCAST}
                  >
                    PODCAST
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mr- pr-  mt-2 mt-lg-0 nav-sub-i">
                <li className="nav-item hd-bd">
                {
                  localStorage.token ? HandleAuthButton() :(
                    <Link
                    to="/login"
                    className="nav-link mt-3 mt-lg-0 px- text-white nav-sub-tp"
                  >
                    <i className="fas fa-sign-in-alt"></i> SIGN IN
                  </Link>
                  )          
                  
                }
                </li>
                <li className="nav-item hd-bd">
                  <Link
                    to="/subscribe"
                    className="nav-link nav-sub mt-3 mt-lg-0 ml-lg-1 subscribe-custom-btn"
                  >
                    subscribe
                  </Link>
                  <span className="ml-2">
                    <i className="fas fa-search"></i> 
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
