import React from 'react'
import {Link} from 'react-router'

import './Login.less'
import ConnectionLink from 'COMPONENTS/ConnectionLink'

const Login = React.createClass({
  displayName: 'Login',
  render () {
    return (
      <div className='login'>
          <ConnectionLink to={'/dashboard'} userType={'SuperAdmin'}>
            Super Admin
          </ConnectionLink>
          <ConnectionLink to={'/dashboard'} userType={'AccountHolder'}>
            Account Holder
          </ConnectionLink>
          <ConnectionLink to={'/dashboard'} userType={'RegularUser'}>
            Regular User
          </ConnectionLink>
      </div>
    )
  }
})

export default Login
