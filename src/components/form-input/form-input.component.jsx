import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {
      label ? (
        //Dimiourgoume label mesa sto input
        //Afto to className tha exei panda to class form-input-label
        // alla tha prosthetoume kai to shrink class opote o user
        // grafei kati mesa se afto
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