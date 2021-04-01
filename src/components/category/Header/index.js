import React from "react";
import {Link } from "react-router-dom";
import logo from "./logo.png";
import "./index.css";
import { HandleAuthButton } from "../../reusables/navigation/Nav/HandleAuthButton";

const Header = ({post_type}) => {
  return (
    <header className="discover-container">
      <div className="logo-container">
        <Link to="/" >
        <img src={logo} alt="logo" className="ml-5" style={{"width": "75px"}}/>
        </Link>
      </div>
      <div className="discover_header">
        <nav className="discover_nav">
          <ul>
            <li className="nav-items">
              <Link className="nav-links discover" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links discover" to="/vod">
                VOD
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links discover" to="/discover">
                DISCOVER AFRICA
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links discover"
              //  to="/politics"
               to={{
                pathname: "/news/categories",
                search: `?category=Politics`,
              }}
               >
                POLITICS & GOVERNANCE
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links discover" 
              // to="/business"
              to={{
                pathname: "/news/categories",
                search: `?category=Business News`,
              }}
              >
                BUSINESS & FINANCE
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links discover" 
              // to="/entertainment"
              to={{
                pathname: "/news/categories",
                search: `?category=Entertainment`,
              }}
              >
                ENTERTAINMENT
              </Link>
            </li>
            <li className="nav-items" id="last">
              <Link className="nav-links discover" 
              // to="/lifestyle"
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
        <h1>{post_type && post_type.toUpperCase()}</h1>
       <div className="africa-auth">
         {/* if the iaAuthentication is not ready, do not show the buttons */}
          {
            localStorage.token ? HandleAuthButton() :(
              <Link
              to="/login"
              className="nav-link mt-3 mt-lg-0 px-4 text-white nav-sub-tp"
            >
              <i className="fas fa-sign-in-alt"></i> SIGN IN
            </Link>
            )          
            
          }
          <Link id="subscribe" to="/subscribe">
            SUBSCRIBE
          </Link>
        </div>
      </div>
    </header>
  );
};



export default Header;
