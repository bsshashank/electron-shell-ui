// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import { Link } from 'react-router'

import SideBar from '../components/SideBar'

import { WindowStyle } from '../styles/ControlStyles'

class MainLayout extends Reflux.Component {

  constructor (props, context) {
    super (props, context)
    this.state = {
      activeModule: 'Home',
      collapsed: true
    }
  }

  handleTogglePane (collapsed) {
    this.setState({
      collapsed
    })
  }

  navigateTo ({ key }) {
    if (key === '.$1') {
      this.setState({ activeModule: 'Home' })
      this.props.router.push('/')
    } else if (key === '.$2') {
      this.setState({ activeModule: 'Settings'})
      this.props.router.push('settings')
    }
  }

  render () {
    let routes = []

    /* extensions.push(
      <Link to={extension.path} key={extension.path}>
        <Icon name={extension.module.config.icon} style={{ paddingRight: '10px' }} />
        {extension.module.config.label}
      </Link>
    ) */
    return (
      <div className="container" style={WindowStyle}>
        <SideBar></SideBar>
        <div className="panel" style={WindowStyle}>
          <div className="panel-header">
            <div className="panel-nav">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">{this.state.activeModule}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="panel-title">{this.state.activeModule}</div>
          <div className="panel-body">
            {this.props.children}
          </div>
          <div className="panel-footer">
            (c) 2017
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(MainLayout)
