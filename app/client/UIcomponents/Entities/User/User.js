import React from 'react'
import {connect} from 'react-redux'

import './User.less'
import requests from 'REQUEST/user'
import Pagination from 'COMPONENTS/Pagination/Pagination'

// entities[entity][action](dispatch, params)
const numberOfUsersDisplayed = 5

const User = React.createClass({
  displayName: 'User',
  componentDidMount () {
    requests.fetch(this.props.dispatch, numberOfUsersDisplayed, 0)
  },
  render () {
    const {simulator_data, dispatch} = this.props

    return (
      <div className='page'>
        <div className='newUser'>
          <span>Account Name:</span>
          <input ref={c => this._accountName = c} />
          <span>User Name:</span>
          <input ref={c => this._userName = c} />
          <span>Email:</span>
          <input ref={c => this._email = c} />
          <span>Password:</span>
          <input ref={c => this._password = c} />
          <button
            onClick={this.createUser}
          >
            Create User
          </button>
        </div>
        <div className='userList'>
          {
            (simulator_data && simulator_data.items.length ?
              <div>
                <h1>Your users</h1>
                  <table>
                    <thead>
                    <tr>
                      <th>Delete</th>
                      <th>Account Name</th>
                      <th>User Name</th>
                      <th>Arn</th>
                      <th>Id</th>
                      <th>Email</th>
                      <th>Name Friendly</th>
                      <th>Create Date</th>
                    </tr>
                    </thead>
                {simulator_data.items.map((item, i) => {
                  return <tbody key={item.arn}>
                    <tr >
                      <td><button
                        data-arn={item.arn}
                        onClick={(e) => {
                          const arn = e.currentTarget.getAttribute('data-arn')
                          requests.remove(dispatch, arn,
                            numberOfUsersDisplayed,
                            simulator_data.currentPage)
                        }}
                      >
                        DELETE
                      </button></td>
                      <td>{item.accountName}</td>
                      <td>{item.userName}</td>
                      <td>{item.arn}</td>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.nameFriendly}</td>
                      <td>{item.createDate}</td>
                  </tr>
                </tbody>
                })}
              </table>
                <Pagination
                  totalNumberOfPages={simulator_data.totalNumberOfPages}
                  currentPage={simulator_data.currentPage}
                  onClick={(askedPage) => requests.fetch(this.props.dispatch,
                    numberOfUsersDisplayed, askedPage)}
                />
              </div> : null)
          }
        </div>
      </div>
    )
  },
  createUser() {
    const {_accountName, _userName, _email, _password} = this
    const newUser = {password: _password.value, email: _email.value,
      accountName: _accountName.value, userName: _userName.value}

    requests.create(this.props.dispatch, newUser, numberOfUsersDisplayed,
      this.props.simulator_data.currentPage)
  }

})

export default User

const mapStateToProps = (state) => {

  return {
    simulator_data: state.simulator.simulator_data
  }
}

export default connect(
  mapStateToProps
)(User)
