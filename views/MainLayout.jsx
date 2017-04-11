// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import { utils } from 'electron-shell-lib'

import SideBar from '../components/SideBar'
import { WindowStyle, ColumnLayoutStyle, SideBarStyle } from '../styles/ControlStyles'
import ContentArea from '../components/ContentArea'

class MainLayout extends Reflux.Component {

  props: {
    title: string,
    menu: Array<Object>,
    children: Array<Object>
  }

  state: {
    collapsed: boolean
  }

  constructor (props, context) {
    super (props, context)
    this.state = {
      collapsed: true
    }
  }

  componentWillMount() {
    utils.injector.addCSSFileReference('node_modules/spectre.css/docs/dist/spectre.min.css')
    utils.injector.addCSSFileReference('node_modules/spectre.css/docs/dist/spectre-exp.min.css')
  }

  handleTogglePane () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    return (
      <div className='container' style={WindowStyle}>
        <div className='columns col-gapless' style={ColumnLayoutStyle}>
          <SideBar className='column col-2' collapsed={this.state.collapsed} title={this.props.title}
                   toggleSideBar={this.handleTogglePane.bind(this)} menu={this.props.menu} />
          <ContentArea className='column col-10'>
            {this.props.children}
          </ContentArea>
        </div>
      </div>
    )
  }
}

export default Radium(MainLayout)
