import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';

import { slides } from '../../utils/data/slides-hero';

import './carousel-container.styles.scss';

const CarouselContainer = () => {
  return (
    <section className="img-carousel-bg-container">
      <div className="carousel">
        <Carousel
          className="carousel"
          autoPlay={true}
          infiniteLoop={true}
          animationHandler="fade"
          showArrows={false}
          showStatus={false}
          interval={4000}
          showThumbs={false}
        >
          {slides.map((slide, index) => (
            <div className="carousel-img" key={index}>
              <img src={slide.url} alt="tea" />

              <div className="h1-container">
                <div className="line"></div>
                <h1>{slide.heroHeader}</h1>
                <div className="line"></div>
              </div>
              <p>{slide.heroText}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselContainer;
