import data from 'FAKE/database/users.js'
let users = data

const fetchData = (itemsPerPage, currentPage) => {

    //ceil = arrondir au superieur
    return {
      totalNumberOfPages: Math.ceil(users.length / itemsPerPage),
      items: users.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage),
      currentPage,
      totalNumberOfUsers: users.length
    }
}

const removeData = (arn) => {
  users = users.filter((item) => item.arn !== arn)
}

let counter = 0
const createData = (newUser) => {
  users = users.concat([{accountName:newUser.accountName, userName:newUser.userName, arn:counter + '',
  id:counter, email:newUser.email, nameFriendly:counter, createDate:counter++}])
}

export default {
  fetchData,
  removeData,
  createData
}
