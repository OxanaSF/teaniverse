
import Button from '../button/button.component';

import './shopping-cart-dropdown.styles.scss'

const CartDropdown = () => (
  <div className='cart-dropdown-container'>
    <div className='cart-items' />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;