// @flow
import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import type { ISettingsManager } from 'electron-shell'

class Home extends Reflux.Component {

  settingsManager: ISettingsManager

  constructor(props, context) {
    super(props, context)
  }

  render () {
    return (
      <div style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <div className="empty">
          <div className="empty-icon">
            <i className="icon icon-people"></i>
          </div>
          <h4 className="empty-title">No default module found</h4>
          <p className="empty-subtitle">Click the button to go to the application settings</p>
          <div className="empty-action">
            <button className="btn btn-primary">Settings</button>
          </div>
        </div>
      </div>
    )
  }
}

/*Home.childContextTypes = {
  settingsManager: React.PropTypes.object.isRequired
}*/

export default Radium(Home)
