import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


import { CartContext } from '../../context/cart.context';


import './product-card.styles.scss';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
  const { name, imageUrl, description, price } = product;

  const navigate = useNavigate()

  const {
    addItemToCart,
    favoriteItems,
    addFavoriteToCart,
    removeFavoriteItem,
  } = useContext(CartContext);

  const [heartToggle, setHeartToggle] = useState(true);

  const addProductToCartHandler = (event) => {
    console.log('product is added');
    addItemToCart(product);
    console.log(product);

    event.stopPropagation()
  };

  const addFavoriteToCartHandler = () => {
    setHeartToggle(!heartToggle);
    console.log(heartToggle);
  };


  const navigateHandler = () => {
    navigate(`picked-tea/${name}`)
  }

  return (
    <div onClick={navigateHandler} className="product-card-container">
      <div className="product-card-header">
        <button onClick={addFavoriteToCartHandler} className="heart-btn">
          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
            alt=""
          />
        </button>

        <div className="product-card-header-icons-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/berry-tea-icon.svg`}
            alt=""
          />

          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/fruit-tea-icon.svg`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/breakfast-tea-icon.svg`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/classic-tea-icon.svg`}
            alt=""
          />
        </div>
      </div>

      <div className="product-card-main">
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <h3>{price}</h3>
        <p>{description}</p>
      </div>

      <div className="product-card-footer">
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

export default ProductCard;
