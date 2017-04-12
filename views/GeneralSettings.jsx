// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'
import { object } from 'prop-types'

import { FormattedMessage, intlShape, injectIntl } from 'react-intl'

import type { IExtensionManager, ISettingManager, ITranslationManager } from 'electron-shell-lib'

class GeneralSettings extends Reflux.Component {

  extensionManager: IExtensionManager
  translationManager: ITranslationManager
  settingManager: ISettingManager

  constructor(props, context) {
    super(props, context)
    this.extensionManager = context.extensionManager
    this.settingManager = context.settingManager
    this.translationManager = context.translationManager

    this.stores = [context.extensionStore, context.settingStore, context.translationStore]
  }

  changeLocale() {
    const locale = this.refs['input-locale'].options[this.refs['input-locale'].selectedIndex].value
    this.settingManager.update('app', 'locale', locale)
  }

  changeDefaultExtension() {
    const extension = this.refs['input-module'].options[this.refs['input-module'].selectedIndex].value
    this.settingManager.update('app', 'defaultModule', extension)
  }

  render() {
    return (
      <div>
        <h4>
          <FormattedMessage id='app.settings.general.title'
            description='The title in the general settings view'
            defaultMessage='General Settings' />
        </h4>
        <div className='divider' />
        <div className='column col-12'>
          <div className='input-group'>
            <div className='col-3'><label className='form-label' htmlFor='input-locale'>Default Locale</label></div>
            <div className='col-4'>
              <select className='form-select' ref='input-locale'
                style={{ width: '100%' }} value={this.state.settings.app.locale} onChange={this.changeLocale.bind(this)}>
                {this.state.availableLocales.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className='column col-12'>
          <div className='input-group'>
            <div className='col-3'><label className='form-label' htmlFor='input-module'>Default Module</label></div>
            <div className='col-4'>
              <select className='form-select' ref='input-module'
                style={{ width: '100%' }} value={this.state.settings.app.defaultModule} onChange={this.changeDefaultExtension.bind(this)}>
                <option key='app.home' value=''></option>
                {this.state.extensions.filter(e => e.status === 'active').map(e => <option key={e.id} value={e.id.toLowerCase()}>{this.props.intl.formatMessage(e.name)}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

GeneralSettings.propTypes = {
  intl: intlShape
}

GeneralSettings.contextTypes = {
  extensionManager: object.isRequired,
  extensionStore: object.isRequired,
  settingManager: object.isRequired,
  settingStore: object.isRequired,
  translationManager: object.isRequired,
  translationStore: object.isRequired
}

export default injectIntl(Radium(GeneralSettings))
