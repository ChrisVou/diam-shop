import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from  'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import './index.css';
import App from './App';


ReactDOM.render( 
  <React.StrictMode>
  {/* O Provider einai ena component opou einai o parent se oti exoume mesa sto Application mas
    kai ws parent mas afinei na exoume prosvasei se oti sxetizete me to store pou ekei
    tha apotheikefsoume olo ton kwdika apo to redux state */}
  <Provider store={store}>
  {/* To BrowserRouter einai ena component pou mas dinei to react-router-dom package.
      Vazoume to App component anamesa sto BrowserRouter component
      Kai mas dinei olo to functionality tou Route */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);