import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';
import Tea from './components/tea/tea.component';

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

const ClassicTea = () => {
  return <h2>I am the Classic Tea page</h2>;
};
const DeliciousTea = () => {
  return <h2>I am the Delicious Tea page</h2>;
};
const RealLifeTea = () => {
  return <h2>I am the RealLife Tea page</h2>;
};
const CuriousTea = () => {
  return <h2>I am the Curious Tea page</h2>;
};
const RelaxingTea = () => {
  return <h2>I am the Relaxing Tea page</h2>;
};

const Footer = () => {
  return (
    <div>
      <h2>I am the Footer Component</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          {/* Paths from the Home page */}
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="deals" element={<Deals />} />
          <Route path="read" element={<Read />} />
          <Route path="franchising" element={<Franchising />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="coffee" element={<Coffee />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/other-products" element={<OtherProducts />} />
          <Route path="stores" element={<Stores />} />

          {/* Paths of the Tea Navigation */}
          <Route path="classic-tea" element={<ClassicTea />} />
          <Route path="delicious-tea" element={<DeliciousTea />} />
          <Route path="real-life-tea" element={<RealLifeTea />} />
          <Route path="curious-tea" element={<CuriousTea />} />
          <Route path="relaxing-tea" element={<RelaxingTea />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
