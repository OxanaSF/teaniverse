import { Link } from 'react-router-dom';

import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './favorite-icon.styles.scss';

const FavoriteIcon = () => {
  const { heartCount } =
    useContext(CartContext);

  return (
    <div className="heart-container">
      <Link to="/wish-list" className="tea-nav-item">
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
          alt="heart icon"
        />
      </Link>

{
   heartCount > 0 && <span className="item-count">{heartCount}</span>
}
      
    </div>
  );
};

export default FavoriteIcon;
