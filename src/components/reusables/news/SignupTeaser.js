import React, { useContext, useState, useEffect } from 'react'
import './signupteaser.css'
import Alerts from '../../alert/Alerts'
import AlertContext from '../../../context/alert/alertContext'
import authContext from '../../../context/auth/authContext'

export const SignupTeaser = () => {
  const [emailAddress, setEmailAddress] = useState({ email: '' })
  const alertContext = useContext(AlertContext)
  const userContext = useContext(authContext)
  const { loading, message, emailSub } = userContext
  const { setAlert } = alertContext

  const handleChange = (e) => {
    setEmailAddress({ [e.target.name]: e.target.value })
  }

  const handleNewLetterSubscription = (event) => {
    event.preventDefault()
    emailSub(emailAddress)
    setEmailAddress({ email: '' })
  }

  useEffect(() => {
    if (message === 'Email Already Subscribed') {
      setAlert(message, 'danger')
    }
    if (message === 'succesful') {
      setAlert(message, 'success')
    }
    // eslint-disable-next-line
  }, [message])

  return (
    <section className="signup-teaser section-content-default">
      <div className="section-wrapper-default">
        <h5 className="signup-message">
          Get exclusive stories, expert curation and expansive coverage on
          Africa every day in your inbox
        </h5>
        <Alerts />
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
            {loading ? 'Please wait...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}
