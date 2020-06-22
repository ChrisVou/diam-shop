import React from 'react';

import './custom.button.styles.scss';

//Sto ...otherProps pername type="submit" pou exoume sto sign-in.component.jsx
//To children einai to Sing In poy grafoume sto sign-in.component.jsx
const CustomButton = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
)

export default CustomButton;