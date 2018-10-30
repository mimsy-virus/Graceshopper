import React from 'react'

import { Navbar } from './components'
import { UserHome } from './components/user-home'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <UserHome />
      <Routes />
    </div>
  )
}

export default App
