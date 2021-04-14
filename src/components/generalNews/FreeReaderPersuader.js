import React from 'react'
import { Link } from 'react-router-dom'
import './freeReaderPersuader.css'
export const FreeReaderPersuader = () => {
    return (
        <React.Fragment>
            <div className="persuader">
                <h5>Read beyond the news</h5>
                {/* <p className="small">Put yourself ahead with our indept and correct to details analysis by subscribing to our premium contents</p> */}
                <p className="small">Subscribe to our premium contents</p>
                <Link to="/subscribe" className="btn btn-lg persuader-signup-btn">Click Here To Signup</Link>
                <span className="btn btn-lg persuader-login-btn">Already Subscribed? 
                    <Link to="/sign-in"> Sign In</Link>
                </span>
            </div>
        </React.Fragment>
    )
}
