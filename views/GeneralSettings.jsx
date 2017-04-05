// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import { FormattedMessage } from 'react-intl'

import type { IExtensionManager, ITranslationManager } from 'electron-shell'

class GeneralSettings extends Reflux.Component {

  extensionManager: IExtensionManager
  translationManager: ITranslationManager

  constructor(props, context) {
    super(props, context)
    this.extensionManager = context.extensionManager
    this.translationManager = context.translationManager
    this.stores = [context.extensionStore, context.translationStore]
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
              <select className='form-select' id='input-locale'
                style={{ width: '100%' }} value={this.state.locale}>
                {this.state.availableLocales.map(l => <option key={l}>{l}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className='column col-12'>
          <div className='input-group'>
            <div className='col-3'><label className='form-label' htmlFor='input-module'>Default Module</label></div>
            <div className='col-4'>
              <select className='form-select' id='input-module'
                style={{ width: '100%' }} value='Home'>
                <option>Home</option>
                <option>Settings</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

GeneralSettings.contextTypes = {
  extensionManager: React.PropTypes.object.isRequired,
  extensionStore: React.PropTypes.object.isRequired,
  translationManager: React.PropTypes.object.isRequired,
  translationStore: React.PropTypes.object.isRequired
}

export default Radium(GeneralSettings)