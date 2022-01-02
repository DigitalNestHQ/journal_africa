import React from 'react'
import { Link } from 'react-router-dom'
import { pageurl } from '../../utils/constants'
import './freeReaderPersuader.css'

export const NotLoggedIn = () => {
  return (
    <div className="not-logged-in">
      <h5 className="continue-sign-in">To Continue Reading</h5>
      <div className="signup-signin-cta">
        <Link to={pageurl.SIGNUP} className="not-logged-in-signup-btn">Sign Up</Link>
        or
        <Link to={pageurl.SIGNIN} className="not-logged-in-signin-btn">Sign In</Link>
      </div>
    </div>
  )
}

export const LoggedInNotSubscribed = () => {
  return (
    <div className="logged-in-not-subscribed">
      <h5 className="beyond-premium">Read beyond the news</h5>
      <p className="premium-content">Subscribe to our premium content</p>
      <div className="not-sub-cta">
        <Link to={pageurl.SUBSCRIBE} className="loggedin-subscribe">Subscribe</Link>
      </div>
    </div>
  )
}
