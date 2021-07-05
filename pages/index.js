import React, { useEffect } from 'react'
import Router from 'next/router'
const index = () => {
  useEffect(() => Router.push('/lights'), [])
  return <></>
}
export default index
