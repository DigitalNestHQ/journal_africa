import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/TV24Ergb.png";
import "./formHeader.css";

const FormHeader = ({ redirectTo, linkLabel, hideSubscribe }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    localStorage.token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);
  return (
    <header className="formHeader container-fluid mb-3">
      <div className="logo">
        <Link to="/">
          <img loading="lazy" src={logo} alt="app logo" />
        </Link>
      </div>
      <div className="links">
        {isLoggedIn && !hideSubscribe ? (
          <Link className="links-item lnk1" to="/">
            Home
          </Link>
        ) : (
          <Link className="links-item lnk1" to={`/${redirectTo}`}>
            {linkLabel}
          </Link>
        )}
        {hideSubscribe ? (
          <Link className="links-item lnk2" to="/">
            Home
          </Link>
        ) : (
          <Link className="links-item lnk2" to="/subscribe">
            Subscribe
          </Link>
        )}
      </div>
    </header>
  );
};

export default FormHeader;
