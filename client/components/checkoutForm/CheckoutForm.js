import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import './CheckoutForm'
const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize: '15px',
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4'
        },
        padding: '1rem'
      },
      invalid: {
        color: '#9e2146'
      }
    }
  }
}

class CheckoutForm extends React.Component {
  handleSubmit = ev => {
    ev.preventDefault()
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => console.log('[token]', payload))
    } else {
      console.log("Stripe.js hasn't loaded yet.")
    }
  }
  render() {
    return (
      <div>
        <label>
          Card info
          <CardElement />
        </label>
        <button type="submit">hi</button>
      </div>
    )
  }
}
export default injectStripe(CheckoutForm)
