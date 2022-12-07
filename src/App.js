import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Navigate } from 'react-router-dom';

// import { loadStripe } from '@stripe/stripe-js';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import { setCurrentUser, setCurrentUserName } from './store/user/user.action';

import { selectCurrentUser } from './store/user/user.selector';
import { fetchCategoriesAsync } from './store/categories/category.action';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Tea from './routes/tea/tea.component';
import Checkout from './components/checkout/checkout.component';
import WishList from './routes/wish-list/wish-list.component';
import LuxuryTea from './routes/luxury-tea/luxury-tea.component';
import DeliciousTea from './routes/delicious-tea/delicious-tea.component';
import ClassicTea from './routes/classic-tea/classic-tea.component';
import PickedTea from './routes/picked-tea/picked-tea.component';
import CuriousTea from './routes/curious-tea/curious-tea.component';
import RelaxingTea from './routes/relaxing-tea/relaxing-tea.component';
import Footer from './components/footer/footer.component';
import PersonalAccount from './routes/personal-account/personal-account.component';


import Deals from './components/placeholders/deals/deals.component';
import Read from './components/placeholders/read/read.component';
import Franchising from './components/placeholders/franchising/franchising.component';
import Gifts from './components/placeholders/gifts/gifts.component';
import Delivery from './components/placeholders/delivery/delivery.component';
import Coffee from './components/placeholders/coffee/coffee.component';
import OtherProducts from './components/placeholders/other-products/other-products.component';
import Stores from './components/placeholders/stores/stores.component';




const App = () => {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          {/* Paths from the Home page */}
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="deals" element={<Deals />} />
          <Route path="read" element={<Read />} />
          <Route path="franchising" element={<Franchising />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="coffee" element={<Coffee />} />
          <Route path="tea" element={<Tea />} />

          <Route path="tea/picked-tea/:name" element={<PickedTea />} />

          <Route path="other-products" element={<OtherProducts />} />
          <Route path="stores" element={<Stores />} />

          {currentUser && <Route path="checkout" element={<Checkout />} />}

          {currentUser && <Route path="account" element={<PersonalAccount />} />}


          {/* 
          {isLoggedIn && (
            <Route path="checkout/order/:order" element={<Order />} />
          )} */}

          {/* <Route path="checkout/order/:order" element={<Order />} /> */}

          {currentUser && <Route path="account" element={<WishList />} />}

          {/* Paths of the Tea Navigation */}
          <Route path="classic-tea" element={<ClassicTea />} />
          <Route path="delicious-tea" element={<DeliciousTea />} />
          <Route path="real-life-tea" element={<LuxuryTea />} />
          <Route path="curious-tea" element={<CuriousTea />} />
          <Route path="relaxing-tea" element={<RelaxingTea />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
