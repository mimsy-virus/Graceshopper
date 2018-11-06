import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
// import newProductForm from './newProductForm'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div role="list" className="ui celled horizontal list">
          <div role="listitem" className="item">
            <Link to="/home">Home</Link>
          </div>
          <div role="listitem" className="item">
            <Link to="/products">Products</Link>
          </div>
          <div role="listitem" className="item">
            <Link to="/account">Account</Link>
          </div>
          <div role="listitem" className="item">
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
          {/* The navbar will show these links after you log in */}
          <div role="listitem" className="item">
            <Link to="/cart">Cart</Link>
          </div>
          {/* {isAdmin && <Link to="/newProductForm">new product</Link>} */}
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <div role="list" className="ui celled horizontal list">
            <div role="listitem" className="item">
              <Link to="/home">Home</Link>
            </div>
            <div role="listitem" className="item">
              <Link to="/products">Products</Link>
            </div>
            <div role="listitem" className="item">
              <Link to="/login">Login</Link>
            </div>
            <div role="listitem" className="item">
              <Link to="/signup">Sign Up</Link>
            </div>
            <div role="listitem" className="item">
              <Link to="/cart">Cart</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
    <hr />
  </div>
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
