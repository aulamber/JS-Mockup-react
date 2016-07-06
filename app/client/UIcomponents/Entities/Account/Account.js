import React from 'react'
import {connect} from 'react-redux'

import './Account.less'
import requests from 'REQUEST/account'
import Pagination from 'COMPONENTS/Pagination/Pagination'

const numberOfAccountsDisplayed = 5

const Account = React.createClass({
  displayName: 'Account',
  componentDidMount () {
    requests.fetch(this.props.dispatch, numberOfAccountsDisplayed, 0)
  },
  render () {
    const {simulator_data, dispatch} = this.props

    return (
      <div className='page'>
        <div className='newAccount'>
          <span>Name:</span>
          <input ref={c => this._name = c} />
          <span>Email:</span>
          <input ref={c => this._email = c} />
          <span>Password:</span>
          <input ref={c => this._password = c} />
          <button
            onClick={this.createAccount}
          >
            Create Account
          </button>
        </div>
        <div className='accountList'>
          {
            (simulator_data && simulator_data.items.length ?
              <div>
                <h1>Your accounts</h1>
                  <table>
                    <thead>
                    <tr>
                      <th>Delete</th>
                      <th>Name</th>
                      <th>Arn</th>
                      <th>Id</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Canonical Id</th>
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
                            numberOfAccountsDisplayed,
                            simulator_data.currentPage)
                        }}
                      >
                        DELETE
                      </button></td>
                      <td>{item.name}</td>
                      <td>{item.arn}</td>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>{item.canonicalId}</td>


                  </tr>
                </tbody>
                })}
              </table>
                <Pagination
                  totalNumberOfPages={simulator_data.totalNumberOfPages}
                  currentPage={simulator_data.currentPage}
                  onClick={(askedPage) => requests.fetch(this.props.dispatch,
                    numberOfAccountsDisplayed, askedPage)}
                />
              </div> : null)
          }
        </div>
      </div>
    )
  },
  createAccount() {
    const {_password, _email, _name} = this
    const newAccount = {password: _password.value, email: _email.value,
      name: _name.value}

    requests.create(this.props.dispatch, newAccount, numberOfAccountsDisplayed,
      this.props.simulator_data.currentPage)
  }

})

export default Account

const mapStateToProps = (state) => {

  return {
    simulator_data: state.simulator.simulator_data
  }
}

export default connect(
  mapStateToProps
)(Account)
