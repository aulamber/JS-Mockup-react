import React from 'react'

import Header from 'COMPONENTS/Header/Header'

import 'STYLE/index.css'

const App = React.createClass({
  displayName: 'App',
  render () {
    return (
      <div className="appContainer">
        <Header />
        <div className='contentContainer'>
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default App
