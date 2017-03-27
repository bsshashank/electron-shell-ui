// @flow

export const WindowStyle = {
  padding: '0 0 0.8em',
  margin: 0,
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  WebkitUserSelect: 'none'
}

export const ColumnLayoutStyle = {
  padding: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row'
}

export const SideBarStyle = {
  wrapper: {
    position: 'absolute',
    zIndex: 1000,
    height: '100%',
    transition: 'width 0.5s ease-in-out'
  },
  panel: {
    outline: 'none',
    flex: '0 0 auto',
    overflow: 'hidden',
    display: 'flex',
    backgroundColor: '#f2f2f2',
    flexDirection: 'column'
  },
  collapsed: {
    width: '48px'
  },
  expanded: {
    width: '200px'
  },
  itemCentered: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '0.5em'
  },
  itemLeft: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingBottom: '0.5em'
  },
  menu: {
    paddingTop: '0.5em',
    paddingBottom: '1em'
  }
}

export const PanelStyle = {
  base: {
    paddingLeft: '48px',
    height: '100%',
    width: '100%',
    background: '#f8f9fa'
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }
}
