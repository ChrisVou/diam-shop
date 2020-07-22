//Edw enonoume olous tous redicers se ena kendriko arxei pou legete root-reducer
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});