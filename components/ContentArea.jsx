// @flow

import React from 'react'
import Radium from 'radium'

import NavBar from '../components/NavBar'
import { PanelStyle } from '../styles/ControlStyles'

const ContentArea = ({ children }) => {
  return (
    <div className="panel" style={[PanelStyle.base]}>
      <div className="panel-header">
        <NavBar />
      </div>
      <div className="panel-body" style={[PanelStyle.base, PanelStyle.body]}>
        {children}
      </div>
      <div className="panel-footer">
        (c) 2017
      </div>
    </div>
  )
}

export default Radium(ContentArea)
