import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './shopping-cart.styles.scss';

const ShoppingCart = () => {
  const { isCartOpen, setIsCartOpen, itemCount } =
    useContext(CartContext);

  const toggleIsShoppingCartOpen = () =>
    setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsShoppingCartOpen}>
      <img
        src={`${process.env.PUBLIC_URL}/images/shopping-bag-brown.png`}
        alt="shopping bag icon"
      />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default ShoppingCart;
