import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CardDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

/* Isagoume to Logo mas pou einai .svg file
to { ReactComponent as Logo } einai special syntax in React for importing SVG */
import { ReactComponent as Logo } from '../../assets/diam.svg';

import './header.styles.scss';

/* .Destructured the currentUser property pou kanoume pass apo to Header sto App.js
 .Xrisimopoioume to Link apo to react-router-dom kai opote patame pano sto logo mas mas pei sto 
    homepage to="/" 
.An o currentUser (diladi an exoume kapio account pou einai log in)
        tha einai true kai tha emfanizete i epilogi SIGN OUT
        An einai false diladi den tha eimaste login me kapoio user (epistrefei null diladi false)
        tha emfanizetai to Link sign in gia na kanoume signin me kapoio account
        to signOut() mas to parexei i firebase auth den to grapsame emeis */
const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
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
        currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )
      }
      <CartIcon />
    </div>
    {hidden ? null : <CardDropdown />}
  </div>
);
/* .An to hidden einai true tote render null (tipota) alliws an to hidden einai false kanemou render
      to CardDropdown kai tha katevei to dropdown otan patame to icon tou shop bag mas */

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

//to connect tha to xrisimopoioume opou tha xreiazomaste properties apo to reducer
export default connect(mapStateToProps)(Header);

/* to state einai to root-reducer.js
Enas more advanced way gia na kanoume destructure
Mesa apo to root-reducer.js kanoume destrucure to user kai mesw tou root-reducer.js
kanoume destructure to currentUser pou vriskete sto user.reducer.js
to idio kai me to cart, ginete destructure mesa apo to root-reducer.js kai meta
to hidden ginete kai afto destructure pou vriskete sto cart.reducer.js
KANOUME DESTRUCTURE NESTED VALUES

const mapStateToProps = ({user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
}) */
