import { useSelector, useDispatch } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action';

import './checkout.styles.scss';

const Checkout = () => {

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch()

  const addItemToCartHandler = (item) => {
    dispatch(addItemToCart(cartItems, item))
  }
  const removeItemFromCartHandler = (item) => {
    dispatch(removeItemFromCart(cartItems, item))
  }
  const clearItemFromCartHandler = (item) => {
    dispatch(clearItemFromCart(cartItems, item))
  }

  return (
    <div className="checkout-container">
      <h2>Checkout page</h2>

      <div>
        {cartItems.map((item) => {
          const { id, name, quantity } = item;
          return (
            <div key={id}>
              <h3>{name}</h3>
              <span>{quantity}</span>
              <br />
             
              <span onClick={() => addItemToCartHandler(item)}>increment</span>
              <br />
              <span onClick={() => removeItemFromCartHandler(item)}>decrement</span>
              <br />
              <span onClick={() => clearItemFromCartHandler (item)}>clear</span>
              <br />

            </div>
          );
        })}
      </div>

      <span> Total: {cartTotal}</span>
    </div>
  );
};

export default Checkout;
