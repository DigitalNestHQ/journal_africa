import React from 'react'
import { Link } from 'react-router-dom'
import { pageurl } from '../../../utils/constants'
import './successpage.css'

export const SuccessPage = (props) => {
  return (
    <React.Fragment>
      <div className="success-page container">
        <i className="far fa-envelope-open"></i>
        <h1>Registration successful</h1>
        <p>
          An activation link has been sent to your registered email address.
          <br />
          Please check your inbox or your spam folder and click on the
          activation link to enable you sign in and continue reading TV24 Africa
          News after subscribing to your desired subscription plan.
        </p>
        <Link
          to={{
            pathname: pageurl.SIGNIN,
            state: {
              fromSuccessPage: true,
            },
          }}
        >
          Continue
        </Link>
      </div>
    </React.Fragment>
  )
}
