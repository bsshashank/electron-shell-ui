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
    transition: 'all 1s ease-in-out'
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
    width: '48px',
    zIndex: 1,
    position: 'relative'
  },
  expanded: {
    width: '320px'
  },
  item: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '0.5em'
  },
  menu: {
    paddingTop: '0.5em',
    paddingBottom: '1em'
  }
}

export const MainPanelStyle = {
  height: '100%',
  width: '100%',
  background: '#f8f9fa'
}
