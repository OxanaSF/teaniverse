import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation">

        <div className="top-level-navigation">
         
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
        
         
            <div>Login</div>
            <div>Favorites</div>
            <div>Shopping Bag</div>
          
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
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
