import { useEffect } from 'react';

import './filter-by-price.styles.scss'

const FilterByPrice = ({
  teaProducts,
  setFilteredTea,
  activeFilterBtn,
  setActiveFilterBtn,
}) => {



  useEffect(() => {
    if (activeFilterBtn === 'all') {
      setFilteredTea(teaProducts);
      return;
    }
else if(activeFilterBtn === '400'){
    const filtered = teaProducts.filter((tea) => tea.price < 350);
    setFilteredTea(filtered);
} else{
    const filtered = teaProducts.filter((tea) => tea.price < 250);
    setFilteredTea(filtered);
}
 
  }, [activeFilterBtn, setFilteredTea, teaProducts]);

  return (
    <div className="tea-selectors-btn">
      <div className="box mask">
        <button onClick={() => setActiveFilterBtn('all')}>All Prices</button>
        <button onClick={() => setActiveFilterBtn('400')}>less than 350</button>
        <button onClick={() => setActiveFilterBtn('300')}>less than 250</button>
  
      </div>
    </div>
  );
};

export default FilterByPrice;
