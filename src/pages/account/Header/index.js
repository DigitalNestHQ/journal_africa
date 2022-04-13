import React from "react";
import whiteLogo from "../../../assets/images/logo-white.svg";
import "./index.css";

const Header = () => {
  return (
    <header className="account-header">
      <div className="header-logo-wrapper">
        <img
          src={whiteLogo}
          alt="tv-24-africa-logo-white"
          className="header-logo"
        />
      </div>
    </header>
  );
};

export default Header;
