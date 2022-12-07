import { useSelector } from 'react-redux';

import { selectWishItems } from '../../store/wish/wish.selector';

// import Spinner from '../../components/spinner/spinner.component';

import WishListItem from '../../components/wish-list-item/wish-list-item.component';

import './wish-list.styles.scss';

const WishList = () => {
  const wishList = useSelector(selectWishItems);

  console.log('wishListItems', wishList);

  // if (!wishList) {
  //   return <Spinner />;
  // }

  return (
    <div>
      {wishList &&
        wishList.map((product, index) => (
          <WishListItem key={index} wishListItem={product} />
        ))}
    </div>
  );
};

export default WishList;
