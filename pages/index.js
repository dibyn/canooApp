import React, { useEffect } from 'react'
import Router from 'next/router'
const Index = () => {
  useEffect(() => Router.push('/lights'), [])
  return <>loading...</>
}
export default Index
