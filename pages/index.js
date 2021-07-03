import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Table, Space } from 'antd'
const columns = [
  {
    title: 'Thermostats Name',
    dataIndex: 'thermostatsName',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Temperature',
    dataIndex: 'temperature',
    key: 'temperature',
  },
  {
    title: '',
    key: 'action',
    render: (text, record) => (
      <Space size='middle'>
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
]
const data = [
  {
    key: '1',
    thermostatsName: 'Kitchen',
    temperature: '67 F',
  },
  {
    key: '1',
    thermostatsName: 'Living Room',
    temperature: '75 F',
  },
  {
    key: '1',
    thermostatsName: 'Bathroom',
    temperature: '55 F',
  },
]
export default function Thermostats() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CanooApp</title>
        <meta name='description' content='CanooApp' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
      <footer className={styles.footer}></footer>
    </div>
  )
}
