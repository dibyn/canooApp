import React from 'react'
import { Card } from 'antd'
const Wrapper = ({ children, title }) => {
  return <Card title={title}>{children}</Card>
}
export default Wrapper
