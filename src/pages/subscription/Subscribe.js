import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/actions/userActions';
import './subscribe.css';
import PaymentButton from './payment_handler/PaymentButton';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import AuthLayout from '../../components/layout/authlayout/AuthLayout';
import Alerts from '../../components/alert/Alerts';
import { showAlert } from '../../store/actions/alertActions';
// import { PaystackButton } from 'react-paystack';
// import {   } from '@pay'

const Subscribe = () => {
  const dispatch = useDispatch();
  const getPlans = useSelector((state) => state.getPlans);
  const { loading, error, plans } = getPlans;
  const userPay = useSelector((state) => state.userPay);
  const { error: payError, message } = userPay;
  const loginUser = useSelector((state) => state.loginUser);
  const { user, token } = loginUser;
  const [currency, setCurrency] = useState('NGN');

  useEffect(() => {
    if (plans.length === 0) dispatch(userActions.getPlans());

    if (message) {
      dispatch(showAlert(message, 'success'));
    }
    if (error) {
      dispatch(showAlert(error, 'danger'));
    }
    if (payError) {
      dispatch(showAlert(payError, 'danger'));
    }
  }, [dispatch, error, message, payError, plans.length]);

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthLayout>
      <h2 className='subscribe-heading text-center text-white'>
        Let's put you ahead with the news
      </h2>
      <div className='pay-currency-option'>
        <h2 className='pay-in-currency'>
          Pay in {currency === 'NGN' ? 'NAIRA' : 'USD'}
        </h2>
        <div className='sub-curency'>
          <button
            className='sub-curency_ngn'
            onClick={() => setCurrency('NGN')}
          >
            NGN
          </button>
          <button
            className='sub-curency_usd'
            onClick={() => setCurrency('USD')}
          >
            USD
          </button>
        </div>
      </div>
      <div className='subscirbe-flex-cards'>
        {error && <Alerts />}
        {payError && <Alerts />}
        {message && <Alerts />}

        {plans &&
          plans.map((plan) => (
            <div className='subscription-cards' key={plan.id}>
              <h3 className='subscribtion-header'>{plan.name}</h3>
              <p className='subscription-desc'>{plan.description}</p>
              <h5 className='pricing'>
                {currency === 'NGN'
                  ? `N${plan.price_ngn}`
                  : currency === 'USD'
                  ? `$${plan.price_usd}`
                  : ''}
              </h5>
              {currency === 'USD' ? (
                <span className='monthly-pricing'>
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

              {token ? (
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
                <Link to='/login' className='subscription-btn'>
                  Click to subscribe
                </Link>
              )}
            </div>
          ))}
      </div>
    </AuthLayout>
  );
};

export default Subscribe;
