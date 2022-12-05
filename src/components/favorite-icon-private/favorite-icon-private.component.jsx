import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectWishItems } from '../../store/wish/wish.selector';

import { addRemoveWish } from '../../store/wish/wish.action';

import './favorite-icon-private.styles.scss';

const FavoriteIconPrivate = ({ product }) => {
  const wishListItems = useSelector(selectWishItems);
  const [pickedProduct, setPickedProduct] = useState(null);

  const dispatch = useDispatch();

  const addWishHandler = (event) => {
    dispatch(addRemoveWish(wishListItems, product));
    event.stopPropagation();
  };

  useEffect(() => {
    product && console.log('product, wishListItems', product, wishListItems);
    const existingWishItem = wishListItems.find(
      (element) => element.id === product.id
    );

    setPickedProduct(existingWishItem);
  }, [product, wishListItems]);

  return (
    <button className="heart-btn" onClick={addWishHandler}>
      {!pickedProduct && (
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
          alt="heart icon"
        />
      )}

      {pickedProduct && <div>Clicked</div>}
    </button>
  );
};

export default FavoriteIconPrivate;
