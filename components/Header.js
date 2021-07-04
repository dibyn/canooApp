import React from 'react'
import { Menu, Layout } from 'antd'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { AimOutlined } from '@ant-design/icons'
const { Header } = Layout
const HeaderComponent = () => {
  const router = useRouter()
  const [selectedKeys, setSelectedKeys] = React.useState([
    router.pathname === '/' ? '/thermostats' : router.pathname,
  ])
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <AimOutlined className={'logo'} />
      <Menu
        theme='dark'
        mode='horizontal'
        onClick={(e) => {
          setSelectedKeys([e.key])
          e.key === '/thermostats' ? Router.push(`/`) : Router.push(e.key)
        }}
        selectedKeys={selectedKeys}
        selectable
      >
        <Menu.Item key='/lights'>Lights</Menu.Item>
        <Menu.Item key='/thermostats'>Thermostats</Menu.Item>
        <Menu.Item
          style={{
            marginLeft: 'calc(100vw - 450px)',
          }}
          key='/log-history'
        >
          Logs
        </Menu.Item>
      </Menu>
      <style>
        {`
           .logo {
              float: left;
              width: 40px;
              height: 31px;
              color: #fff;
              font-size: 30px;
              margin: 15px 10px 0 0px;
            }
          `}
      </style>
    </Header>
  )
}
export default HeaderComponent
