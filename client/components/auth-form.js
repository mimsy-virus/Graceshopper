import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props

  return (
    <div className="ui placeholder segment">
      <header as="h2" color="black" textAlign="center">
        {displayName} to your account
      </header>
      <div className="ui center aligned content" width="50 %">
        <div className="column">
          <form className="ui form" onSubmit={handleSubmit} name={name}>
            <div className="field">
              <label>Username</label>
              <div className="ui left icon input">
                <input placeholder="E-mail address" name="email" type="text" />
                <i className="user icon" />
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <div className="ui left icon input">
                <input placeholder="Password" name="password" type="text" />
                <i className="lock icon" />
              </div>
            </div>
            <div className="field">
              <div>
                <button
                  className="ui blue submit button"
                  type="submit"
                  onSubmit={handleSubmit}
                >
                  {displayName}
                </button>
              </div>
              {error && error.response && <div> {error.response.data} </div>}
            </div>
          </form>
          <message>
            <a href="/auth/google">{displayName} with Google</a>
          </message>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
