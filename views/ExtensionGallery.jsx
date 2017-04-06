// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import Dropzone from 'react-dropzone'
import Icon from 'react-icons-kit'
import { ic_file_upload } from 'react-icons-kit/md/ic_file_upload'

import { FormattedMessage } from 'react-intl'

import type { IExtensionManager } from 'electron-shell-lib'

class ExtensionGallery extends Reflux.Component {

  extensionManager: IExtensionManager

  constructor(props, context) {
    super(props, context)
    this.extensionManager = context.extensionManager
    this.stores = [context.extensionStore]
  }

  dropExtension (filesAccepted:Array<File>) {
    const fileDropped = filesAccepted[0]
    this.extensionManager.install(fileDropped.name, fileDropped)
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
        <div style={{ height: '70vh', overflowY: 'auto' }}>
          <div className='column col-12' style={{ overflowY: 'auto' }}>
            <div className='card'>
              <div className='card-body'>
                <Dropzone key='dropHandler' onDrop={this.dropExtension.bind(this)} multiple={false} style={{ width: '100%' }}>
                  <div className='tile tile-centered'>
                    <div className='tile-icon'>
                      <Icon icon={ic_file_upload} size={32} />
                    </div>
                    <div className='tile-content'>
                      <div className='tile-title'>Drop your new extensions here...</div>
                    </div>
                  </div>
                </Dropzone>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ExtensionGallery.contextTypes = {
  extensionManager: React.PropTypes.object.isRequired,
  extensionStore: React.PropTypes.object.isRequired
}

export default Radium(ExtensionGallery)
