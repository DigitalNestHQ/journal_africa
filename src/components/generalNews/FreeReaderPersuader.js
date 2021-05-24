import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../../context/auth/authContext';
import './freeReaderPersuader.css';

export const FreeReaderPersuader = () => {
    const userContext = useContext(authContext);
    const { user } = userContext;
    const subscribeButton = (<Link to="/subscribe" className="btn btn-lg persuader-subscribe-btn"> Subscribe</Link>)
    const authButton = ( 
        <React.Fragment>
            <Link to="/signup" className="btn btn-lg persuader-signup-btn">Click Here To Signup</Link>
            <Link to="/login" className="btn btn-lg persuader-login-btn">Already Subscribed? Sign In</Link>
        </React.Fragment> 
    )
    return (
        <React.Fragment>
            <div className="persuader">
                <h5>Read beyond the news</h5>
                <p className="small">Subscribe to our premium contents</p>
                {/* IF THE READER IS LOGGED IN SHOW THEM THE SUBSCRIBBED BUTTON IF THEY ARE NOT SUBSCRIBED */}
                {user && (subscribeButton)}

                {/* SHOW THE USER THE AUTHENTICATION BUTTON IF THEY ARE NOT SUBSCRIBED */}
                {!user && (authButton)}

            </div>
        </React.Fragment>
    )
}

export const ContinueReadingWithAuth = () => {
    return (
        <React.Fragment>
            <div className="continue-reading-paywall">
                <h5>To Continue Reading,</h5>
                <Link to="/signup" className="btn btn-sm continue-signup-btn text-uppercase">Sign Up</Link>
                <span>or</span>
                <Link to="/login" className="btn btn-sm continue-login-btn text-uppercase"> Sign In</Link>
            </div>
        </React.Fragment>
    )
}
