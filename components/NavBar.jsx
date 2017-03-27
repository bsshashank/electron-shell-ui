// @flow

import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

/**
 * [NavBar description]
 * @param {[type]} match    [description]
 * @param {[type]} location [description]
 * @param {[type]} history  [description]
 */
const NavBar = ({ match, location, history }) => {
  let currentRoute = location.pathname.endsWith('.html') ? ['/'] : location.pathname.split('/')
  let href=""
  let breadcrumbs = currentRoute.map((route) => {
    if (route === "")
      return
    href = `${href}/${route}`
    return (<li key={route} className="breadcrumb-item"><Link to={href}>{route}</Link></li>)
  })
  return (
    <ul className="breadcrumb">
      {breadcrumbs}
    </ul>
  )
}

export default withRouter(NavBar)
