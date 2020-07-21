//Eisagoume middleware sto store mas etsi wste otan actions get fired i dispatched
// tha boroume na tis kanoume catch kai na tis emfanisoume
//Stin ousia to middleware einai functions pou dexonde actions kanoun kati me aftes
// kai stin sinexeia tis pernane sto Root Reducer
import { createStore, applyMiddleware } from 'redux';
//To logger einai kalo gia emas na to xrisimopoioume otan kanoume debuggin to redux code mas
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;