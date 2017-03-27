// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import { utils } from 'electron-shell-lib'

import { Route } from 'react-router-dom'

import Icon from 'react-icons-kit'
import { ic_home } from 'react-icons-kit/md/ic_home'
import { ic_settings_applications } from 'react-icons-kit/md/ic_settings_applications'

import SideBar, { Item } from '../components/SideBar'
import { WindowStyle, ColumnLayoutStyle, SideBarStyle, MainPanelStyle } from '../styles/ControlStyles'

import Home from '../views/Home'
import SettingsManager from '../views/SettingsManager'

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
        <div className="column" style={ColumnLayoutStyle}>
          <SideBar collapsed={this.state.collapsed} title="Hello World" logo="xxx">
            <Item href="/" icon={ic_home} name="Home"/>
            <Item href="/settings" icon={ic_settings_applications} name="Description" />
          </SideBar>
          <div className="panel" style={MainPanelStyle}>
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

        <Route exact path="/" component={Home} />
        <Route path="/settings" component={SettingsManager} />
      </div>
    )
  }
}

export default Radium(MainLayout)
