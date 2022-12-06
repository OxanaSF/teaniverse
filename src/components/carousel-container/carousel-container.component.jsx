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
      heroHeader: 'Tea deals and actions',
      heroText: 'For large volumes',
    },
    {
      url: `https://www.chay.info/upload/webp/iblock/e12/me0ie611hthyay9rv9up38nulltv0gip.webp`,
      heroHeader: 'International delivery',
      heroText: 'Ask a consultant for details',
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
          showThumbs={false}
        >
          {slides.map((slide, index) => (
            <div className="carousel-img">
              <img key={slide.url} src={slide.url} alt="tea" />

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
