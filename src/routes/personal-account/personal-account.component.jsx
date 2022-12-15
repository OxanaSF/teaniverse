import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import { selectCurrentUserName } from '../../store/user/user.selector';

import WishList from '../../components/wish-list/wish-list.component';
import Greeting from '../../components/greeting/greeting.component';

import { clearWholeCart } from '../../store/cart/cart.action';


import { db } from '../../utils/firebase/firebase.utils';
import { query, collection, onSnapshot } from 'firebase/firestore';

import './personal-account.styles.scss';

const PersonalAccount = () => {
  const userEmail = useSelector(selectCurrentUserName);
  const cartItems = useSelector(selectCartItems);


  const [orders, setOrders] = useState(null);

  const [activeBtn, setActiveBtn] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const signOutUserHandler = () => {
    signOutUser();
    // dispatch(setWishHistory(cartItems))
    dispatch(clearWholeCart(cartItems));
    // dispatch(clearWholeWishList(wishItems));

    window.location.reload(false);
    navigate('/');
  };

  const activateOrderBtnHandler = () => {
    setActiveBtn(!activeBtn);
  };

  useEffect(() => {
    const q = query(collection(db, 'orders'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let ordersArr = [];
      querySnapshot.forEach((doc) => {
        ordersArr.push({ ...doc.data(), id: doc.id });
      });
      ordersArr.sort((a, b) => {
        return b.date - a.date;
      });
      setOrders(ordersArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="personal-account-container">
      <h2>Your Account</h2>

      <h3>
        <Greeting />
      </h3>
      <h3>{userEmail}</h3>

      <div className="personal-account-wrapper">
        <div className="personal-account-navigation">
          <ul>
            <li>
              <div
                className={activeBtn ? 'order-history-btn-active' : ''}
                onClick={activateOrderBtnHandler}
              >
                <div>
                  <button>Order history</button>
                </div>
              </div>
            </li>
            <li>
              <div className={activeBtn ? '' : 'order-history-btn-active'}>
                <button onClick={activateOrderBtnHandler}>Wish list</button>
              </div>
            </li>
            <li>
              <Link onClick={signOutUserHandler}>Log out</Link>
            </li>
          </ul>
        </div>

        <div className="personal-account-display">
          {activeBtn && (
            <>
              <div className="orders-container">
                {orders
                  .filter((id) => id.user === userEmail)
                  .map((id, index) => (
                    <div key={index} className="order">
                      <div className="order-header">
                        <div>
                          <span className="side-headers"> ORDER #:</span>{' '}
                          <span className="side-headers">{id.receipt}</span>
                        </div>
                        <div>
                          <span className="side-headers">Date: </span>
                          {id.date
                            .toDate()
                            .toString()
                            .split(' ')
                            .slice(0, 4)
                            .join(' ')}
                        </div>
                      </div>
                      <br />
                      <ol>
                        {id.orders.map((order, index) => (
                          <li key={index}>
                            <div className="orders-items" key={index}>
                              <div>
                                <span className="side-headers">
                                  {' '}
                                  Item name:
                                </span>{' '}
                                <span className="item">{order.name}</span>
                              </div>
                              <div>
                                <span className="side-headers"> Price:</span> $
                                <span className="item">{order.price}</span>
                              </div>
                              <div>
                                <span className="side-headers"> Quantity:</span>{' '}
                                <span className="item"> {order.quantity}</span>
                              </div>
                              <br />
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
              </div>

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
