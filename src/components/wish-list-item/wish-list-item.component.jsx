import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import './wish-list-item.styles.scss';

const WishListItem = ({ wishListItem }) => {
  const [styles, setStyles] = useState(false);

  const { name, imageUrl, price, description } = wishListItem;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addProductToCartHandler = (event) => {
    dispatch(addItemToCart(cartItems, wishListItem));
    setStyles(true);
    event.stopPropagation();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStyles(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [styles]);

  return (
    <div className="wish-list-item-container">
      <div className="img-anime-container">
        <img className="img1" src={imageUrl} alt={name} />
        <img
          className={styles ? 'img2 slide-out-top' : 'img2 '}
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="wish-list-item-details">
        <h2>{name}</h2>
        <h3>${price}</h3>
        <p>{description}</p>
      </div>
      <div className="wish-item-to-cart">
        <button onClick={addProductToCartHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/shopping-bag.png`}
            alt="shopping bag icon"
          />
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
