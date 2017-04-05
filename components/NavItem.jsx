// @flow

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import React from 'react'
import Radium from 'radium'

const NavItem = ( { location, baseUrl, navTo, children }: { location: Object, baseUrl: string, navTo: string, children: Array<Object> } ) => {
  const navLocation = `${baseUrl}/${navTo}`
  return (
    <li className={'nav-item ' + (location.pathname ===  navLocation ? 'active' : '')}>
      <Link to={navLocation}>
      { children }
      </Link>
    </li>
  )
}

export default withRouter(Radium(NavItem))
