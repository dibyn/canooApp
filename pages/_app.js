import React, { useEffect } from 'react'
import Router from 'next/router'
import '../styles/globals.css'
import 'antd/dist/antd.css'
const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.layout || ((children) => <>{children}</>)
  useEffect(() => Router.push('/lights'), [])
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
