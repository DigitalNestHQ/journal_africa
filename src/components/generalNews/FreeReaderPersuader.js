import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { pageurl } from "../../utils/constants"

export const NotLoggedIn = () => {
  return (
    <div className="not-logged-in">
      <h5 className="continue-sign-in">This story is free to read</h5>
      <p>To Continue Reading, register for free or sign in</p>
      <div className="signup-signin-cta">
        <Link to={pageurl.SIGNUP} className="not-logged-in-signup-btn">
          Sign Up
        </Link>
        <p>or</p>
        <Link to={pageurl.SIGNIN} className="not-logged-in-signin-btn">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export const LoggedInNotSubscribed = () => {
  const loginUser = useSelector((state) => state.loginUser)
  const { token } = loginUser
  return (
    <div className="logged-in-not-subscribed">
      <h5 className="beyond-premium">Read beyond the news</h5>
      <p className="premium-content">
        Subscribe to our premium content or Sign in
      </p>
      <div className="signup-signin-cta">
        <Link to={pageurl.SUBSCRIBE} className="not-logged-in-signup-btn">
          Subscribe
        </Link>
        {token === null && <p>or</p>}
        {token === null && (
          <Link to={pageurl.SIGNIN} className="not-logged-in-signin-btn">
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}
