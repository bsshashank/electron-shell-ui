// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'
import { object } from 'prop-types'

import Icon from 'react-icons-kit'
import { ic_translate } from 'react-icons-kit/md/ic_translate'
import { ic_edit } from 'react-icons-kit/md/ic_edit'
import { ic_note_add } from 'react-icons-kit/md/ic_note_add'

import { FormattedMessage, defineMessages, intlShape, injectIntl } from 'react-intl'

class TranslationManager extends Reflux.Component {

  msgs:Object

  constructor(props, context) {
    super(props, context)
    this.stores = [context.translationStore]
    this.msgs = defineMessages({
      searchPlaceholder: {
        id: 'app.settings.transmanager.searchPlaceholder',
        description: 'The placeholder in the empty search box',
        defaultMessage: 'Search'
      }
    })
  }

  render() {
    const { formatMessage } = this.context.intl
    return (
      <div>
        <div className='float-right'>
          <div className='input-group input-inline'>
            <input className='form-input input-sm' placeholder={formatMessage(this.msgs.searchPlaceholder)} type='text' />
            <button className='btn btn-primary btn-sm input-group-btn'>
              <FormattedMessage id='app.settings.transmanager.searchAction'
                                description='The search button in the top right corner of the setting manager'
                                defaultMessage='Search' />
            </button>
          </div>
        </div>
        <h4>
          <FormattedMessage id='app.settings.transmanager.title'
            description='The title in the translation manager settings view'
            defaultMessage='Translation Manager' />
        </h4>
        <div className='divider' />
        <div style={{ height: '70vh', overflowY: 'auto' }}>
          <div className='column col-12' style={{ overflowY: 'auto', paddingRight: '1em' }}>
            <div>
              {this.state.localeData.data.map(d => {
                return (
                  <div key={d.id} className='tile tile-centered'>
                    <div className='tile-icon'>
                      <Icon icon={ic_translate} size={24} />
                    </div>
                    <div className='tile-content'>
                      <div className='tile-title'>
                        {d.id}
                        <div className='text-ellipsis float-right'>{d.translation}</div>
                      </div>
                      <div className='tile-subtitle'>{d.description}</div>
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
  intl: intlShape.isRequired,
  translationStore: object.isRequired
}

export default injectIntl(Radium(TranslationManager))
