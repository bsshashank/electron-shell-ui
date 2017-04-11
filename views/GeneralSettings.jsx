// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'
import { object } from 'prop-types'

import { FormattedMessage } from 'react-intl'

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
    console.log(locale)
    this.settingManager.update('app', 'locale', locale)
  }

  changeDefaultExtension() {
    const extension = this.refs['input-module'].options[this.refs['input-module'].selectedIndex].value
    console.log(extension)
    this.settingManager.update('app', 'initialRoute', extension)
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
                style={{ width: '100%' }} value={this.state.settings.app.initialRoute} onChange={this.changeDefaultExtension.bind(this)}>
                <option key='app.home' value=''>Home</option>
                {this.state.extensions.filter(e => e.status === 'active').map(e => <option key={e.id} value={e.route}>{e.name}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

GeneralSettings.contextTypes = {
  extensionManager: object.isRequired,
  extensionStore: object.isRequired,
  settingManager: object.isRequired,
  settingStore: object.isRequired,
  translationManager: object.isRequired,
  translationStore: object.isRequired
}

export default Radium(GeneralSettings)
