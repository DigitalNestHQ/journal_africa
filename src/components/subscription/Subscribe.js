import React, { useContext, useEffect, useState } from 'react'
import authContext from '../../context/auth/authContext'
import './subscribe.css'
import PaymentButton from './payment_handler/PaymentButton'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FormHeader from '../reusables/navigation/formsReusables/FormHeader'
import Loader from '../loader/Loader'

const Subscribe = () => {
  const userContext = useContext(authContext)
  const { user, isAuthenticated } = userContext
  const [subscriptionPlans, setSubscriptionPlans] = useState(null)
  const [currency, setCurrency] = useState('NGN')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://api.tv24africa.com/api/v1/plans')
      .then((response) => {
        setSubscriptionPlans(response.data.plans)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (loading || subscriptionPlans === null) {
    <Loader />
  }

  return (
    <section className="subscribe-page">
      <header className="reg-sub-header">
        <div className="register-signup-wrapper subscribe-wrapper">
          <FormHeader/>
          <h2 className="subscribe-heading text-center text-white">
            Let's put you ahead with the news
          </h2>
        </div>
      </header>
      <main className="subscribe-main">
        <div className="register-signup-wrapper subscribe-main-wrapper">
          <div className="subscribe-board">
            <div className="subscribe-main-content">
              <div className="pay-currency-option">
                <h2 className="pay-in-currency">
                  Pay in {currency === 'NGN' ? 'NAIRA' : 'USD'}
                </h2>
                <div className="sub-curency">
                  <button
                    className="sub-curency_ngn"
                    onClick={() => setCurrency('NGN')}
                  >
                    NGN
                  </button>
                  <button
                    className="sub-curency_usd"
                    onClick={() => setCurrency('USD')}
                  >
                    USD
                  </button>
                </div>
              </div>
              <div className="subscirbe-flex-cards">
                {subscriptionPlans &&
                  subscriptionPlans.map((plan) => (
                    <div className="subscription-cards" key={plan.id}>
                      <h3 className="subscribtion-header">{plan.name}</h3>
                      <p className="subscription-desc">{plan.description}</p>
                      <h5 className="pricing">
                        {currency === 'NGN'
                          ? `N${plan.price_ngn}`
                          : currency === 'USD'
                          ? `$${plan.price_usd}`
                          : ''}
                      </h5>
                      {currency === 'USD' ? (
                        <span className="monthly-pricing">
                          {plan.price_usd === '48'
                            ? `$ ${plan.price_usd / 12} per month`
                            : plan.price_usd === '13.5'
                            ? `$ ${plan.price_usd / 3} per month`
                            : plan.price_usd === '5'
                            ? `$ ${plan.price_usd} per month`
                            : ''}
                        </span>
                      ) : (
                        ''
                      )}
                      {isAuthenticated ? (
                        <PaymentButton
                          packageID={plan.id}
                          packageName={plan.name}
                          profile={user}
                          title={plan.name}
                          amount={
                            currency === 'USD'
                              ? plan.price_usd
                              : currency === 'NGN'
                              ? plan.price_ngn
                              : null
                          }
                          description={plan.name}
                          currency={currency}
                        />
                      ) : (
                        <Link to="/login" className="subscription-btn">
                          Click to subscribe
                        </Link>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Subscribe
