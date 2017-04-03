// @flow

import React from 'react'
import Radium from 'radium'

import NavBar from '../components/NavBar'
import ActionBar from '../components/ActionBar'
import { PanelStyle } from '../styles/ControlStyles'

const ContentArea = ({ children }) => {
  return (
    <div className='container' style={[PanelStyle.container, PanelStyle.fullSize]}>
      <div className='columns' style={[PanelStyle.columns, PanelStyle.fullSize]}>
        <div className='column col-12'>
          <NavBar />
        </div>
        <div className='column col-12' style={[PanelStyle.body]}>
          {children}
        </div>
        <div className='column col-12'>
          <ActionBar />
        </div>
      </div>
    </div>
  )
}

export default Radium(ContentArea)
