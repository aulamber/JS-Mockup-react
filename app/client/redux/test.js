const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCHING_ACCOUNTS':
      return {
        ...state,
        accountsLoading: true,
        accountsLoadingError: false
      }
    case 'FETCHING_ACCOUNTS_ERROR':
      return {
        ...state,
        accountsLoading: false,
        accountsLoadingError: true
      }
      case 'FETCHING_ACCOUNTS_SUCCESS':
        return {
          ...state,
          accountsLoading: false,
          accounts: action.data
        }
    default:
      return state
  }
}

export default reducer
