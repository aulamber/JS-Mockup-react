import React from 'react'

import'./Dashboard.less'
import Page from 'COMPONENTS/Page/Page'
import Sidebar from 'COMPONENTS/Sidebar/Sidebar'

const Dashboard = React.createClass({
  displayName: 'Dashboard',
  render () {
    return (
      <div className="content">
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
})

export default Dashboard
