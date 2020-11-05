import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButtom from '../custom-button/custom.button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHiden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

/* .Boroume kai kanoume destructured to cartItems edw giati xrisimopoiisame
    tin connect kai tin mapStateToProps 
 .Sto condition edw leme an to cartItems.length einai 0 emfanise to Your cart is empty
  alliws an exeie kapia timi enfanise sto cart-dropdown ta items 
.Otan patame to GO TO CHECKOUT button mas paei sto /checkout page kai taftoxrona
    me to dispatch kalei tin toggleCartHiden action creator kai eksafanizei to cart dropdown */
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {}
      {
        cartItems.length ? (
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
    ) : (
      <span className='empty-message'>Your cart is empty</span>
    )}
    </div>
    <CustomButtom onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHiden())
    }}>
      GO TO CHECKOUT
    </CustomButtom>
  </div>
);

/* .Gia na exoume prosvasi sta cartItems xrisimopoioume tin connect
   i cartItems einai mesa stin cart.reducer.js kai einai enas array pou krataei mesa ta stoixeia
   id, imageUrl, name, price, quantity */
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
