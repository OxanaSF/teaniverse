import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import Button from '../button/button.component';
import ShoppingCartItemDropdown from '../shopping-cart-item-dropdown/shopping-cart-item-dropdown.component';
import { setIsCartOpen } from '../../store/cart/cart.action';

import './shopping-cart-dropdown.styles.scss';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    navigate('/checkout');
  };

  const toggleIsShoppingCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div onMouseLeave={toggleIsShoppingCartOpen}>
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
                  <ShoppingCartItemDropdown
                    key={item.id}
                    shoppingCartItem={item}
                  />
                ))}
              </div>
              <div className="cart-dropdown-total">Total: ${cartTotal}</div>

              <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
            </div>
          )}
        </>
      }
    </div>
  );
};

export default CartDropdown;
