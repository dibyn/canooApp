import React from 'react'
import { Menu } from 'antd'
import Router from 'next/router'
const Header = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(['thermostats'])
  return (
      <Menu
        mode='horizontal'
        onClick={(e) => {
          setSelectedKeys([e.key])
          e.key === 'thermostats' ? Router.push(`/`) : Router.push(`/${e.key}`)
        }}
        selectedKeys={selectedKeys}
        selectable
      >
        <Menu.Item key='thermostats'>Thermo Stats</Menu.Item>
        <Menu.Item key='lights'>Lights</Menu.Item>
        <Menu.Item key='log-history'>Log History</Menu.Item>
      </Menu>
  )
}
export default Header
