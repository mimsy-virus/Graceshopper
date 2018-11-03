import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import axios from 'axios'
const userId = 3
class CheckoutForm extends React.Component {
  handleSubmit = async ev => {
    try {
      let { token } = await this.props.stripe.createToken({
        name: 'Jenny Rosen'
      })
      console.log(token)
      let response = await axios.post(`/api/stripe/${userId}`, token)
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
export default injectStripe(CheckoutForm)
