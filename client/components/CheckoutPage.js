import React, { Component } from 'react'
import Checkout from './CheckoutForm'

class CheckoutPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCheckoutStarted: false,
      firstName: ''
    }
  }
  handleChange = () => {
    this.setState({ isCheckoutStarted: true })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input type="text" value={this.state.firstName} />
          </label>
          <label>
            Last Name
            <input type="text" value={this.state.lastName} />
          </label>
          <label>
            Address
            <input type="text" value={this.state.userAddress} />
          </label>
          <label>
            City
            <input type="text" value={this.state.userCity} />
          </label>
          <label>
            State
            <input type="text" value={this.state.userState} />
          </label>
          <label>
            Zip Code
            <input type="text" value={this.state.userZip} />
          </label>
          <button
            className="checkout-botton"
            type="submit"
            onClick={() => {
              console.log('Clicked!!')
              this.handleChange()
            }}
          >
            Checkout
          </button>
        </form>
        <div />

        {this.state.isCheckoutStarted && <Checkout />}
      </div>
    )
  }
}

export default CheckoutPage
