/* Eisagoume middleware sto store mas etsi wste otan actions get fired i dispatched
tha boroume na tis kanoume catch kai na tis emfanisoume
Stin ousia to middleware einai functions pou dexonde actions kanoun kati me aftes
kai stin sinexeia tis pernane sto Root Reducer */
import { createStore, applyMiddleware } from 'redux';
/* To persistStore epitrepei ston browser na kanei cache etsi wste otan kanoume
refresh tin checkout page na min diagrapsi oti exoume vali sto kalathi mas apo proionda */
import { persistStore } from 'redux-persist';
//To logger einai kalo gia emas na to xrisimopoioume otan kanoume debuggin to redux code mas
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };