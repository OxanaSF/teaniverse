import './shopping-cart-item.styles.scss'

const ShoppingCartItem = ({ shoppingCartItem }) => {
    const { name, quantity } = shoppingCartItem

  return (
    <div>
        <h2>{name}</h2>
        <span>{quantity}</span>
    </div>
  )
}

export default ShoppingCartItem