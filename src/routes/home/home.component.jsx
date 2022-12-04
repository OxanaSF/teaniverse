import { Outlet } from 'react-router-dom';

import TeaNavigation from '../../routes/tea-navigation/tea-navigation.component';
import CarouselContainer from '../../components/carousel-container/carousel-container.component';
import SlideShowHover from '../../components/slide-show-hover/slide-show-hover.component';
import ActionsSection from '../../components/actions-section/actions-section.component';

import './home.styles.scss';

const Home = () => {
  return (
    <main>
      <CarouselContainer />
      <TeaNavigation />
      <ActionsSection />
      <SlideShowHover />

      <Outlet />
    </main>
  );
};

export default Home;
