import React, { Component } from 'react'
import Checkout from './CheckoutForm'
import axios from 'axios'
import { connect } from 'react-redux'
import { getCartFromServer } from '../store'
import MyStoreCheckout from './checkoutForm/MyStoreCheckout'
const subTotal = 300.01

const total = 300 * 1.06
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
  async componentDidMount() {
    await this.props.getCartFromServer(this.props.userId)
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
    const orderInfo = {
      shippingAddress: this.state.shippingInfo.shippingAddress,
      shippingCity: this.state.shippingInfo.shippingCity,
      shippingState: this.state.shippingInfo.shippingState,
      shippingZipCode: this.state.shippingInfo.shippingZipCode,
      status: 'created',
      subTotal,
      total,
      taxRate: 0.06
    }
    console.log(orderInfo)
    try {
      const { data } = await axios.put(
        `/api/orders/${this.props.userId}`,
        orderInfo
      )
      console.log(data)
      this.setState({ ...this.state, isCheckoutStarted: true })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
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
          <button type="submit">Confirm the Order</button>
        </form>
        <div className="testdiv">
          {isCheckoutStarted && <MyStoreCheckout />}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  userCart: state.cart.userCart,
  productList: state.products.productList,
  userId: state.user.id
})
const mapDispatchToProps = dispatch => ({
  getCartFromServer: userId => dispatch(getCartFromServer(userId))
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
