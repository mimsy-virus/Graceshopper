import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => {
  if (props.isLoggedIn !== true) {
    return (
      <div className="ui center aligned container">
        <header>
          <h1>Welcome to Mimsy Medical</h1>
        </header>
        <h2>
          We are an e-commerce website commit to selling cheap and affordable
          medication
        </h2>
        <div className="ui huge button">
          <Link to="/products">Start Shopping!</Link>{' '}
          <i className="right arrow icon" />
        </div>
      </div>
    )
  }
}

export default Home
