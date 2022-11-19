import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, description, price } = product;
  return (
    <div className="product-card-container">

      <div className="product-card-header">
        <img
          src={`${process.env.PUBLIC_URL}/images/tea-type-icons/heart.png`}
          alt=""
        />

        <div className="product-card-header-icons-container">
          {/* <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/sweet-tea-icon.svg`}
            alt=""
          /> */}
          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/berry-tea-icon.svg`}
            alt=""
          />
          {/* <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/special-tea-icon.svg`}
            alt=""
          /> */}
          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/fruit-tea-icon.svg`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/breakfast-tea-icon.svg`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/tea-type-icons/classic-tea-icon.svg`}
            alt=""
          />
        </div>
      </div>

      <div className="product-card-main">
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <h3>{price}</h3>
        <p>{description}</p>
      </div>


      <div className="product-card-footer">
        <button>
        <img
            src={`${process.env.PUBLIC_URL}/images/shopping-bag.png`}
            alt=""
          />

        </button>
      </div>


    </div>
  );
};

export default ProductCard;
