import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import { selectCurrentUserName } from '../../store/user/user.selector';

import { clearWholeCart } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { createOrder } from '../../utils/firebase/firebase.utils';

import { setCurrentOrder } from '../../store/order/order.action';

import { v4 as uuid } from 'uuid';

import './checkout-form.styles.scss';

const initialAddressState = {
  name: '',
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
  phone: '',
};

const CheckoutForm = () => {
  const cartItems = useSelector(selectCartItems);
  const currentEmail = useSelector(selectCurrentUserName);

  const [shippingAddress, setShippingAddress] = useState({
    ...initialAddressState,
  });
  const [billingAddress, setBillingAddress] = useState({
    ...initialAddressState,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const receipt = uuid();
  dispatch(setCurrentOrder(receipt));

  const purchaseHandler = async () => {
    await fetch('http://localhost:4000/checkout-form', {
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
        setCurrentOrder(createOrder(cartItems, receipt, currentEmail));
        dispatch(clearWholeCart(cartItems));
        window.location.assign(response.url);

        // navigate('/success');
        // window.location.reload(false);
      });
  };

  const handleShipping = (e) => {
    const { name, value } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };

  const handleBilling = (e) => {
    const { name, value } = e.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <form className="order-form" onSubmit={purchaseHandler}>
        <div className="form-items">
          <h3>Shipping Address</h3>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Recipient Name"
              required
              name="name"
              value={shippingAddress.name}
              onChange={(e) => handleShipping(e)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Address line 1"
              required
              name="line1"
              value={shippingAddress.line1}
              onChange={(e) => handleShipping(e)}
            />
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Address line 2"
              name="line2"
              value={shippingAddress.line2}
              onChange={(e) => handleShipping(e)}
            />
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="City"
              required
              name="city"
              value={shippingAddress.city}
              onChange={(e) => handleShipping(e)}
            />
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="State"
              required
              name="state"
              value={shippingAddress.state}
              onChange={(e) => handleShipping(e)}
            />
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Postal code"
              required
              name="postal_code"
              value={shippingAddress.postal_code}
              onChange={(e) => handleShipping(e)}
            />
          </div>

          <div
            className=""
            valueType="short"
            value={shippingAddress.country}
            onChange={(val) =>
              handleShipping({
                target: {
                  name: 'country',
                  value: val,
                },
              })
            }
          />
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Phone"
              required
              name="phone"
              value={shippingAddress.phone}
              onChange={(e) => handleShipping(e)}
            />
          </div>

          <div>
            <div className="input-wrapper">
              <h3>Billing Address</h3>
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={billingAddress.name}
                onChange={(e) => handleBilling(e)}
              />
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Address line 1"
                required
                name="line1"
                value={billingAddress.line1}
                onChange={(e) => handleBilling(e)}
              />
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Address line 2"
                name="line2"
                value={billingAddress.line2}
                onChange={(e) => handleBilling(e)}
              />
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                placeholder="City"
                required
                name="city"
                value={billingAddress.city}
                onChange={(e) => handleBilling(e)}
              />
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                placeholder="State"
                required
                name="state"
                value={billingAddress.state}
                onChange={(e) => handleBilling(e)}
              />
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Postal code"
                required
                name="postal_code"
                value={billingAddress.postal_code}
                onChange={(e) => handleBilling(e)}
              />
            </div>
            <div
              className=""
              valueType="short"
              value={billingAddress.country}
              onChange={(val) =>
                handleBilling({
                  target: {
                    name: 'country',
                    value: val,
                  },
                })
              }
            />

            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Phone"
                required
                name="phone"
                value={billingAddress.phone}
                onChange={(e) => handleBilling(e)}
              />
            </div>
          </div>
        </div>
      </form>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.checkout}
        onClick={purchaseHandler}
      >
        PURCHASE
      </Button>
    </div>
  );
};

export default CheckoutForm;
