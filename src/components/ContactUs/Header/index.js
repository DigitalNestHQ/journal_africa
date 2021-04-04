import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./index.css";
import { HandleAuthButton } from "../../reusables/navigation/Nav/HandleAuthButton";

const Header = () => {
  return(
    <header className="contact-header">
      <nav className="contact-header-nav">
        <Link to="/">
          <img src={logo} alt="logo" className="contact-logo logo" />
        </Link>
        <ul className="cont_lists">
          <li className="nav-items">
            <Link className="nav-links" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-links ">
              VOB
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-links ">
              DISCOVER AFRICA
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-links "
              to={{
                pathname: "/news/categories",
                search: `?category=Politics`,
              }}
            >
              POLITICS & GOVERNANCE
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-links "
              to={{
              pathname: "/news/categories",
              search: `?category=Business News`,
            }}
            >
              BUSINESS
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-links "
              to={{
              pathname: "/news/categories",
              search: `?category=Entertainment`,
            }}
            >
              ENTERTAINMENT
            </Link>
          </li>
          <li className="nav-items" id="last">
            <Link className="nav-links " id="last"
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
      <div className="hero">
        <div className="africa-auth">
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
        <h1>CONTACT US</h1>
      </div>
    </header>
  )
}

export default Header;
