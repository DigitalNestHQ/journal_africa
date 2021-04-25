import React, { useState } from 'react';
import './signupteaser.css';
import largeAds from "./../../../assets/images/largeads.png";
import { LargeSizeAds } from '../../homepage/ads/Ads';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const SignupTeaser = () => {
    const [email, setEmail] = useState(null)
    const [subscribed, setSubscribed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
      // function that handles news letter subscription
    const handleNewLetterSubscription = async() =>{
        setIsLoading(true)
        const url = "http://api.tv24africa.com/api/v1/newsletter";
        const response = await axios.post(url, email)
        if(response.status === 200){
            setIsLoading(false)
            setSubscribed(true)
        }else{
            setIsLoading(false)
            setSubscribed(false)
        }
    }


  const handleChange = (e) => setEmail({[e.target.name]: e.target.value });
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
                <h3 className="teaser-message">Get exclusive stories, expert curation and expansive coverage on Africa every day in your inbox</h3>
                <div className="form-inline my-3">
                    <input type="email" name="email" placeholder="Subscribe to Newsletter" className="p-1 p-md-0 p-lg-2 form-control-lg" onChange={handleChange} required/>
                    {/* <button 
                        className="btn px-2 my-3 mx-lg-1 sub--btn form-control" 
                        type="submit" 
                        onClick={()=>handleNewLetterSubscription()}>
                            if it's loading show please wait else show subscribed if success or back to default
                            {isLoading ? "Please wait..." : (subscribed ? "Subscribed" : "Subscribe")}
                    </button> */}
                </div>
                    <button 
                        className="teaser--btn" 
                        type="submit" 
                        onClick={()=>handleNewLetterSubscription()}>
                            {/* if it's loading show please wait else show subscribed if success or back to default */}
                            {isLoading ? "Please wait..." : (subscribed ? "Subscribed" : "Subscribe")}
                    </button>
                {/* <Link to="/signup"><button className="teaser--btn">Sign Up</button></Link> */}
            <div className="custom-container">
                <div className="mb-5">
                    <LargeSizeAds img={largeAds}/>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}
