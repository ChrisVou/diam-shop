import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from '../custom-button/custom.button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

//Boroume kai kanoume destructured to cartItems edw giati xrisimopoiisame
//tin connect kai tin mapStateToProps
const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
);

//Gia na exoume prosvasi sta cartItems xrisimopoioume tin connect
//i cartItems einai mesa stin cart.reducer.js kai einai enas array pou krataei mesa ta stoixeia
//id, imageUrl, name, price, quantity
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
