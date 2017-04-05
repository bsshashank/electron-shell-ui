// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import Icon from 'react-icons-kit'
import { ic_translate } from 'react-icons-kit/md/ic_translate'
import { ic_edit } from 'react-icons-kit/md/ic_edit'

import { FormattedMessage } from 'react-intl'

class TranslationManager extends Reflux.Component {

  constructor(props, context) {
    super(props, context)
    this.stores = [context.translationStore]
  }

  render() {
    return (
      <div>
        <h4>
          <FormattedMessage id='app.settings.transmanager.title'
            description='The title in the translation manager settings view'
            defaultMessage='Translation Manager' />
        </h4>
        <div className='divider' />
        <div style={{ height: '70vh', overflowY: 'auto' }}>
          <div className='column col-12' style={{ overflowY: 'auto' }}>
            <div>
              {this.state.localeData.data.map(d => {
                return (
                  <div key={d._id} className='tile tile-centered'>
                    <div className='tile-icon'>
                      <Icon icon={ic_translate} size={24} />
                    </div>
                    <div className='tile-content'>
                      <div className='tile-title'>
                        {d._id}
                        <small className='text-ellipsis float-right'>{d.description}</small>
                      </div>
                      <div className='tile-subtitle'>{d.translation}</div>
                    </div>
                    <div className='tile-action'>
                      <button className='btn btn-link'>
                        <Icon icon={ic_edit} size={24} />
                      </button>
                    </div>
                  </div>
                )
              })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TranslationManager.contextTypes = {
  translationStore: React.PropTypes.object.isRequired
}

export default Radium(TranslationManager)
