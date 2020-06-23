import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

//Opote kanei kapoios xristis login me to "Sign in with google"
//theloume na apothikevoume ta stoixeia tou user object gia na boroume
//na ta perasoume se ola ta component mas afou to App component einai parent
//giafto kai tha alaksoume to App component se class

class App extends React.Component {
constructor() {
  super();

  this.state = {
    currentUser: null
  };
}

unsubscribeFromAuth = null

componentDidMount() {
  //O user einai o telefteos xristos pou kaname login me to Sign in with google button
  //Me afton ton trwpo an den kanoume sign out apo ton xristi mas kathe fora
  // pou tha epistrefoume sto site tha mas exei kratimeno ton user pou kaname login
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user });

    console.log(user);
  });
}

//To componentDidMount() einai panda ena open subscription kai prepei emeis na to klisoume
//otan kanoume unMount gia na min prokalesei memory leak
componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div >
      {/* Vazoume to Header component eksw apo to Switch kai to Route giati
        To Header kanei render prin to Switch kai to Route.
        Kseroume oti i page mas einai mesa sto Switch kai to header mas
        mesa sto Header */}
        {/* An einai kaino tha perasei null mesa sto header component,
          allios tha perasei ton user */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch> 
      </div>
    );
  }
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