import { useContext } from 'react';

import { ProductsContext } from '../../context/products.context';

import TeaNavigation from '../../routes/tea-navigation/tea-navigation.component';

import ProductCard from '../../components/product-card/product-card.components';

import './tea.styles.scss';

const Tea = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section className="tea-section">
      <h2>Tea</h2>
      {/* <Outlet /> */}
      <TeaNavigation />
      <div>
  

        <div className='tea-section-catalogue'>
          {products.map((product) => (
           <ProductCard 
              key={product.id}
              product={product}
           />
          ))}
        </div>

      </div>
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
