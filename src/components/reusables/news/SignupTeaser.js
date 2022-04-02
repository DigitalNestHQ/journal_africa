import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as userActions from "../../../store/actions/userActions"
import { showAlert } from "../../../store/actions/alertActions"
import "./signupteaser.css"
import Alerts from "../../alert/Alerts"

export const SignupTeaser = () => {
  const dispatch = useDispatch()
  const userSub = useSelector((state) => state.userSub)
  const { loading, message, error } = userSub
  const [emailAddress, setEmailAddress] = useState({ email: "" })

  useEffect(() => {
    if (message) {
      dispatch(showAlert(message, "success"))
    }
    if (error) {
      dispatch(showAlert(error, "danger"))
    }
  }, [dispatch, error, message])

  const handleChange = (e) => {
    setEmailAddress({ ...emailAddress, [e.target.name]: e.target.value })
  }

  const handleNewLetterSubscription = (event) => {
    event.preventDefault()
    dispatch(userActions.userEmailSub(emailAddress.email))
  }

  return (
    <section className="signup-teaser section-content-default">
      <div className="section-wrapper-default">
        <h5 className="signup-message">
          Get exclusive stories, expert curation and expansive coverage on
          Africa every day in your inbox
        </h5>
        {error && <Alerts />}
        {message && <Alerts />}
        <form onSubmit={handleNewLetterSubscription} className="signup-form">
          <div className="forms-group">
            <input
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              type="email"
              name="email"
              value={emailAddress.email}
              placeholder="Your Email Address Here"
              className="signup-input"
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit-btn" type="submit">
            {loading ? "Please wait..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  )
}
