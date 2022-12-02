import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Cart
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

//Wish List
import { selectWishItems } from '../../store/wish/wish.selector';
import { addRemoveWish } from '../../store/wish/wish.action';

import FavoriteIconPrivate from '../favorite-icon-private/favorite-icon-private.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, description, price } = product;

  // const [heartIcon, setHeartIcon] = useState(true);

  const cartItems = useSelector(selectCartItems);
  const wishListItems = useSelector(selectWishItems);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Start Functions

  const addProductToCartHandler = (event) => {
    dispatch(addItemToCart(cartItems, product));
    console.log(product);
    console.log(cartItems);

    event.stopPropagation();
  };

  const addWishHandler = (event) => {
    dispatch(addRemoveWish(wishListItems, product));
    console.log(product);
    console.log(wishListItems);

    event.stopPropagation();
  };

  const navigateHandler = () => {
    navigate(`picked-tea/${name}`);
  };
  //End Functions

  return (
    <div onClick={navigateHandler} className="product-card-container">
      <div className="product-card-header">
        <FavoriteIconPrivate product={product} />

        <div className="product-card-header-icons-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/berry-tea-icon.svg`}
            alt=""
          />

          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/fruit-tea-icon.svg`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/breakfast-tea-icon.svg`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/classic-tea-icon.svg`}
            alt=""
          />
        </div>
      </div>

      <div className="product-card-main">
        <div className="img-anime-container">
          <img className="img1" src={imageUrl} alt={name} />
          <img className="img2" src={imageUrl} alt={name} />
        </div>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <p>{description}</p>
      </div>

      <div className="product-card-footer">
        <button onClick={addProductToCartHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/shopping-bag.png`}
            alt="shopping bag icon"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
