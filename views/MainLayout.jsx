// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import { utils } from 'electron-shell-lib'

import { Route, Link } from 'react-router-dom'

import SideBar from '../components/SideBar'
import { WindowStyle } from '../styles/ControlStyles'

import Home from '../views/Home'

class MainLayout extends Reflux.Component {

  constructor (props, context) {
    super (props, context)
    this.state = {
      activeModule: 'Home',
      collapsed: true
    }
  }

  componentWillMount() {
    utils.injector.addCSSFileReference('node_modules/spectre.css/dist/spectre.min.css')
    utils.injector.addCSSFileReference('node_modules/spectre.css/dist/spectre-exp.min.css')
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

        <Route exact path="/" component={Home}/>
      </div>
    )
  }
}

export default Radium(MainLayout)
