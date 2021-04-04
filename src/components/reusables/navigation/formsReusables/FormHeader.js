import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/TV24Ergb.png";
import "./formHeader.css"

const FormHeader = ({redirectTo, linkLabel}) => {
  return (
    // <Router>
      <header className="formHeader container-fluid mb-3">
        <div className="logo">
          <Link to="/"><img src={logo} alt="app logo" /></Link>
        </div>
        <div className="links">
          <Link className="links-item lnk1" to={`/${redirectTo}`}>{linkLabel}</Link>
          <Link className="links-item lnk2" to="/subscribe">Subscribe</Link>
        </div>
      </header>
    // </Router>
  );
};

export default FormHeader;
