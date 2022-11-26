import { useState, useContext, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.components';

// import { CategoriesContext } from '../../context/categories.context';

import './curious -tea.styles.scss'

const CuriousTea = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  // const [teaProducts, setTeaProducts] = useState(categoriesMap['tea']);

  // useEffect(() => {
  //   setTeaProducts(categoriesMap['tea']);
  // }, [categoriesMap]);

  return (
    <div className="real-life-tea-container">
      <h2>Curious</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/unusual-tea-icon.webp`}
        alt="plate of fruits"
      />
      <p>
     Ingredients that are not expected 
       to be seen in tea, but which bring their own note 
       to the blend. 
      </p>

      <div
        className="delicious-page-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/curious-bg.jpeg)`,
        
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

export default CuriousTea;
