import React, { useState, useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import Alerts from "../alert/Alerts"
import "./signup.css"
import FormHeader from "../reusables/navigation/formsReusables/FormHeader"

import AlertContext from "../../context/alert/alertContext"
import AuthContext from "../../context/auth/authContext"
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  })
  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)
  const history = useHistory()
  const { setAlert } = alertContext
  const { register, error, clearErrors, isAuthenticated, loading } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/")
    }
    if (error === "User already exists..") {
      setAlert(error, "danger")
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history])

  const { firstname, lastname, email, phone, password } = user
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    if (
      firstname.length < 2 ||
      lastname.length < 2 ||
      email === "" ||
      phone === "" ||
      password === ""
    ) {
      setAlert("Please provide all the details", "danger")
    } else if (password.length < 6) {
      setAlert("Password is too short", "danger")
    } else {
      register({
        firstname,
        lastname,
        email,
        phone,
        password,
      })
        .then((response) => {
          if (response.data.status === "success") {
            history.push("/success")
            setUser({
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              password: "",
            })
          }
        })
        .catch((error) => {
          if (error) {
            console.log(error)
          }
        })
    }
  }

  return (
    <header className="register">
      <div className="register-signup-wrapper">
        <FormHeader />
        <div className="reg-showcase">
          <div className="reg-content-grid">
            <div className="reg-benefits">
              <ul className="reg-benefits-list">
                <li className="reg-benefits-list-item">
                  Read beyond the news.
                </li>
                <li className="reg-benefits-list-item">
                  Explore indepth analysis and correct to details content.
                </li>
                <li className="reg-benefits-list-item">
                  Access exclusive stories, expert curation and expansive
                  coverage on Journal Africa website and Mobile App.
                </li>
                <li className="reg-benefits-list-item">
                  Listen to live radio and podcast on Journal Africa website and
                  Mobile App.
                </li>
                <li className="reg-benefits-list-item">
                  No commitement, cancel anytime.
                </li>
              </ul>
            </div>
            <div className="reg-form-outer-container">
              <h5 className="reg-form-header">Create an Account</h5>
              <Alerts />
              <form onSubmit={onSubmit}>
                <div className="form-group form-group-flex">
                  <div className="reg-form-first">
                    <label htmlFor="firstName" className="reg-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Enter First Name"
                      className="form-control reg-input"
                      value={firstname}
                      onChange={onChange}
                      minLength="2"
                      required
                    />
                  </div>
                  <div className="reg-form-last">
                    <label htmlFor="lastName" className="reg-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Enter Last Name"
                      className="form-control reg-input"
                      value={lastname}
                      onChange={onChange}
                      minLength="2"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="reg-label">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter email..."
                    className="form-control reg-input"
                    value={email}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="reg-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Enter your phone number (e.g +2347030403416)"
                    className="form-control reg-input"
                    value={phone}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group password-input">
                  <label htmlFor="password" className="reg-label">
                    Password
                  </label>
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    placeholder="Enter Password"
                    className="form-control reg-input"
                    value={password}
                    onChange={onChange}
                    minLength="6"
                    required
                  />
                  <span
                    className="show-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "hide" : "show"}
                  </span>
                </div>
                <div className="form-group check-section">
                  <input
                    type="checkbox"
                    name="agree"
                    className="agree-checkbox"
                    required
                  />
                  <label htmlFor="agree" className="reg-agree-label">
                    I agree to the Terms and{" "}
                    <span>
                      {" "}
                      <Link to="/privacy-policy" className="reg-conditions">
                        Conditions
                      </Link>
                    </span>{" "}
                    and{" "}
                    <span>
                      {" "}
                      <Link to="/privacy-policy" className="reg-policy">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>
                <input
                  type="submit"
                  value={`${loading ? "Please wait..." : "Continue"}`}
                  className="btn btn-red btn-block mb-3"
                  disabled={loading}
                />
              </form>
              <div className="already-have-account">
                <p className="m-0">Already have an Account?</p>
                <Link to="/login" className="reg-sign-in">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Signup
