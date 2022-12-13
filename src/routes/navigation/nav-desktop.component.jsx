import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCurrentUser, selectCurrentUserName } from '../../store/user/user.selector';

// import { signOutUser } from '../../utils/firebase/firebase.utils';

import { selectIsCartOpen } from '../../store/cart/cart.selector';

import FavoriteIcon from '../../components/favorite-icon/favorite-icon.component';

import ShoppingCart from '../../components/shopping-cart/shopping-cart.component';
import ShoppingCartDropdown from '../../components/shopping-cart-dropdown/shopping-cart-dropdown.component';

import './nav-desktop.styles.scss';

const NavDesktop = () => {
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1100);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1100);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <nav className="navigation">
      <div className="top-level-navigation">
        <div className="top-level-navigation-left">
          <Link to="/deals">
            <div>Deals</div>
          </Link>

          <Link to="/read">
            <div>Read</div>
          </Link>

          <Link to="/franchising">
            <div>Franchising</div>
          </Link>

          <Link to="/gifts">
            <div>Gifts</div>
          </Link>

          <Link to="/delivery">
            <div>Delivery</div>
          </Link>
        </div>

        <div className="top-level-navigation-right">
          {currentUser ? (
            // <Link as span onClick={signOutUserHandler} className="user-icon">
            //  <Link to={`/account/${currentUserName}`}>
             <Link to={`/account`}>
       
              <img
              className='user-icon'
                src={`${process.env.PUBLIC_URL}/images/user.png`}
                alt="user icon"
              />
            </Link>
          ) : (
            <Link to="/auth">Sign in</Link>
          )}

          <FavoriteIcon />

          <ShoppingCart />
        </div>
      </div>

      <div className="bottom-level-navigation">
        <div className="bottom-level-navigation-left">
          <Link to="/tea">
            <div>Tea</div>
          </Link>
          <Link to="/coffee">
            <div>Coffee</div>
          </Link>

          <Link to="/other-products">
            <div>Other products</div>
          </Link>
        </div>

        <Link className="logo-container" to="/">
          <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
        </Link>

        <div className="bottom-level-navigation-right-with-heart-and-bag">
          <FavoriteIcon />

          <ShoppingCart />
        </div>

        <div className="bottom-level-navigation-right">
          <div className="stores-search">
            <Link to="/stores">
              <div>Stores</div>
            </Link>

            <div>Search</div>
          </div>
          <div className="app-icons-container">
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="app-icon"
                src={`${process.env.PUBLIC_URL}/images/whatsapp.png`}
                alt="telegram logo"
              />
            </a>
            <a
              href="https://t.me/teaounce_bot"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="app-icon"
                src={`${process.env.PUBLIC_URL}/images/telegram.png`}
                alt="telegram logo"
              />
            </a>

            <div className="app-icon">1 800 555 77 88</div>
          </div>
        </div>
      </div>
      {isCartOpen && <ShoppingCartDropdown />}
    </nav>
  );
};

export default NavDesktop;
