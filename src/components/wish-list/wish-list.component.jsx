import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { db } from '../../utils/firebase/firebase.utils';
import { query, collection, onSnapshot } from 'firebase/firestore';

import { selectWishItems } from '../../store/wish/wish.selector';

import WishListItem from '../wish-list-item/wish-list-item.component';

import { selectCurrentUserName } from '../../store/user/user.selector';


import './wish-list.styles.scss';

const WishList = () => {
  const wishList = useSelector(selectWishItems);
  const userEmail = useSelector(selectCurrentUserName);
  
 




  return (
    <div className="wish-list-container">
      {wishList &&
        wishList
        .filter((id) => id.user === userEmail)
        .map((product, index) => (
          <WishListItem key={index} wishListItem={product} />
        ))}

      {wishList.length === 0 && (
        <div className="wish-list-container">
          <h2>There's nothing here!</h2>
          <h3>Return to catalogue</h3>
        </div>
      )}
    </div>
  );
};

export default WishList;
