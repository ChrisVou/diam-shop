import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHiden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { 
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles.jsx';

const CartIcon = ({ toggleCartHiden, itemCount }) => (
  <CartContainer onClick={toggleCartHiden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHiden: () => dispatch(toggleCartHiden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CartIcon);