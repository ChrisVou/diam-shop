import React from 'react';

import './custom.button.styles.scss';

/* .Sto ...otherProps pername type="submit" pou exoume sto sign-in.component.jsx
To children einai to Sing In poy grafoume sto sign-in.component.jsx 
  .An to inverted einai true trexei to 'inverted' class css allios an einai false tote einai ' ' keno
  An to isGoogleSignIn property einai true tote trexei to 'google-sign-in' css class allios
  an einai false tote einai '' keno, episis to custom-button sto telos always render */
const CustomButton = ({ 
  children, 
  isGoogleSignIn, 
  inverted, 
  ...otherProps 
}) => (
  <button 
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`} 
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;