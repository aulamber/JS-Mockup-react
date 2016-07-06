import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import './Header.less'

/* Use {} in 'const Header = ({userType})' to extract userType from state
 * A longer way to write it is:
 * Header = (state) => {const userType = state.userType ...}
 */
const Header = ({userType}) =>
  <div className="header">
    <Link to={'/'}>
      <img src={
        "http://payload305.cargocollective.com/1/4/140148/8414828/behance_header_905.png"
      } alt="unicorn"/>
    </Link>
    <div className="headerConnection">{userType}</div>
  </div>

const mapStateToProps = ({connection}) => {
  return {
    userType: connection.userType
  }
}

export default connect(
  mapStateToProps
)(Header)
