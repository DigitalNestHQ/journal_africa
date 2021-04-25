import React from 'react';
import './signupteaser.css';
import largeAds from "./../../../assets/images/largeads.png";
import { LargeSizeAds } from '../../homepage/ads/Ads';

export const SignupTeaser = () => {
    return (
        <React.Fragment>
            {/* <div className="d-flex img-con">
                <div className="img">
                    <figure>

                    <img loading="lazy" src={dx}></img>
                    </figure>
                </div>
                <div className="img">
                    <figure>

                    <img loading="lazy" src={dx}></img>
                    </figure>
                </div>
                <div className="img">
                    <figure>

                    <img loading="lazy" src={dx}></img>
                    </figure>
                </div>
            </div> */}
            <div className="signup-teaser custom-container containt-fluid">
                <h3 class="teaser-message">Get exclusive stories, expert curation and expansive coverage on Africa every day in your inbox</h3>
                <button class="teaser--btn">Sign Up</button>
            <div className="custom-container">
                <div className="mb-5">
                    <LargeSizeAds img={largeAds}/>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}
