import React, { Component } from 'react'
import { connect } from 'react-redux'
import { me } from '../store/user'
import axios from 'axios'
import OrderHistory from './OrderHistory'
import UserInfo from './UserInfo'
import { fetchOrdersForUser } from '../store/orders'

class AccountPage extends Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    await this.props.getUserInfo()
  }

  renderOrderHistory = userId => {
    this.props.getOrders(userId)
  }

  render() {
    const { user, orders } = this.props
    const userName =
      user.firstName || user.lastName
        ? `${user.firstName} ${user.lastName}`
        : 'An Awesome User'
    return (
      <div>
        <h1>Account Info</h1>
        <UserInfo userName={userName} user={user} />
        <div>
          <button
            type="submit"
            className="ui button"
            onClick={() => {
              return this.renderOrderHistory(user.id)
            }}
          >
            View Your Orders
          </button>
          <button className="ui button" type="submit">
            Update your info
          </button>
        </div>
        {orders && <OrderHistory orders={orders} />}
      </div>
    )
  }
}
const mapStateToProps = ({ user, orders }) => ({ user, orders })
const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(me()),
  getOrders: userId => dispatch(fetchOrdersForUser(userId))
})
export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
