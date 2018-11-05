import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import InjectedCheckoutForm from './CheckoutForm'

class MyStoreCheckout extends React.Component {
  // constructor() {
  //   super()
  //   this.state = { stripe: null }
  // }
  // componentDidMount() {
  //   if (window.Stripe) {
  //     this.setState({
  //       stripe: window.Stripe('pk_test_wNa6J3UliaH35ZwUEKEUdMKy')
  //     })
  //   } else {
  //     document.querySelector('#stripe-js').addEventListener('load', () => {
  //       // Create Stripe instance once Stripe.js loads
  //       this.setState({
  //         stripe: window.Stripe('pk_test_wNa6J3UliaH35ZwUEKEUdMKy')
  //       })
  //     })
  //   }
  // }

  render() {
    return (
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    )
  }
}

export default MyStoreCheckout
