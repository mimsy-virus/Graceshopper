import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getCartFromServer } from '../store'
import { getASubtotal } from '../store/checkout'
import MyStoreCheckout from './checkoutForm/MyStoreCheckout'

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
    await this.props.getSubtotal(this.props.userId)
  }

  handleChange = evt => {
    this.setState({
      ...this.state,
      shippingInfo: {
        ...this.state.shippingInfo,
        [evt.target.name]: evt.target.value
      }
    })
    // console.log(this.state)
  }

  handleSubmit = async evt => {
    evt.preventDefault()
    const orderInfo = {
      shippingAddress: this.state.shippingInfo.shippingAddress,
      shippingCity: this.state.shippingInfo.shippingCity,
      shippingState: this.state.shippingInfo.shippingState,
      shippingZipCode: this.state.shippingInfo.shippingZipCode,
      status: 'created',
      subTotal: this.props.subtotal,
      total: this.props.subtotal * 1.06,
      taxRate: 0.06
    }
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
    // console.log(this.props.userCart)
    const { shippingInfo, isCheckoutStarted } = this.state
    const {
      firstName,
      lastName,
      shippingAddress,
      shippingCity,
      shippingState,
      shippingZipCode
    } = shippingInfo
    console.log('subtotal in checkout page', this.props.subtotal)

    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <h4 className="ui dividing header">Shipping Information</h4>
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label>Billing Address</label>
              <div className="fields">
                <div className="eight wide field">
                  <input
                    type="text"
                    name="shippingAddress"
                    placeholder="Street Address"
                    onChange={this.handleChange}
                    value={shippingAddress}
                  />
                </div>
                <div className="four wide field">
                  <input
                    type="text"
                    name="shippingCity"
                    placeholder="City"
                    onChange={this.handleChange}
                    value={shippingCity}
                  />
                </div>
                <div className="two wide field">
                  <input
                    type="text"
                    className="ui fluid dropdown"
                    onChange={this.handleChange}
                    placeholder="state"
                    name="shippingState"
                    value={shippingState}
                  />
                </div>
                <div className="two wide field">
                  <input
                    type="text"
                    name="shippingZipCode"
                    placeholder="ZipCode"
                    onChange={this.handleChange}
                    value={shippingZipCode}
                  />
                </div>
              </div>
            </div>
            <div className="field">
              {!isCheckoutStarted && (
                <div className="center aligned content">
                  <button className="ui button" tabIndex="0" type="submit">
                    Submit Information
                  </button>
                </div>
              )}
            </div>
          </div>
          {isCheckoutStarted && (
            <h4 className="ui dividing header">Card Information</h4>
          )}
        </form>
        {isCheckoutStarted && <MyStoreCheckout />}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  userCart: state.cart.userCart,
  productList: state.products.productList,
  userId: state.user.id,
  subtotal: state.checkout.subtotal
})
const mapDispatchToProps = dispatch => ({
  getCartFromServer: userId => dispatch(getCartFromServer(userId)),
  getSubtotal: userId => dispatch(getASubtotal(userId))
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
