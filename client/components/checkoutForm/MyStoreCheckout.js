import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import InjectedCheckoutForm from './CheckoutForm'

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    )
  }
}

export default MyStoreCheckout
