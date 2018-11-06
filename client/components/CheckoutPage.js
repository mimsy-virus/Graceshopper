import React, { Component } from 'react'
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
      subTotal: this.props.subTotal,
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
                    name="shipping[address]"
                    placeholder="Street Address"
                    onChange={this.handleChange}
                    value={shippingAddress}
                  />
                </div>
                <div className="four wide field">
                  <input
                    type="text"
                    name="shipping[address]"
                    placeholder="City"
                    onChange={this.handleChange}
                    value={shippingCity}
                  />
                </div>
                <div className="two wide field">
                  <input
                    type="text"
                    name="shipping[zipcode]"
                    placeholder="ZipCode"
                    onChange={this.handleChange}
                    value={shippingZipCode}
                  />
                </div>
                <div className="two wide field">
                  <select
                    type="text"
                    className="ui fluid dropdown"
                    value={shippingState}
                  >
                    <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
              </div>
            </div>
            <h4 className="ui dividing header">Billing Information</h4>
            <div className="field">
              <label>Card Type</label>
              <div className="ui selection dropdown">
                <input type="hidden" name="card[type]" />
                <div className="default text">Type</div>
                <i className="dropdown icon" />
                <div className="menu">
                  <div className="item" data-value="visa">
                    <i className="visa icon" />
                    Visa
                  </div>
                  <div className="item" data-value="amex">
                    <i className="amex icon" />
                    American Express
                  </div>
                  <div className="item" data-value="discover">
                    <i className="discover icon" />
                    Discover
                  </div>
                </div>
              </div>
              <div className="fields">
                <div className="seven wide field">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="card[number]"
                    maxLength="16"
                    placeholder="Card #"
                  />
                </div>
                <div className="three wide field">
                  <label>CVC</label>
                  <input
                    type="text"
                    name="card[cvc]"
                    maxLength="3"
                    placeholder="CVC"
                  />
                </div>
                <div className="six wide field">
                  <label>Expiration</label>
                  <div className="two fields">
                    <div className="field">
                      <select
                        className="ui fluid search dropdown"
                        name="card[expire-month]"
                      >
                        <option value="">Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </div>
                    <div className="field">
                      <input
                        type="text"
                        name="card[expire-year]"
                        maxLength="4"
                        placeholder="Year"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="ui button" tabIndex="0" type="submit">
              Submit Order
            </button>
          </div>
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
