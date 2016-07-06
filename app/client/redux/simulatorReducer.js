const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIMULATOR_LOADING':
      return {
        ...state,
        simulator_loading: true,
        simulator_error: false
      }
    case 'SIMULATOR_ERROR':
      return {
        ...state,
        simulator_loading: false,
        simulator_error: true
      }
    case 'SIMULATOR_SUCCESS':
      return {
        ...state,
        simulator_loading: false,
        simulator_error: false,
        simulator_data: action.data
      }
    default:
      return state
  }
}

export default reducer
