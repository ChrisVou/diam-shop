import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from  'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

/* .O Provider einai ena component opou einai o parent se oti exoume mesa sto Application mas
    kai ws parent mas afinei na exoume prosvasei se oti sxetizete me to store pou ekei
    tha apotheikefsoume olo ton kwdika apo to redux state 
   .To BrowserRouter einai ena component pou mas dinei to react-router-dom package.
  Vazoume to App component anamesa sto BrowserRouter component
  Kai mas dinei olo to functionality tou Route 
   .Mesa sto PersistGatee pername to {persistor} pou grapsame sto store.js pou einai to store mas */
ReactDOM.render( 
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);