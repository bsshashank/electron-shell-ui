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
const SideBar = ({ title, collapsed, toggleSideBar, children }) => {
  if (collapsed) {
    return (
      <div style={[SideBarStyle.wrapper, SideBarStyle.panel, SideBarStyle.collapsed]}>
        <div style={[SideBarStyle.panel, SideBarStyle.collapsed]}>
          <div style={[SideBarStyle.itemCentered, SideBarStyle.menu]} onClick={toggleSideBar}>
            <Icon icon={ic_menu} size={32} style={{ width: '100%' }}/>
          </div>
          {children}
        </div>
      </div>
    )
  } else {
    return (
      <div style={[SideBarStyle.wrapper, SideBarStyle.panel, SideBarStyle.expanded]}>
        <div style={[SideBarStyle.panel, SideBarStyle.expanded]}>
          <div style={[SideBarStyle.itemLeft, SideBarStyle.menu]} onClick={toggleSideBar}>
            <Icon icon={ic_menu} size={32} />
            <div style={{ paddingLeft: '0.5em', fontWeight: '600' }}>{title}</div>
          </div>
          {children}
        </div>
      </div>
    )
  }
}

SideBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  collapsed: React.PropTypes.bool.isRequired,
  toggleSideBar: React.PropTypes.func.isRequired
}

const SideBarItem = ({ href, icon, name, collapsed }) => {
  if (collapsed) {
    return (
      <div className="tooltip tooltip-right" data-tooltip={name} style={[SideBarStyle.itemCentered]}>
        <Link to={href} style={{ display: 'flex' }}>
          <Icon icon={icon} size={32} style={{ width: '100%' }}/>
        </Link>
      </div>
    )
  } else {
    return (
      <div style={[SideBarStyle.itemLeft]}>
        <Link to={href} style={{ display: 'flex', alignItems: 'center', paddingRight: '0.5em' }}>
          <Icon icon={icon} size={32} style={{ width: '100%' }}/>
          <div style={{ paddingLeft: '0.5em' }}>{name}</div>
        </Link>
      </div>
    )
  }
}

SideBarItem.propTypes = {
  href: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  collapsed: React.PropTypes.bool.isRequired,
  icon: React.PropTypes.object.isRequired
}

export default Radium(SideBar)
exports.Item = Radium(SideBarItem)
