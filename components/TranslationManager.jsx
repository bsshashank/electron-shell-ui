// @flow

import React from 'react'
import Radium from 'radium'

import { FormattedMessage } from 'react-intl'

const TranslationManager = ( {} ) => {
  return (
    <h4>
      <FormattedMessage id='app.settings.transmanager.title'
                        description='The title in the translation manager settings view'
                        defaultMessage='Translation Manager' />
    </h4>
  )
}

export default Radium(TranslationManager)
