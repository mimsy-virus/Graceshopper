import React from 'react'

import { Navbar } from './components'
import UserHome from './components/user-home'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <body className="pushable">
        <div>
          <div className="ui inverted vertical masthead segment">
            <div className="ui container">
              <div className="ui large secondary inverted pointing menu">
                <Navbar />
              </div>
            </div>
          </div>
        </div>
      </body>
      <Routes />
    </div>
  )
}

export default App
