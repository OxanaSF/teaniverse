import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectWishListCount } from '../../store/wish-list/wish-list.selector';

import './favorite-icon.styles.scss';

const FavoriteIcon = () => {
  // const wishListCount = useSelector(selectWishListCount);

  return (
    // <div className="heart-container">
    <div>
      <Link to="/wish-list" className="heart-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
          alt="heart icon"
        />
        {/* <span className="item-count">{wishListCount}</span> */}
      </Link>
    </div>
  );
};

export default FavoriteIcon;
