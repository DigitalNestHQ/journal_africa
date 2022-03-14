import React from "react"
import { Link } from "react-router-dom"
import logo from "../../../../assets/images/main logo.png"
import "./formHeader.css"

const FormHeader = () => {
  return (
    <nav className="register-nav subscribe-nav">
      <Link to="/" className="reg-nav-img-container">
        <img src={logo} alt="logo" className="reg-logo" />
      </Link>
      <ul className="reg-nav-list">
        <li className="reg-nav-list-item">
          <Link className="reg-signup" to="/">
            Home
          </Link>
        </li>
        <li className="reg-nav-list-item">
          <Link className="reg-signup" to="/signup">
            sign up
          </Link>
        </li>
        <li className="reg-nav-list-item">
          <Link className="reg-subscribe" to="/subscribe">
            subscribe
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default FormHeader
