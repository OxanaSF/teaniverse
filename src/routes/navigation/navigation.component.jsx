import { Outlet } from 'react-router-dom';

import NavDesktop from './nav-desktop.component';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <div className="nav-container">
      <NavDesktop />

      <Outlet />
    </div>
  );
};

export default Navigation;
