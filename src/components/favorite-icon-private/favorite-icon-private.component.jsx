import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectWishItems } from '../../store/wish/wish.selector';

import { selectCurrentUserName } from '../../store/user/user.selector';

import { addRemoveWish } from '../../store/wish/wish.action';

import './favorite-icon-private.styles.scss';

const FavoriteIconPrivate = ({ product }) => {
  const wishListItems = useSelector(selectWishItems);
  const [pickedProduct, setPickedProduct] = useState(null);

  const userEmail = useSelector(selectCurrentUserName);

  const dispatch = useDispatch();

  const addWishHandler = (event) => {
    dispatch(addRemoveWish(wishListItems, product, userEmail));
    event.stopPropagation();
  };

  useEffect(() => {
    const existingWishItem = wishListItems.find(
      (element) => element.id === product.id && element.userEmail === userEmail
    );

    setPickedProduct(existingWishItem);
  }, [product, wishListItems, userEmail]);

  return (
    <button className="heart-btn" onClick={addWishHandler}>
      {!pickedProduct && (
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
          alt="heart icon"
        />
      )}

      {pickedProduct && (
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart-active.png`}
          alt="heart icon"
        />
      )}
    </button>
  );
};

export default FavoriteIconPrivate;
