import React from 'react';

import './custom.button.styles.scss';

//Sto ...otherProps pername type="submit" pou exoume sto sign-in.component.jsx
//To children einai to Sing In poy grafoume sto sign-in.component.jsx
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button 
  //An to isGoogleSignIn property einai true tote trexei to 'google-sign-in' css class allios
  // an einai false tote einai '' keno, episis to custom-button sto telos always render
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
    {...otherProps}>

    {children}
  </button>
)

export default CustomButton;