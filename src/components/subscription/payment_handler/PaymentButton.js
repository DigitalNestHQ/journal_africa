import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";

export default function PaymentButton(props) {
  const {
    title,
    currency,
    amount,
    profile,
    description,
    packageID,
    packageName,
  } = props;
  const { id, firstname, lastname, email, phone } = profile || {};

  const config = {
    public_key: process.env.REACT_APP_PAYMENT_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phonenumber: phone,
      name: firstname + " " + lastname,
    },
    customizations: {
      title: title,
      description: description,
      logo: "https://drive.google.com/file/d/1SwEHlpsuOxQSVkMjgVOqjR7cCwQwAtxH/view?usp=sharing",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <button
      className="sub-signup"
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            const { flw_ref, amount } = response;
            // send traction details to the backend
            const newPaymentHistory = {
              user_id: id,
              user_name: firstname + " " + lastname,
              package: packageName,
              package_id: packageID,
              amount,
              tx_ref: flw_ref,
            };
            axios
              .post("https://api.tv24africa.com/api/v1/pay", newPaymentHistory)
              .then((response) => console.log(response))
              .catch((error) => console.log(error));
            closePaymentModal(); // this will close the modal programmatically
          },
          onClose: () => {},
        });
      }}
    >
      Click to Subscribe
    </button>
  );
}
