// @flow
import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import { FormattedMessage } from 'react-intl'

import { Link } from 'react-router-dom'
import Icon from 'react-icons-kit'
import { cogs } from 'react-icons-kit/fa/cogs'

/**
 * [className description]
 * @type {String}
 */
class Home extends Reflux.Component {

  render () {
    return (
      <div className="empty">
        <div className="empty-icon">
          <Icon icon={cogs} size={48}></Icon>
        </div>
        <h4 className="empty-title">
          <FormattedMessage id='app.home.nodefault.title'
                            description='Shows the title that the default startup module is not set.'
                            defaultMessage='No default module found' />
        </h4>
        <p className="empty-subtitle">
          <FormattedMessage id='app.home.nodefault.subtitle'
                            description='Shows an explanative subtitle for the case that no default startup module is set.'
                            defaultMessage='Click the button to go to the application settings' />
        </p>
        <div className="empty-action">
          <Link to="/settings" className="btn btn-primary">
            <FormattedMessage id='app.home.btn.settings'
                              description='The button label that links from the home view to the settings manager.'
                              defaultMessage='Settings' />
          </Link>
        </div>
      </div>
    )
  }
}

export default Radium(Home)
