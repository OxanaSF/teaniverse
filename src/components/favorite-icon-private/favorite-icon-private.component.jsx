import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectWishCount } from '../../store/wish/wish.selector';

import './favorite-icon-private.styles.scss';



const FavoriteIconPrivate = ({toggleHeartIcon}) => {
//   const wishListCount = useSelector(selectWishCount);

  return (
    <div className="heart-container" onClick={toggleHeartIcon}>
      <Link to="/wish-list" className="heart-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
          alt="heart icon"
        />
      
      </Link>
    </div>
  );
};

export default FavoriteIconPrivate;
