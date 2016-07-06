import {combineReducers} from 'redux'
import connection from 'REDUX/connectionReducer'
import simulator from 'REDUX/simulatorReducer'

const reducer = combineReducers({
  connection,
  simulator
})

export default reducer
