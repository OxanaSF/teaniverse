import { Outlet } from 'react-router-dom';

import TeaNavigation from '../../routes/tea-navigation/tea-navigation.component';

import './home.styles.scss'

const Home = () => {
  return (
    <main>
      <TeaNavigation />
      <Outlet />
    </main>
  );
};

export default Home;
