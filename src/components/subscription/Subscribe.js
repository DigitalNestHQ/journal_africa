import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import FormHeader from "../reusables/navigation/formsReusables/FormHeader";
import authContext from "../../context/auth/authContext";

import "./subscribe.css";
import PaymentButton from "./payment_handler/PaymentButton";
import axios from "axios";
import { Link } from "react-router-dom";

const Subscribe = () => {
  const userContext = useContext(authContext)
  const { user } = userContext;
  const isLoggedIn = user ? true : false;
  const [subscriptionPlans, setSubscriptionPlans] = useState(null)
  const [currency, setCurrency] = useState("NGN")

  useEffect(() => {
    axios.get('https://api.tv24africa.com/api/v1/plans')
    .then((response)=>{
      setSubscriptionPlans(response.data.plans)
    })
    .catch((error)=>console.log(error))
  }, [])
  
  useEffect(() => {
    if(localStorage.token){
      userContext.loadUser()
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container-fluid subscribe-container">
      <header className="subscribe-header">
        <FormHeader hideSubscribe={true}/>
      </header>
      <div className="cur_crd-wrap">
        <div className="sub-banner">
          <p className="text-center">
            You have read the news. <br /> Now, Understand it
            {/* Let's put you ahead with <br /> the news */}
          </p>
        </div>
        <div className="container pay_plan-wrap">
          <h2>Pay from Nigeria</h2>
          <div className="sub-curency">
            {/* select which currency to pay */}
            <span className="sub-curency_ngn" onClick={()=>setCurrency("NGN")}>NGN</span>
            <span className="sub-curency_usd" onClick={()=>setCurrency("USD")}>USD</span>
          </div>
        <div className="row px-5 text-white mb-5">
          <div className="col-12">
            <ul className="ml-0 ml-md-4 ml-lg-4">
              <li>Read beyond the news</li>
              <li>No commitment, cancel anytime</li>
              <li>Explore indepth analysis and correct to details contents</li>
              <li>Listen to live radio and podcast on TV24 Africa website and mobile app</li>
              <li>Access exclusive stories, expert correct and expensive coverage and TV24 Africa website and mobile app</li>
            </ul>
          </div>
        </div>
          <div className="card-flex row">
            {
              subscriptionPlans && subscriptionPlans.map(({id, name, duration, price_ngn, price_usd})=>{
                return(
                  <div className="col-sm-4 col-md-4 col-lg-3 m-5 m-md-5 m-lg-0 sub-crd" key={id}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="sub-crd-title text-center">
                        {name}
                      </Card.Title>
                      <Card.Text className="sub-crd-txt text-center">
                        {duration} access to 300+ new stories analysing Nigerian
                        businesses and the economy. Billed {name}.
                      </Card.Text>
                      <p className="sub-amount">
                        {/* render the price based on the selected currency */}
                        {currency == "USD" ? `$${price_usd}` : currency == "NGN" ? `#${price_ngn}` : null}
                      </p>
                      {
                        isLoggedIn ? (
                          <PaymentButton 
                            packageID={id} 
                            packageName={name}
                            profile={user} 
                            title={name}
                            amount={currency == "USD" ? price_usd : currency == "NGN" ? price_ngn : null} 
                            profile={user} 
                            description={name}
                            currency={currency}
                            />
                        ):(
                          <Link className="sub-signup" to="/login">
                            Login to Subscribe
                          </Link>
                        )
                      }
                    </Card.Body>
                  </Card>
                </div>
                )
              })
            }
          </div>
          <div className="trial">
            {/* <button className="trial-btn">7 Days Trial</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
