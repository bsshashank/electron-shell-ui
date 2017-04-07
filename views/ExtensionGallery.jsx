// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import Dropzone from 'react-dropzone'
import Icon from 'react-icons-kit'
import { ic_file_upload } from 'react-icons-kit/md/ic_file_upload'
import { ic_delete } from 'react-icons-kit/md/ic_delete'

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
            <div className='divider' />
            {
              this.state.extensions.map((ext) => {
                ext.isActivated = (ext.status === 'active')
                return (
                  <div className='card' key={ext._id}>
                    <div className='card-image'>
                      <img className='img-responsive' src={ext.bannerImage} />
                    </div>
                    <div className='card-header'>
                      <div className='float-right' style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className='form-group'>
                          <label className='form-switch'>
                            <input type='checkbox' value={ext.isActivated} />
                            <i className='form-icon'></i> { ext.isActivated ? 'ACTIVE' : 'DEACTIVE' }
                          </label>
                        </div>
                        <button className='btn btn-link' style={{ padding: 0 }}>
                          <Icon icon={ic_delete} size={24} />
                        </button>
                      </div>
                      <div className='card-title'>{ext.name}</div>
                    </div>
                    <div className='card-body'>
                      <div className='float-right'>
                        <span>{ext.version}</span>
                      </div>
                      {ext.description}
                    </div>
                  </div>
                )
              })
            }
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
