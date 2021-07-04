import styles from '../styles/Home.module.css'
import { Table, Space, Switch } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
const columns = [
  {
    title: 'Light Name',
    dataIndex: 'thermostatsName',
    key: 'name',
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
      <Space key={record.key} size='middle'>
        <a href='#!'>
          <EditOutlined />
        </a>
        <a href='#!'>
          <DeleteOutlined />
        </a>
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
    key: '2',
    thermostatsName: 'Living Room Light',
    status: 'off',
    color: 'blue',
  },
  {
    key: '3',
    thermostatsName: 'Bathroom Light',
    status: 'on',
    color: 'yellow',
  },
]
export default function Lights() {
  return (
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
  )
}
