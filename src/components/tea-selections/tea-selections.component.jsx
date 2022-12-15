import TeaSelectionsCard from '../tea-selections-card/tea-selections-card.componet';

import'./tea-selections.styles.scss'



const selections = [
    {
        h3: 'Dolce vita',
        url: 'https://www.chay.info/upload/iblock/d83/d83db481fef85d9a049536fce51cd30e.webp'
    },

    {
        h3: 'Most popular',
        url: 'https://www.chay.info/upload/iblock/ead/ead07bc3e0041146ea50835b066bd702.webp'
    },
    {
        h3: 'Unique and unusual taste',
        url: 'https://www.chay.info/upload/iblock/c44/c4483b6f9f8988c1df6cf00a87866b89.webp'
    },
    {
        h3: 'Relaxing and chilling ',
        url: 'https://www.chay.info/upload/iblock/e70/e70fde74ee359b895a35bf41c1029e67.webp'
    },
]

const TeaSelections = () => {
  return (
    <section className="home-tea-selections-container">
      <header className="home-tea-selections-header">
        <div className="line"></div>
        <h1>Tea Selections</h1>
        <div className="line"></div>
      </header>

      <div className="home-selections-cards">
        {selections.map((item, index) => (
          <TeaSelectionsCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TeaSelections;
