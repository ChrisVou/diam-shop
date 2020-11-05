//Edw enonoume olous tous redicers se ena kendriko arxei pou legete root-reducer
import { combineReducers } from 'redux';
/* Afou kaname prin presist to store mas (store.js) twra tha kanoume presist
tin reducer mas (root-reducer.js) */
import { persistReducer } from 'redux-persist';
//Edw leme oti theloume na xrisimopoieisoume to localStorage pou vriskete mesa sto /lib/storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

/* Ena JSON Object pou periexei to pithanon configuration pou theloume gia na xrisimopoieisoume
gia tin persist mas
To key einai apo ekei pou theloume na ksekinaei, to storage einai afto pou kaname import
kai to whitelist einai ena array pou exei ta string names apo oti reducer theloume na apothikefsoume
theloume na apothikefsoume mono tin cart, giati to user xrisimopoieite apo tin firebase opote den asxoloumaste */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);