import { Fragment, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import NavDesktop from './nav-desktop.component';
import NavMobile from './nav-mobile.component';

import './navigation.styles.scss';

const Navigation = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1100);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1100);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <Fragment>
      {isDesktop ? <NavDesktop /> : <NavMobile />}

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
