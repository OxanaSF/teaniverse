import './shopping-cart-item-dropdown.styles.scss';

const ShoppingCartItem = ({ shoppingCartItem }) => {
  const { name, imageUrl, price, quantity } = shoppingCartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />

      <div className="item-info">
        <span className="item-name"> {name}</span>
        <span className="item-price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
