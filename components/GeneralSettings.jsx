// @flow

import React from 'react'
import Radium from 'radium'

import { FormattedMessage } from 'react-intl'

const GeneralSettings = ( props, context ) => {
  const { translationStore } = context
  return (
    <div>
      <h4>
        <FormattedMessage id='app.settings.general.title'
                          description='The title in the general settings view'
                          defaultMessage='General Settings' />
      </h4>
      <div className='divider'/>
      <div className='column col-12'>
        <div className='input-group'>
          <div className='col-3'><label className='form-label' htmlFor='input-locale'>Default Locale</label></div>
          <div className='col-4'>
            <select className='form-select' id='input-locale'
                    style={{ width: '100%' }} value={translationStore.state.locale}>
              <option>{translationStore.state.locale}</option>
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

GeneralSettings.contextTypes = {
  translationStore: React.PropTypes.object.isRequired
}

export default Radium(GeneralSettings)
