import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.action';

import FavoriteIconPrivate from '../../components/favorite-icon-private/favorite-icon-private.component';

import { AiOutlineClose } from 'react-icons/ai';
import './shopping-cart-item-order.styles.scss';

const ShoppingCartItemInBag = ({ shoppingCartItem }) => {
  const { name, description, taste, imageUrl, price, quantity } =
    shoppingCartItem;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(addItemToCart(cartItems, shoppingCartItem));
  };
  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCart(cartItems, shoppingCartItem));
  };
  const clearItemFromCartHandler = () => {
    dispatch(clearItemFromCart(cartItems, shoppingCartItem));
  };

  return (
    <div className="cart-item-container-bag">
      <button
        className="cart-item-bag-close-container"
        onClick={clearItemFromCartHandler}
      >
      
          <img
            className="delete-btn"
            src={`${process.env.PUBLIC_URL}/images/delete-brown.png`}
            alt="trash can icon"
          />
     
      </button>

      <div className="cart-item-bag-description">
        <img src={imageUrl} alt={name} />

        <div className="item-info">
          <h3>{name}</h3>

          <span className="item-description"> {description}</span>
          <p>
            <span className="item-taste"> Taste: </span> {taste}
          </p>
        </div>

        <div className="quantity-total">
          <div className="quantity-increase-decrease">
            <button onClick={removeItemFromCartHandler}>
              <img
                src={`${process.env.PUBLIC_URL}/images/minus.png`}
                alt="minus"
              />
            </button>
            <span className="quantity-num"> {quantity} </span>
            <button onClick={addItemToCartHandler}>
              <img
                src={`${process.env.PUBLIC_URL}/images/plus.png`}
                alt="plus"
              />
            </button>
          </div>

          <div className="item-price">${quantity * price}</div>
        </div>
      </div>

      <div className="cart-item-bag-heart-container">
        <FavoriteIconPrivate product={shoppingCartItem}/>
      </div>
    </div>
  );
};

export default ShoppingCartItemInBag;
