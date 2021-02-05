import React from "react";
import logo from "../../../../assets/images/logo.png";
import { pageurl } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import TopNav from '../../topnav';
import "./nav.css";
import "../../header.css";

const Navbar = () => {
  return (
    <div className="Navigation">
	<TopNav/>
      <header>
        <div className="container" >
          <nav className="navbar navbar-expand-lg navbar-light navigation py-3 px-1">
            <a className="navbar-brand" href={pageurl.HOMEPAGE} style={{"color": "#fff"}}>
              {/* <img src={logo} alt="logo" /> */}
			  LOGO
            </a>
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
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link ml-lg-3"
                    activeClassName="activeLink"
                    exact
                    to={pageurl.HOMEPAGE}
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ml-lg-3"
                    activeClassName="activeLink"
                    to={pageurl.DISCOVER}
                  >
                    DISCOVER AREA
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ml-lg-3"
                    activeClassName="activeLink"
                    to={pageurl.GOVERNANCE}
                  >
                    POLITICS/GOVERNAANCE
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ml-lg-3"
                    activeClassName="activeLink"
                    to={pageurl.BUSINESS}
                  >
                    BUSINESS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ml-lg-3"
                    activeClassName="activeLink"
                    to={pageurl.ENTERTAINMENT}
                  >
                    ENTERTAINMENT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ml-lg-3"
                    activeClassName="activeLink"
                    to={pageurl.LIFESTYLE}
                  >
                    LIFESTYLE
                  </NavLink>
                </li>

                <li className="nav-item hd-bd">
                  <a
                    className="nav-link mt-3 mt-lg-0 px-4 text-white"
                    href={pageurl.SIGNIN}
                  >
                    SIGNIN
                  </a>
                  
                </li>
				<li className="nav-item hd-bd">
                  {/* <NavLink */}
				  <Button color="danger">SUBSCRIBE</Button>{" "}
                  <i className="fas fa-search"></i>
                  {/* </NavLink> */}
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
