import styles from '../styles/Home.module.css'
import { Table } from 'antd'
const columns = [
  {
    title: 'Application Type',
    dataIndex: 'applicationType',
    key: 'applicationType',
  },
  {
    title: 'Event Type',
    dataIndex: 'eventType',
    key: 'eventType',
  },
  {
    title: 'Event Description',
    dataIndex: 'eventDescription',
    key: 'eventDescription',
  },
  {
    title: 'Time Stamp',
    dataIndex: 'timeStamp',
    key: 'timeStamp',
  },
]
const data = [
  {
    key: '1',
    applicationType: 'Light',
    eventType: 'Update',
    eventDescription: 'Update from NO to OFF',
    timeStamp: 'July 03 2018 15:28:14',
  },
  {
    key: '1',
    applicationType: 'Light',
    eventType: 'Update',
    eventDescription: 'Update from NO to OFF',
    timeStamp: 'July 03 2018 15:28:14',
  },
  {
    key: '1',
    applicationType: 'Light',
    eventType: 'Update',
    eventDescription: 'Update from NO to OFF',
    timeStamp: 'July 03 2018 15:28:14',
  },
]
export default function LogHistory() {
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
        dataSource={data}
      />
    </main>
  )
}
