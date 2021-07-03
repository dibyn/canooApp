import React from 'react'
import { Menu } from 'antd'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import Router from 'next/router'
function MyApp({ Component, pageProps }) {
  const [selectedKeys, setSelectedKeys] = React.useState(['thermostats'])
  return (
    <>
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
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
