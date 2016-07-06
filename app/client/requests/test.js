import axios from 'axios'

export default (dispatch) => () => {
  dispatch({
    type: 'FETCHING_ACCOUNTS'
  })

  axios.get('http://thecatapi.com/api/images/get?format=html&type=gif')
  .then((response) => {
    dispatch({
      type: 'FETCHING_ACCOUNTS_SUCCESS',
      data: response.data
    })
  })
  .catch((response) => {
    console.log('ERROR ', response)
    dispatch({
      type: 'FETCHING_ACCOUNTS_ERROR'
    })
  })
}
