import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Login, Signup } from './components'
import UserHome from './components/user-home'
import newProductForm from './components/newProductForm'
import { me } from './store'
import ProductContainer from './container/ProductContainer'
import SingleProduct from './components/singleProduct'
import Home from './components/Home'
import Cart from './components/Cart/Cart'
import CheckoutPage from './components/CheckoutPage'
import OrderCompleted from './components/checkoutForm/OrderCompletedPage'
import AccountPage from './components/AccountPage'

/**
 * COMPONENT
 */
class Routes extends Component {
  async componentDidMount() {
    await this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/products" component={ProductContainer} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/newProductForm" component={newProductForm} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/ordercompleted" component={OrderCompleted} />
            <Route exact path="/account" component={UserHome} />
          </Switch>
        )}
        {!isLoggedIn && (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    async loadInitialData() {
      await dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
