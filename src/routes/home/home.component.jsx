import { Outlet } from 'react-router-dom';

import TeaNavigation from '../../routes/tea-navigation/tea-navigation.component';
import CarouselContainer from '../../components/carousel-container/carousel-container.component';
import HomeTextIntro from '../../components/home-text-intro/home-text-intro.component';
import BonusCardsSection from '../../components/bonus-cards-section/bonus-cards-section.component';
import SlideShowHover from '../../components/slide-show-hover/slide-show-hover.component';
import Promotions from '../../components/promotions/promotions.component';
import TeaSelections from '../../components/tea-selections/tea-selections.component'

import './home.styles.scss';

const Home = () => {
  return (
    <main>
      <CarouselContainer />
      <TeaNavigation />
      <HomeTextIntro />
      <BonusCardsSection />
      <SlideShowHover />
      <TeaSelections />
      <Promotions />

      <Outlet />
    </main>
  );
};

export default Home;
