import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from 'COMPONENTS/App'
import Account from 'ENTITIES/Account/Account'
import Group from 'ENTITIES/Group/Group'
import User from 'ENTITIES/User/User'
import SecretKeys from 'ENTITIES/SecretKeys/SecretKeys'
import Dashboard from 'COMPONENTS/Dashboard/Dashboard'
import Login from 'COMPONENTS/Login/Login'
import Page from 'COMPONENTS/Page/Page'
import NoMatch from 'COMPONENTS/NoMatch/NoMatch'


const Routes =
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Login} />
        <Route path='/dashboard' component={Dashboard}>
          <IndexRoute component={Page} />
          <Route path='/dashboard/account' component={Account}/>
          <Route path='/dashboard/group' component={Group}/>
          <Route path='/dashboard/user' component={User}/>
          <Route path='/dashboard/secretKeys' component={SecretKeys}/>
        </Route>
      <Route path='*' component={NoMatch} />
    </Route>
  </Router>


  export default Routes
