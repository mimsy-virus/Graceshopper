import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: false
    }
  }
  handleSubmit = async ev => {
    try {
      let { token } = await this.props.stripe.createToken()
      let { data } = await axios.post(`/api/stripe/${this.props.userId}`, token)
      if (data.status === 'succeeded') {
        this.setState({ completed: true })
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <label>
          <CardElement />
        </label>
        <button onClick={this.handleSubmit} type="submit" className="ui button">
          Place your order
        </button>
        {this.state.completed && this.props.history.push('/ordercompleted')}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.user.id
})
const connectedCheckoutForm = connect(mapStateToProps)(CheckoutForm)
export default injectStripe(withRouter(connectedCheckoutForm))
