import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import { selectCurrentUserName } from '../../store/user/user.selector';

import { clearWholeCart } from '../../store/cart/cart.action';

import ShoppingCartItemInOrder from '../shopping-cart-item-order/shopping-cart-item-order.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { createOrder } from '../../utils/firebase/firebase.utils';

import { setCurrentOrder } from '../../store/order/order.action';

import { v4 as uuid } from 'uuid';

import './checkout.styles.scss';

const Checkout = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const cartItems = useSelector(selectCartItems);
  // const cartTotal = useSelector(selectCartTotal);
  const userName = useSelector(selectCurrentUserName);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const receipt = uuid();
  dispatch(setCurrentOrder(receipt));

  useEffect(() => {
    const getTotal = cartItems
      .filter((cartItem) => cartItem.userEmail === userName)
      .reduce(
        (total, currentItem) =>
          total + currentItem.quantity * currentItem.price,
        0
      );

    setCartTotal(getTotal);
  }, [cartItems, userName]);


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
        setCurrentOrder(createOrder(cartItems, receipt));

        dispatch(clearWholeCart(cartItems));
        navigate('/success');
        //  window.location.assign(response.url);

        // }
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
            {cartItems
              .filter((item) => item.userEmail === userName)
              .map((item, index) => (
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
