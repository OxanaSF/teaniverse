import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';

import './carousel-container.styles.scss';

const CarouselContainer = () => {
  const slides = [
    {
      url: `https://www.chay.info/upload/webp/iblock/c4b/05m4ie3yfwm3wmkb0ocpsx04wdr4szao.webp`,
      heroHeader: 'Christmas gifts',
      heroText: 'Colleagues, friends, relatives',
    },
    {
      url: `//www.chay.info/upload/webp/iblock/4fe/1dan862gx22ugkj8969wmufzp8xx3ui1.webp`,
      heroHeader: 'Home Delivery subscription',
      heroText: 'Get quality product fast and easy',
    },
    {
      url: `https://www.chay.info/upload/iblock/59b/59b3d5e272287f94fcea8607bf33b56b.webp`,
      heroHeader: 'Tea Deals',
      heroText: 'Аor large volumes',
    },
    {
      url: `https://www.chay.info/upload/webp/iblock/e12/me0ie611hthyay9rv9up38nulltv0gip.webp`,
      heroHeader: 'International delivery',
      heroText: 'Us a consultant for details',
    },
  ];

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
        >
          {slides.map((slide, index) => (
            <div className="carousel-img">
              <img key={index} src={slide.url} alt="tea" />
              <h1>{slide.heroHeader}</h1>
              <p>{slide.heroText}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselContainer;
