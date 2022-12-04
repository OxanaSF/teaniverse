import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';

import './carousel-container.styles.scss';

const CarouselContainer = () => {
  const slides = [
    // `${process.env.PUBLIC_URL}/images/slides-main-bg/gifts_bg.webp`,
    // `${process.env.PUBLIC_URL}/images/slides-main-bg/subscribe-bg.webp`,
    // `${process.env.PUBLIC_URL}/images/slides-main-bg/tea-main-bg.webp`,
    // `${process.env.PUBLIC_URL}/images/slides-main-bg/delivery.webp`,

    `https://www.chay.info/upload/webp/iblock/c4b/05m4ie3yfwm3wmkb0ocpsx04wdr4szao.webp`,
    `//www.chay.info/upload/webp/iblock/4fe/1dan862gx22ugkj8969wmufzp8xx3ui1.webp`,
    `https://www.chay.info/upload/iblock/59b/59b3d5e272287f94fcea8607bf33b56b.webp`,
    `https://www.chay.info/upload/webp/iblock/e12/me0ie611hthyay9rv9up38nulltv0gip.webp`,
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
          interval={5000}
        >
          {slides.map((img, index) => (
            <img key={index} className="carousel-img" src={img} alt="tea" />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselContainer;
