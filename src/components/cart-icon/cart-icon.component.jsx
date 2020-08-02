import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHiden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHiden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHiden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHiden: () => dispatch(toggleCartHiden())
});

//Xrisimopoioume tin reduce gia na prosthesoume ola ta quantity apo ta proionda pou
//vazoume mesa sto kalathi agorwn kai na emfanisoume to sinoliko arithmo
//ton proiondon mas mesa sto bag icon pou vriskete sto menu mas dipla apo to sign in - sign out
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);