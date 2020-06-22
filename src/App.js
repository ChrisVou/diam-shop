import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div >
    {/* Vazoume to Header component eksw apo to Switch kai to Route giati
      To Header kanei render prin to Switch kai to Route.
      Kseroume oti i page mas einai mesa sto Switch kai to header mas
      mesa sto Header */}
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch> 
    </div>
  );
}

export default App;

/* To Route einai ena component pou pernei kapoia arguments: 
      To component pou leme pio component theloume na render
      To path pou einai ena string* tou path tou url
      To exact pernei tin timi true i false /
    /* Ama den valoume to exact pou apo default einai true (exact={true})
      tote otan pame sto /hats tha emfanizei kai tin selida tou HomePage
     panw apo tin selida HatsPage giati periexei to '/'hats*/

/* A <Switch> looks through its children <Route>s and
  renders the first one that matches the current URL. */