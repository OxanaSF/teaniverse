import { useEffect } from 'react';

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
    <div>
      <button onClick={() => setActiveFilterBtn('all')}>All</button>
      <button onClick={() => setActiveFilterBtn('black')}>Black Tea</button>
      <button onClick={() => setActiveFilterBtn('green')}>Green Tea</button>
    </div>
  );
};

export default Filter;
