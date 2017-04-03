// @flow

import React from 'react'
import Radium from 'radium'

import NavBar from '../components/NavBar'
import { PanelStyle } from '../styles/ControlStyles'

const ContentArea = ({ children }) => {
  return (
    <div className='container' style={[PanelStyle.base]}>
      <div className='columns' style={{ height: '100%', width: '100%', paddingLeft: '1em', paddingRight: '1em' }}>
        <NavBar className='column col-12' />
        <div className='column col-12' style={[PanelStyle.base, PanelStyle.body]}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Radium(ContentArea)
