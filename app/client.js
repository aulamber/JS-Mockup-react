import React from 'react'
import ReactDOM from 'react-dom'
import App from 'COMPONENTS/App'
import Routes from 'app/routes'
import {Provider} from 'react-redux'
import reducer from 'REDUX/reducer'
import {createStore} from 'redux'

const store = createStore(reducer)

store.subscribe(() => {
  //console.log(store.getState())
})

ReactDOM.render(
  <Provider
    store={store}
    children={Routes}
  />,
  document.getElementById('appContainer')
)
