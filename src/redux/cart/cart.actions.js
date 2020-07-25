import CartActionTypes from './cart.types';

export const toggleCartHiden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//Grafoume tin action me name addItem opou einai mia function me name item
//pou tha kanei return tin new action type object
//to type: CartActionTypes.ADD_ITEM leei stin reducer heeyyy prospathw na kanw add afto to item
// to to payload tha einai to item, to payload borei na einai otidipote
//stin sigekrimeni periptosi to payload tha einai to item pou theloume
//na perasoume mesa sto cartItem[] array blepe cart.reducer.js mesa sto
//cartItems array exei tin value action.payload pou einai to item.
// ([#.4])
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
