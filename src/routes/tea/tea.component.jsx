import { useState, useContext, Fragment, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.components';

import { CategoriesContext } from '../../context/categories.context';

import TeaNavigation from '../../routes/tea-navigation/tea-navigation.component';

import './tea.styles.scss';

const Tea = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [teaProducts, setTeaProducts] = useState(categoriesMap['tea']);

  useEffect(() => {
    setTeaProducts(categoriesMap['tea']);
  }, [categoriesMap]);

  return (
    <section className="tea-section">
      <h2>Tea</h2>
      <TeaNavigation />

      <Fragment>
        <div className="tea-section-catalogue">
          {teaProducts &&
            teaProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>

        {/* {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <div className='tea-section-catalogue'>
            {categoriesMap['tea'].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))} */}
      </Fragment>

      <div>
        <h3>Tea</h3>
      </div>
      <article>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eaque,
        mollitia nihil corporis iure labore dolor. Consectetur itaque harum
        fugiat voluptatum quis, facilis saepe id voluptatem tenetur ab nulla
        voluptatibus!
      </article>
      <div>Club card</div>
    </section>
  );
};

export default Tea;
