import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from './store/auth/auth.selector';

import { Navigate } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import { setCurrentUser } from './store/user/user.action';
import { fetchCategoriesAsync } from './store/categories/category.action';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Tea from './routes/tea/tea.component';
import Checkout from './components/checkout/checkout.component';
import Order from './components/order/order.component';
import WishList from './routes/wish-list/wish-list.component';
import LuxuryTea from './routes/luxury-tea/luxury-tea.component';
import DeliciousTea from './routes/delicious-tea/delicious-tea.component';
import ClassicTea from './routes/classic-tea/classic-tea.component';
import PickedTea from './routes/picked-tea/picked-tea.component';
import CuriousTea from './routes/curious-tea/curious-tea.component';
import RelaxingTea from './routes/relaxing-tea/relaxing-tea.component';
import Footer from './components/footer/footer.component';

import { selectAuthReducer } from './store/auth/auth.selector';

const Deals = () => {
  return <h2>I am the DEALS page</h2>;
};

const Read = () => {
  return <h2>I am the READ page</h2>;
};
const Franchising = () => {
  return <h2>I am the Franchising page</h2>;
};
const Gifts = () => {
  return <h2>I am the Gifts page</h2>;
};
const Delivery = () => {
  return <h2>I am the Delivery page</h2>;
};

const Coffee = () => {
  return <h2>I am the Coffee page</h2>;
};
const OtherProducts = () => {
  return <h2>I am the Other products page</h2>;
};
const Stores = () => {
  return <h2>I am the Stores page</h2>;
};

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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

          {/* {isLoggedIn && <Route path="checkout" element={<Checkout />} />} */}
<Route path="checkout" element={<Checkout />} />


          {/* {isLoggedIn && <Route path="checkout" element={<Checkout />} />} */}
          <Route path="checkout" element={<Checkout />} />

{/* 
          {isLoggedIn && (
            <Route path="checkout/order/:order" element={<Order />} />
          )} */}
         
            <Route path="checkout/order/:order" element={<Order />} />
        
          

          {isLoggedIn && <Route path="wish-list" element={<WishList />} />}

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
