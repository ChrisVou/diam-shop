import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

/* .Kanoume destructuring apo to props to (title, imageUrl kai size)
To size einai gia tis 2 fwtografies (WOMENS, MENS) pou einai megaliteres apo tis alles tris
  .Otan sto size pernaei i timi large tote an pame sto scss 
  vlepoume oti energopioite to &.large class pou einai mesa
  sto .menu-item class
  Otan kanoume click panw sto menu-item mas paei sto /shop/hats page 
  .Javascript template strings, me auto ton tropo (style) kanoume dynamic style sta component mas */
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div 
    className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div 
      className='background-image' 
      style={{  
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
/* Edw vazoume withRouter(MenuItem) kai mas epistrefei ena super powered
MenuItem component me prosvasi sto history, match ktl...


Ta className einai emfolevmena (nested) opws akrivos kai sto
menu-item.styles.scss arxeio mas */


/* withRouter   You can get access to the history object’s properties and 
the closest <Route>'s match via the withRouter higher-order component. 
withRouter will pass updated match, location, and 
history props to the wrapped component whenever it renders.
To kanoume gia na apofigoume to prop drilling or prop tuneling
Giati kanonika gia na exoumne prosvasi sto match, history ktl..
tha prepei na perasoume tis prop apo polla component mexri na ftasoume 
sto menu-item, enw me the withRouter to pername mono sto menu-item 
kai oxi se ola ta proigoumena component */