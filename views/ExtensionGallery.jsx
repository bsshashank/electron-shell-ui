// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import { FormattedMessage } from 'react-intl'

class ExtensionGallery extends Reflux.Component {

  constructor(props, context) {
    super(props, context)
    this.stores = [context.extensionStore]
  }

  render() {
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
}

ExtensionGallery.contextTypes = {
  extensionManager: React.PropTypes.object.isRequired,
  extensionStore: React.PropTypes.object.isRequired
}

export default Radium(ExtensionGallery)
