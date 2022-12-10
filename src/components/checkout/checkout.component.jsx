import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

// import { selectCurrentUser } from '../../store/user/user.selector';

import { clearWholeCart } from '../../store/cart/cart.action';

// import { selectOrders } from '../../store/orders/orders.selector';
// import { addOrderToHistory } from '../../store/orders/orders.action';

import ShoppingCartItemInOrder from '../shopping-cart-item-order/shopping-cart-item-order.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { db, createOrder } from '../../utils/firebase/firebase.utils'
// import { createOrder } from '../../utils/firebase/firebase.utils';
// import { addDoc, collection } from 'firebase/firestore';

// import { v4 as uuid } from 'uuid';

import './checkout.styles.scss';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const [order, setOrder] = useState(null);
  // const existingOrders = useSelector(selectOrders);
  // const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    setOrder(cartItems);
  }, [cartItems]);

  console.log('response.url -> cartItems', cartItems);

  const dispatch = useDispatch();

  const purchaseHandler = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((response) => {
        console.log('response', response);
        return response.json();
      })
      .then((response) => {
        if (response.url && cartItems) {
          console.log('response.url -> the Order', cartItems);
          createOrder(cartItems);
          dispatch(clearWholeCart(cartItems));
          // window.location.assign(response.url);
        }
      });
  };

  return (
    <div className="checkout-bag">
      <h2>{cartItems.length === 0 ? 'Your Cart is Empty' : 'Your Cart'}</h2>

      {cartItems.length === 0 ? (
        <div className="checkout-bag-container-empty">
          <div className="checkout-bag-wrapper">
            <div
              className="checkout-bag-empty-bg"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/empty_cart.png)`,
              }}
            ></div>

            <Link to="/tea">
              <button>Return to catalogue</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="checkout-bag-container">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <ShoppingCartItemInOrder key={index} shoppingCartItem={item} />
            ))}
          </div>

          <div className="checkout-process">
            <div className="checkout-process-container">
              <div className="checkout-process-subtotal">
                <div> Subtotal: </div>
                <div className="checkout-process-dollar"> ${cartTotal}</div>

                <p>Promotions:</p>
              </div>
              <div className="coupon-input-container">
                <input type="Enter Coupon" />
                <button>Apply</button>
              </div>
              <br />

              <Button
                buttonType={BUTTON_TYPE_CLASSES.wide}
                onClick={purchaseHandler}
              >
                Proceed to checkout
              </Button>

              <img
                src={`${process.env.PUBLIC_URL}/images/bg/balloon.png`}
                alt="balloon"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
