import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Alert from './Components/Alert/Alert'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Dashboard from './Pages/Dashboard'
import Signup from './Pages/Signup'

const App = () => {
  return (
    <Router>
      <Alert />
      <Switch>
        <Route path='/Devops' exact>
          <Signup />
        </Route>
        <Route path='/Devops/dashboard' exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
