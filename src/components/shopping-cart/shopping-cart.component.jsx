import { useSelector, useDispatch } from 'react-redux';

import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import './shopping-cart.styles.scss';

const ShoppingCart = () => {
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const toggleIsShoppingCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={toggleIsShoppingCartOpen}>
      <img
        src={`${process.env.PUBLIC_URL}/images/shopping-bag-brown2.png`}
        alt="shopping bag icon"
      />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default ShoppingCart;
