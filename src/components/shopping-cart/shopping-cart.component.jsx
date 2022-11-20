import { useContext } from 'react';

import { ShoppingCartContext } from '../../context/shopping-cart.context';

import './shopping-cart.styles.scss';

const ShoppingCart = () => {
  const { isShoppingCartOpen, setIsShoppingCartOpen } = useContext(ShoppingCartContext);

  const toggleIsShoppingCartOpen = () => setIsShoppingCartOpen(!isShoppingCartOpen)

  return (
    <div className="cart-icon-container" onClick={toggleIsShoppingCartOpen}>
      <img
        src={`${process.env.PUBLIC_URL}/images/shopping-bag-brown.png`}
        alt="shopping bag icon"
      />
      <span className="item-count">2</span>
    </div>
  );
};

export default ShoppingCart;
