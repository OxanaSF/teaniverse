import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../context/user.context';

import ShoppingCart from '../../components/shopping-cart/shopping-cart.component';
import ShoppingCartDropdown from '../../components/shopping-cart-dropdown/shopping-cart-dropdown.component';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
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
              <span onClick={signOutUser}> Sign Out </span>
            ) : (
              <Link to="/auth">Sign in</Link>
            )}
            <img
              src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
              alt=""
            />

            <ShoppingCart />
          </div>
        </div>

        <div className="bottom-level-navigation">
          <Link to="/tea">
            <div>Tea</div>
          </Link>
          <Link to="/coffee">
            <div>Coffee</div>
          </Link>

          <Link to="/other-products">
            <div>Other products</div>
          </Link>

          <Link className="logo-container" to="/">
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
          </Link>
          <Link to="/stores">
            <div>Stores</div>
          </Link>

          <div>Search</div>
          <div>Phone</div>
        </div>
        <ShoppingCartDropdown />
      </nav>
      
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
