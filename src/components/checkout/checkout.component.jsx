import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart, cartTotal } =
    useContext(CartContext);

  return (
    <div className='checkout-container'>
      <h2>Checkout page</h2>
   
      <div>
        {cartItems.map((item) => {
          const { id, name, quantity } = item;
          return (
            <div key={id}>
              <h3>{name}</h3>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(item)}>decrement</span>
              <br />
              <span onClick={() => addItemToCart(item)}>increment</span>
            </div>
          );
        })}
      </div>

      <span> Total: {cartTotal}</span>
    </div>
  );
};

export default Checkout;
