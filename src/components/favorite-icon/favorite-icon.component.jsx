import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectWishListCount } from '../../store/wish-list/wish-list.selection';

import './favorite-icon.styles.scss';

const FavoriteIcon = () => {
  const wishListCount = useSelector(selectWishListCount)

  return (
    <div className="heart-container">
      <Link to="/wish-list" className="tea-nav-item">
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
          alt="heart icon"
        />
         <span className="item-count">{wishListCount}</span>
      </Link>

{
  //  heartCount > 0 && <span className="item-count">{heartCount}</span>
}
      
    </div>
  );
};

export default FavoriteIcon;
