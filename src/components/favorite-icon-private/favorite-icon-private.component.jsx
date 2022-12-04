import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectWishItems } from '../../store/wish/wish.selector';
import { selectIsProductPicked } from '../../store/product/product.selector';

import { addRemoveWish, isWishClicked } from '../../store/wish/wish.action';
import { setIsProductPicked } from '../../store/product/product.action';

import './favorite-icon-private.styles.scss';

const FavoriteIconPrivate = ({ product }) => {
  const wishListItems = useSelector(selectWishItems);
  // const pickedProduct = useSelector(selectIsProductPicked);
  const [pickedProduct, setPickedProduct] = useState(false);

  const dispatch = useDispatch();

  const addWishHandler = (event) => {
    dispatch(addRemoveWish(wishListItems, product));

    console.log('pickedProduct BEFORE', pickedProduct);
    const pickedBoolean = dispatch(isWishClicked(wishListItems, product));
    console.log('pickedBoolean!!!', pickedBoolean);
    console.log('pickedProduct BEFORE', pickedProduct);
    setPickedProduct(!pickedBoolean);
    console.log('pickedProduct AFTER', pickedProduct);

    event.stopPropagation();
  };

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
