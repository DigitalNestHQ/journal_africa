import React from 'react';
import { useSelector } from 'react-redux';
import '../subscribe.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
// import PaystackPop from '@paystack/inline-js';
import { usePaystackPayment } from 'react-paystack';

export default function PaymentButton({ packageID, amount, packageName }) {
  // const [loading, setLoading] = useState(false);
  const loginUser = useSelector((state) => state.loginUser);
  const { user } = loginUser;

  const config = {
    reference: new Date().getTime().toString(),
    email: '',
    amount: 20000,
    publicKey: '',
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  const initializePayment = usePaystackPayment(config);

  function subscribe() {
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
        // initializePayment(onSuccess, onClose);
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
