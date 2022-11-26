import { Link } from 'react-router-dom';

import './tea-navigation.styles.scss';

const TeaNavigation = () => {
  return (
    <nav>
      <Link to="/classic-tea" className="tea-nav-item">
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/breakfast-bg.png`}
          alt=""
        />
        <p>Breakfast club</p>
      </Link>

      <Link to="/delicious-tea" className="tea-nav-item">
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/sweet-tea-icon.webp`}
          alt=""
        />
        <p>Delicious</p>
      </Link>

      <Link to="/real-life-tea" className="tea-nav-item">
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/expensive-tea-icon.webp`}
          alt=""
        />
        <p>Luxury</p>
      </Link>

      <Link to="/curious-tea" className="tea-nav-item">
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/unusual-tea-icon.webp`}
          alt=""
        />
        <p>Curious</p>
      </Link>

      <Link to="/relaxing-tea" className="tea-nav-item">
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/relaxing-tea-icon.webp`}
          alt=""
        />
        <p>Relaxing</p>
      </Link>
    </nav>
  );
};

export default TeaNavigation;
