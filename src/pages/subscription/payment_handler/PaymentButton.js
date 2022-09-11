import React from 'react';
import { useSelector } from 'react-redux';
import '../subscribe.css';
import { useState } from 'react';
// import PaystackPop from '@paystack/inline-js';
import { usePaystackPayment } from 'react-paystack';

export default function PaymentButton({ packageID, amount, packageName }) {
  const loginUser = useSelector((state) => state.loginUser);
  const { user } = loginUser;

  const config = {
    reference: new Date().getTime().toString(),
    email: 'agbaayoh@gmail.com',
    amount: 20000,
    publicKey: 'pk_live_80458517341e0e85780177e5acee2f1014f264ec',
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log('closed');
  };

  const initializePayment = usePaystackPayment(config);

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
    <button
      className='subscription-btn'
      onClick={() => {
        initializePayment(onSuccess, onClose);
        // subscribe();
      }}
    >
      <span>Click to Subscribe</span>
    </button>
  );
}
