import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

//Kanoume destructuring apo to props to (title, imageUrl kai size)
//To size einai gia tis 2 fwtografies (WOMENS, MENS) pou einai megaliteres apo tis alles tris
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  //Otan sto size pernaei i timi large tote an pame sto scss 
  //vlepoume oti energopioite to &.large class pou einai mesa
  //sto .menu-item class
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div 
      className='background-image' 
      style={{
        //Javascript template strings, me auto ton tropo (style) kanoume dynamic style sta component mas
        backgroundImage: `url(${imageUrl})`
      }} 
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

//Ta className einai emfolevmena (nested) opws akrivos kai sto
//menu-item.styles.scss arxeio mas