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
else if(activeFilterBtn === '200'){
    const filtered = teaProducts.filter((tea) => tea.price <= 200);
    setFilteredTea(filtered);
} else{
    const filtered = teaProducts.filter((tea) => tea.price > 200 && tea.price < 300);
    setFilteredTea(filtered);
}
 
  }, [activeFilterBtn, setFilteredTea, teaProducts]);

  return (
    <div className="tea-selectors-btn">
      <div className="box mask">
        <button onClick={() => setActiveFilterBtn('all')}>All Prices</button>
        <button onClick={() => setActiveFilterBtn('200')}>$1 - $200</button>
        <button onClick={() => setActiveFilterBtn('300')}>$200 - $300</button>
  
      </div>
    </div>
  );
};

export default FilterByPrice;
