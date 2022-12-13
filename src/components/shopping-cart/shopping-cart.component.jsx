import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { selectCurrentUserName } from '../../store/user/user.selector';

import './shopping-cart.styles.scss';

const ShoppingCart = () => {
  const [count, setCount] = useState(0);

  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const userEmail = useSelector(selectCurrentUserName);

  const toggleIsShoppingCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  useEffect(() => {
    const getCount = cartItems
      .filter((cartItem) => cartItem.userEmail === userEmail)
      .reduce((total, currentItem) => total + currentItem.quantity, 0);

    setCount(getCount);
  }, [cartItems, userEmail]);

  return (
    <div className="cart-icon-container" onClick={toggleIsShoppingCartOpen}>
      <img
        src={`${process.env.PUBLIC_URL}/images/shopping-bag-brown2.png`}
        alt="shopping bag icon"
      />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default ShoppingCart;
