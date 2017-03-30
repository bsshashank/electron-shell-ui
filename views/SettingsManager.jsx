// @flow
import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import { Route, Redirect, Switch, Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import ExtensionSettings from '../components/ExtensionSettings'
import ExtensionGallery from '../components/ExtensionGallery'
import GeneralSettings from '../components/GeneralSettings'
import TranslationManager from '../components/TranslationManager'

class SettingsManager extends Reflux.Component {

  render () {
    const baseUri = this.props.match.url
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex' }}>
        <div className='column col-3' style={{ borderRight: '.1rem solid #f0f1f4' }}>
          <h4>Settings</h4>
          <div className='divider' />
          <ul className='nav'>
            <li className={ 'nav-item ' + (this.props.location.pathname === `${baseUri}/general` ? 'active' : '') }>
              <Link to={`${baseUri}/general`}>
                <FormattedMessage id='app.settings.nav.general'
                                  description='Navigational link to general section in settings manager'
                                  defaultMessage='General' />
              </Link>
            </li>
            <li className={ 'nav-item ' + (this.props.location.pathname === `${baseUri}/extensions` ? 'active' : '') }>
              <Link to={`${baseUri}/extensions`}>
                <FormattedMessage id='app.settings.nav.extensions'
                                  description='Navigational link to extension gallery in settings manager'
                                  defaultMessage='Extension' />
              </Link>
            </li>
            <li className={ 'nav-item ' + (this.props.location.pathname === `${baseUri}/translations` ? 'active' : '') }>
              <Link to={`${baseUri}/translations`}>
                <FormattedMessage id='app.settings.nav.translations'
                                  description='Navigational link to translation manager in settings manager'
                                  defaultMessage='Translations' />
              </Link>
            </li>
          </ul>
        </div>
        <div className='column col-9'>
          <Switch>
            <Route path={`${baseUri}/general`} component={GeneralSettings} />
            <Route path={`${baseUri}/extensions`} component={ExtensionGallery} />
            <Route path={`${baseUri}/extensions/:extensionID`} component={ExtensionSettings} />
            <Route path={`${baseUri}/translations`} component={TranslationManager} />
            <Route exact path={baseUri} render={() => ( <Redirect to={`${baseUri}/general`} /> )} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Radium(SettingsManager)
