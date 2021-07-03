import { Menu } from 'antd'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import Router from 'next/router'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu
        mode='horizontal'
        onClick={(e) => Router.push(`/${e.key}`)}
        selectedKeys={['thermostats']}
      >
        <Menu.Item key=''>ThermoStats</Menu.Item>
        <Menu.Item key='lights'>Lights</Menu.Item>
        <Menu.Item key='log-history'>Log History</Menu.Item>
      </Menu>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
