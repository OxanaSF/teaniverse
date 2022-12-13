import { useState, Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/category.selector';

import ProductCard from '../../components/product-card/product-card.components';
import TeaNavigation from '../../routes/tea-navigation/tea-navigation.component';
import Filter from '../../components/filter/filter.component';
import FilterByPrice from '../../components/filter-by-price/filter-by-price.component';
import Spinner from '../../components/spinner/spinner.component';
import BonusCardsSection from '../../components/bonus-cards-section/bonus-cards-section.component';

import './tea.styles.scss';

const Tea = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [sortByTypeBtn, setSortByTypeBtn] = useState(false);
  const [sortByPriceBtn, setSortByPriceBtn] = useState(true);

  const [teaProducts, setTeaProducts] = useState(categoriesMap['tea']);
  const [filteredTea, setFilteredTea] = useState(categoriesMap['tea']);
  const [activeFilterBtn, setActiveFilterBtn] = useState('all');

  useEffect(() => {
    setTeaProducts(categoriesMap['tea']);
    setFilteredTea(categoriesMap['tea']);
  }, [categoriesMap]);

  const toggleSortByTypeHandler = () => {
    setSortByTypeBtn(true);
    setSortByPriceBtn(false);
  };

  const toggleSortByPriceHandler = () => {
    setSortByTypeBtn(false);
    setSortByPriceBtn(true);
  };

  return (
    <section className="tea-section">
      <h2>Tea</h2>

      <TeaNavigation />

      <div className="filter-container">
        
        <div className='filter-container-buttons'>
          
          <button onClick={toggleSortByTypeHandler}>sort by type</button>
          <button onClick={toggleSortByPriceHandler}>sort by price</button>
        </div>
        <div>
          {sortByTypeBtn && (
            <Filter
              teaProducts={teaProducts}
              setFilteredTea={setFilteredTea}
              activeFilterBtn={activeFilterBtn}
              setActiveFilterBtn={setActiveFilterBtn}
            />
          )}

          {sortByPriceBtn && (
            <FilterByPrice
              teaProducts={teaProducts}
              setFilteredTea={setFilteredTea}
              activeFilterBtn={activeFilterBtn}
              setActiveFilterBtn={setActiveFilterBtn}
            />
          )}
        </div>
      </div>

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

      <div className="tea-section-bottom-text">
        <div className="line"></div>
        <h3>Tea</h3>
        <div className="line"></div>
      </div>
      <div className="article-container">
        <h4>We buy tea wisely!</h4>
        <article>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            eaque, mollitia nihil corporis iure labore dolor. Consectetur itaque
            harum fugiat voluptatum quis, facilis saepe id voluptatem tenetur ab
            nulla voluptatibus! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Porro eaque, mollitia nihil corporis iure labore
            dolor. Consectetur itaque harum fugiat voluptatum quis, facilis
            saepe id voluptatem tenetur ab nulla voluptatibus!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            eaque, src/routes/tea/tea.styles.scss mollitia nihil corporis iure
            labore dolor. Consectetur itaque harum fugiat voluptatum quis,
            facilis saepe id voluptatem tenetur ab nulla voluptatibus! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Porro eaque,
            mollitia nihil corporis iure labore dolor. Consectetur itaque harum
            fugiat voluptatum quis, facilis saepe id voluptatem tenetur ab nulla
            voluptatibus!
          </p>
        </article>
      </div>

      <BonusCardsSection />
    </section>
  );
};

export default Tea;