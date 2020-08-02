import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

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

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

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
      <div>
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
          {/* Afto to kanoume gia na poume oti otan kapios kanei signin me to account tou, na min borei na dei tin page /signin
            alla na ginete redirect stin homepage diladi '/', an kanei signout tote borei na vlepei tin page /signin */}
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  //to setCurrentUser object exei mia function tin user
  // opou kalei to dispatch.
  //to dispatch einai enas tropos tis redux gia na tis pei oti object mou
  // peraseis tha einai ena action object opou tha to perasw se kathe reducer
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// Xrisimopoioume tin connect gia na boroume na xrisimopoieisoume properties apo tin reducer
export default connect(mapStateToProps, mapDispatchToProps)(App);

/* To Route einai ena component pou pernei kapoia arguments: 
      To component pou leme pio component theloume na render
      To path pou einai ena string* tou path tou url
      To exact pernei tin timi true i false /
    /* Ama den valoume to exact pou apo default einai true (exact={true})
      tote otan pame sto /hats tha emfanizei kai tin selida tou HomePage
     panw apo tin selida HatsPage giati periexei to '/'hats*/

/* A <Switch> looks through its children <Route>s and
  renders the first one that matches the current URL. */
