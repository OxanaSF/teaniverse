
import Button from '../button/button.component';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item.component';

import './shopping-cart-dropdown.styles.scss'

const CartDropdown = () => (
  <div className='cart-dropdown-container'>
    <div className='cart-items'>
      {[].map(item => <ShoppingCartItem shoppingCartItem={item}/>)}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;