import React, { useState, useContext, useEffect } from "react"
import { Link, useHistory, useLocation } from "react-router-dom"
import Alerts from "../alert/Alerts"
import AlertContext from "../../context/alert/alertContext"
import AuthContext from "../../context/auth/authContext"
import FormHeader from "../reusables/navigation/formsReusables/FormHeader"
import "./login.css"
import "../signup/signup.css"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)
  const { setAlert } = alertContext
  const location = useLocation()

  const { login, error, clearErrors, isAuthenticated, loading } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      const fromSuccessPage = location.state && location.state.fromSuccessPage
      if (fromSuccessPage) {
        history.push("/")
      } else {
        history.goBack()
      }
    }
    if (error === "invalid_credentials") {
      setAlert(error, "danger")
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history])

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const { email, password } = user

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      setAlert("email or password not correct", "danger")
    }
    login({
      email,
      password,
    })
  }

  return (
    <header className="login">
      <div className="register-signup-wrapper login-wrapper">
        <FormHeader />
        <div className="log-showcase">
          <div className="reg-content-grid">
            <div className="reg-benefits">
              <h1 className="african-story">
                {" "}
                Telling the untold African Story
              </h1>
            </div>
            <div className="reg-form-outer-container">
              <h5 className="reg-form-header">Sign In</h5>
              <Alerts />
              <form onSubmit={onSubmit}>
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
                <input
                  type="submit"
                  value={`${loading ? "Please wait..." : "Continue"}`}
                  className="btn btn-red btn-block mb-3"
                  disabled={loading}
                />
              </form>
              <div className="forgot-password">
                <Link to="/" className="forgot-password-link">
                  Forgot password?
                </Link>
              </div>
              <div className="already-have-account">
                <p className="m-0 reg-dont-account">Don't have an Account?</p>
                <Link to="/signup" className="reg-sign-in">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Login
