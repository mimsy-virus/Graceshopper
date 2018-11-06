import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../store'
// import newProductForm from './newProductForm'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <React.Fragment>
    {isLoggedIn ? (
      <React.Fragment>
        <a className="item">
          <NavLink to="/home">Home</NavLink>
        </a>
        <a className="item">
          <NavLink to="/products">Products</NavLink>
        </a>
        <a className="item">
          <NavLink to="/account">Account</NavLink>
        </a>
        <a className="item">
          <NavLink to="/cart">Cart</NavLink>
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
          <NavLink to="/home">Home</NavLink>
        </a>
        <a className="item">
          <NavLink to="/products">Products</NavLink>
        </a>
        <a className="item">
          <NavLink to="/account">Account</NavLink>
        </a>
        <a className="item">
          <NavLink to="/cart">Cart</NavLink>
        </a>
        <div className="right menu">
          <div className="item">
            <a className="ui button">
              <NavLink to="/login">Login</NavLink>
            </a>
          </div>
          <div className="item">
            <a className="ui button">
              <NavLink to="/signup">Sign Up</NavLink>
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
