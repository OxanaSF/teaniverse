import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item.component';

import './shopping-cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <>
      <>
        {cartTotal === 0 && (
          <div className="cart-dropdown-container empty-container">
            <div>You Cart is Empty.</div>
          </div>
        )}
      </>

      {
        <>
          {cartTotal !== 0 && (
            <div className="cart-dropdown-container">
              <div className="cart-items">
                {cartItems.map((item) => (
                  <ShoppingCartItem key={item.id} shoppingCartItem={item} />
                ))}
              </div>
              <div>Total: ${cartTotal}</div>

              <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
            </div>
          )}
        </>
      }
    </>
  );
};

export default CartDropdown;
