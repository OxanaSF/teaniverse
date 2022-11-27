// import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'


import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import './product-card.styles.scss';


const ProductCard = ({ product }) => {
  const { name, imageUrl, description, price } = product;
  const cartItems = useSelector(selectCartItems)

  const navigate = useNavigate()
  const dispatch = useDispatch()



  const addProductToCartHandler = (event) => {
    console.log('product is added');
    dispatch(addItemToCart(cartItems, product))
    console.log(product);

    event.stopPropagation()
  };


  const navigateHandler = () => {
    navigate(`picked-tea/${name}`)
  }

  return (
    <div onClick={navigateHandler} className="product-card-container">
    {/* <div className="product-card-container"> */}
      <div className="product-card-header">
        <button className="heart-btn">
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
