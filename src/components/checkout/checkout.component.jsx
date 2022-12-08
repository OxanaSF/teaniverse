import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import { clearWholeCart } from '../../store/cart/cart.action';

import ShoppingCartItemInOrder from '../shopping-cart-item-order/shopping-cart-item-order.component';

import './checkout.styles.scss';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch()

  const purcheseHandler = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          dispatch(clearWholeCart(cartItems))
          window.location.assign(response.url);
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

              {/* <PaymentForm /> */}

              {/* <Link to={`order/${cartTotal}`} className="heart-container">
                Purchase
              </Link> */}
              <button onClick={purcheseHandler}>Purchase</button>

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
