// @flow

import React from 'react'
import Radium from 'radium'

import { FormattedMessage } from 'react-intl'

const ExtensionSettings = ( {} ) => {
  return (
    <h4>
      <FormattedMessage id='app.settings.extsettings.title'
                        description='The title in the extension settings view'
                        defaultMessage='Extension Settings' />
   </h4>
  )
}

export default Radium(ExtensionSettings)
