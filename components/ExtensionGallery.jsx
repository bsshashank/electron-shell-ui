// @flow

import React from 'react'
import Radium from 'radium'

import { FormattedMessage } from 'react-intl'

const ExtensionGallery = ( props, context ) => {
  const { extensionManager, extensionStore } = context
  return (
    <div>
      <h4>
        <FormattedMessage id='app.settings.extgallery.title'
                          description='The title in the extension gallery settings view'
                          defaultMessage='Extension Gallery' />
      </h4>
      <div className='divider' />
    </div>
  )
}

ExtensionGallery.contextTypes = {
  extensionManager: React.PropTypes.object.isRequired,
  extensionStore: React.PropTypes.object.isRequired
}

export default Radium(ExtensionGallery)
