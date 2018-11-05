import React, { Component } from 'react'
import Checkout from './CheckoutForm'
import axios from 'axios'
import CheckoutForm from './CheckoutForm'

class CheckoutPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCheckoutStarted: false,
      shippingInfo: {
        firstName: '',
        lastName: '',
        shippingAddress: '',
        shippingCity: '',
        shippingState: '',
        shippingZipCode: ''
      }
    }
  }
  handleChange = evt => {
    this.setState({
      ...this.state,
      shippingInfo: {
        ...this.state.shippingInfo,
        [evt.target.name]: evt.target.value
      }
    })
  }

  handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const { data } = await axios.post('/api/orders', this.state.shippingInfo)
      console.log(data)
      this.setState({ ...this.state, isCheckoutStarted: true })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state)
    const { shippingInfo, isCheckoutStarted } = this.state
    const {
      firstName,
      lastName,
      shippingAddress,
      shippingCity,
      shippingState,
      shippingZipCode
    } = shippingInfo
    return (
      <div>
        <h3>Shipping Info:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={firstName}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={lastName}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="shippingAddress"
              onChange={this.handleChange}
              value={shippingAddress}
            />
          </label>
          <label>
            City
            <input
              type="text"
              name="shippingCity"
              onChange={this.handleChange}
              value={shippingCity}
            />
          </label>
          <label>
            State
            <input
              type="text"
              name="shippingState"
              onChange={this.handleChange}
              value={shippingState}
            />
          </label>
          <label>
            Zip Code
            <input
              type="text"
              name="shippingZipCode"
              onChange={this.handleChange}
              value={shippingZipCode}
            />
          </label>
          <button className="checkout-botton" type="submit">
            Checkout
          </button>
        </form>
        <div />

        {isCheckoutStarted && <Checkout />}
      </div>
    )
  }
}

export default CheckoutPage
