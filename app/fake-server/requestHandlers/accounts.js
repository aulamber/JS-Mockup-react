import data from 'FAKE/database/accounts.js'
let accounts = data

const fetchData = (itemsPerPage, currentPage) => {

    //ceil = arrondir au superieur
    return {
      totalNumberOfPages: Math.ceil(accounts.length / itemsPerPage),
      items: accounts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage),
      currentPage,
      totalNumberOfAccounts: accounts.length
    }
}

const removeData = (arn) => {
  accounts = accounts.filter((item) => item.arn !== arn)
}

let counter = 0
const createData = (newAccount) => {
  // accounts.push(newAccount)
  accounts = accounts.concat([{name:newAccount.name, arn:counter + '',
  id:counter, email:newAccount.email, password:newAccount.password,
  canonicalId:counter++}])

}

export default {
  fetchData,
  removeData,
  createData
}
