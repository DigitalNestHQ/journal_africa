import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import authContext from '../../context/auth/authContext'
import { pageurl } from '../../utils/constants'
import './freeReaderPersuader.css'

export const FreeReaderPersuader = () => {
  const userContext = useContext(authContext)
  const { user } = userContext
  const subscribeButton = (
    <Link to="/subscribe" className="btn btn-lg persuader-subscribe-btn">
      {' '}
      Subscribe
    </Link>
  )
  const authButton = (
    <React.Fragment>
      <Link to="/signup" className="btn btn-lg persuader-signup-btn">
        Click Here To Signup
      </Link>
      <Link to="/login" className="btn btn-lg persuader-login-btn">
        Already Subscribed? Sign In
      </Link>
    </React.Fragment>
  )
  return (
    <React.Fragment>
      <div className="persuader" id="newsletter-section-sub">
        <h5>Read beyond the news</h5>
        <p className="small">Subscribe to our premium contents</p>
        {/* IF THE READER IS LOGGED IN SHOW THEM THE SUBSCRIBBED BUTTON IF THEY ARE NOT SUBSCRIBED */}
        {user && subscribeButton}

        {/* SHOW THE USER THE AUTHENTICATION BUTTON IF THEY ARE NOT SUBSCRIBED */}
        {!user && authButton}
      </div>
    </React.Fragment>
  )
}

export const ContinueReadingWithAuth = () => {
  return (
    <React.Fragment>
      <div className="continue-reading-paywall">
        <h5>To Continue Reading,</h5>
        <Link
          to="/signup"
          className="btn btn-sm continue-signup-btn text-uppercase"
        >
          Sign Up
        </Link>
        <span>or</span>
        <Link
          to="/login"
          className="btn btn-sm continue-login-btn text-uppercase"
        >
          {' '}
          Sign In
        </Link>
      </div>
    </React.Fragment>
  )
}

export const ContinueReadingWithSubscription = () => {
  return (
    <React.Fragment>
      <div className="continue-reading-paywall">
        <h5>To Continue Reading,</h5>
        <Link
          to={pageurl.SUBSCRIBE}
          className="btn btn-sm continue-signup-btn text-uppercase"
        >
          Subscibe
        </Link>
      </div>
    </React.Fragment>
  )
}

export const NotLoggedIn = () => {
  return (
    <div className="not-logged-in">
      <h5 className="continue-sign-in">To Continue Reading</h5>
      <div className="signup-signin-cta">
        <button className="not-logged-in-signup-btn">Sign Up</button>
        or
        <button className="not-logged-in-signin-btn">Sign In</button>
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
        <button className="loggedin-subscribe">Subscribe</button>
      </div>
    </div>
  )
}
