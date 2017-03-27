// @flow
import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import { Link } from 'react-router-dom'
import Icon from 'react-icons-kit'
import { cogs } from 'react-icons-kit/fa/cogs'

import type { ISettingsManager } from 'electron-shell'

class Home extends Reflux.Component {

  settingsManager: ISettingsManager

  constructor(props, context) {
    super(props, context)
  }

  render () {
    return (
      <div className="empty">
        <div className="empty-icon">
          <Icon icon={cogs} size={48}></Icon>
        </div>
        <h4 className="empty-title">No default module found</h4>
        <p className="empty-subtitle">Click the button to go to the application settings</p>
        <div className="empty-action">
          <Link to="/settings" className="btn btn-primary">Settings</Link>
        </div>
      </div>
    )
  }
}

/*Home.childContextTypes = {
  settingsManager: React.PropTypes.object.isRequired
}*/

export default Radium(Home)
