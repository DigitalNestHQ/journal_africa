import React from 'react';
import { Link } from 'react-router-dom';
import './successpage.css';

export const SuccessPage = (props) => {
    return (
        <React.Fragment>
            <div className="success-page container">
                <i className="far fa-envelope-open"></i>
                <h1>Registration successful</h1>
                <p>An activation link has been sent to your registered email address.</p>
                <Link to="/">Continue Reading News</Link>
            </div>
        </React.Fragment>
    )
}
