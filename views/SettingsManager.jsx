// @flow
import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'
import { object } from 'prop-types'

import { Route, Redirect, Switch, Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import NavItem from '../components/NavItem'

import ExtensionGallery from './ExtensionGallery'
import GeneralSettings from './GeneralSettings'
import TranslationManager from './TranslationManager'

class SettingsManager extends Reflux.Component {

  constructor(props, context) {
    super(props, context)
    this.stores = [context.translationStore]
  }

  render() {
    const baseUri = this.props.match.url
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex' }}>
        <div className='column col-3' style={{ borderRight: '.1rem solid #f0f1f4', paddingLeft: '1em' }}>
          <h4>Settings</h4>
          <div className='divider' />
          <ul className='nav'>
            <NavItem baseUrl={baseUri} navTo='general'>
              <FormattedMessage id='app.settings.nav.general'
                description='Navigational link to general section in settings manager'
                defaultMessage='General' />
            </NavItem>
            <NavItem baseUrl={baseUri} navTo='extensions'>
              <FormattedMessage id='app.settings.nav.extensions'
                description='Navigational link to extension gallery in settings manager'
                defaultMessage='Extensions' />
            </NavItem>
            <NavItem baseUrl={baseUri} navTo='translations'>
              <FormattedMessage id='app.settings.nav.translations'
                description='Navigational link to translation manager in settings manager'
                defaultMessage='Translations' />
            </NavItem>
            <ul className='nav'>
              {this.state.availableLocales.map(l => {
                return (
                  <NavItem key={l} baseUrl={baseUri} navTo={`translations/${l}`}>
                    {l}
                  </NavItem>
                )
              })
              }
            </ul>
          </ul>
        </div>
        <div className='column col-9' style={{ paddingLeft: '1em', height: '80vh' }}>
          <Switch>
            <Route path={`${baseUri}/general`} component={GeneralSettings} />
            <Route path={`${baseUri}/extensions`} component={ExtensionGallery} />
            <Route path={`${baseUri}/translations/:locale`} component={TranslationManager} />
            <Route exact path={`${baseUri}/translations`} render={() => (<Redirect to={`${baseUri}/translations/${this.state.locale}`} />)} />
            <Route exact path={baseUri} render={() => (<Redirect to={`${baseUri}/general`} />)} />
          </Switch>
        </div>
      </div>
    )
  }
}

SettingsManager.contextTypes = {
  translationManager: object.isRequired,
  translationStore: object.isRequired
}

export default Radium(SettingsManager)
