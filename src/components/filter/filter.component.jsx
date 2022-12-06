import { useEffect } from 'react';

import './filter.styles.scss';

const Filter = ({
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

    const filtered = teaProducts.filter((tea) => tea.type === activeFilterBtn);
    setFilteredTea(filtered);
  }, [activeFilterBtn, setFilteredTea, teaProducts]);

  return (
    <div className="tea-selectors-btn">
      <div className="box mask">
        <button onClick={() => setActiveFilterBtn('all')}>All</button>
        <button onClick={() => setActiveFilterBtn('black')}>Black Tea</button>
        <button onClick={() => setActiveFilterBtn('green')}>Green Tea</button>
  
      </div>
    </div>
  );
};

export default Filter;
