// @flow

import React from 'react'
import Radium from 'radium'

import { FormattedMessage } from 'react-intl'

const ExtensionGallery = ( {} ) => {
  return (
    <h4>
      <FormattedMessage id='app.settings.extgallery.title'
                        description='The title in the extension gallery settings view'
                        defaultMessage='Extension Gallery' />
    </h4>
  )
}

export default Radium(ExtensionGallery)
