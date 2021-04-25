import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { pageurl } from "../../utils/constants";
import FormHeader from "../reusables/navigation/formsReusables/FormHeader";
import Alerts from "../alert/Alerts";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import "./login.css";

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(localStorage.token){// redirect user back to the home page if logged in
      props.history.push('/');
    }
    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("email or password not correct", "danger");
      setIsLoading(false)
    }
    if(!error) {
      login({
        email,
        password,
      })
      .then((res)=>{
        console.log(res.status === 200);
        if(res.status === 200){
          setAlert("login successful", "success");
          setTimeout(() => {
              props.history.push("/");
          }, 1000)
        }
      })
      .catch((err)=>{
        setIsLoading(false)
        // setAlert("Login Failed", "danger");

      })

    }
  };
  return (
    <div className="login">
      <div className="page-wrap">
        <FormHeader redirectTo="signup" linkLabel="Sign Up" />
        <div className="container-fluid login-wrap">
          <div className="login-txt">
            <span>Telling</span>
            {/* <p>The Untold African Story</p> */}
            <p style={{fontSize: "56px", lineHeight: '1.2'}}> In-depth and correct to details analysis of original African stories</p>
          </div>
          <div className="form-wrap">
            <h2>Sign In</h2>
            {/* add the alert inside a container to solve the UI dropping down */}
            <div style={{height: '0.7rem'}}>
              <Alerts />
            </div>
            <form className="form login-form" onSubmit={onSubmit}>
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
                  required
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="form-control password-input"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  required
                  onChange={onChange}
                />
                <span className="showPassword"onClick={()=>setShowPassword(!showPassword)}>{showPassword ? "hide" : "show"}</span>
                <Link className="fpass" to="/forgotPassword">
                  Forgot your password?
                </Link>
              </div>
              <button className="my-2" type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Sign In"}{" "}

              </button>
            </form>
            <div className="gosignup">
              <h5>
                Don't have an account?{" "}
                <Link className="gsignup" to="/signup">
                  {" "}
                  SIGN UP{" "}
                  
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
