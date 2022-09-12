import React from 'react';
import { useSelector } from 'react-redux';
import '../subscribe.css';
import { useState } from 'react';
// import PaystackPop from '@paystack/inline-js';
import { PaystackConsumer } from 'react-paystack';

export default function PaymentButton({ packageID, amount, packageName }) {
  const loginUser = useSelector((state) => state.loginUser);
  const { user } = loginUser;

  const config = {
    reference: new Date().getTime().toString(),
    email: 'user@example.com',
    amount: 20000,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  };

  const handleSuccess = (reference) => {
    console.log(reference);
  };

  const handleClose = () => {
    console.log('closed');
  };

  const componentProps = {
    ...config,
    text: 'Paystack Button Implementation',
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  // function subscribe() {
  //   let handler = window.PaystackPop.setup({
  //     key: '',
  //     email: '',
  //     amount: 1900000,
  //     onClose: function () {
  //       alert('Window closed.');
  //       console.log('pay made');
  //     },
  //     callback: function (response) {
  //       let message = 'Payment complete! Reference: ' + response.reference;
  //       alert(message);
  //       console.log('pay made', message);
  //     },
  //   });
  //   handler.openIframe();
  // }

  return (
    <>
      {/* <button
        className='subscription-btn'
        onClick={() => {
          // initializePayment(onSuccess, onClose);
          // subscribe();
        }}
      >
        <span>Click to Subscribe</span>
      </button> */}
      <PaystackConsumer {...componentProps}>
        {({ initializePayment }) => (
          <button
            className='subscription-btn'
            onClick={() => initializePayment(handleSuccess, handleClose)}
          >
            Click to Subscribe
          </button>
        )}
      </PaystackConsumer>
    </>
  );
}
