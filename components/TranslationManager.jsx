// @flow

import React from 'react'
import Radium from 'radium'

import { FormattedMessage } from 'react-intl'

const TranslationManager = ( props, context ) => {
  const { translationStore } = context
  return (
    <div>
      <h4>
        <FormattedMessage id='app.settings.transmanager.title'
                          description='The title in the translation manager settings view'
                          defaultMessage='Translation Manager' />
      </h4>
      <div className='divider' />
      <div className='column col-12'>
        <div className='input-group'>
          <div className='col-3'><label className='form-label' htmlFor='input-locale'>Current Locale</label></div>
          <div className='col-4'>
            <select className='form-select' id='input-locale' readOnly
                    style={{ width: '100%' }} value={translationStore.state.locale}>
              <option>{translationStore.state.locale}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

TranslationManager.contextTypes = {
  translationStore: React.PropTypes.object.isRequired
}

export default Radium(TranslationManager)
