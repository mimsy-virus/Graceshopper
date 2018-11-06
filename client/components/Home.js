import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => {
  if (props.isLoggedIn !== true) {
    return (
      <div>
        <Link to="/login">Welcome! Please log in to add to cart!</Link>
        {/* <h3>WELCOME! Please log in!</h3> */}
      </div>
    )
  }
}

export default Home
