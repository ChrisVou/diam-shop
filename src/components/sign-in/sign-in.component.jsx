import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom.button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    //xrisimopoioume to preventDefault gia na exoume pliri elengxo stin form mas 
    // otan kanoume submit
    event.preventDefault();

    //Afti tin stigmi otan patame submit kanoume clear to email kai password fields
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target;

    //Thetoume dynamic tin property value
    //An px grapsoume sto email: chrisvou@hotmail.com tote tha ginei [email]: chrisvou@hotmail.com
    //kai an grapsoume sto password: 12345@ tote tha ginei [password]: 12345@
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className='sign-in'>
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>
        
         {/* Kaloume tin handleSubmit kai otan kanoume submit tin forma mas kanei clear ta 2 fields */}
         <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            rype="email" 
            value={this.state.email} 
            handleChange={this.handleChange}
            //Afto to label einai pou pernei ws props sto form-input.component.jsx
            label='Email'
            required 
          />
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            //Afto to label einai pou pernei ws props sto form-input.component.jsx
            label='Password'
            required 
          />
          <CustomButton type="submit"> Sign In </CustomButton>
         </form>
      </div>
    );
  }
}

export default SignIn;


//To FormInput component stin arxi itan input
//To CustomButton prin apo to type="submit" itan input