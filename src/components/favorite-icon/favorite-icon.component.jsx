import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

// import { selectCurrentUser } from '../../store/user/user.selector';

// import { selectWishCount } from '../../store/wish/wish.selector';
import { selectWishItems } from '../../store/wish/wish.selector';
import { selectCurrentUserName } from '../../store/user/user.selector';

import './favorite-icon.styles.scss';

const FavoriteIcon = () => {
  const [count, setCount] = useState(0);

  // const wishListCount = useSelector(selectWishCount);
  const wishItems = useSelector(selectWishItems);
  const userEmail = useSelector(selectCurrentUserName);

  console.log('userEmail userEmail', userEmail);

  useEffect(() => {
    const getCount = wishItems
      .filter((wishItem) => wishItem.user === userEmail)
      .reduce((total, currentItem) => total + 1, 0)
      .toString();

    setCount(getCount);
  }, [wishItems, userEmail]);

  return (
    <div className="heart-container">
      <Link to={`/account`} className="heart-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
          alt="heart icon"
        />
        <span className="item-count">{count}</span>
      </Link>
    </div>
  );
};

export default FavoriteIcon;
