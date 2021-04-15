import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./index.css";
import { HandleAuthButton } from "../../reusables/navigation/Nav/HandleAuthButton";

const Header = () => {
  return(
    <header className="contact-header">
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
        <div className="contact-us-heading">
          <h1>CONTACT US</h1>
        </div>
      </div>
    </header>
  )
}

export default Header;
