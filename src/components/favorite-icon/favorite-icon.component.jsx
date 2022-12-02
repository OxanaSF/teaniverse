import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectWishCount } from '../../store/wish/wish.selector';

import './favorite-icon.styles.scss';

const FavoriteIcon = () => {
  const wishListCount = useSelector(selectWishCount);

  return (
    <div className="heart-container">
      <Link to="/wish-list" className="heart-container">
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