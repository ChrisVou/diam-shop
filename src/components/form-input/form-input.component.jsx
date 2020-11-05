import React from 'react';

import './form-input.styles.scss';

 /* .Ta vazoume se ena group giati theloume to label kai to input na einai mazi
 .To ...otherProps einai an pame sto sign-in.component.jsx oti exei mesa to
 FormInput component, diladi ta (name, type, value, label, required)
 .Edw kanoume render epilektika to label giati den kseroume an to xriazomaste i oxi 
 .Dimiourgoume label mesa sto input
  Afto to className tha exei panda to class form-input-label
  alla tha prosthetoume kai to shrink class opote o user
  grafei kati mesa se afto alios tha einai empty '' (an to otherProps.value.length den exei kati mesa)
  .Kanoume render to label */ 

const FormInput = ({ handleChange, label, ...otherProps }) => (
  
  <div className="group">
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {    
      label ? (
        <label 
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null
    }
  </div>
)

export default FormInput;