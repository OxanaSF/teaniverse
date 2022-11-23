import { useState, useContext, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.components';

import { CategoriesContext } from '../../context/categories.context';

import './classic-tea.styles.scss'

const ClassicTea = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [teaProducts, setTeaProducts] = useState(categoriesMap['tea']);

  useEffect(() => {
    setTeaProducts(categoriesMap['tea']);
  }, [categoriesMap]);

  return (
    <div className="real-life-tea-container">
      <h2>Breakfast club</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/sweet-tea-icon.webp`}
        alt="plate of fruits"
      />
      <p>
      Black classical tea, tart, fragrant with a 
      rich infusion and a taste that sounds like the choir
       "Glory" - polyphony of notes, energy and brightness. 
      </p>

      <div
        className="delicious-page-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/breakfast-tea.jpg)`,
        
        }}
      >
        <div className="gradient-styled"></div>
      </div>

      <div className="tea-section-catalogue">
        {teaProducts &&
          teaProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ClassicTea;
