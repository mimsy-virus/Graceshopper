import React from 'react'

class Checkout extends React.Component {
  onSubmit() {}

  render() {
    return (
      <form action="your-server-side-code" onSubmit={this.onSubmit}>
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
