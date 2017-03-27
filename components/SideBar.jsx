// @flow

import React from 'react'
import Radium from 'radium'
import Icon from 'react-icons-kit'
import { Link } from 'react-router-dom'
import { ic_menu } from 'react-icons-kit/md/ic_menu'

import { SideBarStyle } from '../styles/ControlStyles'

/**
 * [SideBar description]
 * @param {[type]} title           [description]
 * @param {[type]} logo            [description]
 * @param {[type]} collapsed       [description]
 */
const SideBar = ({ title, logo, collapsed, children }) => {

  if (collapsed) {
    return (
      <div style={[SideBarStyle.wrapper, SideBarStyle.panel, SideBarStyle.collapsed]}>
        <div style={[SideBarStyle.panel, SideBarStyle.collapsed]}>
          <div style={[SideBarStyle.item, SideBarStyle.menu]}>
            <Icon icon={ic_menu} size={32} style={{ width: '100%' }}/>
          </div>
          {children}
        </div>
      </div>
    )
  } else {
    return (
      <div style={[SideBarStyle.wrapper, SideBarStyle.panel]}>
        <div style={[SideBarStyle.panel]}>
          <div>
            <span>{title}</span>
          </div>
          {children}
        </div>
      </div>
    )
  }
}

SideBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  logo: React.PropTypes.string.isRequired,
  collapsed: React.PropTypes.bool.isRequired
}

const SideBarItem = ({ href, icon, name }) => {
  return (
    <div className="tooltip tooltip-right" data-tooltip={name} style={[SideBarStyle.item]}>
      <Link to={href}>
        <Icon icon={icon} size={32} style={{ width: '100%' }}/>
      </Link>
    </div>
  )
}

export default Radium(SideBar)
exports.Item = Radium(SideBarItem)
