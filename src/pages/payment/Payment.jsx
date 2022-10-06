import React from 'react'
import { PaystackConsumer } from 'react-paystack';

const config = {
    reference: new Date().getTime().toString(),
    email: 'user@example.com',
    amount: 20000,
    publicKey: "pk_live_80458517341e0e85780177e5acee2f1014f264ec",
  };
  
  const handleSuccess = (reference) => {
    console.log(reference);
  };
  
  const handleClose = () => {
    console.log('closed');
  };


const Payment = () => {

    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose,
      };


  return (
    <div>
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
    </div>
  )
}

export default Payment