import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
// import newProductForm from './newProductForm'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <React.Fragment>
    {isLoggedIn ? (
      <React.Fragment>
        <a className="item">
          <Link to="/home">Home</Link>
        </a>
        <a className="item">
          <Link to="/products">Products</Link>
        </a>
        <a className="item">
          <Link to="/account">Account</Link>
        </a>
        <a className="item">
          <Link to="/cart">Cart</Link>
        </a>
        <div className="right menu">
          <div className="item">
            <a className="ui button" href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <a className="item">
          <Link to="/home">Home</Link>
        </a>
        <a className="item">
          <Link to="/products">Products</Link>
        </a>
        <a className="item">
          <Link to="/account">Account</Link>
        </a>
        <a className="item">
          <Link to="/cart">Cart</Link>
        </a>
        <div className="right menu">
          <div className="item">
            <a className="ui button">
              <Link to="/login">Login</Link>
            </a>
          </div>
          <div className="item">
            <a className="ui button">
              <Link to="/signup">Sign Up</Link>
            </a>
          </div>
        </div>
      </React.Fragment>
    )}
  </React.Fragment>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.admin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
