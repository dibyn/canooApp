import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Table, Space, Switch } from 'antd'
const columns = [
  {
    title: 'Light Name',
    dataIndex: 'thermostatsName',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: () => <Switch checkedChildren='on' unCheckedChildren='off' />,
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
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
    thermostatsName: 'Kitchen Light',
    status: 'on',
    color: 'red',
  },
  {
    key: '1',
    thermostatsName: 'Living Room Light',
    status: 'off',
    color: 'blue',
  },
  {
    key: '1',
    thermostatsName: 'Bathroom Light',
    status: 'on',
    color: 'yellow',
  },
]
export default function Lights() {
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
          scroll={{ x: 500, y: 'calc(100vh - 100px)' }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
