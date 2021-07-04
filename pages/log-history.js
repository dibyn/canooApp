import { useEffect } from 'react'
import axios from 'axios'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Table } from 'antd'
const columns = [
  {
    title: 'Appliance Type',
    dataIndex: 'applianceType',
    key: 'applianceType',
  },
  {
    title: 'Event Type',
    dataIndex: 'eventType',
    key: 'eventType',
  },
  {
    title: 'Event Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Time Stamp',
    dataIndex: 'createdOn',
    key: 'createdOn',
  },
]
export default function LogHistory() {
  const [dataSource, setDataSource] = useState()
  const getData = async () => {
    const response = await axios
      .get(`http://${process.env.NEXT_PUBLIC_API_URL}:8000/logs`)
      .then((response) => {
        setDataSource(response.data)
        return response
      })
      .catch((error) => error)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <main className={styles.main}>
      <Table
        rowKey='id'
        className='no-border-last'
        scroll={{ x: 500, y: 'calc(100vh - 500px)' }}
        pagination={{
          defaultPageSize: 50,
        }}
        columns={columns}
        dataSource={dataSource}
      />
    </main>
  )
}
