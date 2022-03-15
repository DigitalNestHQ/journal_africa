import React from "react"
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3"
import { useDispatch } from "react-redux"
import * as userActions from "../../../store/actions/userActions"
import "../subscribe.css"

export default function PaymentButton({
  title,
  currency,
  amount,
  profile,
  description,
  packageID,
  packageName,
}) {
  const { id, firstname, lastname, email, phone } = profile
  const dispatch = useDispatch()

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
    },
  }

  const handleFlutterPayment = useFlutterwave(config)

  return (
    <button
      className="subscription-btn"
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            const { flw_ref, amount } = response
            // send traction details to the backend
            const newPaymentHistory = {
              user_id: id,
              user_name: firstname + " " + lastname,
              package: packageName,
              package_id: packageID,
              amount,
              tx_ref: flw_ref,
            }
            dispatch(userActions.userPay(newPaymentHistory))
            closePaymentModal() // this will close the modal programmatically
          },
          onClose: () => {},
        })
      }}
    >
      Click to Subscribe
    </button>
  )
}
