// import { stripePromise }from

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import './checkout-form.styles.scss';


const CheckoutForm = () => {

  const elements = useElements()
  const stripe = useStripe()

  const submitHandler = async (e) => {
    e.preventDefault();

    const cardElement = elements.getElement(CardElement)
    console.log(CardElement)
  };



  return (
    <form onSubmit={submitHandler} className="payment-form-container">
      <CardElement />
      {/* <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button> */}
      <Button>Pay now</Button>
    </form>
  );
};

export default CheckoutForm;
