import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { pageurl } from "../../utils/constants";
import FormHeader from "../reusables/navigation/formsReusables/FormHeader";
import Alerts from "../alert/Alerts";
import "./signup.css";

import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
const Signup = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [redirectToSubscribePage, setRedirectToSubscribePage] = useState(false);
  const history = useHistory();

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (localStorage.token) {
      // redirect user back to the home page if logged in
      history.push("/");
    }
    if (error === "User already exists..") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props]);

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  const { firstname, lastname, email, phone, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstname.length < 2 ||
      lastname.length < 2 ||
      email === "" ||
      phone === "" ||
      password === ""
    ) {
      setAlert("please provide all the details", "danger");
    } else if (password.length < 6) {
      setAlert("password is too short", "danger");
    } else {
      setIsLoading(true);
      register({
        firstname,
        lastname,
        phone,
        email,
        password,
      })
        .then((response) => {
          if (response.data.status === "success") {
            // only show success alert only if the status is from the backend
            setIsLoading(false);
            history.push(pageurl.SIGNUPSUCCESSFUL); // redirect user to the success page
            setAlert(
              "Registration successful, a link has been sent to your email",
              "success"
            );

            setTimeout(() => {
              setRedirectToSubscribePage(true);
            }, 3000);
            // clear the field
            setUser({
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              password: "",
            });
          }
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }
  };

  // REDIRECT USER TO THE SUBSCRIPTION PAGE AFTER A SUCCESSFUL REGISTRATION
  // redirectToSubscribePage && props.history.push('/subscribe')
  return (
    <div className="signup">
      <div className="page-wrap">
        <FormHeader redirectTo="login" linkLabel="Login" />
        <div className="container-fluid signup-wrap">
          <div className="signup-txt">
            <h1>
              When you sign up to TV24 Africa News, you are signing up for
              premium services that includes:
            </h1>
            <ul>
              <li>
                Exclusive reports, expert curation and expansive coverage of the
                real Africa story
              </li>
              <li>
                Podcast and livestream of trending and topical issues in Africa
              </li>
              <li>
                Access to all content on the TV24 Africa News website and mobile
                apps
              </li>
            </ul>
            <span>No commitment, cancel your subscription anytime</span>
          </div>
          <div className="form-wrap">
            <h2>Create an account</h2>
            {/* <Alerts /> */}
            <form className="form signup-form" onSubmit={onSubmit}>
              <div className="row mb-3">
                <div className="col-sm-6 inp-half">
                  <label htmlFor="first name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="First name"
                    name="firstname"
                    value={firstname}
                    onChange={onChange}
                    required
                    minLength="2"
                  />
                </div>
                <div className="col-sm-6 inp-half">
                  <label htmlFor="Last name" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastname"
                    value={lastname}
                    onChange={onChange}
                    required
                    minLength="2"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your phone number (e.g +2347030403416)"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mb-1">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                  minLength="6"
                />
                <span
                  className="showPassword"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "hide" : "show"}
                </span>
              </div>
              <div className="mb-2 my-0">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                  />
                  <label
                    className="form-check-label tclabel"
                    for="invalidCheck2"
                  >
                    I agree to the TV4Africa{" "}
                    <Link className="link_terms" to={pageurl.COOKIEPOLICY}>
                      Terms and Conditions
                    </Link>{" "}
                  </label>
                </div>
              </div>
              <Alerts />
              <button className="my-2" type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Sign Up"}{" "}
              </button>
            </form>
            <div className="gosignup">
              <h5>
                Already have an account?{" "}
                <Link className="gsignup" to="/login">
                  {" "}
                  Sign In{" "}
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
