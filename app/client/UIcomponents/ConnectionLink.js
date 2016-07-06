import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

const ConnectionLink = ({to, userType, dispatch, children}) =>
  <div>
    <Link
      to={to}
      onClick={
        () => {
          dispatch({
            type: 'CONNECTION',
            userType
          })
        }
      }
    >
      {children}
    </Link>
  </div>


export default connect()(ConnectionLink)
