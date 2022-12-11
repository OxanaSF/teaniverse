import { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { useSelector } from 'react-redux';

import { selectCurrentUserName } from '../../store/user/user.selector';

import WishList from '../../components/wish-list/wish-list.component';
import Greeting from '../../components/greeting/greeting.component';

import { db } from '../../utils/firebase/firebase.utils';
import { query, collection, onSnapshot } from 'firebase/firestore';

import './personal-account.styles.scss';

const PersonalAccount = () => {
  const currentUserName = useSelector(selectCurrentUserName);

  const [orders, setOrders] = useState(null);

  const [activeBtn, setActiveBtn] = useState(false);

  const navigate = useNavigate();

  const signOutUserHandler = () => {
    signOutUser();
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
      setOrders(ordersArr);
    });
    return () => unsubscribe();
  }, []);

  console.log('oredrs!!!', orders);

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
                <h3>Items</h3>

                {orders.map((id, index) => (
                  <div key={index} className="order">
                    <div>ORDER #: {id.receipt}</div>
                    <div>
                      Date:{' '}
                      {id.date
                        .toDate()
                        .toString()
                        .split(' ')
                        .slice(0, 4)
                        .join(' ')}
                    </div>

                    {id.orders.map((order, index) => (
                      <div className="orders-items" key={index}>
                        <div> price: ${order.price}</div>
                        <div> item name: {order.name}</div>
                        <div> quantity: {order.quantity}</div>
                      </div>
                    ))}
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
