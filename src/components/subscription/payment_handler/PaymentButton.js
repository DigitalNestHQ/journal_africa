import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import checkoutLogo from './../../../assets/images/50x50 (2).ico'

export default function PaymentButton(props) {
    const { title, amount, profile, description, currency } = props;
    const { firstname, lastname, email, phone } = profile || {}
    const config = {
        public_key: process.env.REACT_APP_PAYMENT_PUBLIC_KEY,
        tx_ref: Date.now(),
        amount: amount,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
        email: email,
        phonenumber: phone,
        name: firstname + " " + lastname,
        },
        customizations: {
        title: title,
        description: description,
        logo:"https://drive.google.com/file/d/1SwEHlpsuOxQSVkMjgVOqjR7cCwQwAtxH/view?usp=sharing",
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    return (
        <button
            className="sub-signup"
            onClick={() => {
            handleFlutterPayment({
                callback: (response) => {
                console.log(response);
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
