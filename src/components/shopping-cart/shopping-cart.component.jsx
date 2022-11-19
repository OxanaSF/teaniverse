import './shopping-cart.styles.scss';

const ShoppingCart = () => {
  return (
    <div className='cart-icon-container'>
      <img
        src={`${process.env.PUBLIC_URL}/images/shopping-bag-brown.png`}
        alt="shopping bag icon"
      />
      <span className='item-count'>2</span>
    </div>
  );
};

export default ShoppingCart;
