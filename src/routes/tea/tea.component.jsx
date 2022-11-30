import { useState, Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/category.selector';

import ProductCard from '../../components/product-card/product-card.components';
import TeaNavigation from '../../routes/tea-navigation/tea-navigation.component';
import Filter from '../../components/filter/filter.component';
import Spinner from '../../components/spinner/spinner.component';

import './tea.styles.scss';

const Tea = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  const [teaProducts, setTeaProducts] = useState(categoriesMap['tea']);
  const [filteredTea, setFilteredTea] = useState(categoriesMap['tea']);
  const [activeFilterBtn, setActiveFilterBtn] = useState('all');

  useEffect(() => {
    setTeaProducts(categoriesMap['tea']);
    setFilteredTea(categoriesMap['tea']);
  }, [categoriesMap]);

  console.log(filteredTea);
  console.log('isLoading', isLoading);

  return (
    <section className="tea-section">
      <h2>Tea</h2>

      <TeaNavigation />

      <Filter
        teaProducts={teaProducts}
        setFilteredTea={setFilteredTea}
        activeFilterBtn={activeFilterBtn}
        setActiveFilterBtn={setActiveFilterBtn}
      />

      <Fragment>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="tea-section-catalogue">
            {filteredTea &&
              filteredTea.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
        )}
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
