import React from 'react';
import { useSelector } from 'react-redux';
import '../subscribe.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
// import PaystackPop from '@paystack/inline-js';

export default function PaymentButton({ packageID, amount, packageName }) {
  // const [loading, setLoading] = useState(false);
  const loginUser = useSelector((state) => state.loginUser);
  const { user } = loginUser;

  function subscribe() {
    console.log('pay now');
    let handler = window.PaystackPop.setup({
      key: '',
      email: '',
      amount: 1900000,
      onClose: function () {
        alert('Window closed.');
        console.log('pay made');
      },
      callback: function (response) {
        let message = 'Payment complete! Reference: ' + response.reference;
        alert(message);
        console.log('pay made', message);
      },
    });

    handler.openIframe();
  }

  return (
    <button
      className='subscription-btn'
      onClick={() => {
        subscribe();
      }}
    >
      {/* {loading ? (
        <span>subscribing, please wait</span>
      ) : (
        <span>Click to Subscribe</span>
        )} */}
      <span>Click to Subscribe</span>
      {/* <PaystackButton {...componentProps} /> */}
    </button>
  );
}
