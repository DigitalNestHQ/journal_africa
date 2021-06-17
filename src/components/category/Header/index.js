import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./index.css";
import { HandleAuthButton } from "../../reusables/navigation/Nav/HandleAuthButton";

const Header = ({ post_type }) => {
  return (
    <header className="discover-container">
      <div className="logo-container">
        <Link to="/">
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            className="ml-5"
            style={{ width: "75px" }}
          />
        </Link>
      </div>
      <div className="discover_header">
        <div className="africa-auth">
          {/* if the iaAuthentication is not ready, do not show the buttons */}
          {/* {
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
          </Link> */}
        </div>
        <h1 className="category-heading">
          {post_type && post_type.toUpperCase()}
        </h1>
      </div>
    </header>
  );
};

export default Header;
