import React from 'react'
import '../styles/globals.css'
import 'antd/dist/antd.css'
const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.layout || ((children) => <>{children}</>)
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
