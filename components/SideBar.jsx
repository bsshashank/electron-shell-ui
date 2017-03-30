// @flow

import React from 'react'
import Radium from 'radium'

import Icon from 'react-icons-kit'
import { Link } from 'react-router-dom'
import { ic_menu } from 'react-icons-kit/md/ic_menu'

import uuid from 'uuid'

import { SideBarStyle } from '../styles/ControlStyles'

/**
 * [SideBar description]
 * @param {[type]} title           [description]
 * @param {[type]} logo            [description]
 * @param {[type]} collapsed       [description]
 */
const SideBar = ({ title, collapsed, toggleSideBar, menu }: { title: string, collapsed: boolean, toggleSideBar: EventHandler, menu: Array<Object>}) => {

  const sideBarItems = menu.map((item) => {
    if (item.type === 'link')
      return <SideBarItem key={item.href} href={item.href} icon={item.icon} name={item.name} collapsed={collapsed} />
    else if (item.type === 'spacer')
      return <div key={uuid.v4()} style={{ flex: 1 }}/>
  })

  if (collapsed) {
    return (
      <div style={[SideBarStyle.wrapper, SideBarStyle.panel, SideBarStyle.collapsed]}>
        <div style={[SideBarStyle.panel, SideBarStyle.collapsed]}>
          <div style={[SideBarStyle.item, SideBarStyle.itemCentered, SideBarStyle.menu]} onClick={toggleSideBar}>
            <Icon icon={ic_menu} size={32} style={{ width: '100%' }}/>
          </div>
          {sideBarItems}
        </div>
      </div>
    )
  } else {
    return (
      <div style={[SideBarStyle.wrapper, SideBarStyle.panel, SideBarStyle.expanded]}>
        <div style={[SideBarStyle.panel, SideBarStyle.expanded]}>
          <div style={[SideBarStyle.item, SideBarStyle.itemLeft, SideBarStyle.menu]} onClick={toggleSideBar}>
            <Icon icon={ic_menu} size={32} />
            <div style={{ paddingLeft: '0.5em', fontWeight: '600' }}>{title}</div>
          </div>
          {sideBarItems}
        </div>
      </div>
    )
  }
}

/**
 * [SideBarItem description]
 * @param {[type]} href      [description]
 * @param {[type]} icon      [description]
 * @param {[type]} name      [description]
 * @param {[type]} collapsed [description]
 */
const SideBarItem = Radium(({ href, icon, name, collapsed }: { href: string, icon: Object, name: string, collapsed: boolean }) => {

  if (collapsed) {
    return (
      <div className='tooltip tooltip-right' data-tooltip={name} style={[SideBarStyle.item, SideBarStyle.itemCentered]}>
        <Link to={href} style={{ display: 'flex' }}>
          <Icon icon={icon} size={32} style={{ width: '100%' }}/>
        </Link>
      </div>
    )
  } else {
    return (
      <div style={[SideBarStyle.item, SideBarStyle.itemLeft]}>
        <Link to={href} style={{ display: 'flex', alignItems: 'center', paddingRight: '0.5em' }}>
          <Icon icon={icon} size={32} style={{ width: '100%' }}/>
          <div style={{ paddingLeft: '0.5em' }}>{name}</div>
        </Link>
      </div>
    )
  }
})

export default Radium(SideBar)
