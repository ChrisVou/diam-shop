import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';

//Isagoume to Logo mas pou einai .svg file
//to { ReactComponent as Logo } einai special syntax in React for importing SVG
import { ReactComponent as Logo } from '../../assets/diam.svg';

import './header.styles.scss';

//Destructured the currentUser property pou kanoume pass apo to Header sto App.js
const Header = ({ currentUser }) => (
  <div className='header'>
  {/* Xrisimopoioume to Link apo to react-router-dom kai opote patame pano sto logo mas mas pei sto 
    homepage to="/" */}
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        //An o currentUser (diladi an exoume kapio account pou einai log in)
        //tha einai true kai tha emfanizete i epilogi SIGN OUT
        //An einai false diladi den tha eimaste login me kapoio user (epistrefei null diladi false)
        //tha emfanizetai to Link sign in gia na kanoume signin me kapoio account 
        //to signOut() mas to parexei i firebase auth den to grapsame emeis
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      }
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);