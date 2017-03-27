// @flow

import React from 'react'
import Radium from 'radium'
import Reflux from 'reflux'

import { utils } from 'electron-shell-lib'

import { Route, Redirect, Switch } from 'react-router-dom'

import Icon from 'react-icons-kit'
import { ic_home } from 'react-icons-kit/md/ic_home'
import { ic_settings_applications } from 'react-icons-kit/md/ic_settings_applications'

import SideBar, { Item } from '../components/SideBar'
import { WindowStyle, ColumnLayoutStyle, SideBarStyle } from '../styles/ControlStyles'
import ContentArea from '../components/ContentArea'

import Home from '../views/Home'
import SettingsManager from '../views/SettingsManager'

class MainLayout extends Reflux.Component {

  constructor (props, context) {
    super (props, context)
    this.state = {
      collapsed: true
    }
  }

  componentWillMount() {
    utils.injector.addCSSFileReference('node_modules/spectre.css/dist/spectre.min.css')
    utils.injector.addCSSFileReference('node_modules/spectre.css/dist/spectre-exp.min.css')
  }

  handleTogglePane () {
    this.setState({
      collapsed: !this.state.collapsed
    })
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
          <SideBar collapsed={this.state.collapsed} title="Hello World" logo="xxx" toggleSideBar={this.handleTogglePane.bind(this)}>
            <Item href="/" icon={ic_home} name="Home" collapsed={this.state.collapsed} />
            <Item href="/settings/Home" icon={ic_settings_applications} name="Settings" collapsed={this.state.collapsed} />
          </SideBar>
          <ContentArea>
            <Switch>
              <Route path="/settings" component={SettingsManager} />
              <Route path="/settings/:app" component={SettingsManager} />
              <Route component={Home} />
            </Switch>
          </ContentArea>
        </div>
      </div>
    )
  }
}

export default Radium(MainLayout)
