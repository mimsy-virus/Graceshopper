import React from 'react'

export default class CheckoutForm extends React.Component {
  render() {
    return (
      <form action={`/api/stripe/${this.props.userId}`} method="POST">
        <script
          src="https://checkout.stripe.com/checkout.js"
          className="stripe-button"
          data-key="pk_test_tJzNJ8TpR8cVSF11Fl7iGlpl"
          data-amount="999"
          data-name="Demo Site"
          data-description="Example charge"
          data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
          data-locale="auto"
          data-zip-code="true"
        />
      </form>
    )
  }
}
