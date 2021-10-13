import React, { useContext, useState } from "react";
import "./signupteaser.css";
import largeAds from "./../../../assets/images/largeads.png";
import { LargeSizeAds } from "../../homepage/ads/Ads";
import axios from "axios";
import Alerts from "../../alert/Alerts";
import AlertContext from "../../../context/alert/alertContext";

export const SignupTeaser = () => {
  const [emailAddress, setEmailAddress] = useState({ email: "" });
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  // function that handles news letter subscription
  const handleNewLetterSubscription = async (event) => {
    event.preventDefault();
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidation = regex.test(
      String(emailAddress.email).toLowerCase()
    );
    if (emailValidation) {
      setIsLoading(true);
      const url = "https://api.tv24africa.com/api/v1/newsletter";
      const response = await axios.post(url, emailAddress);
      // console.log(response)
      if (response.data.status === "success") {
        setAlert(response.data.message, "success");
        setIsLoading(false);
        setSubscribed(true);
      } else if (response.data.status == "error") {
        setAlert(response.data.message, "danger");
        setIsLoading(false);
        setSubscribed(false);
      }

      setTimeout(() => {
        setSubscribed(false);
        setEmailAddress({ email: "" });
      }, 2000);
    } else {
      return null;
    }
  };

  const handleChange = (e) =>
    setEmailAddress({ [e.target.name]: e.target.value });
  return (
    <React.Fragment>
      <div className="signup-teaser custom-container containt-fluid">
        <h3 className="teaser-message">
          Get exclusive stories, expert curation and expansive coverage on
          Africa every day in your inbox
        </h3>
        <form onSubmit={handleNewLetterSubscription}>
          <div className="form-inline my-3">
            <input
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              type="email"
              name="email"
              value={emailAddress.email}
              placeholder="Your Email Address Here"
              className="p-1 p-md-0 p-lg-2 form-control-lg"
              onChange={handleChange}
              required
            />
          </div>
          <Alerts />
          <button className="teaser--btn" type="submit">
            {/* if it's loading show please wait else show subscribed if success or back to default */}
            {isLoading
              ? "Please wait..."
              : subscribed
              ? "Subscribed"
              : "Subscribe"}
          </button>
        </form>
        <div className="custom-container">
          <div className="mb-5">
            <LargeSizeAds img={largeAds} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
