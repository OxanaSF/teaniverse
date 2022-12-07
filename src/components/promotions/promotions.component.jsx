import 'react-responsive-carousel/lib/styles/carousel.min.css';

import PromotionsItem from '../promotions-item/promotions-item.component';

import './promotions.styles.scss';

const promotions = [
  {
    h1: 'Roastmaster recommends',
    url: 'https://www.chay.info/upload/iblock/9ba/9ba78f78877a86f285393f04b22089aa.webp',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab veniam quisquam, repellendus corrupti atque voluptas cupiditate quaerat ipsum',
  },
  {
    h1: 'Teatester recommends',
    url: 'https://www.chay.info/upload/iblock/cf4/cf472d85b933fbe294e62cefc1fcb861.webp',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab veniam quisquam, repellendus corrupti atque voluptas cupiditate quaerat ipsum',
  },
  {
    h1: 'A pound of tea',
    url: 'https://www.chay.info/upload/iblock/804/80465a180330041fd286ba27b5c7daa0.webp',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab veniam quisquam, repellendus corrupti atque voluptas cupiditate quaerat ipsum',
  },
  //   {
  //     h1: 'A birthday present',
  //     url: 'https://www.chay.info/upload/iblock/b3e/b3e9cf96077c6b03de16592649857f4a.webp',
  //     text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab veniam quisquam, repellendus corrupti atque voluptas cupiditate quaerat ipsum voluptatem unde saepe cum ut vitae cumque nisi iste, esse nemo velit!',
  //   },
  //   {
  //     h1: 'Discount for every fifth ounce',
  //     url: 'https://www.chay.info/upload/iblock/b3e/b3e9cf96077c6b03de16592649857f4a.webp',
  //     text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab veniam quisquam, repellendus corrupti atque voluptas cupiditate quaerat ipsum voluptatem unde saepe cum ut vitae cumque nisi iste, esse nemo velit!',
  //   },
  //   {
  //     h1: 'A pound of coffee',
  //     url: 'https://www.chay.info/upload/iblock/974/97419450e7590d4b1291fc9a37af7e69.webp',
  //     text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab veniam quisquam, repellendus corrupti atque voluptas cupiditate quaerat ipsum voluptatem unde saepe cum ut vitae cumque nisi iste, esse nemo velit!',
  //   },
];

const Promotions = () => {
  return (
    <section className="home-promotions-container">
      <header className="home-promotions-header">
        <div className="line"></div>
        <h1>Discounts and Promotions</h1>
        <div className="line"></div>
      </header>

      <div className="home-promotions-cards">
        {promotions.map((item, index) => (
          <PromotionsItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Promotions;
