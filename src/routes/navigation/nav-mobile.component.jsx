import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { selectIsLoggedIn } from '../../store/auth/auth.selector';
import { setIsLoggedOut } from '../../store/auth/auth.action';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import FavoriteIcon from '../../components/favorite-icon/favorite-icon.component';

import ShoppingCart from '../../components/shopping-cart/shopping-cart.component';
import ShoppingCartDropdown from '../../components/shopping-cart-dropdown/shopping-cart-dropdown.component';

import './nav-mobile.styles.scss';

const NavMobile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const [nav, setNav] = useState(false);

  const dispatch = useDispatch();

  const signOutUserHandler = () => {
    signOutUser();
    dispatch(setIsLoggedOut());
  };

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1100);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1100);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div class="container">
      <div class="phone">
        <div class="content">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <li>
                  <Link to="/tea">
                    <div>Tea</div>
                  </Link>
                </li>
                <li>
                  <Link to="/coffee">
                    <div>Coffee</div>
                  </Link>
                </li>
                <li>
                  <Link to="/other-products">
                    <div>Other products</div>
                  </Link>
                </li>
                <li>Deals</li>
                <li>Read</li>
                <li>Franchising</li>
                <li>Gifts</li>
                <li>Delivery</li>
                <li>
                  <Link to="/stores">
                    <div>Stores</div>
                  </Link>
                </li>
                <li>
                  <div className="contacts">
                    <a href="https://web.whatsapp.com/" target="_blank">
                      <img
                        className="app-icon"
                        src={`${process.env.PUBLIC_URL}/images/whatsapp.png`}
                        alt="telegram logo"
                      />
                    </a>
                    <a href="https://t.me/teaounce_bot" target="_blank">
                      <img
                        className="app-icon"
                        src={`${process.env.PUBLIC_URL}/images/telegram.png`}
                        alt="telegram logo"
                      />
                    </a>
                    <div className="phone-number">1 800 555 77 88</div>
                  </div>
                </li>
                <li>
                  <div className="sign-in-up">
                    {currentUser ? (
                      <Link as span onClick={signOutUserHandler}>
                        Sign Out
                      </Link>
                    ) : (
                      <Link to="/auth">Sign in</Link>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>

    // <div className="nav-container">
    //   <div className="nav-header">
    //     <div onClick={() => setNav(!nav)} className="mobile_btn">
    //       {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={35} />}
    //     </div>
    //     <Link className="logo" to="/">
    //       <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
    //     </Link>
    //     {/* <FavoriteIcon /> */}

    //     <ShoppingCart />
    //   </div>

    //   <nav>
    //     <ul className={nav ? 'menu active' : 'menu'}>
    //       <li>Deals</li>
    //       <li>Read</li>
    //       <dli>Franchising</dli>
    //       <li>Gifts</li>
    //       <li>Delivery</li>

    //       <li className="top-level-navigation-right">
    //         {currentUser ? (
    //           <Link as span onClick={signOutUserHandler}>
    //             Sign Out
    //           </Link>
    //         ) : (
    //           <Link to="/auth">Sign in</Link>
    //         )}
    //       </li>

    //       <Link to="/tea">
    //         <div>Tea</div>
    //       </Link>

    //       <li>Coffee</li>

    //       <li>Other products</li>

    //       <li>
    //         <Link to="/stores">
    //           <div>Stores</div>
    //         </Link>
    //       </li>

    //       <li>
    //         <a href="https://web.whatsapp.com/" target="_blank">
    //           <img
    //             className="app-icon"
    //             src={`${process.env.PUBLIC_URL}/images/whatsapp.png`}
    //             alt="telegram logo"
    //           />
    //         </a>
    //       </li>

    //       <li>
    //         <a href="https://t.me/teaounce_bot" target="_blank">
    //           <img
    //             className="app-icon"
    //             src={`${process.env.PUBLIC_URL}/images/telegram.png`}
    //             alt="telegram logo"
    //           />
    //         </a>
    //       </li>

    //       <li className="app-icon">1 800 555 77 88</li>

    //       <li>{isCartOpen && <ShoppingCartDropdown />}</li>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default NavMobile;
