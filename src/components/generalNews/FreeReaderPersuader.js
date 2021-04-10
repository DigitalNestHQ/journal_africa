import React from 'react'
import { Link } from 'react-router-dom'
import './freeReaderPersuader.css'
export const FreeReaderPersuader = () => {
    return (
        <React.Fragment>
            <div className="persuader">
                <h5>Read beyond the news</h5>
                <p className="small">Put yourself ahead with our indept and correct to details analysis by subscribing to our premium contents</p>
                <Link to="/subscribe" className="btn btn-lg">Click here to signup</Link>
                <span className="d-block d-md-inline d-lg-inline pt-3">Already subscribed? 
                    <Link to="/sign-in"> Sign in</Link>
                </span>
            </div>
        </React.Fragment>
    )
}
