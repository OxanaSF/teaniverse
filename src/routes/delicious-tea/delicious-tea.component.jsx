import { useState, useContext, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.components';

// import { CategoriesContext } from '../../context/categories.context';

import './delicious-tea.styles.scss';

const DeliciousTea = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  // const [teaProducts, setTeaProducts] = useState(categoriesMap['tea']);

  // useEffect(() => {
  //   setTeaProducts(categoriesMap['tea']);
  // }, [categoriesMap]);

  return (
    <div className="real-life-tea-container">
      <h2>Delicious</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/sweet-tea-icon.webp`}
        alt="plate of fruits"
      />
      <p>
        Of course, everyone has own "delicious". We noticed that in 95% of cases
        buyers think of varieties with berry or flower additives, with a
        sweetish, but not cloying taste and a bright tea base. This is what we
        recommend here!
      </p>

      <div
        className="delicious-page-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/delicious-tea-bg.jpeg)`,
        
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

export default DeliciousTea;
