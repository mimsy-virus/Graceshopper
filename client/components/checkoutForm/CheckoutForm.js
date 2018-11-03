import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import axios from 'axios'
import { connect } from 'react-redux'
class CheckoutForm extends React.Component {
  handleSubmit = async ev => {
    try {
      console.log(this.props.userId)
      let { token } = await this.props.stripe.createToken()
      console.log(token)
      let response = await axios.post(`/api/stripe/${this.props.userId}`, token)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <label>
          Card info
          <CardElement />
        </label>
        <button onClick={this.handleSubmit} type="submit">
          Pay
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.user.id
})
const connectedCheckoutForm = connect(mapStateToProps)(CheckoutForm)
export default injectStripe(connectedCheckoutForm)
