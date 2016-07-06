import fake from 'FAKE/requestHandlers/users'

const fetch = (dispatch, itemsPerPage, currentPage) => {
  dispatch({
    type: 'SIMULATOR_LOADING'
  })
  //simuler le temps d'attente de la requete
  setTimeout(() => {
    if (Math.random() < 1) {
      dispatch({
        type: 'SIMULATOR_SUCCESS',
        data: fake.fetchData(itemsPerPage, currentPage)
      })
    } else {
      dispatch({
        type: 'SIMULATOR_ERROR'
      })
    }
  }, 500)
}

const remove = (dispatch, arn, itemsPerPage, currentPage) => {
  fake.removeData(arn)
  dispatch({
    type: 'SIMULATOR_SUCCESS',
    data: fake.fetchData(itemsPerPage, currentPage)
  })
}

const create = (dispatch, newUser, itemsPerPage, currentPage) => {
  fake.createData(newUser)
  dispatch({
    type: 'SIMULATOR_SUCCESS',
    data: fake.fetchData(itemsPerPage, currentPage)
  })
}

export default {
  fetch,
  remove,
  create
}
