import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from  'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render( 
  <React.StrictMode>
  {/* To BrowserRouter einai ena component pou mas dinei to react-router-dom package.
      Vazoume to App component anamesa sto BrowserRouter component
      Kai mas dinei olo to functionality tou Route */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);