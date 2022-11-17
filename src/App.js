import { Routes, Route } from 'react-router-dom';


import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Tea from './routes/tea/tea.component';


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
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/read" element={<Read />} />
        <Route path="/franchising" element={<Franchising />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/other-products" element={<OtherProducts />} />
        <Route path="/stores" element={<Stores />} />
      </Route>
    </Routes>
  );
};

export default App;
