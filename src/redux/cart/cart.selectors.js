//Me tin reselect library grafoume kwdika gia ta mapStateToProps mas
//Auto ginete giati o kwdikas pou grafoume mesa sta mapStateToProps se poles periptwseis
// einai reusable diladi ton xreisimopoioume se polla kommatia
// opote ta kaloume apo edw
import { createSelector } from 'reselect';

//Afto legete input selector
//Opou pernei oli tin state kai return ena kommati apo afti
// Stin sigekrimeni periptwsi girname mono tin cart apo oli tin state
const selectCart = state => state.cart;

//To createSelector pernei 2 arguments
//to prwto arguments einai ena collection diladi ena array apo input selectors
//kai to deftero argument einai ena function pou tha epistrefei tin value
//pou theloume apo afto ton selector
//Epidi xrisimopoioume tin createSelector to seelectCartItems einai memory selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

//Xrisimopoioume tin reduce gia na prosthesoume ola ta quantity apo ta proionda pou
//vazoume mesa sto kalathi agorwn kai na emfanisoume to sinoliko arithmo
//ton proiondon mas mesa sto bag icon pou vriskete sto menu mas dipla apo to sign in - sign out
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
