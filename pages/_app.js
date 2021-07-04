import React from 'react'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import LayoutComponent from '../components/Layout'
const MyApp = ({ Component, pageProps }) => {
  return (
    <LayoutComponent {...pageProps}>
      <Component {...pageProps} />
    </LayoutComponent>
  )
}
export default MyApp
