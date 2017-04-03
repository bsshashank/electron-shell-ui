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
    boxShadow: '0 .1rem .4rem rgba(69, 77, 93, .3)',
    transition: 'width 0.5s ease-in-out'
  },
  panel: {
    outline: 'none',
    flex: '0 0 auto',
    display: 'flex',
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
    height: '100%',
    paddingBottom: '1em'
  },
  collapsed: {
    width: '48px'
  },
  expanded: {
    width: '200px',
    overflow: 'hidden'
  },
  item: {
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '0.5em',
    transition: 'all 0.5s ease-in-out'
  },
  itemCentered: {
    justifyContent: 'center'
  },
  itemLeft: {
    justifyContent: 'flex-start',
    paddingLeft: '0.5em'
  },
  menu: {
    paddingTop: '0.5em',
    paddingBottom: '1em',
    whiteSpace: 'nowrap'
  }
}

export const PanelStyle = {
  container: {
    paddingLeft: '48px',
    background: '#f8f9fa'
  },
  fullSize: {
    height: '100%',
    width: '100%',
  },
  columns: {
    paddingLeft: '1em'
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }
}
