import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true,
  //Gia na apothikevoume item meesa ston array kai na ton kanoume empty analoga tin peristasi
  //Afto einai otan patame to button ADD TO CART gia na boroume na prosthetoume products px 2 kapela 3 papoutsia
  // ([#.1])
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    //Kathe fora pou o user tha kanei click tha prosthetoume to action mesa ston array
    // ([#.3])
    case CartActionTypes.ADD_ITEM:
      //Kanoume return ena object me olo to state opws einai
      //Meta theloume sto cartItems array na exei ta palia cartItems (...state.cartItems)
      //alla me tin kenourghia action pou get fired (action.payload)
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
