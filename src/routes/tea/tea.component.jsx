import { Outlet } from 'react-router-dom';

import TeaNavigation from '../tea-navigation/tea-navigation.component';

import './tea.styles.scss';

const Tea = () => {
  return (
    <section className="tea-section">
      <h2>Tea</h2>
      <Outlet />
      <TeaNavigation />
      <div>Tea catalogue</div>
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
