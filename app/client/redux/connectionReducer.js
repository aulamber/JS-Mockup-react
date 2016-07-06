const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'CONNECTION':
      return {
        ...state,
        userType: action.userType
      }
    default:
      return state
  }
}

export default reducer
