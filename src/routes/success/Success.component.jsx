import { useSelector } from 'react-redux';

import { selectCurrentOrder } from '../../store/order/order.selector';

import './success.styles.styles.scss';

const Success = () => {
  const currentReceipt = useSelector(selectCurrentOrder);
  return (
    <section className="success-container">
      <h1>Thank you for your purchase!</h1>
      <img
        src={`${process.env.PUBLIC_URL}/images/gift-box-wood.jpg`}
        alt="gift box on woods"
      />
      <h3>Your order is # {currentReceipt}</h3>
    </section>
  );
};

export default Success;
