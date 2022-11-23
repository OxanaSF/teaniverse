import { useState, useContext, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.components';

import { CategoriesContext } from '../../context/categories.context';

import './luxury-tea.styles.scss'

const LuxuryTea = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [teaProducts, setTeaProducts] = useState(categoriesMap['tea']);

  useEffect(() => {
    setTeaProducts(categoriesMap['tea']);
  }, [categoriesMap]);

  return (
    <div className="real-life-tea-container">
      <h2>Luxury</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/expensive-tea-icon.webp`}
        alt="polygon decoration"
      />
      <p>
        Rich taste. What in bad texts is called "elite". Tea for special
        occasions, for status gifts, and for every day is suitable. In this
        selection, the most expensive varieties that are "worth it".
      </p>

      <div
        className="real-life-page-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/real-life-bg.webp)`,
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

export default LuxuryTea;
