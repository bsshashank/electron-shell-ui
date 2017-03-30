// @flow

import React from 'react'
import Radium from 'radium'

import { FormattedMessage } from 'react-intl'

const GeneralSettings = ( {} ) => {
  return (
    <h4>
      <FormattedMessage id='app.settings.general.title'
                        description='The title in the general settings view'
                        defaultMessage='General Settings' />
    </h4>
  )
}

export default Radium(GeneralSettings)
