import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { pageurl } from "../../utils/constants";
import FormHeader from "../reusables/navigation/formsReusables/FormHeader";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <div className="container-fluid subscribe-container">
      <header className="subscribe-header">
        <FormHeader redirectTo="login" linkLabel="Sign In"/>
      </header>
      <div className="cur_crd-wrap">
        <div className="sub-banner">
          <p className="text-center">
            You have read the news. <br /> Now, Understand it
          </p>
        </div>
        <div className="container pay_plan-wrap">
          <h2>Pay from Nigeria</h2>
          <div className="sub-curency">
            <span className="sub-curency_ngn">NGN</span>
            <span className="sub-curency_usd">USD</span>
          </div>
        <div className="row px-5 text-white mb-5">
          <div class="col-12">
            <ul className="ml-0 ml-md-4 ml-lg-4">
              <li>Read beyond the news</li>
              <li>No commitment, cancel anytime</li>
              <li>Explore indept analysis and correct to details contents</li>
              <li>Listen to live radio and podcast on TV24 Africa website and mobile app</li>
              <li>Access exclusive stories, expert correct and expensive coverage and TV24 Africa website and mobile app</li>
            </ul>
          </div>
        </div>
          <div className="card-flex row">
            <div className="col-sm-4 col-md-4 col-lg-3 m-5 m-md-5 m-lg-0 sub-crd">
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
                  <Card.Link className="sub-signup" href="signup">
                    Register to Subscribe
                  </Card.Link>
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
                  <Card.Link className="sub-signup" href="/signup">
                    Register to Subscribe
                  </Card.Link>
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
                  <Card.Link className="sub-signup" href="/signup">
                    Register to Subscribe
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="trial">
            <button className="trial-btn">7 Days Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
