import React from 'react';
import './signupteaser.css';
import dx from '../../../assets/images/american-protest.jpg'

export const SignupTeaser = () => {
    return (
        <React.Fragment>
            {/* <div className="d-flex img-con">
                <div className="img">
                    <figure>

                    <img src={dx}></img>
                    </figure>
                </div>
                <div className="img">
                    <figure>

                    <img src={dx}></img>
                    </figure>
                </div>
                <div className="img">
                    <figure>

                    <img src={dx}></img>
                    </figure>
                </div>
            </div> */}
            <div className="signup-teaser custom-container containt-fluid">
                <h3 class="teaser-message">Get exclusive stories, expert curation and expansive coverage on Africa every day in your inbox</h3>
                <button class="teaser--btn">Sign Up</button>
            </div>
        </React.Fragment>
    )
}
