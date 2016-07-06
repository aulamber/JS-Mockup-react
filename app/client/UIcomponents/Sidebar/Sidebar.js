import React from 'react'
import {Link} from 'react-router'

import 'COMPONENTS/Sidebar/Sidebar.less'

const Sidebar = React.createClass({
  displayName: 'Sidebar',
  render () {
    return (
      <div className="sidebar">
        <div><Link to={'/dashboard/User'}>User</Link></div>
        <div><Link to={'/dashboard/SecretKeys'}>Secret Keys</Link></div>
        <div><Link to={'/dashboard/Account'}>Account</Link></div>
        <div><Link to={'/dashboard/Group'}>Group</Link></div>
      </div>
    )
  }
})

export default Sidebar
