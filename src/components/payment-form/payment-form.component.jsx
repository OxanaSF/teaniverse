import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import './payment-form.styles.scss';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';





const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()


  const paymentHandler = async (e) => {
    e.preventDefault()

    if(!stripe || !elements) {
        return
    }

    


  };

  return (
    <div className="payment-form-container ">
      <form className="form-container ">
        <h3>Credit Card Payment</h3>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.wide}>Pay</Button>
      </form>
    </div>
  );
};

export default PaymentForm;
