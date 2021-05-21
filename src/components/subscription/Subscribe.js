import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import FormHeader from "../reusables/navigation/formsReusables/FormHeader";
import authContext from "../../context/auth/authContext";

import "./subscribe.css";
import PaymentButton from "./payment_handler/PaymentButton";
import axios from "axios";

const Subscribe = () => {
  const userContext = useContext(authContext)
  const { user } = userContext;
  const isLoggedIn = user ? true : false;
  const [subscriptionPlans, setSubscriptionPlans] = useState(null)

  useEffect(() => {
    axios.get('https://api.tv24africa.com/api/v1/plans')
    .then((response)=>{
      console.log(response) 
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
  console.log(subscriptionPlans);
  return (
    <div className="container-fluid subscribe-container">
      <header className="subscribe-header">
        <FormHeader redirectTo="login" linkLabel="Sign In" hideSubscribe={true}/>
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
            <span className="sub-curency_ngn">NGN</span>
            <span className="sub-curency_usd">USD</span>
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
              subscriptionPlans && subscriptionPlans.map(({id, name, duration, price})=>{
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
                      <p className="sub-amount">{price}</p>
                      {
                        isLoggedIn ? (
                          <PaymentButton 
                            packageID={id} 
                            packageName={name}
                            profile={user} 
                            title={name}
                            amount={price} 
                            profile={user} 
                            description={name}
                            />
                        ):(
                          <Card.Link className="sub-signup" href="/signup">
                            Register to Subscribe
                          </Card.Link>
                        )
                      }
                    </Card.Body>
                  </Card>
                </div>
                )
              })
            }
            {/* <div className="col-sm-4 col-md-4 col-lg-3 m-5 m-md-5 m-lg-0 sub-crd">
              <Card>
                <Card.Body>
                  <Card.Title className="sub-crd-title text-center">
                    Monthly Subscription
                  </Card.Title>
                  <Card.Text className="sub-crd-txt text-center">
                    1-month access to 35+ new stories analysing Nigerian
                    businesses and the economy. Billed Monthly.
                  </Card.Text>
                  <p className="sub-amount">N4,000</p>
                  {
                    isLoggedIn ? (
                      <PaymentButton 
                        packageID="1"
                        packageName="monthly"
                        profile={user} 
                        title="Monthly Subscription" 
                        amount={4000} 
                        profile={user} 
                        description="Monthly Subscription" />
                    ):(
                      <Card.Link className="sub-signup" href="/signup">
                        Register to Subscribe
                      </Card.Link>
                    )
                  }
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-3 m-5 m-md-5 m-lg-0 sub-crd">
              <Card>
                <Card.Body>
                  <Card.Title className="sub-crd-title text-center">
                    Quarterly Subscription
                  </Card.Title>
                  <Card.Text className="sub-crd-txt text-center">
                    12-month access to 300+ new stories analysing Nigerian
                    businesses and the economy. Billed Annually.
                  </Card.Text>
                  <p className="sub-amount">N10,000</p>
                  {
                    isLoggedIn ? (
                      <PaymentButton 
                        packageID="2" 
                        packageName="quarterly" 
                        profile={user} 
                        title="Quarterly Subscription" 
                        amount={10000} 
                        profile={user} 
                        description="Quarterly Subscription"/>
                    ):(
                      <Card.Link className="sub-signup" href="/signup">
                        Register to Subscribe
                      </Card.Link>
                    )
                  }
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-3 m-5 m-md-5 m-lg-0 sub-crd">
              <Card>
                <Card.Body>
                  <Card.Title className="sub-crd-title text-center">
                    Annual Subscription
                  </Card.Title>
                  <Card.Text className="sub-crd-txt text-center">
                    12-month access to 300+ new stories analysing Nigerian
                    businesses and the economy. Billed Annually.
                  </Card.Text>
                  <p className="sub-amount">N35,000</p>
                  {
                    isLoggedIn ? (
                      <PaymentButton 
                        packageID="3" 
                        packageName="annual" 
                        profile={user} 
                        title="Monthly Subscription" 
                        amount={35000} 
                        profile={user} 
                        description="Annual Subscription"/>
                    ):(
                      <Card.Link className="sub-signup" href="/signup">
                        Register to Subscribe
                      </Card.Link>
                    )
                  }
                </Card.Body>
              </Card>
            </div> */}
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
