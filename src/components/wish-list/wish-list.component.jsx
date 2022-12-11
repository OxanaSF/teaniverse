import { useSelector } from 'react-redux';

import { selectWishItems } from '../../store/wish/wish.selector';

import WishListItem from '../wish-list-item/wish-list-item.component';

import './wish-list.styles.scss';

const WishList = () => {
  const wishList = useSelector(selectWishItems);


  return (
    <div className='wish-list-container'>
      {wishList &&
        wishList.map((product, index) => (
          <WishListItem key={index} wishListItem={product} />
        ))}

      {wishList.length === 0 && (
        <div className='wish-list-container'>
          <h2>There's nothing here!</h2>
          <h3>Return to catalogue</h3>
        </div>
      )}
    </div>
  );
};

export default WishList;
