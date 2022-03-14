import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as userActions from "../../store/actions/userActions"
import Alerts from "../../components/alert/Alerts"
import "./signup.css"
import AuthLayout from "../../components/layout/authlayout/AuthLayout"
import { showAlert } from "../../store/actions/alertActions"

const Signup = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const createUser = useSelector((state) => state.createUser)
  const { loading, error, message } = createUser
  const loginUser = useSelector((state) => state.loginUser)
  const { token } = loginUser
  const [showPassword, setShowPassword] = useState(false)
  const [checked, setChecked] = useState(false)
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  })
  const { firstname, lastname, email, phone, password } = user

  useEffect(() => {
    if (token) {
      history.push("/")
    }

    if (message) {
      history.push("/success")
      setUser({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
      })
      dispatch(showAlert(message, "success"))
      dispatch(userActions.clearUserMessages())
    }

    if (error) {
      dispatch(showAlert(error, "danger"))
      dispatch(userActions.clearErrors())
    }
  }, [dispatch, error, history, message, token])

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
      dispatch(showAlert("Please provide all the details", "danger"))
    } else if (password.length < 6) {
      dispatch(showAlert("Password is too short", "danger"))
    } else if (!checked) {
      dispatch(showAlert("Agree to Terms and Conditions", "danger"))
    } else {
      dispatch(
        userActions.createUser({
          firstname,
          lastname,
          email,
          phone,
          password,
        })
      )
    }
  }

  return (
    <AuthLayout>
      <div className="reg-showcase">
        <div className="reg-content-grid">
          <div className="reg-benefits">
            <ul className="reg-benefits-list">
              <li className="reg-benefits-list-item">Read beyond the news.</li>
              <li className="reg-benefits-list-item">
                Explore indepth analysis and correct to details content.
              </li>
              <li className="reg-benefits-list-item">
                Access exclusive stories, expert curation and expansive coverage
                on Journal Africa website and Mobile App.
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
            {error && <Alerts />}
            {message && <Alerts />}
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
                  checked={checked}
                  onChange={() => setChecked((checked) => !checked)}
                />
                <label htmlFor="agree" className="reg-agree-label">
                  I agree to the{" "}
                  <span>
                    {" "}
                    <Link to="/privacy-policy" className="reg-conditions">
                      Terms and Conditions
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
    </AuthLayout>
  )
}

export default Signup
