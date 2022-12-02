import { useSelector, useDispatch } from 'react-redux';

import { selectWishItems } from '../../store/wish/wish.selector';

import { addRemoveWish } from '../../store/wish/wish.action';

import './favorite-icon-private.styles.scss';

const FavoriteIconPrivate = ({ product }) => {
  const wishListItems = useSelector(selectWishItems);

  const dispatch = useDispatch();

  const addWishHandler = (event) => {
    console.log('wishListItems HANDLER', wishListItems, product);
    dispatch(addRemoveWish(wishListItems, product));

    event.stopPropagation();
  };

  return (
    <button className="heart-btn" onClick={addWishHandler}>
      <img
        src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
        alt="heart icon"
      />
    </button>
  );
};

export default FavoriteIconPrivate;
