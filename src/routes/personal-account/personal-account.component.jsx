import { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { getAuth } from 'firebase/auth';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUserName } from '../../store/user/user.selector';
import { setCurrentUserName } from '../../store/user/user.action';

import WishList from '../wish-list/wish-list.component';
import Greeting from '../../components/greeting/greeting.component';

import './personal-account.styles.scss';

const PersonalAccount = () => {
  const currentUserName = useSelector(selectCurrentUserName);

  // const [userName, setUserName] = useState(currentUserName);

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const signOutUserHandler = () => {
    signOutUser();
    navigate('/');
  };

  // useEffect(() => {
  //   dispatch(setCurrentUserName);
  // }, [dispatch]);

  // useEffect(() => {
  //   setUserName(currentUserName)
  // }, [currentUserName]);

  return (
    <section className="personal-account-container">
      <h2>Your Account</h2>

      <h3><Greeting /></h3>
      <h3>Hello, {currentUserName}</h3>

      <div className="personal-account-wrapper">
        <div className="personal-account-navigation">
          <ul>
            <li>
              <button>Order history</button>
            </li>
            <li>
              <button>Wish list</button>
            </li>
            <li>
              <Link onClick={signOutUserHandler}>Log out</Link>
            </li>
          </ul>
        </div>

        {/* <Link as span onClick={signOutUserHandler} className="user-icon">
              <img
                src={`${process.env.PUBLIC_URL}/images/user.png`}
                alt="user icon"
              />
            </Link> */}

        <div className="personal-account-display">
          <WishList />
        </div>
      </div>
    </section>
  );
};

export default PersonalAccount;
