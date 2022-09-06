import React from 'react';
import { useSelector } from 'react-redux';
import '../subscribe.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
// import { PaystackButton } from 'react-paystack';

export default function PaymentButton({ packageID, amount, packageName }) {
  // const [loading, setLoading] = useState(false);
  const loginUser = useSelector((state) => state.loginUser);
  const { user } = loginUser;

  // function subscribe() {
  //   setLoading(true);

  const componentProps = {
    email: user.email,
    amount,
    metadata: {
      name: `${user.firstname} ${user.lastname}`,
      package: packageName,
      package_id: packageID,
    },
    publicKey: 'Click to Subscribe',
    text: `${user.id}-${Date.now()}`,
  };

  //   fetch(`${process.env.REACT_APP_API_BASE_URL}/pay`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setLoading(false);
  //       if (res.status === "success") {
  //         toast("Subscription added  successfully", { type: "success" });
  //       } else {
  //         toast("An error occurred", { type: "error" });
  //       }
  //     })
  //     .catch((e) => {
  //       setLoading(false);
  //       toast(e.message, { type: "error" });
  //     });
  // }

  return (
    <button
      className='subscription-btn'
      onClick={() => {
        // subscribe();
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
