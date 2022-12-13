import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectCurrentUserName } from '../../store/user/user.selector';

import { selectWishItems } from '../../store/wish/wish.selector';

import './favorite-icon.styles.scss';

const FavoriteIcon = () => {
  const [count, setCount] = useState(0);

  const wishItems = useSelector(selectWishItems);

  const userEmail = useSelector(selectCurrentUserName);

  useEffect(() => {
    const getCount = wishItems
      .filter((wishItem) => wishItem.userEmail === userEmail)
      .reduce((total, currentItem) => total + currentItem.quantity, 0)
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
