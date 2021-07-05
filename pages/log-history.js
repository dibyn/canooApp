import { useEffect } from 'react'
import axios from 'axios'
import React, { useState } from 'react'
import { Table } from 'antd'
import LayoutComponent from '../components/Layout'
import styles from '../styles/Home.module.css'
const columns = [
  {
    title: 'Appliance Name',
    dataIndex: 'applianceName',
    key: 'applianceName',
  },
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
const LogHistory = () => {
  const [dataSource, setDataSource] = useState()
  const getData = async () =>
    await axios
      .get(`http://${process.env.NEXT_PUBLIC_API_URL}:8000/logs`)
      .then((response) => {
        setDataSource(response.data)
        return response
      })
      .catch((error) => error)
  useEffect(() => getData(), [])
  return (
    <main className={styles.main}>
      <Table
        rowKey='id'
        className='no-border-last'
        pagination={{
          defaultPageSize: 20,
          showSizeChanger: true,
          responsive: true,
          pageSizeOptions: [20, 50, 100, 200, 400],
        }}
        scroll={{
          x: 500,
          y: 'calc(100vh - 250px)',
          scrollToFirstRowOnChange: false,
        }}
        columns={columns}
        dataSource={dataSource}
      />
    </main>
  )
}
LogHistory.layout = LayoutComponent
export default LogHistory
