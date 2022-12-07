import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { useSelector } from 'react-redux';

import { selectCurrentUserName } from '../../store/user/user.selector';

import WishList from '../wish-list/wish-list.component';
import Greeting from '../../components/greeting/greeting.component';

import './personal-account.styles.scss';

const PersonalAccount = () => {
  const currentUserName = useSelector(selectCurrentUserName);

  const [activeBtn, setActiveBtn] = useState(false);

  const navigate = useNavigate();

  const signOutUserHandler = () => {
    signOutUser();
    navigate('/');
  };

  const activateOrderBtnHandler = () => {
    setActiveBtn(!activeBtn);
    // setWishListBtn(!wishListBtn);
  };

  return (
    <section className="personal-account-container">
      <h2>Your Account</h2>

      <h3>
        <Greeting />
      </h3>
      <h3>{currentUserName}</h3>

      <div className="personal-account-wrapper">
        <div className="personal-account-navigation">
          <ul>
            <button
              className={activeBtn ? 'order-history-btn-active' : ''}
              onClick={activateOrderBtnHandler}
            >
              <li>
                <button>Order history</button>
              </li>
            </button>
            <li>
              <button className={activeBtn ? '' : 'order-history-btn-active'}>
                <button onClick={activateOrderBtnHandler}>Wish list</button>
              </button>
            </li>
            <li>
              <Link onClick={signOutUserHandler}>Log out</Link>
            </li>
          </ul>
        </div>

        <div className="personal-account-display">
          {activeBtn && (
            <>
              <div>No order history yet</div>
              <Link className="return-to-catalogue" to="/tea">
                Return to catalogue
              </Link>
            </>
          )}

          {!activeBtn && <WishList />}
        </div>
      </div>
    </section>
  );
};

export default PersonalAccount;
