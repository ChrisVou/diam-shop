import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch> 
    </div>
  );
}

export default App;

/* To Route einai ena component pou pernei kapoia arguments: 
      To component pou leme pio component theloume na render
      To path pou einai ena string* tou path tou url
      Ti exact pernei tin timi true i false /
    /* Ama den valoume to exact pou apo default einai true (exact={true})
      tote otan pame sto /hats tha emfanizei kai tin selida tou HomePage
     panw apo tin selida HatsPage giati periexei to '/'hats*/

/* A <Switch> looks through its children <Route>s and
  renders the first one that matches the current URL. */