import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { pageurl } from '../../utils/constants';
import './freeReaderPersuader.css';

export const NotLoggedIn = () => {
  return (
    <div className='not-logged-in'>
      <h5 className='continue-sign-in'>This story is free to read</h5>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <p style={{ marginTop: '18px' }}>
          To Continue Reading, register for free or sign in
        </p>
      </div>
      <div className='signup-signin-cta'>
        <Link to={pageurl.SIGNUP} className='not-logged-in-signup-btn'>
          Sign Up
        </Link>
        <p>or</p>
        <Link to={pageurl.SIGNIN} className='not-logged-in-signin-btn'>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export const LoggedInNotSubscribed = () => {
  const loginUser = useSelector((state) => state.loginUser);
  const { token } = loginUser;
  const getUser = useSelector((state) => state.getUser);
  const { user: authUser } = getUser;

  return (
    <div className='logged-in-not-subscribed'>
      <h5 className='beyond-premium'>Read beyond the news</h5>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        {token === null && authUser?.subscription_status === null ? (
          <>
            <div className='login-not-subscribed'>
              <p>
                This story is only available to premium Subscribers. You have no
                active subscription.
              </p>
              <p>Click Subscribe to choose a subscription plan.</p>
            </div>
          </>
        ) : (
          <>
            <div className='not-logged-in'>
              <p>
                This story is a premium content and only available to premium
                subscribers.
              </p>
              <p>To continue reading, subscribe or sign in.</p>
            </div>
          </>
        )}
      </div>
      <div className='signup-signin-cta'>
        <Link to={pageurl.SUBSCRIBE} className='not-logged-in-signup-btn'>
          Subscribe
        </Link>
        {token === null && <p>or</p>}
        {token === null && (
          <Link to={pageurl.SIGNIN} className='not-logged-in-signin-btn'>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};
