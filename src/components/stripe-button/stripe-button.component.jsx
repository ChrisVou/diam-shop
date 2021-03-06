import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HjsSbKDX9SFFUh59bJiuXPml5I7L6BldhIf5gMFpFxQJDFIuYF6OLXC40FZQvGeI4rQKw5dYMfuwXryC982jIfz00m8VCeQ0p';

const onToken = token => {
  console.log(token);
  alert('Payment Successful');
}

  return (
    <StripeCheckout 
      label='Pay Now'
      name='DIAM Shop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/RDD.svg'
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;