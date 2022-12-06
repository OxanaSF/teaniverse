import { useState, useContext, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.components';

// import { CategoriesContext } from '../../context/categories.context';

import './relaxing-tea.styles.scss';

const RelaxingTea = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  // const [teaProducts, setTeaProducts] = useState(categoriesMap['tea']);

  // useEffect(() => {
  //   setTeaProducts(categoriesMap['tea']);
  // }, [categoriesMap]);

  return (
    <div className="real-life-tea-container">
      <h2>Relaxing</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/relaxing-tea-icon.webp`}
        alt="plate of fruits"
      />
      <p>
        In this selection, there are teas with ingredients that have a slight
        sedative effect. Valerian, chamomile, lemon balm. Everything you need to
        calm down and sleep well.
      </p>

      <div
      className='relaxing-tea-page-bg'
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/relaxing-tea.jpeg)`,
        }}
      >
        <div className="gradient-styled"></div>
      </div>

      {/* <div className="tea-section-catalogue">
        {teaProducts &&
          teaProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div> */}
    </div>
  );
};

export default RelaxingTea;
