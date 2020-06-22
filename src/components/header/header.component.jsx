import React from 'react';
import { Link } from 'react-router-dom';

//Isagoume to Logo mas pou einai .svg file
//to { ReactComponent as Logo } einai special syntax in React for importing SVG
import { ReactComponent as Logo } from '../../assets/diam.svg';

import './header.styles.scss';

const Header = () => (
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
    </div>
  </div>
)

export default Header;