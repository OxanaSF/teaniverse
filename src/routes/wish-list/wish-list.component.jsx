import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectWishItems } from '../../store/wish/wish.selector';

import Spinner from '../../components/spinner/spinner.component';
import ProductCard from '../../components/product-card/product-card.components';

import './wish-list.styles.scss';

const WishList = () => {
  const wishList = useSelector(selectWishItems);

  const [wishListItems, setWishListItems] = useState([]);

  useEffect(() => {
    setWishListItems(wishList)
  },[wishList])


  console.log('wishListItems', wishListItems)

  // if (!wishList) {
  //   return <Spinner />;
  // }

  return (
    <div>
      {wishListItems &&
        wishListItems.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
    </div>
  );
};

export default WishList;
