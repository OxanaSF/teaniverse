import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';

import { selectWishCount } from '../../store/wish/wish.selector';

import './favorite-icon.styles.scss';

const FavoriteIcon = () => {
  const wishListCount = useSelector(selectWishCount);
  // const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="heart-container">
      {/* <Link to="/account" className="heart-container"> */}
      {/* <Link to={`/account/${currentUser}`}> */}
      <Link to={`/account`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
          alt="heart icon"
        />
        <span className="item-count">{wishListCount}</span>
      </Link>
    </div>
  );
};

export default FavoriteIcon;