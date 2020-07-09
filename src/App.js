import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

//Opote kanei kapoios xristis login me to "Sign in with google"
//theloume na apothikevoume ta stoixeia tou user object gia na boroume
//na ta perasoume se ola ta component mas afou to App component einai parent
//giafto kai tha alaksoume to App component se class

class App extends React.Component {
// constructor() {
//   super();

//   this.state = {
//     currentUser: null
//   };
// }

unsubscribeFromAuth = null

componentDidMount() {
  const {setCurrentUser} = this.props;

  //O user einai o telefteos xristos pou kaname login me to Sign in with google button
  //Me afton ton trwpo an den kanoume sign out apo ton xristi mas kathe fora
  // pou tha epistrefoume sto site tha mas exei kratimeno ton user pou kaname login
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //Otan enas user kanei login elenxei an sto if an ondws exei kanei login o user
    if (userAuth) {
      //An iparxei idi ena document mesa stin firebase me ton user pou ekane login
      //tote pernoume ta stixeia tou kai ta vazoume sto userRef, an den iparxoun ta stoixeia tou
      // tote paei sto firebase.utils.js arxeio kai dimiourgei enan kainourgio user me ta stoixeia tou vlepe mesa sto try - catch
      const userRef = createUserProfileDocument(userAuth);

      //Edw ftiaxoume tin state tou local app me ta stoixeia tou user
      (await userRef).onSnapshot(snapShot => {
        // this.setState({
        //   currentUser: {
        //     id: snapShot.id,
        //     ...snapShot.data()
        //   }
        // });
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      });
    } else {
      //An o user kanei log out thetoume to currentUser: null pou pernoume pisw apo to userAuth
      //this.setState({currentUser: userAuth});
      setCurrentUser(userAuth);
    }
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
        {/*<Header currentUser={this.state.currentUser} />*/}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch> 
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);

/* To Route einai ena component pou pernei kapoia arguments: 
      To component pou leme pio component theloume na render
      To path pou einai ena string* tou path tou url
      To exact pernei tin timi true i false /
    /* Ama den valoume to exact pou apo default einai true (exact={true})
      tote otan pame sto /hats tha emfanizei kai tin selida tou HomePage
     panw apo tin selida HatsPage giati periexei to '/'hats*/

/* A <Switch> looks through its children <Route>s and
  renders the first one that matches the current URL. */